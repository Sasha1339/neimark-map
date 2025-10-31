import {createContext} from "react";
import {Hotel, ObjectsMapRefCoords, ObjectsType} from "../../shared/types";


interface MapObjectsContextValue {
  refs: {hotels: ObjectsMapRefCoords[], areas: ObjectsMapRefCoords[]};
  addHotelRef: (info: ObjectsMapRefCoords, type: ObjectsType) => void;
  selectedObject: { hotel?: Hotel, areas?: string }
  setSelectedObjects: (obj: { hotel?: Hotel, areas?: string }) => void;
}

export const MapObjectsContext = createContext<MapObjectsContextValue | null>(null);