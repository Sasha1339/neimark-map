import {createContext, RefObject} from "react";
import {Path} from "react-native-svg";
import {HotelMapInfo, HotelRefData} from "../../components/MapSvgComponent/Hotels/types";


interface MapHotelsContextValue {
  hotelsRef: HotelRefData[];
  addHotelRef: (ref: RefObject<Path | null>, data: HotelMapInfo) => void;
}

export const MapHotelsContext = createContext<MapHotelsContextValue | null>(null);