import React, {createContext, RefObject, useRef} from "react";
import {Hotel, ObjectsMapRefCoords, ObjectsType} from "../../shared/types";
import * as THREE from "three";

/**
Deprecated
 */
interface MapObjectsContextValueOld {
  selectedObject: { hotel?: Hotel, areas?: string }
  setSelectedObjects: (obj: { hotel?: Hotel, areas?: string }) => void;
}


interface MapObjectsContextValue {
  selectedObjectRef: RefObject<THREE.Object3D | null>;
  rotationAngleRef: RefObject<number | null>;
  selectedObject: string | null
  setSelectedObjects: (building: string | null) => void;
}

export const MapObjectsContext = createContext<MapObjectsContextValue>({
  selectedObjectRef: React.createRef<THREE.Object3D | null>(),
  rotationAngleRef:  React.createRef<number | null>(),
  selectedObject: '',
  setSelectedObjects: (building: string | null) => {},
});