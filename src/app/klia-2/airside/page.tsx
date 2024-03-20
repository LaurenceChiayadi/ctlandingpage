"use client";

import AirsideHero from "@/components/airside/AirsideHero";
import AirsideIntro from "@/components/airside/AirsideIntro";
import NavBar from "@/components/global/NavBar";
import { Box, Typography } from "@mui/material";

const Airside = () => {
  return (
    <Box display={"flex"} width={"99vw"} flexDirection={"column"}>
      <NavBar />
      <AirsideHero />
      <AirsideIntro />
    </Box>
  );
};

export default Airside;
