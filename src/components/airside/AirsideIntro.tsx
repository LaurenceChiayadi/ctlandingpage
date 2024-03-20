import {
  Box,
  Breadcrumbs,
  Link,
  Stack,
  Typography,
  breadcrumbsClasses,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import AirsideDisplay1 from "./images/airside-display-1@2x.jpg";
import AirsideDisplay2 from "./images/airside-display-2@2x.jpg";
import AirsideDisplay3 from "./images/airside-display-3@2x.jpg";
import Image from "next/image";
import CTButton from "../global/CTButton";
import HotelIntro from "../global/hotel/HotelIntro";

const breadCrumbsContent = [
  { name: "Home", url: "/" },
  { name: "Location / KLIA Terminal 2", url: "/klia-2" },
  { name: "Airside", url: "" },
];

const title =
  "For early flights, late arrivals, missed flights or last minute flight cancellations.";

const subtitle = [
  "Airside:",
  "Passenger will need a boarding",
  "pass to access",
];

const images = [AirsideDisplay1, AirsideDisplay2, AirsideDisplay3];

const buttonContent = "BOOK NOW";

const AirsideIntro = () => {
  return (
    <HotelIntro
      breadCrumbsContent={breadCrumbsContent}
      images={images}
      textContent={title}
      buttonUrl={"/"}
      subtitle={
        <Box
          display={"flex"}
          flexDirection={"column"}
          marginX={2}
          marginTop={4}
        >
          <Stack direction={"row"} spacing={1}>
            <Typography fontWeight={"bold"}>{subtitle[0]}</Typography>
            <Typography>{subtitle[1]}</Typography>
          </Stack>
          <Typography>{subtitle[2]}</Typography>
        </Box>
      }
    />
  );
};

export default AirsideIntro;
