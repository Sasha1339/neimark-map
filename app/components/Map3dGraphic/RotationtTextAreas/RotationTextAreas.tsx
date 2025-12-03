import {useFrame, useThree} from '@react-three/fiber/native';
import React, {FC, forwardRef, RefObject, useContext, useEffect, useImperativeHandle, useRef} from 'react';
import * as THREE from 'three';
import {Center, Text3D} from '@react-three/drei/native';
import {MaterialMesh} from "../Model/Model";
import {data} from "../__mock__/data";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";

type Props = {
  allBuildings: RefObject<MaterialMesh[]>;
}

export const RotationTextAreas = forwardRef<any, Props>(({allBuildings}, ref) => {

  const groupRefs = useRef(Array(Object.values(data).flatMap(building => Object.values(building.places)).length).fill(null).map(() => React.createRef<THREE.Group>()));
  const textRefs = useRef(Array(Object.values(data).flatMap(building => Object.values(building.places)).length).fill(null).map(() => React.createRef<THREE.Mesh>()));
  const {camera} = useThree();
  const objectContext = useContext(MapObjectsContext);

  useImperativeHandle(ref, () => ({

    hideAreas: () => {
      textRefs.current.forEach((e) => {
        if (e.current) {
          e.current.visible = false;
        }
      })
    },
    showAreas: () => {
      textRefs.current.forEach((e) => {
        if (e.current) {
          e.current.visible = true;
        }
      })
    }

  }))

  useEffect(() => {
    textRefs.current.forEach((e) => {
      if (e.current) {
        e.current.visible = false;
      }
    })
  }, []);

  useFrame(() => {

      if (groupRefs.current) {

        const cameraPosition = new THREE.Vector3();
        camera.getWorldPosition(cameraPosition);

        const keys = Object.values(data).flatMap(building => Object.keys(building.places).map(e => `${building.id}_${e}`));

        for (let key of keys) {


          const index = keys.indexOf(key);

          const mesh = allBuildings.current.find(e => e.name === key);

          if (groupRefs.current[index].current && textRefs.current[index].current && mesh) {

            groupRefs.current[index].current.lookAt(cameraPosition);

            if (groupRefs.current[index].current.position.x === 0 && groupRefs.current[index].current .position.z === 0) {
              const boundingBox = new THREE.Box3().setFromObject(mesh);
              const center = new THREE.Vector3();
              boundingBox.getCenter(center);
              const boundingBoxGroup = new THREE.Box3().setFromObject(textRefs.current[index].current);
              const size = new THREE.Vector3();
              boundingBoxGroup.getSize(size);

              groupRefs.current[index].current.position.set(center.x , center.y * 2, center.z)
              textRefs.current[index].current.position.set(-size.x / 2 ,  0.02 , +size.z)
            }

          }
        }

      }
    }
  )
  ;

  return (
    <>
      {Array(Object.values(data).flatMap(building => Object.values(building.places)).length).fill(null).map((_, index) => (
        <group key={index} ref={groupRefs.current[index]} position={[0, 0, 0]}>
          <Text3D
            ref={textRefs.current[index]}
            font={require('../font/Manrope_Regular.json')}
            size={0.04}
            height={0.005}
          >
            {`«${Object.values(data).flatMap(building => Object.values(building.places))[index].title}»`}

            <meshStandardMaterial color={0x000000}/>
          </Text3D>
        </group>

      ))}
    </>
  );

})