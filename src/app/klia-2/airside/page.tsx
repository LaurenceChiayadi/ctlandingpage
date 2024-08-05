"use client";

import AirsideFacilities from "@/components/airside/AirsideFacilities";
import AirsideHero from "@/components/airside/AirsideHero";
import AirsideIntro from "@/components/airside/AirsideIntro";
import NavBar from "@/components/global/NavBar";
import AirsideRoomTypes from "@/components/airside/AirsideRoomTypes";
import { Box, Typography } from "@mui/material";
import AirsideRoomTypesShowcase from "@/components/airside/AirsideRoomTypesShowcase";
import AirsideBookNow from "@/components/airside/AirsideBookNow";
import AirsideExploreOther from "@/components/airside/AirsideExploreOther";
import Footer from "@/components/global/Footer";
import UnderMaintenance from "@/components/global/UnderMaintenance";

const Airside = () => {
  return (
    <Box display={"flex"} width={"100vw"} flexDirection={"column"}>
      <NavBar />
      <AirsideHero />
      <AirsideIntro />
      <AirsideFacilities />
      <AirsideRoomTypes />
      <AirsideRoomTypesShowcase />
      <AirsideBookNow />
      <AirsideExploreOther />
      <Footer />
    </Box>
  );
};

export default Airside;
