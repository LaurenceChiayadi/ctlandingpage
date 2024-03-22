import LandsideHeroImage from "./images/hero-landside@2x.jpg";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import HotelHero from "../global/hotel/HotelHero";

const textContent = "CapsuleTransit Landside";

const LandsideHero = () => {
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
      image={LandsideHeroImage}
      scrollPosition={scrollPosition}
      textContent={textContent}
    />
  );
};

export default LandsideHero;
