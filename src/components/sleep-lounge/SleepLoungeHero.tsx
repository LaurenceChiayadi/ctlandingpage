import SleepLoungeHeroImage from "./images/hero-sleeplounge.jpg";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import HotelHero from "../global/hotel/HotelHero";

const textContent = "CapsuleTransit Sleep Lounge";

const SleepLoungeHero = () => {
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
      image={SleepLoungeHeroImage}
      scrollPosition={scrollPosition}
      textContent={textContent}
    />
  );
};

export default SleepLoungeHero;
