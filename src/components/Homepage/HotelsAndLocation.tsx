import {
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import Image from "next/image";
import { features } from "process";
import { useState } from "react";

import EyeIcon from "@/assets/icons/general/icon-view-black.svg";
import AirsideImage from "@/assets/images/list-klia2-airside.jpg";
import LandSideImage from "@/assets/images/list-klia2-landside@2x.jpg";
import MaxImage from "@/assets/images/list-klia2-max@2x.jpg";
import SleepLoungeRoomImage from "@/assets/images/list-klia1-landside@2x.jpg";
import SleepLoungImage from "@/assets/images/list-klia1-landside2@2x.jpg";

import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";
import LocationIcon from "@/assets/icons/general/icon-location-grey.svg";

import HeaderTop from "../global/HeaderTop";
import { featuresEnum } from "@/constant/Enums";
import { DurationIcons, FeaturesIcons, RoomsIcons } from "@/constant/Icons";

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
    backgroundUrl: "/videos/list-klia2-airside.mp4",
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

  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  return (
    <ContentWrapper>
      <HeaderTop title={textContent[0].title}>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={isHandheldDevice ? "space-between" : "start"}
          width={"100%"}
        >
          <Button
            onClick={() => setKLIA2Selected(false)}
            sx={{ color: KLIA2Selected ? "black" : "" }}
          >
            {textContent[1].title}
            {KLIA2Selected && (
              <Image src={EyeIcon} alt={"eye-icon"} style={{ marginLeft: 5 }} />
            )}
          </Button>
          <Typography variant="h6" color={"grey"}>
            /
          </Typography>
          <Button
            onClick={() => setKLIA2Selected(true)}
            sx={{ color: !KLIA2Selected ? "black" : "" }}
          >
            {textContent[2].title}
            {!KLIA2Selected && (
              <Image src={EyeIcon} alt={"eye-icon"} style={{ marginLeft: 5 }} />
            )}
          </Button>
        </Stack>
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

  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Grid container direction={"row"} columnSpacing={3} rowSpacing={5}>
      {terminal2Hotels.map((data, index) => (
        <Grid item key={index} xs={12} sm={12} md={4} lg={4} xl={4}>
          {props.hovered === data.title &&
          !isHandheldDevice &&
          typeof data.backgroundUrl !== "string" ? (
            <Box
              width="100%"
              height={isHandheldDevice ? "500px" : "700px"}
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
                        <Typography variant="h6" marginRight={"3px"}>
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
              height={isHandheldDevice ? "500px" : "700px"}
              onMouseOver={() => props.handleHoverImage(data.title)}
            >
              {typeof data.backgroundUrl === "string" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", height: "100%" }}
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
          {isHandheldDevice && (
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1}
              marginTop={2}
            >
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
          )}
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

  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Grid container direction={"row"} columnSpacing={3}>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        {props.hovered === terminal1Hotels.title ? (
          <Box
            width="100%"
            height={isHandheldDevice ? "500px" : "700px"}
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
                      <Typography variant="h6" marginRight={"3px"}>
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
            height={isHandheldDevice ? "500px" : "700px"}
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
        {isHandheldDevice && (
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            marginTop={2}
          >
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
        )}
      </Grid>
      {!isHandheldDevice && (
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box width={"100%"} height={"700px"}>
            <Image
              src={SleepLoungImage}
              alt={"capsule-transit-sleep-lounge"}
              // width={30}
              // height={20}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default HotelAndLocation;
