import { featuresEnum, lotNumberEnum } from "@/constant/Enums";

export const displayThousands = (number: number) => {
  var numberString = number.toString();

  var parts = numberString.split(".");

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
};

export const matchDurationEnum = (duration: number) => {
  if (duration === 1) {
    return featuresEnum.OneHourStay;
  } else if (duration === 3) {
    return featuresEnum.ThreeHourStay;
  } else if (duration === 6) {
    return featuresEnum.SixHourStay;
  } else if (duration === 12) {
    return featuresEnum.TwelveHourStay;
  } else {
    return "";
  }
};

export const getLotNumber = (name: string) => {
  const lotNumber =
    name === "Airside"
      ? lotNumberEnum.airside
      : name === "Landside"
      ? lotNumberEnum.landside
      : name === "Sleep Lounge"
      ? lotNumberEnum.sleepLounge
      : name === "MAX"
      ? lotNumberEnum.max
      : 0;

  return lotNumber;
};

export const predictBedType = (maxPax: string) => {
  const maxPaxNumber = parseInt(maxPax);

  if (maxPaxNumber === 1) {
    return "Single";
  } else if (maxPaxNumber === 2) {
    return "Queen";
  } else if (maxPaxNumber === 3) {
    return "Queen + Single";
  } else {
    return "Unknown";
  }
};
