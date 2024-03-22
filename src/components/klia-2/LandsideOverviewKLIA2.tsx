import { Box, Grid, IconButton, Typography } from "@mui/material";
import HeaderBottom from "../global/HeaderBottom";
import ContentWrapper from "../global/ContentWrapper";
import Image from "next/image";

import LandsideImage from "./images/klia2-landside@2x.jpg";
import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";
import HotelOverview from "../global/hotel/HotelOverview";

const headerContent = ["02", "/03", "Public Area"];

const textContent = [
  "Landside",
  "Situated at the Gateway@klia2 Mall, linked to KLIA Terminal 2's Arrival Hall, CapsuleTransit Landside outlet offers rooms for 1 to 3 guests, available to book for a minimum of 3 hours. Each room includes public bathrooms and locker services.",
  "/klia-2/landside",
];

const LandsideOverviewKLIA2 = () => {
  return (
    <HotelOverview
      header={headerContent}
      content={textContent}
      image={LandsideImage}
    />
  );
};

export default LandsideOverviewKLIA2;
