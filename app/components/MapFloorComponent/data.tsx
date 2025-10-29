import {Hotel} from "../../shared/types";

import {Floor} from "./types";
import {FirstFloorSvgComponent} from "./Floors/HotelOne/FirstFloorSvgComponent";
import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import {SecondFloorSvgComponent} from "./Floors/HotelOne/SecondFloorSvgComponent";
import {ThirdFloorSvgComponent} from "./Floors/HotelOne/ThirdFloorSvgComponent";
import {FourthFloorSvgComponent} from "./Floors/HotelOne/FourthFloorSvgComponent";
import {FifthFloorSvgComponent} from "./Floors/HotelOne/FifthFloorSvgComponent";
import {SixthFloorSvgComponent} from "./Floors/HotelOne/SixthFloorSvgComponent";

export const getNumberHotelByType = (type: Hotel) => {
  switch (type) {
    case Hotel.ONE:
      return 1;
    default:
      return 0;
  }
}

export const getNumberFloorByType = (type: Floor) => {
  switch (type) {
    case Floor.FIRST:
      return 1;
    case Floor.SECOND:
      return 2;
    case Floor.THIRD:
      return 3;
    case Floor.FOURTH:
      return 4;
    case Floor.FIFTH:
      return 5;
    case Floor.SIXTH:
      return 6;
    default:
      return 0;
  }
}

export const getSvgFloorsByType = (type: Hotel) => {
  switch (type) {
    case Hotel.ONE:
      return {
        [Floor.FIRST]: <FirstFloorSvgComponent/>,
        [Floor.SECOND]: <SecondFloorSvgComponent/>,
        [Floor.THIRD]: <ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <SixthFloorSvgComponent/>
      };
  }

  return {}
}