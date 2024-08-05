import MAXDisplay1 from "./images/max-display-1.jpg";
import MAXDisplay2 from "./images/max-display-2.jpg";
import MAXDisplay3 from "./images/max-display-3.jpg";
import HotelIntro from "../global/hotel/HotelIntro";

const breadCrumbsContent = [
  { name: "Home", url: "/" },
  { name: "Location / KLIA Terminal 2", url: "/klia-2" },
  { name: "MAX", url: "" },
];

const title =
  "For travelers seeking a blend of luxury and comfort; more privacy, elevated experiences, and a touch of Malaysian heritage.";

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
