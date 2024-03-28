import { Box, Button, Divider, Typography, useMediaQuery } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import CTLogoWhite from "@/assets/icons/general/LogoWhite.svg";
import CTRight from "@/assets/icons/general/icon-arrow-top-right-white.svg";

const HotelBookNow = (props: { HeroImage: StaticImageData; title: string }) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Box
      width="100%"
      sx={{
        position: "relative",
        height: "80vh",
        overflow: "hidden",
        marginTop: "180px",
      }}
    >
      <Image
        src={props.HeroImage}
        alt="CapsuleHero"
        objectPosition="center"
        style={{
          position: "absolute",
          zIndex: -1,
          maxWidth: "100%",
          width: "auto",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        display="flex"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
      >
        <Image src={CTLogoWhite} alt="capsule-transit-logo" />
        <Typography fontWeight={600} color={"white"} marginTop={"20px"}>
          {props.title}
        </Typography>
        <Divider sx={{ bgcolor: "white", width: "400px", marginTop: "30px" }} />
        <Button
          sx={{
            padding: 0,
            justifyContent: "flex-start",
            color: "white",
            marginTop: "40px",
          }}
        >
          <Typography variant="body2" color={"white"} marginRight={2}>
            {"Book Now"}
          </Typography>
          <Image
            src={CTRight}
            alt="CT-Right-Up"
            style={{
              color: "white",
              width: isHandheldDevice ? "80px" : "140px",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default HotelBookNow;
