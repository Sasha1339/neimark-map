import React, {Component, FC, RefObject, useRef} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber/native";
import {MaterialMesh} from "../Model/Model";

type Props = {
  MAX_AMOUNT: number;
  selectedBuilding: RefObject<THREE.Object3D | null>;
  allObjectsWithBuilding: RefObject<MaterialMesh[]>;
}

export const SpotLight: FC<Props> = ({MAX_AMOUNT, selectedBuilding, allObjectsWithBuilding}) => {

  const lightRefs = useRef(Array(MAX_AMOUNT).fill(null).map(() => React.createRef<THREE.SpotLight>()));

  useFrame(() => {

    if (selectedBuilding.current && allObjectsWithBuilding.current.length > 0) {

      allObjectsWithBuilding.current.forEach((e) => {
        if (e.name.includes('Light')) {
          const idEnter = e.name.split('_')[1];
          const locationObject = allObjectsWithBuilding.current.find((e) => e.name.includes(`${idEnter}_Location`))

          const boundingBox = new THREE.Box3().setFromObject(e);

          // Получаем центр объекта
          const center = new THREE.Vector3();
          boundingBox.getCenter(center);

          const currentRefLight = lightRefs.current[Number(idEnter.replace('Enter', ''))];

          if (currentRefLight.current && locationObject) {
            if (!(currentRefLight.current.visible && currentRefLight.current.target === locationObject)) {
              currentRefLight.current.position.set(
                center.x,
                center.y, // Над объектом на половине его высоты
                center.z
              );

              // Направляем свет на объект
              currentRefLight.current.target = locationObject;

              // Включаем свет
              currentRefLight.current.visible = true;
            }
          }



        } else {
          return;
        }
      });

    } else {
      lightRefs.current.forEach((e) => {
        if (e.current) {
          e.current.visible = false;
        }
      })
    }

  })


  return (
    <>
      {Array(MAX_AMOUNT).fill(null).map((_, index) => (
        <spotLight
          key={index}
          ref={lightRefs.current[index]}
          color={0x9000FF}
          intensity={20}
          distance={10}
          angle={Math.PI / 5}
          penumbra={1}
          decay={1}
          visible={false}
          castShadow={true}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
          shadow-camera-near={0.1}
          shadow-camera-far={50}
        />
      ))}
    </>
  )

}