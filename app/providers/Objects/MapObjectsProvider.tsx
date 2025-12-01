import {FC, PropsWithChildren, useCallback, useRef, useState} from "react";
import {MapObjectsContext} from "./MapObjectsContext";
import * as THREE from "three";

export const MapObjectsProvider: FC<PropsWithChildren> = ({children}) => {

  const selectedObjectRef = useRef<THREE.Object3D | null>(null);

  const rotationAngleRef = useRef<number | null>(0);

  const [selectedObject, setSelectedObject] = useState<string | null>(null)

  const setNewSelectedObjects = useCallback((obj: string | null) => {
    setSelectedObject(obj);
  }, [setSelectedObject])


  return (
    <MapObjectsContext value={{rotationAngleRef, selectedObjectRef, selectedObject, setSelectedObjects: setNewSelectedObjects}}>
      {children}
    </MapObjectsContext>
  )

}