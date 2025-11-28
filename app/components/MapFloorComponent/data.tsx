import {Hotel} from "../../shared/types";

import {Floor} from "./types";
import FloorsHotelOne from "./Floors/HotelOne";
import FloorsHotelTwo from "./Floors/HotelTwo";
import FloorsHotelFour from "./Floors/HotelFour";
import FloorsHotelFive from "./Floors/HotelFive";
import FloorsHotelSix from "./Floors/HotelSix";
import FloorsHotelEight from "./Floors/HotelEight";
import FloorsHotelNine from "./Floors/HotelNine";
import FloorsHotelEleven from "./Floors/HotelEleven";
import FloorsHotelTwelve from "./Floors/HotelTwelve";
import FloorsHotelSeven from "./Floors/HotelSeven";
import FloorsHotelTen from "./Floors/HotelTen";
import FloorsHotelThirteen from "./Floors/HotelThirteen";
import FloorsHotelEighteen from "./Floors/HotelEighteen";
import FloorsHotelThree from "./Floors/HotelThree";
import FloorsHotelFourteen from "./Floors/HotelFourteen";
import FloorsHotelFifteen from "./Floors/HotelFifteen";
import FloorsHotelSixteen from "./Floors/HotelSixteen";
import FloorsHotelSeventeen from "./Floors/HotelSeventeen";
import {HotelMapInfo} from "../MapSvgComponent/Hotels/types";

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
    case Hotel.FOUR:
      return {
        [Floor.FIRST]: <FloorsHotelFour.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelFour.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelFour.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelFour.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelFour.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelFour.SixthFloorSvgComponent/>
      };
    case Hotel.FIVE:
      return {
        [Floor.FIRST]: <FloorsHotelFive.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelFive.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelFive.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelFive.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelFive.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelFive.SixthFloorSvgComponent/>
      };
    case Hotel.SIX:
      return {
        [Floor.FIRST]: <FloorsHotelSix.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelSix.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelSix.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelSix.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelSix.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelSix.SixthFloorSvgComponent/>
      };
    case Hotel.NINE:
      return {
        [Floor.FIRST]: <FloorsHotelNine.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelNine.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelNine.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelNine.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelNine.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelNine.SixthFloorSvgComponent/>
      };
    case Hotel.SEVEN:
      return {
        [Floor.FIRST]: <FloorsHotelSeven.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelSeven.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelSeven.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelSeven.FourthFloorSvgComponent/>
      };
    case Hotel.EIGHT:
      return {
        [Floor.FIRST]: <FloorsHotelEight.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelEight.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelEight.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelEight.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelEight.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelEight.SixthFloorSvgComponent/>
      };
    case Hotel.TEN:
      return {
        [Floor.FIRST]: <FloorsHotelTen.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelTen.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelTen.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelTen.FourthFloorSvgComponent/>
      };
    case Hotel.ELEVEN:
      return {
        [Floor.FIRST]: <FloorsHotelEleven.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelEleven.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelEleven.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelEleven.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelEleven.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelEleven.SixthFloorSvgComponent/>
      };
    case Hotel.TWELVE:
      return {
        [Floor.FIRST]: <FloorsHotelTwelve.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelTwelve.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelTwelve.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelTwelve.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelTwelve.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelTwelve.SixthFloorSvgComponent/>
      };
    case Hotel.THIRTEEN:
      return {
        [Floor.FIRST]: <FloorsHotelThirteen.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelThirteen.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelThirteen.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelThirteen.FourthFloorSvgComponent/>
      };
    case Hotel.FOURTEEN:
      return {
        [Floor.FIRST]: <FloorsHotelFourteen.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelFourteen.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelFourteen.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelFourteen.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelFourteen.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelFourteen.SixthFloorSvgComponent/>
      };
    case Hotel.FIFTEEN:
      return {
        [Floor.FIRST]: <FloorsHotelFifteen.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelFifteen.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelFifteen.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelFifteen.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelFifteen.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelFifteen.SixthFloorSvgComponent/>
      };
    case Hotel.SIXTEEN:
      return {
        [Floor.FIRST]: <FloorsHotelSixteen.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelSixteen.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelSixteen.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelSixteen.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelSixteen.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelSixteen.SixthFloorSvgComponent/>
      };
    case Hotel.SEVENTEEN:
      return {
        [Floor.FIRST]: <FloorsHotelSeventeen.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelSeventeen.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelSeventeen.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelSeventeen.FourthFloorSvgComponent/>,
        [Floor.FIFTH]: <FloorsHotelSeventeen.FifthFloorSvgComponent/>,
        [Floor.SIXTH]: <FloorsHotelSeventeen.SixthFloorSvgComponent/>
      };
    case Hotel.EIGHTEEN:
      return {
        [Floor.FIRST]: <FloorsHotelEighteen.FirstFloorSvgComponent/>,
        [Floor.SECOND]: <FloorsHotelEighteen.SecondFloorSvgComponent/>,
        [Floor.THIRD]: <FloorsHotelEighteen.ThirdFloorSvgComponent/>,
        [Floor.FOURTH]: <FloorsHotelEighteen.FourthFloorSvgComponent/>
      };
  }

  return {}
}