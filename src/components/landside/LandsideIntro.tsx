import LandsideDisplay1 from "./images/landside-display-1@2x.jpg";
import LandsideDisplay2 from "./images/landside-display-2@2x.jpg";
import LandsideDisplay3 from "./images/landside-display-3@2x.jpg";
import HotelIntro from "../global/hotel/HotelIntro";

const breadCrumbsContent = [
  { name: "Home", url: "/" },
  { name: "Location / KLIA Terminal 2", url: "/klia-2" },
  { name: "Landside", url: "" },
];

const title =
  "For lone travellers, small groups and families; less hassle, more time to rest.";

const images = [LandsideDisplay1, LandsideDisplay2, LandsideDisplay3];

const LandsideIntro = () => {
  return (
    <HotelIntro
      breadCrumbsContent={breadCrumbsContent}
      images={images}
      textContent={title}
      buttonUrl={"/"}
    />
  );
};

export default LandsideIntro;
