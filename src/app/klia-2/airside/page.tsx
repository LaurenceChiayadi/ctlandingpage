"use client";

import AirsideFacilities from "@/components/airside/AirsideFacilities";
import AirsideHero from "@/components/airside/AirsideHero";
import AirsideIntro from "@/components/airside/AirsideIntro";
import NavBar from "@/components/global/NavBar";
import AirsideRoomTypes from "@/components/airside/AirsideRoomTypes";
import { Box, Typography } from "@mui/material";
import AirsideRoomTypesShowcase from "@/components/airside/AirsideRoomTypesShowcase";

const Airside = () => {
  return (
    <Box display={"flex"} width={"99vw"} flexDirection={"column"}>
      <NavBar />
      <AirsideHero />
      <AirsideIntro />
      <AirsideFacilities />
      <AirsideRoomTypes />
      <AirsideRoomTypesShowcase />
    </Box>
  );
};

export default Airside;
