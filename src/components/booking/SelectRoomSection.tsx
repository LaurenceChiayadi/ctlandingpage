import {
  IBookingLocation,
  IBookingSchedule,
  IRoomBooking,
} from "@/models/Booking";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import { format } from "date-fns";
import CTButton from "../global/CTButton";
import Image from "next/image";
import { DurationIcons } from "@/constant/Icons";
import { featuresEnum } from "@/constant/Enums";
import { Add, Remove } from "@mui/icons-material";
import { displayThousands, matchDurationEnum } from "@/utils/functions";

import FemaleSingleImage from "../landside/images/room-single-female@2x.jpg";
import CTRight from "@/assets/icons/general/btn-icon-arrow-left.svg";

const title = "Select Your Room";

const sampleHotel = [
  {
    image: FemaleSingleImage,
    name: "Female Single",
    zone: "Female-Only Zone",
    bedType: "Single Bed",
    capacity: "1 Adult",
    price: 155,
  },
  {
    image: FemaleSingleImage,
    name: "Male Single",
    zone: "Male-Only Zone",
    bedType: "Single Bed",
    capacity: "1 Adult",
    price: 155,
  },
  {
    image: FemaleSingleImage,
    name: "Queen",
    bedType: "Queen Bed",
    capacity: "2 Adult",
    price: 185,
  },
];

const SelectRoomSection = (props: {
  selectedHotel: IBookingLocation;
  bookingSchedule: IBookingSchedule;
  roomBookings: IRoomBooking[];
  handleAddRoomBooking: (value: IRoomBooking) => void;
  handleDeductRoomBooking: (value: IRoomBooking) => void;
  handleChangeStepper: (value: number) => void;
}) => {
  return (
    <>
      <ContentWrapper noMarginTop>
        <BookingSummary {...props} />
        <RoomTypesContent {...props} />
      </ContentWrapper>
      {props.roomBookings.length > 0 && <BookNowButton {...props} />}
    </>
  );
};

const BookingSummary = (props: {
  selectedHotel: IBookingLocation;
  bookingSchedule: IBookingSchedule;
}) => {
  return (
    <Box
      display={"flex"}
      paddingY={3}
      borderTop={1}
      borderBottom={1}
      marginTop={10}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <SummaryContent
            title="Outlet"
            data={`${props.selectedHotel.hotelName} @ ${props.selectedHotel.hotelLocation}`}
          />
        </Grid>
        <Grid item xs={0} sm={0} md={0} lg={1} xl={1}>
          <Divider orientation="vertical" sx={{ width: "1px" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <SummaryContent
            title="Date"
            data={
              props.bookingSchedule.date
                ? format(props.bookingSchedule.date, "dd MMMM yyyy")
                : "N/A"
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <SummaryContent
            title="Check-in Time"
            data={
              props.bookingSchedule.date
                ? format(props.bookingSchedule.date, "h:mm aa")
                : "N/A"
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <SummaryContent
            title="Stay Duration"
            data={
              props.bookingSchedule.duration
                ? props.bookingSchedule.duration + " hours"
                : "N/A"
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <Box
            display={"flex"}
            height={"100%"}
            justifyContent={"end"}
            alignItems={"center"}
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
    <Stack spacing={1}>
      <Typography>{props.title}</Typography>
      <Typography fontWeight={700}>{props.data}</Typography>
    </Stack>
  );
};

const RoomTypesContent = (props: {
  bookingSchedule: IBookingSchedule;
  roomBookings: IRoomBooking[];
  handleAddRoomBooking: (value: IRoomBooking) => void;
  handleDeductRoomBooking: (value: IRoomBooking) => void;
}) => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginY={10}
    >
      <Box display={"flex"} marginBottom={7}>
        <Typography variant="h4">{title}</Typography>
      </Box>
      <Grid
        container
        marginTop={8}
        maxWidth={"900px"}
        columnSpacing={3}
        marginBottom={8}
        rowSpacing={{ xs: 8, sm: 8, md: 5, lg: 5, xl: 5 }}
      >
        {sampleHotel.map((hotel, index) => (
          <Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box display={"flex"} flexDirection={"column"}>
              <Image
                src={hotel.image}
                alt={hotel.name}
                style={{ width: "100%", height: "100%" }}
              />
              <Typography variant="h6" fontWeight={700} marginTop={2}>
                {hotel.name} {hotel.zone ? `(${hotel.zone})` : ""}
              </Typography>
              <Stack direction={"row"} spacing={1} marginTop={1}>
                <Typography color={theme.palette.CtColorScheme.grey400}>
                  {hotel.bedType}
                </Typography>
                <Typography color={"primary"}>/</Typography>
                <Typography color={theme.palette.CtColorScheme.grey400}>
                  {hotel.capacity}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                marginTop={1}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"} alignItems={"end"} spacing={1}>
                  <Typography variant="h5">RM{hotel.price}</Typography>
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
                {props.roomBookings.find(
                  (roomBooking) => roomBooking.roomTypeId === hotel.name
                ) ? (
                  <Stack direction={"row"} width={"200px"}>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        props.bookingSchedule.duration &&
                        props.handleDeductRoomBooking({
                          roomTypeId: hotel.name,
                          roomType: hotel.name,
                          duration: props.bookingSchedule.duration,
                          price: hotel.price,
                          quantity: 1,
                          bedType: hotel.bedType,
                          capacity: hotel.capacity,
                          zone: hotel.zone,
                        })
                      }
                      sx={{
                        width: "10%",
                        padding: 0,
                        border: 1,
                        color: "black",
                        bgcolor: theme.palette.primary.main,
                      }}
                    >
                      <Remove />
                    </Button>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      width={"80%"}
                      borderTop={1}
                      borderBottom={1}
                    >
                      {props.roomBookings.find(
                        (roomBooking) => roomBooking.roomTypeId === hotel.name
                      )
                        ? props.roomBookings.find(
                            (roomBooking) =>
                              roomBooking.roomTypeId === hotel.name
                          )?.quantity
                        : 0}
                    </Box>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        props.bookingSchedule.duration &&
                        props.handleAddRoomBooking({
                          roomTypeId: hotel.name,
                          roomType: hotel.name,
                          duration: props.bookingSchedule.duration,
                          price: hotel.price,
                          quantity: 1,
                          bedType: hotel.bedType,
                          capacity: hotel.capacity,
                          zone: hotel.zone,
                        })
                      }
                      sx={{
                        width: "10%",
                        padding: 0,
                        border: 1,
                        color: "black",
                        bgcolor: theme.palette.primary.main,
                      }}
                    >
                      <Add />
                    </Button>
                  </Stack>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() =>
                      props.bookingSchedule.duration &&
                      props.handleAddRoomBooking({
                        roomTypeId: hotel.name,
                        roomType: hotel.name,
                        duration: props.bookingSchedule.duration,
                        price: hotel.price,
                        quantity: 1,
                        bedType: hotel.bedType,
                        capacity: hotel.capacity,
                        zone: hotel.zone,
                      })
                    }
                    sx={{
                      color: "black",
                      borderColor: "black",
                      width: "200px",
                    }}
                  >
                    ADD ROOM
                  </Button>
                )}
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const BookNowButton = (props: {
  roomBookings: IRoomBooking[];
  handleChangeStepper: (value: number) => void;
}) => {
  const theme = useTheme();

  const amountOfRooms = props.roomBookings.reduce(
    (total, curr) => (total = total + curr.quantity),
    0
  );

  const totalAmount = props.roomBookings.reduce(
    (total, curr) => (total = total + curr.price * curr.quantity),
    0
  );
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      position={"fixed"}
      borderTop={1}
      width={"100%"}
      height={"80px"}
      zIndex={10}
      bottom={0}
      bgcolor={theme.palette.primary.main}
      paddingX={7}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <Typography variant="h4">{amountOfRooms} rooms selected</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Stack direction={"row"} alignItems={"end"} spacing={1}>
            <Typography variant="h4">
              RM{displayThousands(totalAmount)}
            </Typography>
            <Typography variant="subtitle1">
              price before discount and tax
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <Box display={"flex"} justifyContent={"end"} alignItems={"center"}>
            <Button
              onClick={() => props.handleChangeStepper(4)}
              sx={{
                padding: 0,
              }}
            >
              <Typography variant="h4">{"Book Now"}</Typography>
              <Image
                src={CTRight}
                alt="CT-Right-Up"
                style={{
                  color: "white",
                  width: "60px",
                }}
              />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SelectRoomSection;
