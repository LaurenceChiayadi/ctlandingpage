"use client";

import { useState } from "react";
import {
  Box,
  ButtonBase,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import CTLogo from "../../assets/icons/general/Logo-CT.svg";
import CloseIcon from "@/assets/icons/general/icon-menu-close.svg";
import {
  ArticleOutlined,
  BedOutlined,
  CalendarMonthOutlined,
  ChevronRight,
  LocationOnOutlined,
  PersonOutline,
} from "@mui/icons-material";
import StaySection from "@/components/booking/StaySection";
import ScheduleSection from "@/components/booking/ScheduleSection";
import { BookingScheduleInitial, IBookingSchedule } from "@/models/Booking";

const BookingPage = () => {
  const [stepper, setStepper] = useState<number>(1);
  const [selectedHotel, setSelectedHotel] = useState<string>();
  const [selectedDateWithPromotion, setSelectedDateWithPromotion] =
    useState<IBookingSchedule>(BookingScheduleInitial);

  const handleChangeStepper = (value: number) => {
    setStepper(value);
  };

  const handleChangeSelectedHotel = (value: string) => {
    setSelectedHotel(value);
    setStepper(2);
  };

  const handleChangeDatePromotion = (value: IBookingSchedule) => {
    setSelectedDateWithPromotion(value);
  };

  return (
    <Box
      display={"flex"}
      width={"100vw"}
      flexDirection={"column"}
      sx={{ overflowX: "hidden" }}
    >
      <BookingHeader />
      <BookingStepper
        stepper={stepper}
        handleChangeStepper={handleChangeStepper}
      />
      {stepper === 1 ? (
        <StaySection handleChangeSelectedHotel={handleChangeSelectedHotel} />
      ) : stepper === 2 ? (
        <ScheduleSection
          bookingSchedule={selectedDateWithPromotion}
          handleChangeDatePromotion={handleChangeDatePromotion}
          handleChangeStepper={handleChangeStepper}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

const BookingHeader = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"5.5rem"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignContent={"center"}
      paddingY={2}
      paddingX={7}
      zIndex={2}
      bgcolor={theme.palette.CtColorScheme.black900}
    >
      <Box width={"33%"}></Box>
      <Box display={"flex"} width={"33%"} justifyContent={"center"}>
        <IconButton onClick={() => router.push("/")}>
          <Image src={CTLogo} alt="CapsuleTransit-Logo" />
        </IconButton>
      </Box>
      <Box
        display={"flex"}
        width={"33%"}
        height={"100%"}
        justifyContent={"end"}
        alignItems={"center"}
      >
        <IconButton onClick={() => router.back()} sx={{ alignSelf: "end" }}>
          <Image src={CloseIcon} alt="close-icon" />
        </IconButton>
      </Box>
    </Box>
  );
};

const steps = [
  {
    icon: <LocationOnOutlined />,
    title: "Stay",
    value: 1,
  },
  {
    icon: <CalendarMonthOutlined />,
    title: "Schedule",
    value: 2,
  },
  {
    icon: <BedOutlined />,
    title: "Room",
    value: 3,
  },
  {
    icon: <ArticleOutlined />,
    title: "Summary",
    value: 4,
  },
  {
    icon: <PersonOutline />,
    title: "Details",
    value: 5,
  },
];

const BookingStepper = (props: {
  stepper: number;
  handleChangeStepper: (value: number) => void;
}) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={3}
      spacing={5}
      borderBottom={2}
    >
      {steps.map((step, index) => (
        <ButtonBase
          key={index}
          onClick={() => props.handleChangeStepper(step.value)}
        >
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={
              props.stepper === step.value ? theme.palette.primary.main : ""
            }
            padding={1}
            spacing={1}
          >
            {step.icon}
            <Typography fontWeight={step.value === props.stepper ? 700 : 500}>
              {step.title}
            </Typography>
          </Stack>
          {index !== steps.length - 1 && (
            <ChevronRight
              sx={{ marginLeft: 5, color: theme.palette.CtColorScheme.grey300 }}
            />
          )}
        </ButtonBase>
      ))}
    </Stack>
  );
};

export default BookingPage;
