import {Hotel} from "../../../shared/types";
import {RefObject} from "react";
import {Path} from "react-native-svg";

export interface HotelRefData {
  ref: RefObject<Path | null>;
  data: HotelMapInfo
}

export interface HotelMapInfo {
  type: Hotel;
  dProps: string;
  name: string;
  x: number;
  y: number;
  rotationDefault: number
}