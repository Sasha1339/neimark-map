import {FC, PropsWithChildren, RefObject, useCallback, useMemo, useState} from "react";
import {MapHotelsContext} from "./MapHotelsContext";
import {Path} from "react-native-svg";
import {HotelMapInfo, HotelRefData} from "../../components/MapSvgComponent/Hotels/types";

export const MapHotelsProvider: FC<PropsWithChildren> = ({children}) => {

  const [hotelsRef, setHotelsRef] = useState<HotelRefData[]>([]);

  const addHotelRef = useCallback((ref: RefObject<Path | null>, data: HotelMapInfo) => {
    setHotelsRef(prev => [...prev, {ref, data}]);
  }, [hotelsRef])

  return (
    <MapHotelsContext value={{hotelsRef, addHotelRef}}>
      {children}
    </MapHotelsContext>
  )

}