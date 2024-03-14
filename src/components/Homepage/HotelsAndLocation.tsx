import {
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import Image from "next/image";
import { features } from "process";
import { useState } from "react";

import EyeIcon from "./images/icon-view-black.svg";
import LandSideImage from "./images/list-klia2-landside@2x.jpg";
import MaxImage from "./images/list-klia2-max@2x.jpg";
import SleepLoungeRoomImage from "./images/list-klia1-landside@2x.jpg";
import SleepLoungImage from "./images/list-klia1-landside2@2x.jpg";

import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";
import LocationIcon from "@/assets/icons/general/icon-location-grey.svg";

import OneHourIcon from "./images/icons/icon-hour-1.svg";
import ThreeHourIcon from "./images/icons/icon-hour-3.svg";
import SixHourIcon from "./images/icons/icon-hour-6.svg";
import TwelveHourIcon from "./images/icons/icon-hour-12.svg";

import SingleIcon from "./images/icons/icon-room-single.svg";
import FemaleSingleIcon from "./images/icons/icon-room-single_female.svg";
import MaleSingleIcon from "./images/icons/icon-room-single_male.svg";
import QueenIcon from "./images/icons/icon-room-queen.svg";
import DoubleIcon from "./images/icons/icon-room-double.svg";
import SuiteIcon from "./images/icons/icon-room-suite.svg";

import ConciergeIcon from "./images/icons/icon-service-locker.svg";
import WifiIcon from "./images/icons/icon-service-wifi.svg";
import ShowerIcon from "./images/icons/icon-service-shower.svg";
import ToileteriesIcon from "./images/icons/icon-service-dentalkit.svg";
import SlippersIcon from "./images/icons/icon-service-slipper.svg";
import DrinksIcon from "./images/icons/icon-service-drinks.svg";
import HeaderTop from "../global/HeaderTop";

enum featuresEnum {
  OneHourStay = "1h",
  ThreeHourStay = "3h",
  SixHourStay = "6h",
  TwelveHourStay = "12h",
  ThreeHourLounge = "(Lounge) 3h",
  amMin3Hour = "(a.m) min. 3h",
  pmMin6Hour = "(p.m) min. 6h",
  FemaleSingle = "femaleSingle",
  MaleSingle = "maleSingle",
  Single = "single",
  Queen = "queen",
  Double = "double",
  Suite = "suit",
  Concierge = "concierge",
  Wifi = "wifi",
  Shower = "shower",
  Toileteries = "toileteries",
  Slippers = "slippers",
  Drinks = "drinks",
}

class DurationIcons {
  static duration(duration: string) {
    switch (duration) {
      case featuresEnum.OneHourStay:
        return OneHourIcon;
      case featuresEnum.ThreeHourStay:
        return ThreeHourIcon;
      case featuresEnum.ThreeHourLounge:
        return ThreeHourIcon;
      case featuresEnum.SixHourStay:
        return SixHourIcon;
      case featuresEnum.TwelveHourStay:
        return TwelveHourIcon;
      case featuresEnum.amMin3Hour:
        return ThreeHourIcon;
      case featuresEnum.pmMin6Hour:
        return SixHourIcon;
      default:
        return "";
    }
  }
}

class RoomsIcons {
  static roomType(roomType: string) {
    switch (roomType) {
      case featuresEnum.Single:
        return SingleIcon;
      case featuresEnum.FemaleSingle:
        return FemaleSingleIcon;
      case featuresEnum.MaleSingle:
        return MaleSingleIcon;
      case featuresEnum.Queen:
        return QueenIcon;
      case featuresEnum.Double:
        return DoubleIcon;
      case featuresEnum.Suite:
        return SuiteIcon;
      default:
        return "";
    }
  }
}

class FeaturesIcons {
  static features(roomType: string) {
    switch (roomType) {
      case featuresEnum.Concierge:
        return ConciergeIcon;
      case featuresEnum.Wifi:
        return WifiIcon;
      case featuresEnum.Shower:
        return ShowerIcon;
      case featuresEnum.Toileteries:
        return ToileteriesIcon;
      case featuresEnum.Slippers:
        return SlippersIcon;
      case featuresEnum.Drinks:
        return DrinksIcon;
      default:
        return "";
    }
  }
}

const textContent = [
  { title: "Our Hotels and Locations" },
  { title: "KLIA Terminal 1" },
  { title: "KLIA Terminal 2" },
];

const terminal1Hotels = {
  title: "Capsule Transit Sleep Lounge",
  location: "KLIA Terminal 1, Public Area",
  backgroundUrl: SleepLoungeRoomImage,
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipis cing elit, sed diam nonummy nibh euismod tinci dunt ut laoreet dolore.",
  features: [
    featuresEnum.amMin3Hour,
    featuresEnum.pmMin6Hour,
    featuresEnum.Single,
    featuresEnum.Concierge,
    featuresEnum.Wifi,
    featuresEnum.Toileteries,
    featuresEnum.Slippers,
    featuresEnum.Drinks,
  ],
};

const terminal2Hotels = [
  {
    title: "Capsule Transit Airside",
    location: "KLIA Terminal 2, Restricted Area",
    backgroundUrl: "@/components/Homepage/images/list-klia2-airside.mp4",
    description:
      "For early flights, Late arrivals, Missed flights or last minute flight cancellations.",
    features: [
      featuresEnum.OneHourStay,
      featuresEnum.ThreeHourStay,
      featuresEnum.SixHourStay,
      featuresEnum.TwelveHourStay,
      featuresEnum.FemaleSingle,
      featuresEnum.MaleSingle,
      featuresEnum.Concierge,
      featuresEnum.Wifi,
      featuresEnum.Shower,
      featuresEnum.Toileteries,
      featuresEnum.Slippers,
      featuresEnum.Drinks,
    ],
  },
  {
    title: "Capsule Transit Landside",
    location: "KLIA Terminal 2, Public Area",
    description:
      "Suitable for transiting within KLIA2 International Departure area.",
    backgroundUrl: LandSideImage,
    features: [
      featuresEnum.ThreeHourStay,
      featuresEnum.SixHourStay,
      featuresEnum.TwelveHourStay,
      featuresEnum.FemaleSingle,
      featuresEnum.MaleSingle,
      featuresEnum.Single,
      featuresEnum.Queen,
      featuresEnum.Suite,
      featuresEnum.Concierge,
      featuresEnum.Wifi,
      featuresEnum.Shower,
      featuresEnum.Toileteries,
      featuresEnum.Slippers,
      featuresEnum.Drinks,
    ],
  },
  {
    title: "Capsule Transit MAX",
    location: "KLIA Terminal 2, Public Area",
    description:
      "For those who prefers more of everything. Privacy. Space. En-suite bathroom.",
    backgroundUrl: MaxImage,
    features: [
      featuresEnum.SixHourStay,
      featuresEnum.TwelveHourStay,
      featuresEnum.ThreeHourLounge,
      featuresEnum.Queen,
      featuresEnum.Double,
      featuresEnum.Suite,
      featuresEnum.Concierge,
      featuresEnum.Wifi,
      featuresEnum.Shower,
      featuresEnum.Toileteries,
      featuresEnum.Slippers,
      featuresEnum.Drinks,
    ],
  },
];

const HotelAndLocation = () => {
  const theme = useTheme();

  const [KLIA2Selected, setKLIA2Selected] = useState<boolean>(true);

  const [hovered, setHovered] = useState<string>("");

  const handleHoverImage = (data: string) => {
    setHovered(data);
  };

  return (
    <ContentWrapper>
      <HeaderTop title={textContent[0].title}>
        <Button onClick={() => setKLIA2Selected(false)} sx={{ color: "black" }}>
          {textContent[1].title}
          {KLIA2Selected && (
            <Image src={EyeIcon} alt={"eye-icon"} style={{ marginLeft: 5 }} />
          )}
        </Button>
        <Typography variant="h5">/</Typography>
        <Button onClick={() => setKLIA2Selected(true)} sx={{ color: "" }}>
          {textContent[2].title}
          {!KLIA2Selected && (
            <Image src={EyeIcon} alt={"eye-icon"} style={{ marginLeft: 5 }} />
          )}
        </Button>
      </HeaderTop>
      {KLIA2Selected ? (
        <KLIA2Hotels hovered={hovered} handleHoverImage={handleHoverImage} />
      ) : (
        <KLIA1Hotels hovered={hovered} handleHoverImage={handleHoverImage} />
      )}
    </ContentWrapper>
  );
};

const KLIA2Hotels = (props: {
  hovered: string;
  handleHoverImage: (data: string) => void;
}) => {
  const theme = useTheme();
  return (
    <Grid container direction={"row"} columnSpacing={3}>
      {terminal2Hotels.map((data, index) => (
        <Grid item key={index} xs={12} sm={12} md={4} lg={4} xl={4}>
          {props.hovered === data.title ? (
            <Box
              width="100%"
              height="600px"
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
              alignItems="center"
              bgcolor={theme.palette.CtColorScheme.neon200}
              sx={{
                background: `linear-gradient(90deg, ${theme.palette.CtColorScheme.neon500} 0%,${theme.palette.CtColorScheme.neon200} 9%,${theme.palette.CtColorScheme.neon200} 91%, ${theme.palette.CtColorScheme.neon500} 100%)`,
                clipPath:
                  "polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)",
              }}
              onMouseOut={() => props.handleHoverImage("")}
            >
              <Typography variant="h6" width={"60%"} textAlign={"center"}>
                {data.description}
              </Typography>
              <Box
                sx={{
                  marginY: 4,
                  width: "60%", // Ensures the divider stretches across the full width
                }}
              >
                <Divider
                  sx={{
                    color: theme.palette.CtColorScheme.grey400,
                    borderBottomWidth: 2,
                  }}
                />
              </Box>
              <Stack direction={"row"} spacing={2} marginBottom={1}>
                {data.features.map((feature) => {
                  return (
                    DurationIcons.duration(feature) !== "" && (
                      <Stack direction={"row"} alignItems={"center"}>
                        <Typography variant="h5" marginRight={"3px"}>
                          {feature}
                        </Typography>
                        <Image
                          src={DurationIcons.duration(feature)}
                          alt="feature"
                          width={20}
                          height={20}
                        />
                      </Stack>
                    )
                  );
                })}
              </Stack>
              <Stack direction={"row"} spacing={2} marginBottom={1}>
                {data.features.map((feature) => {
                  return (
                    RoomsIcons.roomType(feature) !== "" && (
                      <Image
                        src={RoomsIcons.roomType(feature)}
                        alt="feature"
                        width={30}
                        height={30}
                      />
                    )
                  );
                })}
              </Stack>
              <Stack direction={"row"} spacing={2} marginBottom={1}>
                {data.features.map((feature) => {
                  return (
                    FeaturesIcons.features(feature) !== "" && (
                      <Image
                        src={FeaturesIcons.features(feature)}
                        alt="feature"
                        width={30}
                        height={30}
                      />
                    )
                  );
                })}
              </Stack>
            </Box>
          ) : (
            <Box
              width={"100%"}
              height={"600px"}
              onMouseOver={() => props.handleHoverImage(data.title)}
            >
              {typeof data.backgroundUrl === "string" ? (
                <video
                  autoPlay
                  loop
                  muted
                  style={
                    {
                      //   position: "absolute",
                      // minWidth: "100%",
                      // minHeight: "100%",
                    }
                  }
                >
                  <source src={data.backgroundUrl} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={data.backgroundUrl}
                  alt={data.title}
                  // width={30}
                  // height={20}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </Box>
          )}
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"start"}
            marginTop={3}
          >
            <Typography variant="h4" width={"50%"}>
              {data.title}
            </Typography>
            <IconButton sx={{ transform: "scaleX(-1)" }}>
              <Image
                src={IconArrowLeft}
                alt="arrow-left"
                style={{ transform: "scaleX(-1)" }}
              />
            </IconButton>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            marginTop={1}
          >
            <Image src={LocationIcon} alt="location-grey" />
            <Typography color={theme.palette.CtColorScheme.grey300}>
              {data.location}
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

const KLIA1Hotels = (props: {
  hovered: string;
  handleHoverImage: (data: string) => void;
}) => {
  const theme = useTheme();
  return (
    <Grid container direction={"row"} columnSpacing={3}>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        {props.hovered === terminal1Hotels.title ? (
          <Box
            width="100%"
            height="600px"
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
            bgcolor={theme.palette.CtColorScheme.neon200}
            sx={{
              background: `linear-gradient(90deg, ${theme.palette.CtColorScheme.neon500} 0%,${theme.palette.CtColorScheme.neon200} 9%,${theme.palette.CtColorScheme.neon200} 91%, ${theme.palette.CtColorScheme.neon500} 100%)`,
              clipPath:
                "polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)",
            }}
            onMouseOut={() => props.handleHoverImage("")}
          >
            <Typography variant="h6" width={"60%"} textAlign={"center"}>
              {terminal1Hotels.description}
            </Typography>
            <Box
              sx={{
                marginY: 4,
                width: "60%", // Ensures the divider stretches across the full width
              }}
            >
              <Divider
                sx={{
                  color: theme.palette.CtColorScheme.grey400,
                  borderBottomWidth: 2,
                }}
              />
            </Box>
            <Stack direction={"row"} spacing={2} marginBottom={1}>
              {terminal1Hotels.features.map((feature) => {
                return (
                  DurationIcons.duration(feature) !== "" && (
                    <Stack direction={"row"} alignItems={"center"}>
                      <Typography variant="h5" marginRight={"3px"}>
                        {feature}
                      </Typography>
                      <Image
                        src={DurationIcons.duration(feature)}
                        alt="feature"
                        width={20}
                        height={20}
                      />
                    </Stack>
                  )
                );
              })}
            </Stack>
            <Stack direction={"row"} spacing={2} marginBottom={1}>
              {terminal1Hotels.features.map((feature) => {
                return (
                  RoomsIcons.roomType(feature) !== "" && (
                    <Image
                      src={RoomsIcons.roomType(feature)}
                      alt="feature"
                      width={30}
                      height={30}
                    />
                  )
                );
              })}
            </Stack>
            <Stack direction={"row"} spacing={2} marginBottom={1}>
              {terminal1Hotels.features.map((feature) => {
                return (
                  FeaturesIcons.features(feature) !== "" && (
                    <Image
                      src={FeaturesIcons.features(feature)}
                      alt="feature"
                      width={30}
                      height={30}
                    />
                  )
                );
              })}
            </Stack>
          </Box>
        ) : (
          <Box
            width={"100%"}
            height={"600px"}
            onMouseOver={() => props.handleHoverImage(terminal1Hotels.title)}
          >
            <Image
              src={terminal1Hotels.backgroundUrl}
              alt={terminal1Hotels.title}
              // width={30}
              // height={20}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        )}
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"start"}
          marginTop={3}
        >
          <Typography variant="h4" width={"50%"}>
            {terminal1Hotels.title}
          </Typography>
          <IconButton sx={{ transform: "scaleX(-1)" }}>
            <Image
              src={IconArrowLeft}
              alt="arrow-left"
              style={{ transform: "scaleX(-1)" }}
            />
          </IconButton>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={1}
          marginTop={1}
        >
          <Image src={LocationIcon} alt="location-grey" />
          <Typography color={theme.palette.CtColorScheme.grey300}>
            {terminal1Hotels.location}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
        <Box width={"100%"} height={"600px"}>
          <Image
            src={SleepLoungImage}
            alt={"capsule-transit-sleep-lounge"}
            // width={30}
            // height={20}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HotelAndLocation;
