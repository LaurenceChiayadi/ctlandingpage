import { featuresEnum } from "@/constant/Enums";

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
