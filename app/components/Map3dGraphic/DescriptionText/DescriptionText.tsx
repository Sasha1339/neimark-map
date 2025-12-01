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

export const DescriptionText: FC<Props> = ({MAX_AMOUNT, selectedBuilding, allObjectsWithBuilding}) => {

  const textRefs = useRef(Array(MAX_AMOUNT).fill(null).map(() => React.createRef<THREE.Mesh>()));
  const [textTitles, setTextTitles] = useState<string[]>(Array(MAX_AMOUNT).fill('Text'));

  useFrame(() => {

    if (selectedBuilding.current && allObjectsWithBuilding.current.length > 0) {

      allObjectsWithBuilding.current.forEach((e) => {
        const idBuilding = e.name.split('_')[0];
        const idEnter = e.name.split('_')[1];

        if (e.name.includes('Text') && data[idBuilding] && data[idBuilding].places[idEnter]) {


          const boundingBox = new THREE.Box3().setFromObject(e);

          // Получаем центр объекта
          const center = new THREE.Vector3();
          boundingBox.getCenter(center);

          const rotation = new THREE.Euler().setFromQuaternion(e.quaternion);

          const currentRefText3d = textRefs.current[Number(idEnter.replace('Enter', ''))];
          // const currentRefTitle = textRefsTitles.current[Number(idEnter.replace('Enter', ''))];

          if (currentRefText3d.current) {
            if (!(currentRefText3d.current.visible)) {
              const fontLoader = new FontLoader();
              const font = fontLoader.parse(require('../font/Manrope_Regular.json'));
              currentRefText3d.current.geometry.dispose();
              currentRefText3d.current.geometry = new TextGeometry(data[idBuilding].places[idEnter].title, {
                font: font,
                size: 0.03,
                depth: 0.005,
              });

              const boundingBox = new THREE.Box3().setFromObject(currentRefText3d.current);

              // Получаем центр объекта
              const size = new THREE.Vector3();
              boundingBox.getSize(size);


              // currentRefText3d.current.position.set(
              //   center.x + (0.016 * (data[idBuilding].places[idEnter].title.length / 2)) * Math.sin(e.rotation.y),
              //   center.y,
              //   center.z + (- 0.016 * (data[idBuilding].places[idEnter].title.length / 2)) * Math.cos(e.rotation.y)
              // );

              currentRefText3d.current.position.set(
                center.x,
                center.y,
                center.z
              );

              const ALPHA = -90 / 180 * Math.PI;
              const ALPHA_X = Math.atan((Math.cos(e.rotation.y) / (1 / Math.tan(ALPHA))));
              const ALPHA_Z = Math.atan((Math.cos(Math.PI / 2 - e.rotation.y) / (1 / Math.tan(ALPHA))));

              console.log(e.name)
              console.log(e.rotation.y)

              currentRefText3d.current.rotation.set(e.rotation.x, e.rotation.y < 0 ? e.rotation.y + Math.PI / 2 : e.rotation.y - Math.PI / 2, e.rotation.z);


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

          <meshStandardMaterial color={0xFF0000}/>
        </Text3D>
      ))}
    </>
  )

}