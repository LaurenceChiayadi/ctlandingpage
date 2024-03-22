import { featuresEnum } from "./Enums";

import OneHourIcon from "@/assets/icons/icons/icon-hour-1.svg";
import ThreeHourIcon from "@/assets/icons/icons/icon-hour-3.svg";
import SixHourIcon from "@/assets/icons/icons/icon-hour-6.svg";
import TwelveHourIcon from "@/assets/icons/icons/icon-hour-12.svg";

import SingleIcon from "@/assets/icons/icons/icon-room-single.svg";
import FemaleSingleIcon from "@/assets/icons/icons/icon-room-single_female.svg";
import MaleSingleIcon from "@/assets/icons/icons/icon-room-single_male.svg";
import QueenIcon from "@/assets/icons/icons/icon-room-queen.svg";
import DoubleIcon from "@/assets/icons/icons/icon-room-double.svg";
import SuiteIcon from "@/assets/icons/icons/icon-room-suite.svg";

import ConciergeIcon from "@/assets/icons/icons/icon-service-locker.svg";
import WifiIcon from "@/assets/icons/icons/icon-service-wifi.svg";
import ShowerIcon from "@/assets/icons/icons/icon-service-shower.svg";
import ToileteriesIcon from "@/assets/icons/icons/icon-service-dentalkit.svg";
import SlippersIcon from "@/assets/icons/icons/icon-service-slipper.svg";
import DrinksIcon from "@/assets/icons/icons/icon-service-drinks.svg";

export class DurationIcons {
  static duration(duration: string) {
    switch (duration) {
      case featuresEnum.OneHourStay:
        return OneHourIcon;
      case featuresEnum.ThreeHourStay:
        return ThreeHourIcon;
      case featuresEnum.ThreeHourLounge:
        return ThreeHourIcon;
      case featuresEnum.SixHourStay:
        return SixHourIcon;
      case featuresEnum.TwelveHourStay:
        return TwelveHourIcon;
      case featuresEnum.amMin3Hour:
        return ThreeHourIcon;
      case featuresEnum.pmMin6Hour:
        return SixHourIcon;
      default:
        return "";
    }
  }
}

export class RoomsIcons {
  static roomType(roomType: string) {
    switch (roomType) {
      case featuresEnum.Single:
        return SingleIcon;
      case featuresEnum.FemaleSingle:
        return FemaleSingleIcon;
      case featuresEnum.MaleSingle:
        return MaleSingleIcon;
      case featuresEnum.Queen:
        return QueenIcon;
      case featuresEnum.Double:
        return DoubleIcon;
      case featuresEnum.Suite:
        return SuiteIcon;
      default:
        return "";
    }
  }
}

export class FeaturesIcons {
  static features(roomType: string) {
    switch (roomType) {
      case featuresEnum.Concierge:
        return ConciergeIcon;
      case featuresEnum.Wifi:
        return WifiIcon;
      case featuresEnum.Shower:
        return ShowerIcon;
      case featuresEnum.Toileteries:
        return ToileteriesIcon;
      case featuresEnum.Slippers:
        return SlippersIcon;
      case featuresEnum.Drinks:
        return DrinksIcon;
      default:
        return "";
    }
  }
}
