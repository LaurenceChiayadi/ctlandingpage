import MAXDisplay1 from "./images/landside-display-1@2x.jpg";
import MAXDisplay2 from "./images/landside-display-2@2x.jpg";
import MAXDisplay3 from "./images/landside-display-3@2x.jpg";
import HotelIntro from "../global/hotel/HotelIntro";

const breadCrumbsContent = [
  { name: "Home", url: "/" },
  { name: "Location / KLIA Terminal 2", url: "/klia-2" },
  { name: "Landside", url: "" },
];

const title =
  "For lone travellers, small groups and families; less hassle, more time to rest.";

const images = [MAXDisplay1, MAXDisplay2, MAXDisplay3];

const MAXIntro = () => {
  return (
    <HotelIntro
      breadCrumbsContent={breadCrumbsContent}
      images={images}
      textContent={title}
      buttonUrl={"/booking"}
    />
  );
};

export default MAXIntro;
