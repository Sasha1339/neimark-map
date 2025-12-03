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
  cameraControlRef: RefObject<any>;
  selectedObject: string | null;
  mode: RefObject<'building' | 'env' | null>;
  setSelectedObjects: (building: string | null) => void;
}

export const MapObjectsContext = createContext<MapObjectsContextValue>({
  selectedObjectRef: React.createRef<THREE.Object3D | null>(),
  cameraControlRef:  React.createRef<any>(),
  selectedObject: '',
  mode: React.createRef<'building' | 'env' | null>(),
  setSelectedObjects: (building: string | null) => {},
});