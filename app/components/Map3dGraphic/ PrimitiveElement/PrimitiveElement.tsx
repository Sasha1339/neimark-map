import {GLTF} from "three-stdlib";
import {ObjectMap} from "@react-three/fiber/native";
import {FC, memo, Ref, RefObject, useMemo} from "react";

type Props = {
  gltfModel: (GLTF & ObjectMap) | null;
  modelRef: RefObject<any>;
  handleClick: (event: any) => void;
}

export const PrimitiveElement = memo(({gltfModel, modelRef, handleClick}: Props) => {

  return (<>{gltfModel && <primitive ref={modelRef} object={gltfModel.scene} onPointerDown={handleClick}/>}</>)

})