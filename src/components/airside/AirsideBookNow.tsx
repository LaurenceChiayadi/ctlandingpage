import HeroImage from "./images/hero-airside.jpg";
import HotelBookNow from "../global/hotel/HotelBookNow";

const title = "CapsuleTransit Airside";

const AirsideBookNow = () => {
  return <HotelBookNow HeroImage={HeroImage} title={title} />;
};
export default AirsideBookNow;
