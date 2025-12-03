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

export const RotationText = forwardRef<any, Props>(({allBuildings}, ref) => {

  const groupRefs = useRef(Array(Object.keys(data).length).fill(null).map(() => React.createRef<THREE.Group>()));
  const textRefs = useRef(Array(Object.keys(data).length).fill(null).map(() => React.createRef<THREE.Mesh>()));
  const numbersRefs = useRef(Array(Object.keys(data).length).fill(null).map(() => React.createRef<THREE.Mesh>()));
  const {camera} = useThree();
  const objectContext = useContext(MapObjectsContext);

  useImperativeHandle(ref, () => ({

    hide: () => {
      textRefs.current.forEach((e) => {
        if (e.current) {
          e.current.visible = false;
        }
      });
      numbersRefs.current.forEach((e) => {
        if (e.current) {
          e.current.visible = false;
        }
      })
    },
    show: () => {
      textRefs.current.forEach((e) => {
        if (e.current) {
          e.current.visible = true;
        }
      });
      numbersRefs.current.forEach((e) => {
        if (e.current) {
          e.current.visible = true;
        }
      })
    }

  }))

  useFrame(() => {

    if (groupRefs.current) {

      const cameraPosition = new THREE.Vector3();
      camera.getWorldPosition(cameraPosition);

      for (let key in data) {

        const index = Object.keys(data).indexOf(key);

        const mesh = allBuildings.current.find(e => e.name === key);

        if (groupRefs.current[index].current && textRefs.current[index].current && numbersRefs.current[index].current && mesh) {

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

            const boundingBoxNumbers = new THREE.Box3().setFromObject(numbersRefs.current[index].current);
            const sizeNumbers = new THREE.Vector3();
            boundingBoxNumbers.getSize(sizeNumbers);

            numbersRefs.current[index].current.position.set(-sizeNumbers.x / 2 , -0.04 , +sizeNumbers.z)
          }

        }
      }

    }
  }
)
;

return (
  <>
    {Array(Object.keys(data).length).fill(null).map((_, index) => (
      <group key={index} ref={groupRefs.current[index]} position={[0, 0, 0]}>
        <Text3D
          ref={textRefs.current[index]}
          font={require('../font/Manrope_Regular.json')}
          size={0.05}
          height={0.005}
        >
          {`«${data[Object.keys(data)[index]].name}»`}

          <meshStandardMaterial color={0xFFFFFF}/>
        </Text3D>
        <Text3D
          ref={numbersRefs.current[index]}
          font={require('../font/Manrope_Regular.json')}
          size={0.05}
          height={0.005}
        >
          {`Корпус ${data[Object.keys(data)[index]].number}`}

          <meshStandardMaterial color={0xFFFFFF}/>
        </Text3D>
      </group>

    ))}
  </>
);

})