import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";

import CloseIcon from "@/assets/icons/general/icon-menu-close.svg";
import CTIcon from "@/assets/icons/general/LogoPrimary.svg";

import DrawerAirside from "@/assets/images/drawer/menu-airside_2x.png";
import DrawerLandside from "@/assets/images/drawer/menu-landside_2x.png";
import DrawerMAX from "@/assets/images/drawer/menu-max_2x.png";
import DrawerSleepLounge from "@/assets/images/drawer/menu-sleeplounge_2x.png";
import { useState } from "react";
import { Instagram } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const hotels = [
  { title: "Hotel @ KLIA T1", hotels: ["Sleep Lounge"] },
  { title: "Hotel @ KLIA T2", hotels: ["Airside", "Landside", "MAX"] },
];

const rightSection = {
  title: "Discover",
  links: [
    { title: "About Us", url: "/about-us" },
    { title: "Capsule Highlight", url: "/highlight" },
    { title: "Out Commitment", url: "/our-commitment" },
    { title: "Newsroom", url: "/news" },
    { title: "divider", url: "/" },
    { title: "FAQ", url: "/FAQ" },
    { title: "Best Rate Guarantee", url: "/" },
    { title: "Instagram", url: "/" },
  ],
};

const CustomDrawer = (props: { open: boolean; handleClose: VoidFunction }) => {
  const theme = useTheme();
  const router = useRouter();

  const [hovered, setHovered] = useState("");

  const handleHovered = (name: string) => {
    setHovered(name);
  };

  return (
    <Drawer
      open={props.open}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
        },
      }}
      PaperProps={{ style: { width: "100vw" } }} // Use style instead of width
      sx={{ width: "100vw" }} // Ensure Drawer takes 100vw
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        role="presentation"
        width={"100%"}
        height={"100%"}
        paddingY={2}
        paddingX={7}
        bgcolor={theme.palette.CtColorScheme.blue800}
        overflow={"hidden"}
      >
        <IconButton onClick={props.handleClose} sx={{ alignSelf: "end" }}>
          <Image src={CloseIcon} alt="close-icon" />
        </IconButton>
        <Grid container alignItems={"center"} height={"100%"}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {hotels.map((terminal, index) => (
              <Stack key={index} direction={"column"}>
                <Typography
                  color={"primary"}
                  fontWeight={600}
                  fontSize={"20px"}
                  marginY={2}
                >
                  {terminal.title}
                </Typography>
                {terminal.hotels.map((hotel, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    color={theme.palette.CtColorScheme.white}
                    onMouseEnter={() => handleHovered(hotel)}
                    onMouseLeave={() => handleHovered("")}
                  >
                    {hotel}
                  </Typography>
                ))}
              </Stack>
            ))}
          </Grid>
          <Grid item xs={0} sm={0} md={4} lg={4} xl={4}>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              position="relative"
            >
              <Image
                src={CTIcon}
                alt="capsule-transit"
                style={{ width: "70%", height: "auto", zIndex: 0 }}
              />
              <Slide
                direction={"up"}
                in={hovered === "Airside"}
                mountOnEnter
                unmountOnExit
                style={{ position: "absolute" }}
              >
                <Image
                  src={DrawerAirside}
                  alt="capsule-transit"
                  style={{ width: "70%", height: "auto", zIndex: 0 }}
                />
              </Slide>
              <Slide
                direction={"up"}
                in={hovered === "Landside"}
                mountOnEnter
                unmountOnExit
                style={{ position: "absolute" }}
              >
                <Image
                  src={DrawerLandside}
                  alt="capsule-transit"
                  style={{ width: "70%", height: "auto", zIndex: 0 }}
                />
              </Slide>
              <Slide
                direction={"up"}
                in={hovered === "MAX"}
                mountOnEnter
                unmountOnExit
                style={{ position: "absolute" }}
              >
                <Image
                  src={DrawerMAX}
                  alt="capsule-transit"
                  style={{ width: "70%", height: "auto", zIndex: 0 }}
                />
              </Slide>
              <Slide
                direction={"up"}
                in={hovered === "Sleep Lounge"}
                mountOnEnter
                unmountOnExit
                style={{ position: "absolute" }}
              >
                <Image
                  src={DrawerSleepLounge}
                  alt="capsule-transit"
                  style={{ width: "70%", height: "auto", zIndex: 0 }}
                />
              </Slide>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Stack
              direction={"row"}
              width={"100%"}
              height={"100%"}
              spacing={5}
              paddingLeft={"150px"}
            >
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  backgroundColor: theme.palette.CtColorScheme.neon200,
                }}
              />
              <Grid container direction={"row"}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  marginBottom={1}
                >
                  <Typography
                    variant="button"
                    color={"primary"}
                    fontSize={"20px"}
                  >
                    {rightSection.title}
                  </Typography>
                </Grid>
                {rightSection.links.map((link, index) => (
                  <Grid
                    key={index}
                    item
                    xs={6}
                    sm={6}
                    md={12}
                    lg={12}
                    xl={12}
                    marginY={1}
                  >
                    {link.title === "divider" ? (
                      <Divider
                        sx={{
                          width: "30px",
                          bgcolor: theme.palette.CtColorScheme.grey400,
                          marginTop: 1,
                        }}
                      />
                    ) : link.title === "Instagram" ? (
                      <IconButton
                        onClick={() => router.push(link.url)}
                        sx={{ padding: 0, color: "white" }}
                      >
                        <Instagram />
                      </IconButton>
                    ) : (
                      <Button
                        onClick={() => router.push(link.url)}
                        sx={{
                          padding: 0,
                          justifyContent: "flex-start",
                          color: "white",
                          fontSize: "20px",
                          fontWeight: 500,
                        }}
                      >
                        {link.title}
                      </Button>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};
export default CustomDrawer;
