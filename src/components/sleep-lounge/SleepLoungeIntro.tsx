import SleepLoungeDisplay1 from "./images/sleeplounge-display-1@2x.jpg";
import SleepLoungeDisplay2 from "./images/sleeplounge-display-2@2x.jpg";
import SleepLoungeDisplay3 from "./images/sleeplounge-display-3@2x.jpg";
import HotelIntro from "../global/hotel/HotelIntro";

const breadCrumbsContent = [
  { name: "Home", url: "/" },
  { name: "Location / KLIA Terminal 2", url: "/klia-2" },
  { name: "Landside", url: "" },
];

const title = "A sleep-only lounge for a nap with a peace of mind.";

const images = [SleepLoungeDisplay1, SleepLoungeDisplay2, SleepLoungeDisplay3];

const SleepLoungeIntro = () => {
  return (
    <HotelIntro
      breadCrumbsContent={breadCrumbsContent}
      images={images}
      textContent={title}
      buttonUrl={"/"}
    />
  );
};

export default SleepLoungeIntro;
