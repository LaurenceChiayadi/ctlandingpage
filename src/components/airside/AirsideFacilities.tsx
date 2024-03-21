import { Grid, Typography } from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import HeaderBottom from "../global/HeaderBottom";
import HotelFacilities from "../global/hotel/HotelFacilities";

const header = ["01", "CT", "Airside"];

const title = "Facilities & Amenities";

const facilities = [
  "Wifi",
  "Air Conditioning",
  "Earplug",
  "Sleeping Eye Mask",
  "In-House Slippers",
  "Dental Kit and Toiletries",
  "Bottled Water",
  "Luggage Storage Locker",
  "Shoe Locker",
  "Shared Bathroom with Rain Shower",
  "Shower Towel",
  "Free Flow Coffee and Tea",
  "24-hour Reception Desk",
];

const AirsideFacilities = () => {
  return (
    <HotelFacilities header={header} title={title} facilities={facilities} />
  );
};

export default AirsideFacilities;
