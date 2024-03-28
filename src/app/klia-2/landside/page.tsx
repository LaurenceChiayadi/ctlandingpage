"use client";

import NavBar from "@/components/global/NavBar";
import { Box, Typography } from "@mui/material";
import Footer from "@/components/global/Footer";

import LandsideHero from "@/components/landside/LandsideHero";
import LandsideIntro from "@/components/landside/LandsideIntro";
import LandsideFacilities from "@/components/landside/LandsideFacilities";
import LandsideRoomTypes from "@/components/landside/LandsideRoomTypes";
import LandsideRoomTypesShowcase from "@/components/landside/LandsideRoomTypesShowcase";
import LandsideBookNow from "@/components/landside/LandsideBookNow";
import LandsideExploreOther from "@/components/landside/LandsideExploreOther";

const Landside = () => {
  return (
    <Box display={"flex"} width={"100vw"} flexDirection={"column"}>
      <NavBar />
      <LandsideHero />
      <LandsideIntro />
      <LandsideFacilities />
      <LandsideRoomTypes />
      <LandsideRoomTypesShowcase />
      <LandsideBookNow />
      <LandsideExploreOther />
      <Footer />
    </Box>
  );
};

export default Landside;
