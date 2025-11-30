
import {RefObject} from "react";
import {Path} from "react-native-svg";
import {Hotel} from "../../shared/types";

export interface HotelRefData {
  ref: RefObject<Path | null>;
  data: HotelMapInfo
}

export interface HotelMapInfo {
  id?: string;
  idGeoJson?: string;
  type: Hotel;
  dProps: string;
  name: string;
  x: number;
  y: number;
  rotationDefault: number
}