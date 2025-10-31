import {RefObject} from "react";
import {Path} from "react-native-svg";

export enum Hotel {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
  FOUR = 'FOUR',
  FIVE = 'FIVE',
  SIX = 'SIX',
  SEVEN = 'SEVEN',
  EIGHT = 'EIGHT',
  NINE = 'NINE',
  TEN = 'TEN',
  ELEVEN = 'ELEVEN',
  TWELVE = 'TWELVE',
  THIRTEEN = 'THIRTEEN',
  FOURTEEN = 'FOURTEEN',
  FIFTEEN = 'FIFTEEN',
  SIXTEEN = 'SIXTEEN',
  SEVENTEEN = 'SEVENTEEN',
  EIGHTEEN = 'EIGHTEEN',
}

export enum ObjectsType {
  Hotel = 'Hotel',
  Areas = 'Areas'
}

export interface ObjectsMapRefCoords {
  ref: RefObject<Path | null>;
  id?: string;
  width?: number;
  height?: number;
  x: number;
  y: number;
}
