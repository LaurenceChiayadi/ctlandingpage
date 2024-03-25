import { featuresEnum } from "@/constant/Enums";

import FemaleSingle from "./images/room-single-female@2x.jpg";
import MixedSingle from "./images/room-single-mixed@2x.jpg";
import Queen from "./images/room-queen@2x.jpg";
import Suite from "./images/room-suite@2x.jpg";
import HotelRoomType, { IRoomTypes } from "../global/hotel/HotelRoomType";

const header = ["02", "Room Type: "];

const title = "Room Type";

const timeIcons = [
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
  {
    image: Queen,
    category: "Queen Capsule",
    bedType: "Queen Bed",
    capacity: "2 Adults",
  },
  {
    image: Suite,
    category: "Private Capsule Suite",
    bedType: "Queen + Single Bed",
    capacity: "3 Adult",
  },
];

const LandsideRoomTypes = () => {
  return (
    <HotelRoomType
      header={header}
      roomTypes={roomTypes}
      timeIcons={timeIcons}
      title={title}
    />
  );
};
export default LandsideRoomTypes;
