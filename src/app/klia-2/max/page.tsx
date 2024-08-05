"use client";

import NavBar from "@/components/global/NavBar";
import { Box, Typography } from "@mui/material";
import Footer from "@/components/global/Footer";

import MAXHero from "@/components/max/MAXHero";
import MAXIntro from "@/components/max/MAXIntro";
import MAXFacilities from "@/components/max/MAXFacilities";
import MAXRoomTypes from "@/components/max/MAXRoomTypes";
import MAXRoomTypesShowcase from "@/components/max/MAXRoomTypesShowcase";
import MAXBookNow from "@/components/max/MAXBookNow";
import MAXExploreOther from "@/components/max/MAXExploreOther";
import UnderMaintenance from "../landside/page";

const Max = () => {
  return (
    <Box display={"flex"} width={"100vw"} flexDirection={"column"}>
      <NavBar />
      <MAXHero />
      <MAXIntro />
      <MAXFacilities />
      <MAXRoomTypes />
      <MAXRoomTypesShowcase />
      <MAXBookNow />
      <MAXExploreOther />
      <Footer />
    </Box>
  );
};

export default Max;
