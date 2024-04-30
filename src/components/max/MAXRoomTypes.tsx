import { featuresEnum } from "@/constant/Enums";

import Standard from "./images/standard-room.jpg";
import Deluxe from "./images/deluxe-room.jpg";
import Suite from "./images/suite-room.jpg";
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
    image: Standard,
    category: "Standard",
    bedType: "2 Single Bed",
    capacity: "2 Adult",
  },
  {
    image: Deluxe,
    category: "Deluxe",
    bedType: "King Bed",
    capacity: "2 Adult",
  },
  {
    image: Suite,
    category: "Suite",
    bedType: "Queen + Couch",
    capacity: "2 Adult",
  },
];

const MAXRoomTypes = () => {
  return (
    <HotelRoomType
      header={header}
      roomTypes={roomTypes}
      timeIcons={timeIcons}
      title={title}
    />
  );
};
export default MAXRoomTypes;
