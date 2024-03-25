import {
  Box,
  Grid,
  Stack,
  Typography,
  duration,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import HeaderBottom from "../global/HeaderBottom";
import { featuresEnum } from "@/constant/Enums";
import { DurationIcons } from "@/constant/Icons";
import Image from "next/image";

import FemaleSingle from "./images/room-single-female@2x.jpg";
import MixedSingle from "./images/room-single-mixed@2x.jpg";
import HotelRoomType, { IRoomTypes } from "../global/hotel/HotelRoomType";

const header = ["02", "Room Type: "];

const title = "Room Type";

const timeIcons = [
  featuresEnum.OneHourStay,
  featuresEnum.ThreeHourStay,
  featuresEnum.SixHourStay,
  featuresEnum.TwelveHourStay,
];

const roomTypes: IRoomTypes[] = [
  {
    image: FemaleSingle,
    category: "Single Capsule",
    zone: "(Female-Only Zone)",
    bedType: "Single Bed",
    capacity: "1 Adult",
  },
  {
    image: MixedSingle,
    category: "Single Capsule",
    zone: "(Mixed Zone)",
    bedType: "Single Bed",
    capacity: "1 Adult",
  },
];

const AirsideRoomTypes = () => {
  const theme = useTheme();
  return (
    <HotelRoomType
      header={header}
      roomTypes={roomTypes}
      timeIcons={timeIcons}
      title={title}
    />
  );
};
export default AirsideRoomTypes;
