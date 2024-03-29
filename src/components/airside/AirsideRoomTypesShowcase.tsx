import { Box, Button, Stack, Typography } from "@mui/material";
import HeaderTop from "../global/HeaderTop";
import { useRef, useState } from "react";
import Image from "next/image";
import ContentWrapper from "../global/ContentWrapper";

import EyeIcon from "@/assets/icons/general/icon-view-black.svg";
import Airside1 from "./images/room-types-showcase/img-airside-1@2x.jpg";
import Airside2 from "./images/room-types-showcase/img-airside-2@2x.jpg";
import Airside3 from "./images/room-types-showcase/img-airside-3@2x.jpg";
import Airside4 from "./images/room-types-showcase/img-airside-4@2x.jpg";
import Airside5 from "./images/room-types-showcase/img-airside-5@2x.jpg";
import Airside6 from "./images/room-types-showcase/img-airside-6@2x.jpg";
import Airside7 from "./images/room-types-showcase/img-airside-7@2x.jpg";
import Airside8 from "./images/room-types-showcase/img-airside-8@2x.jpg";
import Airside9 from "./images/room-types-showcase/img-airside-9@2x.jpg";
import Airside10 from "./images/room-types-showcase/img-airside-10@2x.jpg";
import Airside11 from "./images/room-types-showcase/img-airside-11@2x.jpg";
import HotelGallery, {
  IHotelGalleryImages,
} from "../global/hotel/HotelGallery";
0;

const textContents = ["Have a Glance", "Grid", "List"];

const AirsideImages: IHotelGalleryImages[] = [
  { image: Airside1, category: "Female Single" },
  { image: Airside2, category: "Other" },
  { image: Airside3, category: "Other" },
  { image: Airside4, category: "Other" },
  { image: Airside5, category: "Other" },
  { image: Airside6, category: "Other" },
  { image: Airside7, category: "Other" },
  { image: Airside8, category: "Other" },
  { image: Airside9, category: "Other" },
  { image: Airside10, category: "Other" },
  { image: Airside11, category: "Other" },
];

const AirsideRoomTypesShowcase = () => {
  return <HotelGallery images={AirsideImages} textContents={textContents} />;
};

export default AirsideRoomTypesShowcase;
