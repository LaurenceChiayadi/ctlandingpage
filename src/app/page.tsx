"use client";

import Image from "next/image";
import {
  Box,
  Button,
  ButtonBase,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import NavBar from "@/components/global/NavBar";
import HeroSection from "@/components/Homepage/HeroSection";
import CTIntroduction from "@/components/Homepage/CTIntroduction";
import HotelsAndLocation from "@/components/Homepage/HotelsAndLocation";

import CTIconBlack from "@/assets/icons/general/icon-logo-ct-black.svg";
import ContentWrapper from "@/components/global/ContentWrapper";
import OTADivider from "@/components/Homepage/OTADivider";
import CTDedication from "@/components/Homepage/CTDedication";
import ImageFooter from "@/components/Homepage/ImageFooter";
import Footer from "@/components/global/Footer";
import UnderMaintenance from "@/components/global/UnderMaintenance";

export default function Home() {
  const theme = useTheme();
  return (
    <main>
      <Box
        display={"flex"}
        // width={"100vw"}
        flexDirection={"column"}
        sx={{ overflowX: "hidden" }}
      >
        <NavBar />
        <HeroSection />
        <CTIntroduction />
        <HotelsAndLocation />
        <OTADivider />
        <CTDedication />
        <ImageFooter />
        <Footer />
      </Box>
    </main>
  );
}
