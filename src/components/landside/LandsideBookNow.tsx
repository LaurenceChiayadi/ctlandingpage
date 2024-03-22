import HeroImage from "./images/hero-landside@2x.jpg";
import HotelBookNow from "../global/hotel/HotelBookNow";

const title = "CapsuleTransit Airside";

const LandsideBookNow = () => {
  return <HotelBookNow HeroImage={HeroImage} title={title} />;
};
export default LandsideBookNow;
