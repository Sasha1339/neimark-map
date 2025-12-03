import React, {
  FC,
  forwardRef,
  memo,
  RefObject,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import * as THREE from "three";
import {MaterialMesh} from "../Model/Model";
import {useFrame} from "@react-three/fiber/native";
import {Center, Text3D} from "@react-three/drei/native";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import {data} from "../__mock__/data";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";
import {SelectedObjectContext} from "../../../providers/SelectedObjectContext/SelectedObjectContext";


type Props = {
  MAX_AMOUNT: number;
  allObjectsWithBuilding: RefObject<MaterialMesh[]>;
}

export const DescriptionText = memo(forwardRef<any, Props>(({MAX_AMOUNT, allObjectsWithBuilding}, ref) => {

  const textRefs = useRef(Array(MAX_AMOUNT).fill(null).map(() => React.createRef<THREE.Mesh>()));

  const selectedObjectContext = useContext(SelectedObjectContext);

  useImperativeHandle(ref, () => ({
    showDescriptionText: () => {
      if (selectedObjectContext.selectedObjectRef.current && allObjectsWithBuilding.current.length > 0) {

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

                currentRefText3d.current.material = new THREE.MeshStandardMaterial({
                  color: new THREE.Color(data[idBuilding].places[idEnter].color), // Красный
                  // emissive: 0xffffff, // Свечение
                  metalness: 0.1,
                  roughness: 0.5
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

                const d = data[idBuilding].places[idEnter].sideText === 'left' ? 0.025 * data[idBuilding].places[idEnter].title.length : 0;

                const translate = new THREE.Vector3();
                translate.set(-d, 0.01, 0)
                translate.applyEuler(e.rotation);

                const tempPosition = new THREE.Vector3();
                tempPosition.copy(center).add(translate);

                // Создаем матрицу вращения для дополнительного поворота по Z
                const zRotation = new THREE.Matrix4().makeRotationX(-Math.PI / 6);

                // Создаем матрицу вращения объекта
                const objectRotation = new THREE.Matrix4().makeRotationFromEuler(e.rotation);

                // Комбинируем матрицы: сначала Z-поворот, затем поворот объекта
                const combinedMatrix = new THREE.Matrix4();
                combinedMatrix.multiplyMatrices(objectRotation, zRotation);


                currentRefText3d.current.position.copy(tempPosition);

                const eulerRotation = new THREE.Euler();
                eulerRotation.setFromRotationMatrix(combinedMatrix);
                currentRefText3d.current.rotation.copy(eulerRotation);


                // Включаем свет
                currentRefText3d.current.visible = true;
              }
            }


          } else {
            return;
          }
        });

      }
    },
    hideDescriptionText: () => {
      textRefs.current.forEach((e) => {
        if (e.current) {
          e.current.visible = false;
        }
      })
    }
  }));

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

          {/*<meshStandardMaterial color={0xFF0000}/>*/}
        </Text3D>
      ))}
    </>
  )

}))