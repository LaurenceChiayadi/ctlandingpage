"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Collapse,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArticleOutlined,
  BedOutlined,
  CalendarMonthOutlined,
  ChevronRight,
  KeyboardArrowDown,
  KeyboardArrowUp,
  LocationOnOutlined,
  PersonOutline,
} from "@mui/icons-material";
import StaySection from "@/components/booking/StaySection";
import ScheduleSection from "@/components/booking/ScheduleSection";
import {
  BookingLocationInitial,
  BookingScheduleInitial,
  GuestDetailInitial,
  IBookingLocation,
  IBookingSchedule,
  IGuestDetail,
  IPaymentInfo,
  IRoomBooking,
  PaymentInfoInitial,
} from "@/models/Booking";
import SelectRoomSection from "@/components/booking/SelectRoomSection";
import SummarySection from "@/components/booking/SummarySection";
import BASE_API from "@/constant/api";
import { lotNumberEnum } from "@/constant/Enums";
import { getLotNumber } from "@/utils/functions";
import DetailSection from "@/components/booking/DetailSection";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import crypto from "crypto";
import axios from "axios";

import CTLogo from "../../assets/icons/general/Logo-CT.svg";
import CTLogoOnly from "@/assets/icons/general/LogoPrimary.svg";
import CloseIcon from "@/assets/icons/general/icon-menu-close.svg";

const BookingPage = () => {
  const [stepper, setStepper] = useState<number>(1);
  const [selectedHotel, setSelectedHotel] = useState<IBookingLocation>(
    BookingLocationInitial
  );
  const [bookingSchedule, setBookingSchedule] = useState<IBookingSchedule>(
    BookingScheduleInitial
  );
  const [roomBookings, setRoomBookings] = useState<IRoomBooking[]>([]);
  const [paymentInfo, setPaymentInfo] =
    useState<IPaymentInfo>(PaymentInfoInitial);

  const [taxPercentage, setTaxPercentage] = useState<string>("0%");
  const [serviceChargePercentage, setServiceChargePercentage] =
    useState<string>("0%");

  const [consentSigned, setConsentSigned] = useState<boolean>(false);
  const handleConsentSignChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConsentSigned(event.target.checked);
  };

  const handleChangeStepper = (value: number) => {
    setStepper(value);
  };

  const handleEmptyRoomBooking = () => {
    setRoomBookings([]);
  };

  const handleChangeSelectedHotel = (value: IBookingLocation) => {
    setSelectedHotel(value);
    handleEmptyRoomBooking();
    setStepper(2);
  };

  const handleChangeDatePromotion = (value: IBookingSchedule) => {
    setBookingSchedule(value);
  };

  const handleAddRoomBooking = (value: IRoomBooking) => {
    if (
      roomBookings.some(
        (roomBooking) => roomBooking.roomTypeId === value.roomTypeId
      )
    ) {
      const selectedRoom = roomBookings.find(
        (roomBooking) => roomBooking.roomTypeId === value.roomTypeId
      );
      const filteredRoomBookings = roomBookings.filter(
        (roomBooking) => roomBooking.roomTypeId !== value.roomTypeId
      );
      if (selectedRoom) {
        setRoomBookings([
          ...filteredRoomBookings,
          { ...selectedRoom, quantity: selectedRoom.quantity + 1 },
        ]);
      }
    } else {
      setRoomBookings((prevValue) => [...prevValue, value]);
    }
  };

  const handleDeductRoomBooking = (value: IRoomBooking) => {
    const selectedRoom = roomBookings.find(
      (roomBooking) => roomBooking.roomTypeId === value.roomTypeId
    );
    const filteredRoomBookings = roomBookings.filter(
      (roomBooking) => roomBooking.roomTypeId !== value.roomTypeId
    );
    if (selectedRoom && selectedRoom.quantity > 1) {
      setRoomBookings([
        ...filteredRoomBookings,
        { ...selectedRoom, quantity: selectedRoom.quantity - 1 },
      ]);
    } else {
      setRoomBookings(filteredRoomBookings);
    }
  };

  useEffect(() => {
    const sum = roomBookings.reduce(
      (total, curr) => (total = total + curr.price * curr.quantity),
      0
    );

    const taxAmount = parseFloat(
      ((sum * parseFloat(taxPercentage)) / 100).toFixed(2)
    );

    const serviceChargeAmount = parseFloat(
      ((sum * parseFloat(serviceChargePercentage)) / 100).toFixed(2)
    );

    const debitAmount = parseFloat(
      (sum + (sum * parseFloat(taxPercentage)) / 100).toFixed(2)
    );

    const paymentInfoObject = {
      sum: sum,
      taxAmount: taxAmount,
      debitAmount: debitAmount,
      serviceChargeAmount: serviceChargeAmount,
    };

    setPaymentInfo(paymentInfoObject);
  }, [roomBookings, taxPercentage]);

  useEffect(() => {
    if (selectedHotel.hotelName) {
      const lotNumber = getLotNumber(selectedHotel.hotelName);
      const detailedHotelApiUrl = `${BASE_API}/landing-page/lot-info/${lotNumber}`;

      axios
        .get(detailedHotelApiUrl)
        .then((result) =>
          setSelectedHotel((prevValue) => {
            const data = result.data;
            return {
              ...prevValue,
              hotelDetailedLocation: data.address,
              hotelPhoneNumber: data.tel,
            };
          })
        )
        .catch((error) => console.error(error));

      const taxSSTApiUrl = `${BASE_API}/landing-page/tax-and-service-charge/?lot=${lotNumber}`;

      axios
        .get(taxSSTApiUrl)
        .then((result) => {
          const data = result.data.data;

          setTaxPercentage(data.taxAmount);
          setServiceChargePercentage(data.serviceChargeAmount);
        })
        .catch((error) => console.error(error));
    }
  }, [selectedHotel.hotelName]);

  const formik: FormikProps<IGuestDetail> = useFormik({
    initialValues: GuestDetailInitial,
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First Name is Required"),
      gender: Yup.string().required("Gender is Required"),
      nationality: Yup.string().required("Nationality is Required"),
      identification: Yup.string().required("Identification is Required"),
      idNumber: Yup.string().required("ID Number is Required"),
      email: Yup.string().required("Email is Required"),
      phone: Yup.string().required("Phone Number is Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    const apiUrl = "https://payment.ipay88.com.my/epayment/entry.asp";

    const encryptStringToSha256 = (input: string) => {
      const hash = crypto.createHash("sha256");
      hash.update(input);
      return hash.digest("hex");
    };

    const formData = {
      MerchantCode: "M05633",
      RefNo: "KLIA12312321",
      Amount: "1.00",
      Curreny: "MYR",
      ProdDesc: "Airside Capsule Transit",
      UserName: "TEST",
      UserEmail: "TEST@test.com",
      UserContact: "+6023123123",
      SignatureType: "SHA256",
    };

    axios.post(apiUrl).then((result) => console.log(result));
  }, []);

  return (
    <Box
      display={"flex"}
      width={"99vw"}
      flexDirection={"column"}
      sx={{ overflowX: "hidden" }}
    >
      <BookingHeader />
      <BookingStepper
        stepper={stepper}
        handleChangeStepper={handleChangeStepper}
        bookingSchedule={bookingSchedule}
        selectedHotel={selectedHotel}
        roomBookings={roomBookings}
      />
      {stepper === 1 ? (
        <StaySection handleChangeSelectedHotel={handleChangeSelectedHotel} />
      ) : stepper === 2 ? (
        <ScheduleSection
          bookingSchedule={bookingSchedule}
          handleChangeDatePromotion={handleChangeDatePromotion}
          handleChangeStepper={handleChangeStepper}
          handleEmptyRoomBooking={handleEmptyRoomBooking}
        />
      ) : stepper === 3 ? (
        <SelectRoomSection
          bookingSchedule={bookingSchedule}
          selectedHotel={selectedHotel}
          roomBookings={roomBookings}
          handleAddRoomBooking={handleAddRoomBooking}
          handleDeductRoomBooking={handleDeductRoomBooking}
          handleChangeStepper={handleChangeStepper}
        />
      ) : stepper === 4 ? (
        <SummarySection
          bookingSchedule={bookingSchedule}
          selectedHotel={selectedHotel}
          roomBookings={roomBookings}
          handleChangeStepper={handleChangeStepper}
          paymentInfo={paymentInfo}
          taxPercentage={taxPercentage}
        />
      ) : stepper === 5 ? (
        <DetailSection
          paymentInfo={paymentInfo}
          roomBookings={roomBookings}
          taxPercentage={taxPercentage}
          formik={formik}
          consentSigned={consentSigned}
          handleConsentSignChange={handleConsentSignChange}
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
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"5.5rem"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignContent={"center"}
      paddingY={2}
      paddingX={isHandheldDevice ? 3 : 7}
      zIndex={2}
      bgcolor={theme.palette.CtColorScheme.black900}
    >
      <Box width={"33%"}></Box>
      <Box display={"flex"} width={"33%"} justifyContent={"center"}>
        <IconButton onClick={() => router.push("/")}>
          <Image
            src={isHandheldDevice ? CTLogoOnly : CTLogo}
            alt="CapsuleTransit-Logo"
          />
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
  selectedHotel: IBookingLocation;
  bookingSchedule: IBookingSchedule;
  roomBookings: IRoomBooking[];
}) => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  const [handheldExpanded, setHandheldExpanded] = useState<boolean>(false);

  const handleDisabled = (value: string) => {
    if (value === "Schedule" && props.selectedHotel.hotelName === "") {
      return true;
    }
    if (
      value === "Room" &&
      (props.selectedHotel.hotelName === "" || !props.bookingSchedule.date)
    ) {
      return true;
    }
    if (
      (value === "Summary" || value === "Details") &&
      (props.selectedHotel.hotelName === "" ||
        !props.bookingSchedule.date ||
        props.roomBookings.length === 0)
    ) {
      return true;
    }
  };
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={3}
      spacing={isHandheldDevice ? 0 : 5}
      borderBottom={2}
    >
      {!isHandheldDevice ? (
        steps.map((step, index) => (
          <ButtonBase
            key={index}
            disabled={handleDisabled(step.title)}
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
              {step.title === "Stay" ? (
                <LocationOnOutlined
                  sx={{
                    color: handleDisabled(step.title) ? "grey" : "black",
                  }}
                />
              ) : step.title === "Schedule" ? (
                <CalendarMonthOutlined
                  sx={{
                    color: handleDisabled(step.title) ? "grey" : "black",
                  }}
                />
              ) : step.title === "Room" ? (
                <BedOutlined
                  sx={{
                    color: handleDisabled(step.title) ? "grey" : "black",
                  }}
                />
              ) : step.title === "Summary" ? (
                <ArticleOutlined
                  sx={{
                    color: handleDisabled(step.title) ? "grey" : "black",
                  }}
                />
              ) : step.title === "Details" ? (
                <PersonOutline
                  sx={{
                    color: handleDisabled(step.title) ? "grey" : "black",
                  }}
                />
              ) : (
                ""
              )}
              <Typography
                color={handleDisabled(step.title) ? "grey" : "black"}
                fontWeight={step.value === props.stepper ? 700 : 500}
              >
                {step.title}
              </Typography>
            </Stack>
            {index !== steps.length - 1 && (
              <ChevronRight
                sx={{
                  marginLeft: 5,
                  color: theme.palette.CtColorScheme.grey300,
                }}
              />
            )}
          </ButtonBase>
        ))
      ) : (
        <Stack width={"100%"}>
          <Box
            display="flex"
            width={"100%"}
            paddingX={3}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              bgcolor={theme.palette.primary.main}
              padding={1}
              spacing={1}
            >
              {steps[props.stepper - 1].icon}
              <Typography
                fontWeight={
                  steps[props.stepper - 1].value === props.stepper ? 700 : 500
                }
              >
                {steps[props.stepper - 1].title}
              </Typography>
            </Stack>
            <Button
              onClick={() => setHandheldExpanded((prevValue) => !prevValue)}
            >
              <Typography>
                <b>{props.stepper}</b> of 5
              </Typography>
              {handheldExpanded ? (
                <KeyboardArrowUp color="primary" />
              ) : (
                <KeyboardArrowDown color="primary" />
              )}
            </Button>
          </Box>
          <Collapse in={handheldExpanded}>
            <Stack width={"100%"} alignItems={"start"} paddingX={4}>
              {steps
                .filter((steps) => steps.value !== props.stepper)
                .map((step, index) => (
                  <ButtonBase
                    key={index}
                    disabled={handleDisabled(step.title)}
                    onClick={() => props.handleChangeStepper(step.value)}
                  >
                    <Stack
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      padding={1}
                      spacing={1}
                    >
                      {step.title === "Stay" ? (
                        <LocationOnOutlined
                          sx={{
                            color: handleDisabled(step.title)
                              ? "grey"
                              : "black",
                          }}
                        />
                      ) : step.title === "Schedule" ? (
                        <CalendarMonthOutlined
                          sx={{
                            color: handleDisabled(step.title)
                              ? "grey"
                              : "black",
                          }}
                        />
                      ) : step.title === "Room" ? (
                        <BedOutlined
                          sx={{
                            color: handleDisabled(step.title)
                              ? "grey"
                              : "black",
                          }}
                        />
                      ) : step.title === "Summary" ? (
                        <ArticleOutlined
                          sx={{
                            color: handleDisabled(step.title)
                              ? "grey"
                              : "black",
                          }}
                        />
                      ) : step.title === "Details" ? (
                        <PersonOutline
                          sx={{
                            color: handleDisabled(step.title)
                              ? "grey"
                              : "black",
                          }}
                        />
                      ) : (
                        ""
                      )}
                      <Typography
                        color={handleDisabled(step.title) ? "grey" : "black"}
                        fontWeight={step.value === props.stepper ? 700 : 500}
                      >
                        {step.title}
                      </Typography>
                    </Stack>
                  </ButtonBase>
                ))}
            </Stack>
          </Collapse>
        </Stack>
      )}
    </Stack>
  );
};

export default BookingPage;
