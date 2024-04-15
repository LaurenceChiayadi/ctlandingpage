import {
  IBookingLocation,
  IBookingSchedule,
  IRoomBooking,
} from "@/models/Booking";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { format } from "date-fns";
import CTButton from "../global/CTButton";
import Image from "next/image";
import { matchDurationEnum } from "@/utils/functions";
import { DurationIcons } from "@/constant/Icons";
import { Add } from "@mui/icons-material";

const contentWidth = "900px";

const SummarySection = (props: {
  selectedHotel: IBookingLocation;
  bookingSchedule: IBookingSchedule;
  roomBookings: IRoomBooking[];
}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box marginY={10}>
        <Typography variant="h4">Summary</Typography>
      </Box>
      <SummaryHeader {...props} />
      <RoomBookingSection {...props} />
    </Box>
  );
};

const SummaryHeader = (props: {
  selectedHotel: IBookingLocation;
  bookingSchedule: IBookingSchedule;
  roomBookings: IRoomBooking[];
}) => {
  const theme = useTheme();
  return (
    <Box display={"flex"} borderTop={1} paddingTop={2} paddingBottom={7}>
      <Grid container width={contentWidth}>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <Stack spacing={1} width={"330px"}>
            <SummaryContent
              title="Outlet"
              data={
                props.selectedHotel.hotelName +
                " @ " +
                props.selectedHotel.hotelLocation
              }
            />
            <Typography>{props.selectedHotel.hotelDetailedLocation}</Typography>
            <Typography color={theme.palette.CtColorScheme.pink300}>
              <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
                <li>
                  Make sure you have your boarding pass and Visa or related
                  documents to enter the restricted area.
                </li>
              </ul>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={0} sm={0} md={0} lg={1} xl={1}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
          >
            <Divider orientation="vertical" sx={{ width: "1px" }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <Stack spacing={2}>
            <SummaryContent
              title="Date"
              data={
                props.bookingSchedule.date
                  ? format(props.bookingSchedule.date, "dd MMMM yyyy")
                  : "N/A"
              }
            />
            <SummaryContent
              title="Check-in Time"
              data={
                props.bookingSchedule.date
                  ? format(props.bookingSchedule.date, "h:mm aa")
                  : "N/A"
              }
            />
            <SummaryContent
              title="Stay Duration"
              data={
                props.bookingSchedule.duration
                  ? props.bookingSchedule.duration + " hours"
                  : "N/A"
              }
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
          >
            <CTButton onClick={() => {}} text="Change" variant="secondary" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const SummaryContent = (props: { title: string; data: string }) => {
  return (
    <Stack spacing={0.5}>
      <Typography>{props.title}</Typography>
      <Typography fontWeight={700}>{props.data}</Typography>
    </Stack>
  );
};

const RoomBookingSection = (props: {
  roomBookings: IRoomBooking[];
  bookingSchedule: IBookingSchedule;
}) => {
  const theme = useTheme();
  return (
    <Box width={contentWidth} borderTop={1}>
      {props.roomBookings.map((roomBooking, index) => (
        <Grid
          container
          key={index}
          width={"100%"}
          borderBottom={1}
          paddingY={3}
        >
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Box width={"300px"} height={"250px"} bgcolor={"grey"}></Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Stack
              justifyContent={"space-between"}
              height={"100%"}
              marginLeft={2}
            >
              <Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h6" fontWeight={700}>
                    {roomBooking.roomType} {`(${roomBooking.zone})`}
                  </Typography>
                  <IconButton color="primary" sx={{ padding: 0 }}>
                    <Add />
                  </IconButton>
                </Stack>
                <Stack direction={"row"} spacing={1} marginTop={1}>
                  <Typography color={theme.palette.CtColorScheme.grey400}>
                    {roomBooking.bedType}
                  </Typography>
                  <Typography color={"primary"}>/</Typography>
                  <Typography color={theme.palette.CtColorScheme.grey400}>
                    {roomBooking.capacity}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"end"}
              >
                <Stack direction={"row"} alignItems={"end"} spacing={1}>
                  <Typography variant="h5">RM{roomBooking.price}</Typography>
                  <Typography variant="subtitle2">
                    for {props.bookingSchedule.duration}h
                  </Typography>
                  {props.bookingSchedule.duration &&
                    DurationIcons.duration(
                      matchDurationEnum(props.bookingSchedule.duration)
                    ) !== "" && (
                      <Stack direction={"row"} alignItems={"center"}>
                        <Image
                          src={DurationIcons.duration(
                            matchDurationEnum(props.bookingSchedule.duration)
                          )}
                          alt="feature"
                          style={{ marginBottom: 3 }}
                        />
                      </Stack>
                    )}
                </Stack>
                <Stack direction={"row"}>
                  <Typography>Qty: {roomBooking.quantity}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default SummarySection;
