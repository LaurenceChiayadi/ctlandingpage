"use client";

import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";
import KLIA1Hero from "@/components/klia-1/KLIA1Hero";
import SleepLoungeOverviewKLIA2 from "@/components/klia-1/SleepLoungeOverviewKLIA1";
import AirsideOverviewKLIA2 from "@/components/klia-2/AirsideOverviewKLIA2";
import KLIA2Hero from "@/components/klia-2/KLIA2Hero";
import LandsideOverviewKLIA2 from "@/components/klia-2/LandsideOverviewKLIA2";
import MaxOverviewKLIA2 from "@/components/klia-2/MaxOverviewKLIA2";
import { Box } from "@mui/material";

const KLIA1Page = () => {
  return (
    <Box
      display={"flex"}
      width={"99vw"}
      flexDirection={"column"}
      sx={{ overflowX: "hidden" }}
    >
      <NavBar />
      <KLIA1Hero />
      <SleepLoungeOverviewKLIA2 />
      <Box marginY={6} />
      <Footer />
    </Box>
  );
};

export default KLIA1Page;
