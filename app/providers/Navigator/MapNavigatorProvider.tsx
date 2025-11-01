import {FC, PropsWithChildren, useCallback, useState} from "react";
import {MapNavigatorContext} from "./MapNavigatorContext";

export const MapNavigatorProvider: FC<PropsWithChildren> = ({children}) => {

  const [route, setRouteState] = useState<[string | undefined, string | undefined]>([undefined, undefined])
  const [pathCoords, setPathCoordsState] = useState<number[][] | undefined>(undefined)

  const setPathCoords = useCallback((coords: number[][] | undefined) => {
    setPathCoordsState(coords);
  }, [setPathCoordsState])

  const setRoute = useCallback((obj: [string | undefined, string | undefined]) => {
    setRouteState(obj);
  }, [setRouteState])

  return (
    <MapNavigatorContext value={{route, setRoute, pathCoords, setPathCoords}}>
      {children}
    </MapNavigatorContext>
  )

}