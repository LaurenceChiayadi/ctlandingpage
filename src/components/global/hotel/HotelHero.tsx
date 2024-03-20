import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const HotelHero = (props: {
  image: any;
  scrollPosition: number;
  textContent: string;
}) => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      sx={{ position: "relative", height: "70vh", overflow: "hidden" }}
    >
      <Image
        src={props.image}
        alt="CapsuleHero"
        objectFit="cover"
        objectPosition="center"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "auto",
          top: `${props.scrollPosition * 0.5}px`, // Adjust parallax effect by changing multiplier
        }}
      />
      <Box
        display="flex"
        height="100%"
        flexDirection="column"
        justifyContent="end"
        width="50%"
        sx={{
          position: "absolute",
          paddingX: 7,
          paddingBottom: 2,
        }}
      >
        <Typography variant="h1" color={theme.palette.CtColorScheme.white}>
          {props.textContent}
        </Typography>
      </Box>
    </Box>
  );
};

export default HotelHero;
