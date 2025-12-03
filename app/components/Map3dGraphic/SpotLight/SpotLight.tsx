import React, {Component, FC, forwardRef, memo, RefObject, useContext, useImperativeHandle, useRef} from "react";
import * as THREE from "three";
import {MaterialMesh} from "../Model/Model";
import {data} from "../__mock__/data";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";
import {SelectedObjectContext} from "../../../providers/SelectedObjectContext/SelectedObjectContext";

type Props = {
  MAX_AMOUNT: number;
  allObjectsWithBuilding: RefObject<MaterialMesh[]>;
}

export const SpotLight = memo(forwardRef<any, Props>(({MAX_AMOUNT, allObjectsWithBuilding}, ref) => {

  const lightRefs = useRef(Array(MAX_AMOUNT).fill(null).map(() => React.createRef<THREE.SpotLight>()));

  const selectedObjectContext = useContext(SelectedObjectContext);

  useImperativeHandle(ref, () => ({
    showSpotLight: () => {
      if (selectedObjectContext.selectedObjectRef.current && allObjectsWithBuilding.current.length > 0) {

        allObjectsWithBuilding.current.forEach((e) => {
          const idBuilding = e.name.split('_')[0];
          const idEnter = e.name.split('_')[1];

          if (e.name.includes('Location') && data[idBuilding] && data[idBuilding].places[idEnter]) {
            const locationObject = allObjectsWithBuilding.current.find((e) => e.name.includes(`${idEnter}_Text`))

            const boundingBox = new THREE.Box3().setFromObject(e);
            const size = new THREE.Vector3();
            boundingBox.getSize(size);

            // Получаем центр объекта
            const center = new THREE.Vector3();
            boundingBox.getCenter(center);

            const currentRefLight = lightRefs.current[Number(idEnter.replace('Enter', ''))];

            if (currentRefLight.current && locationObject) {
              if (!(currentRefLight.current.visible && currentRefLight.current.target === locationObject)) {
                currentRefLight.current.position.set(
                  center.x,
                  center.y + 0.01, // Над объектом на половине его высоты
                  center.z
                );

                // Направляем свет на объект
                currentRefLight.current.target = locationObject;
                currentRefLight.current.color.set(new THREE.Color(data[idBuilding].places[idEnter].color))

                // Включаем свет
                currentRefLight.current.visible = true;
              }
            }


          } else {
            return;
          }
        });
      }


    },

    hideSpotLight: () => {
      lightRefs.current.forEach((e) => {
        if (e.current) {
          e.current.visible = false;
        }
      })
    }
  }))

  return (
    <>
      {Array(MAX_AMOUNT).fill(null).map((_, index) => (
        <spotLight
          key={index}
          ref={lightRefs.current[index]}
          intensity={0.5}

          angle={Math.PI / 3}
          penumbra={0.5}
          decay={2}
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

}))