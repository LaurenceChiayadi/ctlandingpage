import Image from "next/image";

import AirsideHeroImage from "./images/hero-airside.jpg";
import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import HotelHero from "../global/hotel/HotelHero";

const textContent = "CapsuleTransit Airside";

const AirsideHero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HotelHero
      image={AirsideHeroImage}
      scrollPosition={scrollPosition}
      textContent={textContent}
    />
  );
};

export default AirsideHero;
