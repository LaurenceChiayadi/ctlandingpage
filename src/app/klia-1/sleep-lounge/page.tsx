"use client";

import NavBar from "@/components/global/NavBar";
import { Box, Typography } from "@mui/material";
import Footer from "@/components/global/Footer";
import SleepLoungeHero from "@/components/sleep-lounge/SleepLoungeHero";
import SleepLoungeIntro from "@/components/sleep-lounge/SleepLoungeIntro";
import SleepLoungeFacilities from "@/components/sleep-lounge/SleepLoungeFacilities";
import SleepLoungeRoomTypes from "@/components/sleep-lounge/SleepLoungeRoomTypes";
import SleepLoungeRoomTypesShowcase from "@/components/sleep-lounge/SleepLoungeRoomTypesShowcase";
import SleepLoungeBookNow from "@/components/sleep-lounge/SleepLoungeBookNow";
import SleepLoungeExploreOther from "@/components/sleep-lounge/SleepLoungeExploreOther";
import UnderMaintenance from "@/components/global/UnderMaintenance";

const SleepLoungePage = () => {
  return (
    <Box display={"flex"} width={"99vw"} flexDirection={"column"}>
      <NavBar />
      <SleepLoungeHero />
      <SleepLoungeIntro />
      <SleepLoungeFacilities />
      <SleepLoungeRoomTypes />
      <SleepLoungeRoomTypesShowcase />
      <SleepLoungeBookNow />
      <SleepLoungeExploreOther />
      <Footer />
    </Box>
  );
};

export default UnderMaintenance;
