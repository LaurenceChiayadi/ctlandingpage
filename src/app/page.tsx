"use client";

import Image from "next/image";
import {
  Box,
  Button,
  ButtonBase,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import NavBar from "@/components/global/NavBar";
import HeroBackground from "../assets/images/homepage/hero-home-img@2x.jpg";

const textContents = [
  { text: "Airport Hotel" },
  { text: "A Short Stay at KLIA" },
  { text: "Refresh, Recharge, Take Off." },
];

export default function Home() {
  const theme = useTheme();
  return (
    <main>
      <NavBar />
      <Box sx={{ position: "relative", width: "100vw", height: "83vh" }}>
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
            paddingX: 5,
            paddingBottom: 2,
          }}
        >
          <Stack direction={"row"} spacing={1}>
            <Typography
              variant={"h5"}
              color={theme.palette.CtColorScheme.white}
            >
              {textContents[0].text}
            </Typography>
            <Typography variant="h5" color={theme.palette.primary.main}>
              /
            </Typography>
            <Typography
              variant={"h5"}
              color={theme.palette.CtColorScheme.white}
            >
              {textContents[1].text}
            </Typography>
          </Stack>
          <Typography variant="body1" color={theme.palette.CtColorScheme.white}>
            {textContents[2].text}
          </Typography>
        </Box>
      </Box>
    </main>
  );
}
