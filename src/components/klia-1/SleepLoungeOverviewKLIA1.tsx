import SleepLoungeImage from "./images/klia1-sleep-lounge.jpg";
import HotelOverview from "../global/hotel/HotelOverview";

const headerContent = ["02", "/03", "Public Area"];

const textContent = ["Sleep Lounge", "Lorem Ipsum.", "/klia-1/sleep-lounge"];

const SleepLoungeOverviewKLIA2 = () => {
  return (
    <HotelOverview
      header={headerContent}
      content={textContent}
      image={SleepLoungeImage}
    />
  );
};

export default SleepLoungeOverviewKLIA2;
