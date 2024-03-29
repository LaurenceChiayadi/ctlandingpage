import SleepLounge1 from "./images/room-types-showcase/img-sleeplounge-1@2x.jpg";
import SleepLounge2 from "./images/room-types-showcase/img-sleeplounge-2@2x.jpg";
import SleepLounge3 from "./images/room-types-showcase/img-sleeplounge-3@2x.jpg";
import SleepLounge4 from "./images/room-types-showcase/img-sleeplounge-4@2x.jpg";
import SleepLounge5 from "./images/room-types-showcase/img-sleeplounge-5@2x.jpg";
import SleepLounge6 from "./images/room-types-showcase/img-sleeplounge-6@2x.jpg";
import SleepLounge7 from "./images/room-types-showcase/img-sleeplounge-7@2x.jpg";
import SleepLounge8 from "./images/room-types-showcase/img-sleeplounge-8@2x.jpg";
import SleepLounge9 from "./images/room-types-showcase/img-sleeplounge-9@2x.jpg";
import SleepLounge10 from "./images/room-types-showcase/img-sleeplounge-10@2x.jpg";
import SleepLounge11 from "./images/room-types-showcase/img-sleeplounge-11@2x.jpg";
import SleepLounge12 from "./images/room-types-showcase/img-sleeplounge-12@2x.jpg";
import SleepLounge13 from "./images/room-types-showcase/img-sleeplounge-13@2x.jpg";
import SleepLounge14 from "./images/room-types-showcase/img-sleeplounge-14@2x.jpg";
import SleepLounge15 from "./images/room-types-showcase/img-sleeplounge-15@2x.jpg";
import SleepLounge16 from "./images/room-types-showcase/img-sleeplounge-16@2x.jpg";
import SleepLounge17 from "./images/room-types-showcase/img-sleeplounge-17@2x.jpg";
import SleepLounge18 from "./images/room-types-showcase/img-sleeplounge-18@2x.jpg";
import SleepLounge19 from "./images/room-types-showcase/img-sleeplounge-19@2x.jpg";
import SleepLounge20 from "./images/room-types-showcase/img-sleeplounge-20@2x.jpg";
import SleepLounge21 from "./images/room-types-showcase/img-sleeplounge-21@2x.jpg";
import SleepLounge22 from "./images/room-types-showcase/img-sleeplounge-22@2x.jpg";
import SleepLounge23 from "./images/room-types-showcase/img-sleeplounge-23@2x.jpg";
import SleepLounge24 from "./images/room-types-showcase/img-sleeplounge-24@2x.jpg";

import HotelGallery, {
  IHotelGalleryImages,
} from "../global/hotel/HotelGallery";

const textContents = ["Have a Glance", "Grid", "List"];

const AirsideImages: IHotelGalleryImages[] = [
  { image: SleepLounge1, category: "Other" },
  { image: SleepLounge2, category: "Other" },
  { image: SleepLounge3, category: "Other" },
  { image: SleepLounge4, category: "Other" },
  { image: SleepLounge5, category: "Other" },
  { image: SleepLounge6, category: "Other" },
  { image: SleepLounge7, category: "Other" },
  { image: SleepLounge8, category: "Other" },
  { image: SleepLounge9, category: "Other" },
  { image: SleepLounge10, category: "Other" },
  { image: SleepLounge11, category: "Other" },
  { image: SleepLounge12, category: "Other" },
  { image: SleepLounge13, category: "Other" },
  { image: SleepLounge14, category: "Other" },
  { image: SleepLounge15, category: "Other" },
  { image: SleepLounge16, category: "Other" },
  { image: SleepLounge17, category: "Other" },
  { image: SleepLounge18, category: "Other" },
  { image: SleepLounge19, category: "Other" },
  { image: SleepLounge20, category: "Other" },
  { image: SleepLounge21, category: "Other" },
  { image: SleepLounge22, category: "Other" },
  { image: SleepLounge23, category: "Other" },
  { image: SleepLounge24, category: "Other" },
];

const SleepLoungeRoomTypesShowcase = () => {
  return <HotelGallery images={AirsideImages} textContents={textContents} />;
};

export default SleepLoungeRoomTypesShowcase;
