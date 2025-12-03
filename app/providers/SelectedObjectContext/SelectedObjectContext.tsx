import React, {createContext, RefObject, useRef} from "react";
import * as THREE from "three";

interface SelectedObjectContextValue {
  selectedObjectRef: RefObject<THREE.Object3D | null>;
}

export const SelectedObjectContext = createContext<SelectedObjectContextValue>({
  selectedObjectRef: React.createRef<THREE.Object3D | null>(),
});