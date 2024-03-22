import { Box, Button, Stack, Typography } from "@mui/material";
import HeaderTop from "../global/HeaderTop";
import { useRef, useState } from "react";
import Image from "next/image";
import ContentWrapper from "../global/ContentWrapper";

import EyeIcon from "@/assets/icons/general/icon-view-black.svg";
import Landside1 from "./images/room-types-showcase/img-landside-1@2x.jpg";
import Landside2 from "./images/room-types-showcase/img-landside-2@2x.jpg";
import Landside3 from "./images/room-types-showcase/img-landside-3@2x.jpg";
import Landside4 from "./images/room-types-showcase/img-landside-4@2x.jpg";
import Landside5 from "./images/room-types-showcase/img-landside-5@2x.jpg";
import Landside6 from "./images/room-types-showcase/img-landside-6@2x.jpg";
import Landside7 from "./images/room-types-showcase/img-landside-7@2x.jpg";
import Landside8 from "./images/room-types-showcase/img-landside-8@2x.jpg";
import Landside9 from "./images/room-types-showcase/img-landside-9@2x.jpg";
import Landside10 from "./images/room-types-showcase/img-landside-10@2x.jpg";
import Landside11 from "./images/room-types-showcase/img-landside-11@2x.jpg";
import Landside12 from "./images/room-types-showcase/img-landside-12@2x.jpg";
import Landside13 from "./images/room-types-showcase/img-landside-13@2x.jpg";
import Landside14 from "./images/room-types-showcase/img-landside-14@2x.jpg";
import Landside15 from "./images/room-types-showcase/img-landside-15@2x.jpg";
import Landside16 from "./images/room-types-showcase/img-landside-16@2x.jpg";
import Landside17 from "./images/room-types-showcase/img-landside-17@2x.jpg";
import Landside18 from "./images/room-types-showcase/img-landside-18@2x.jpg";
import Landside19 from "./images/room-types-showcase/img-landside-19@2x.jpg";
import Landside20 from "./images/room-types-showcase/img-landside-20@2x.jpg";
import Landside21 from "./images/room-types-showcase/img-landside-21@2x.jpg";
import Landside22 from "./images/room-types-showcase/img-landside-22@2x.jpg";
import Landside23 from "./images/room-types-showcase/img-landside-23@2x.jpg";
import Landside24 from "./images/room-types-showcase/img-landside-24@2x.jpg";
import Landside25 from "./images/room-types-showcase/img-landside-25@2x.jpg";
import Landside26 from "./images/room-types-showcase/img-landside-26@2x.jpg";
import Landside27 from "./images/room-types-showcase/img-landside-27@2x.jpg";
import Landside28 from "./images/room-types-showcase/img-landside-28@2x.jpg";
import HotelGallery from "../global/hotel/HotelGallery";
0;

const textContents = ["Have a Glance", "Grid", "List"];

const AirsideImages = [
  Landside1,
  Landside2,
  Landside3,
  Landside4,
  Landside5,
  Landside6,
  Landside7,
  Landside8,
  Landside9,
  Landside10,
  Landside11,
  Landside12,
  Landside13,
  Landside14,
  Landside15,
  Landside16,
  Landside17,
  Landside18,
  Landside19,
  Landside20,
  Landside21,
  Landside22,
  Landside23,
  Landside24,
  Landside25,
  Landside26,
  Landside27,
  Landside28,
];

const LandsideRoomTypesShowcase = () => {
  return <HotelGallery images={AirsideImages} textContents={textContents} />;
};

export default LandsideRoomTypesShowcase;
