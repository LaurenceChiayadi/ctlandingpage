import { Box, Typography, useMediaQuery } from "@mui/material";

const textContent = [
  "Capsule Transit",
  "@ KLIA Terminal 1",
  "Catering to different needs, we have launched 1 outlets at KLIA T1 for various experiences and convenience.",
];

const KLIA1Hero = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"75vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h3">{textContent[0]}</Typography>
      <Typography variant="h3" color={"primary"}>
        {textContent[1]}
      </Typography>
      <Typography
        variant="h4"
        width={isHandheldDevice ? "80%" : "700px"}
        textAlign={"center"}
        marginTop={5}
      >
        {textContent[2]}
      </Typography>
    </Box>
  );
};

export default KLIA1Hero;
