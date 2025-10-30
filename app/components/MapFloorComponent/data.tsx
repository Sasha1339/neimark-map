import {Hotel} from "../../shared/types";

import {Floor} from "./types";
import FloorsHotelOne from "./Floors/HotelOne";
import FloorsHotelTwo from "./Floors/HotelTwo";
import FloorsHotelThree from "./Floors/HotelThree";

export const getNumberHotelByType = (type: Hotel) => {
  switch (type) {
    case Hotel.ONE:
      return 1;
    case Hotel.TWO:
      return 2;
    case Hotel.THREE:
      return 3;
    case Hotel.FOUR:
      return 4;
    case Hotel.FIVE:
      return 5;
    case Hotel.SIX:
      return 6;
    case Hotel.SEVEN:
      return 7;
    case Hotel.EIGHT:
      return 8;
    case Hotel.NINE:
      return 9;
    case Hotel.TEN:
      return 10;
    case Hotel.ELEVEN:
      return 11;
    case Hotel.TWELVE:
      return 12;
    case Hotel.THIRTEEN:
      return 13;
    case Hotel.FOURTEEN:
      return 14;
    case Hotel.FIFTEEN:
      return 15;
    case Hotel.SIXTEEN:
      return 16;
    case Hotel.SEVENTEEN:
      return 17;
    case Hotel.EIGHTEEN:
      return 18;
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
        [Floor.FIRST]: <FloorsHotelOne.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelOne.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelOne.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelOne.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelOne.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelOne.SixthFloorSvgComponent/>
      };
    case Hotel.TWO:
      return {
        [Floor.FIRST]: <FloorsHotelTwo.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelTwo.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelTwo.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelTwo.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelTwo.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelTwo.SixthFloorSvgComponent/>
      };
    case Hotel.THREE:
      return {
        [Floor.FIRST]: <FloorsHotelThree.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelThree.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelThree.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelThree.FourthFloorSvgComponent/>,
      };
  }

  return {}
}