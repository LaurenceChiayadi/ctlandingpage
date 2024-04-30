import MAXHeroImage from "./images/hero-max.jpg";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import HotelHero from "../global/hotel/HotelHero";

const textContent = "CapsuleTransit Landside";

const MAXHero = () => {
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
      image={MAXHeroImage}
      scrollPosition={scrollPosition}
      textContent={textContent}
    />
  );
};

export default MAXHero;
