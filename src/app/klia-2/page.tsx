"use client";

import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";
import AirsideOverviewKLIA2 from "@/components/klia-2/AirsideOverviewKLIA2";
import KLIA2Hero from "@/components/klia-2/KLIA2Hero";
import LandsideOverviewKLIA2 from "@/components/klia-2/LandsideOverviewKLIA2";
import MaxOverviewKLIA2 from "@/components/klia-2/MaxOverviewKLIA2";
import { Box } from "@mui/material";

const KLIA2Page = () => {
  return (
    <Box
      display={"flex"}
      width={"99vw"}
      flexDirection={"column"}
      sx={{ overflowX: "hidden" }}
    >
      <NavBar />
      <KLIA2Hero />
      <AirsideOverviewKLIA2 />
      <LandsideOverviewKLIA2 />
      <MaxOverviewKLIA2 />
      <Box marginY={6} />
      <Footer />
    </Box>
  );
};

export default KLIA2Page;
