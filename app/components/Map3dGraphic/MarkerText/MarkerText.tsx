import React, {FC, forwardRef, RefObject, useRef, useState} from "react";
import * as THREE from "three";
import {MaterialMesh} from "../Model/Model";
import {useFrame} from "@react-three/fiber/native";
import {Center, Text3D} from "@react-three/drei/native";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import {data} from "../__mock__/data";


type Props = {
  MAX_AMOUNT: number;
  selectedBuilding: RefObject<THREE.Object3D | null>;
  allObjectsWithBuilding: RefObject<MaterialMesh[]>;
}

export const MarkerText: FC<Props> = ({MAX_AMOUNT, selectedBuilding, allObjectsWithBuilding}) => {

  const textRefs = useRef(Array(MAX_AMOUNT).fill(null).map(() => React.createRef<THREE.Mesh>()));
  const [textTitles, setTextTitles] = useState<string[]>(Array(MAX_AMOUNT).fill('Text'));

  useFrame(() => {

    if (selectedBuilding.current && allObjectsWithBuilding.current.length > 0) {

      allObjectsWithBuilding.current.forEach((e) => {
        const idBuilding = e.name.split('_')[0];
        const idEnter = e.name.split('_')[1];

        if (e.name.includes('Light') && data[idBuilding] && data[idBuilding].places[idEnter]) {


          const boundingBox = new THREE.Box3().setFromObject(e);

          // Получаем центр объекта
          const center = new THREE.Vector3();
          boundingBox.getCenter(center);

          const currentRefText3d = textRefs.current[Number(idEnter.replace('Enter', ''))];

          if (currentRefText3d.current) {
            if (!(currentRefText3d.current.visible)) {
              currentRefText3d.current.position.set(
                center.x,
                center.y, // Над объектом на половине его высоты
                center.z
              );

              currentRefText3d.current.rotation.set(e.rotation.x, e.rotation.y, e.rotation.z);


              // Включаем свет
              currentRefText3d.current.visible = true;
            }
          }


        } else {
          return;
        }
      });

    } else {
      textRefs.current.forEach((e) => {
        if (e.current) {
          e.current.visible = false;
        }
      })
    }

  })

  return (
    <>
      {Array(MAX_AMOUNT).fill(null).map((_, index) => (

        <Text3D
          key={index}
          ref={textRefs.current[index]}
          font={require('../font/Manrope_Regular.json')}
          size={0.03}
          visible={false}
          height={0.005}
        >
          {'←'}
          <meshStandardMaterial color={0xFF0000}/>
        </Text3D>
      ))}
    </>
  )

}