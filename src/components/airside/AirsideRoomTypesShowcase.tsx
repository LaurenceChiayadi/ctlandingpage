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
import HotelGallery from "../global/hotel/HotelGallery";
0;

const textContents = ["Have a Glance", "Grid", "List"];

const AirsideImages = [
  Airside1,
  Airside2,
  Airside3,
  Airside4,
  Airside5,
  Airside6,
  Airside7,
  Airside8,
  Airside9,
  Airside10,
  Airside11,
];

const AirsideRoomTypesShowcase = () => {
  return <HotelGallery images={AirsideImages} textContents={textContents} />;
};

export default AirsideRoomTypesShowcase;
