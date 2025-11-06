import {FC, PropsWithChildren, RefObject, useCallback, useRef, useState} from "react";
import {MapNavigatorContext} from "./MapNavigatorContext";
import Svg, {Path} from "react-native-svg";

export const MapNavigatorProvider: FC<PropsWithChildren> = ({children}) => {

  const [route, setRouteState] = useState<[string | undefined, string | undefined]>([undefined, undefined])
  const [pathCoords, setPathCoordsState] = useState<number[][] | undefined>(undefined)
  const pathRouteElement = useRef<Path | null>(null);
  const parentSvgElement = useRef<Svg | null>(null);

  const setPathCoords = useCallback((coords: number[][] | undefined) => {
    setPathCoordsState(coords);
  }, [setPathCoordsState])

  const setRoute = useCallback((obj: [string | undefined, string | undefined]) => {
    setRouteState(obj);
  }, [setRouteState])

  return (
    <MapNavigatorContext value={{route, setRoute, pathCoords, setPathCoords, pathRouteElement, parentSvgElement}}>
      {children}
    </MapNavigatorContext>
  )

}