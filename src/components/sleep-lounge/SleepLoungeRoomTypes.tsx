import { featuresEnum } from "@/constant/Enums";

import MixedSingle from "./images/room-single-mixed@2x.jpg";
import HotelRoomType, { IRoomTypes } from "../global/hotel/HotelRoomType";

const header = ["02", "Room Type: "];

const title = "Room Type";

const timeIcons = [featuresEnum.amMin3Hour, featuresEnum.pmMin6Hour];

const roomTypes: IRoomTypes[] = [
  {
    image: MixedSingle,
    category: "Single Capsule",
    zone: "(Mixed Zone)",
    bedType: "Single Bed",
    capacity: "1 Adult",
  },
];

const SleepLoungeRoomTypes = () => {
  return (
    <HotelRoomType
      header={header}
      roomTypes={roomTypes}
      timeIcons={timeIcons}
      title={title}
    />
  );
};
export default SleepLoungeRoomTypes;
