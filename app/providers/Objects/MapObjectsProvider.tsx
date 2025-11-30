import {FC, PropsWithChildren, useCallback, useRef, useState} from "react";
import {MapObjectsContext} from "./MapObjectsContext";
import * as THREE from "three";

export const MapObjectsProvider: FC<PropsWithChildren> = ({children}) => {

  const selectedObjectRef = useRef<THREE.Object3D | null>(null);

  const [selectedObject, setSelectedObject] = useState<string | null>(null)

  const setNewSelectedObjects = useCallback((obj: string | null) => {
    setSelectedObject(obj);
  }, [setSelectedObject])


  return (
    <MapObjectsContext value={{selectedObjectRef, selectedObject, setSelectedObjects: setNewSelectedObjects}}>
      {children}
    </MapObjectsContext>
  )

}