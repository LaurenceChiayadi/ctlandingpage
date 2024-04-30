import { IBookingSchedule } from "@/models/Booking";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ArrowDropDownIcon,
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

import IconArrowRight from "@/assets/icons/general/btn-icon-arrow-left.svg";
import Image from "next/image";

const title = "When would you like to check in?";

const durations = [3, 6, 12, 24];

const ScheduleSection = (props: {
  bookingSchedule: IBookingSchedule;
  handleChangeDatePromotion: (value: IBookingSchedule) => void;
  handleChangeStepper: (value: number) => void;
  handleEmptyRoomBooking: VoidFunction;
}) => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  const handleDateOnChange = (date: Date): void => {
    const newValue = { ...props.bookingSchedule, date: date };
    props.handleChangeDatePromotion(newValue);
  };

  const handleDurationOnChange = (duration: number): void => {
    const newValue = { ...props.bookingSchedule, duration: duration };
    props.handleChangeDatePromotion(newValue);
    props.handleEmptyRoomBooking();
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingY={isHandheldDevice ? 6 : 10}
        paddingX={3}
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          width={isHandheldDevice ? "320px" : "100%"}
        >
          {title}
        </Typography>
        <Stack
          width={isHandheldDevice ? "100%" : "1050px"}
          direction={isHandheldDevice ? "column" : "row"}
          spacing={2}
          marginTop={isHandheldDevice ? 5 : 0}
        >
          <Stack
            flexDirection={"column"}
            justifyContent={"center"}
            width={isHandheldDevice ? "100%" : "350px"}
            height={isHandheldDevice ? "100px" : "400px"}
            spacing={2}
          >
            <Typography fontWeight={"600"}>Date</Typography>
            <DatePicker
              value={props.bookingSchedule.date}
              onChange={(newValue) => handleDateOnChange(newValue as Date)}
              slots={{
                openPickerIcon: ArrowDropDownIcon,
              }}
              sx={{ fontWeight: 600 }}
            />
          </Stack>
          <Stack
            flexDirection={"column"}
            justifyContent={"center"}
            width={isHandheldDevice ? "100%" : "350px"}
            height={isHandheldDevice ? "100px" : "400px"}
            spacing={2}
          >
            <Typography fontWeight={"600"}>Time</Typography>
            <TimePicker
              value={props.bookingSchedule.date}
              onChange={(newValue) => handleDateOnChange(newValue as Date)}
              format={"hh:mm a"}
              slots={{
                openPickerIcon: ArrowDropDownIcon,
              }}
              sx={{ fontWeight: 600 }}
            />
          </Stack>
          <Stack
            flexDirection={"column"}
            justifyContent={"center"}
            width={isHandheldDevice ? "100%" : "350px"}
            height={isHandheldDevice ? "100px" : "400px"}
            spacing={2}
          >
            <Typography fontWeight={"600"}>Duration</Typography>
            <Select
              value={props.bookingSchedule.duration}
              onChange={(event) =>
                handleDurationOnChange(event.target.value as number)
              }
              MenuProps={{
                sx: {
                  "&& .Mui-selected": {
                    backgroundColor: theme.palette.CtColorScheme.neon200,
                  },
                },
              }}
              sx={{ fontWeight: 600 }}
            >
              {durations.map((duration, index) => (
                <MenuItem
                  key={index}
                  value={duration}
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {duration} hours
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Stack>
        <Box display={"flex"} marginTop={"120px"}>
          <Button onClick={() => props.handleChangeStepper(3)}>
            <Typography variant="h4" marginRight={3}>
              Next
            </Typography>
            <Image src={IconArrowRight} alt="CT-Right-Up" />
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default ScheduleSection;