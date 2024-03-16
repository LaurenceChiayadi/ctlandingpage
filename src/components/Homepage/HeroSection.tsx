import Image from "next/image";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import HeroBackground from "./images/hero-home-img@2x.jpg";

const textContents = [
  { text: "Airport Hotel" },
  { text: "A Short Stay at KLIA" },
  { text: "Refresh, Recharge, Take Off." },
];

const HeroSection = () => {
  const theme = useTheme();
  return (
    <Box
      marginBottom={"100px"}
      width={"100%"}
      sx={{ position: "relative", height: "83vh" }}
    >
      <Image
        src={HeroBackground}
        alt="CapsuleHero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Box
        display={"flex"}
        height={"100%"}
        flexDirection={"column"}
        justifyContent={"end"}
        width={"50%"}
        sx={{
          position: "absolute",
          paddingX: 7,
          paddingBottom: 2,
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <Typography variant={"h5"} color={theme.palette.CtColorScheme.white}>
            {textContents[0].text}
          </Typography>
          <Typography variant="h5" color={theme.palette.primary.main}>
            /
          </Typography>
          <Typography variant={"h5"} color={theme.palette.CtColorScheme.white}>
            {textContents[1].text}
          </Typography>
        </Stack>
        <Typography
          fontSize={"5.625rem"}
          fontWeight={500}
          color={theme.palette.CtColorScheme.white}
        >
          {textContents[2].text}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
