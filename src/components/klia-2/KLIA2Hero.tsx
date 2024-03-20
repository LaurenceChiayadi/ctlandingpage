import { Box, Typography } from "@mui/material";

const textContent = [
  "Capsule Transit",
  "@ KLIA Terminal 2",
  "Catering to different needs, we have launched 3 outlets at KLIA T2 for various experiences and convenience.",
];

const KLIA2Hero = () => {
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
        width={"700px"}
        textAlign={"center"}
        marginTop={5}
      >
        {textContent[2]}
      </Typography>
    </Box>
  );
};

export default KLIA2Hero;
