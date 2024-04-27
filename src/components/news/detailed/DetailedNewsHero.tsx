import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const DetailedNewsHero = (props: { image: any; scrollPosition: number }) => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  return !isHandheldDevice ? (
    <DesktopView {...props} />
  ) : (
    <HandheldView {...props} />
  );
};

const DesktopView = (props: { image: any; scrollPosition: number }) => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      sx={{ position: "relative", height: "70vh", overflow: "hidden" }}
    >
      <img
        src={props.image}
        alt="CapsuleHero"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "auto",
          objectPosition: "center",

          top: `${props.scrollPosition * 0.5}px`, // Adjust parallax effect by changing multiplier
        }}
      />
    </Box>
  );
};

const HandheldView = (props: { image: any; scrollPosition: number }) => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      sx={{ position: "relative", height: "70vh", overflow: "hidden" }}
    >
      <img
        src={props.image}
        alt="CapsuleHero"
        style={{
          position: "absolute",
          zIndex: -1,
          maxWidth: "100%",
          width: "auto",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",

          top: `${props.scrollPosition * 0.5}px`, // Adjust parallax effect by changing multiplier
        }}
      />
    </Box>
  );
};

export default DetailedNewsHero;
