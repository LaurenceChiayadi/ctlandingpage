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
  "In-house lounge and library",
  "24-hour Reception Desk",
];

const MAXFacilities = () => {
  return (
    <HotelFacilities header={header} title={title} facilities={facilities} />
  );
};

export default MAXFacilities;
