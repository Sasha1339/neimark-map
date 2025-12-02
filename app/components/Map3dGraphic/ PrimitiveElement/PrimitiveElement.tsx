import {GLTF} from "three-stdlib";
import {ObjectMap, useThree} from "@react-three/fiber/native";
import {FC, forwardRef, memo, Ref, RefObject, useImperativeHandle, useMemo} from "react";
import * as THREE from "three";

type Props = {
  gltfModel: (GLTF & ObjectMap) | null;
  handleClick: (event: any) => void;
  modelRef: RefObject<any>;
}

export const PrimitiveElement = memo(forwardRef<any, Props>(({gltfModel, modelRef, handleClick}: Props, ref) => {

  const {camera, size} = useThree()

  useImperativeHandle(ref, () => ({
    // Теперь снаружи можно вызвать modelRef.current.simulateTap()
    simulateTap: (touch: any) => {
      if (!modelRef.current || !camera) return; // ⬅️ Используем objectRef.current

      const mouse = new THREE.Vector2();
      mouse.x = (touch.locationX / size.width) * 2 - 1;
      mouse.y = -(touch.locationY / size.height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      // 4. Ищем пересечения с объектом модели
      const intersects = raycaster.intersectObject(modelRef.current, true);

      if (intersects.length > 0) {
        // 5. Берем ближайший объект
        const intersect = intersects[0];
        // console.log('Clicked on object:', intersect.object.name || 'unnamed');


        handleClick(intersect.object)
        // ЗДЕСЬ ВЫЗВАТЬ HANDLE
      } else {
        console.log('No object clicked');
      }

    },
    // ⬅️ Возвращаем Three.js объект
  }), [camera, size, gltfModel]);


  return (<>{gltfModel && <primitive ref={modelRef} object={gltfModel.scene}/>}</>)

}))