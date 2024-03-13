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
import HeroSection from "@/components/Homepage/HeroSection";
import CTIntroduction from "@/components/Homepage/CTIntroduction";
import HotelsAndLocation from "@/components/Homepage/HotelsAndLocation";

export default function Home() {
  const theme = useTheme();
  return (
    <main>
      <Box display={"flex"} width={"99vw"} flexDirection={"column"}>
        <NavBar />
        <HeroSection />
        <CTIntroduction />
        <HotelsAndLocation />
      </Box>
    </main>
  );
}
