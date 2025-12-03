import {FC, PropsWithChildren, useRef} from "react";
import * as THREE from "three";
import {SelectedObjectContext} from "./SelectedObjectContext";

export const SelectedObjectProvider: FC<PropsWithChildren> = ({children}) => {

  const selectedObjectRef = useRef<THREE.Object3D | null>(null);


  return (
    <SelectedObjectContext value={{selectedObjectRef}}>
      {children}
    </SelectedObjectContext>
  )

}