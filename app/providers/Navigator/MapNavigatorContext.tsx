import {createContext} from "react";


interface MapRouteContextValue {
  route: [string | undefined, string | undefined],
  setRoute: (route: [string | undefined, string | undefined]) => void,
  pathCoords: number[][] | undefined;
  setPathCoords: (coords: number[][] | undefined) => void;
}

export const MapNavigatorContext = createContext<MapRouteContextValue | null>(null);