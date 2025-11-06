import {createContext, RefObject} from "react";
import Svg, {Path} from "react-native-svg";


interface MapRouteContextValue {
  route: [string | undefined, string | undefined],
  setRoute: (route: [string | undefined, string | undefined]) => void,
  pathCoords: number[][] | undefined;
  setPathCoords: (coords: number[][] | undefined) => void;
  pathRouteElement: RefObject<Path | null>;
  parentSvgElement: RefObject<Svg | null>;
}

export const MapNavigatorContext = createContext<MapRouteContextValue | null>(null);