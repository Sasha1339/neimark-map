import {FC, PropsWithChildren, useCallback, useState} from "react";
import {MapObjectsContext} from "./MapObjectsContext";
import {Hotel, ObjectsMapRefCoords, ObjectsType} from "../../shared/types";

export const MapObjectsProvider: FC<PropsWithChildren> = ({children}) => {

  const [selectedObject, setSelectedObject] = useState<{ hotel?: Hotel, areas?: string }>({hotel: undefined, areas: undefined})

  const [hotelsRef, setHotelsRef] = useState<{hotels: ObjectsMapRefCoords[], areas: ObjectsMapRefCoords[]}>({hotels: [], areas: []});

  const setNewSelectedObjects = useCallback((obj: { hotel?: Hotel, areas?: string }) => {
    setSelectedObject(obj);
  }, [setSelectedObject])

  const addHotelRef = useCallback((ref: ObjectsMapRefCoords, type: ObjectsType) => {

    switch (type) {
      case ObjectsType.Areas:
        setHotelsRef(prev => ({ hotels: prev.hotels, areas: [ ...prev.areas, ref ] }));
        return;
      case ObjectsType.Hotel:
        setHotelsRef(prev => ({ areas: prev.areas, hotels: [ ...prev.hotels, ref ] }));
        return;
    }
  }, [hotelsRef])

  return (
    <MapObjectsContext value={{selectedObject, refs: hotelsRef, addHotelRef, setSelectedObjects: setNewSelectedObjects}}>
      {children}
    </MapObjectsContext>
  )

}