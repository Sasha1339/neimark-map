import React, {forwardRef, useContext, useImperativeHandle, useMemo, useRef, useState} from "react";
import {OrbitControlsProps} from "r3f-native-orbitcontrols";
import {useFrame, useThree} from "@react-three/fiber/native";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";
import * as THREE from "three";

type Props = {
  OrbitControls: (props: OrbitControlsProps) => any;
}

export const CameraControl = forwardRef<any, Props>(({OrbitControls}, ref) => {

  const {camera} = useThree();

  const ROTATION_RADIUS = useMemo(() => 1.5, [])
  const ROTATION_HEIGHT = useMemo(() => 1, [])

  const oldCameraPosition = useRef<THREE.Vector3>(null);
  const newCameraPosition = useRef<THREE.Vector3>(null);
  const positionBuilding = useRef<THREE.Vector3>(null);

  const objectsContext = useContext(MapObjectsContext);

  const rotationCamera = (rotation: number, position: THREE.Vector3) => {
      const cameraX = position.x + Math.cos(rotation) * ROTATION_RADIUS;
      const cameraY = position.y + ROTATION_HEIGHT;
      const cameraZ = position.z + Math.sin(rotation) * ROTATION_RADIUS;

      newCameraPosition.current = new THREE.Vector3(cameraX, cameraY, cameraZ);
  }

  useFrame(() => {
    if (positionBuilding.current && newCameraPosition.current) {
      camera.position.lerp(
        newCameraPosition.current,
        1
      );

      camera.lookAt(positionBuilding.current.x, positionBuilding.current.y, positionBuilding.current.z);
    }
  })

  useImperativeHandle(ref, () => ({

    lookAtBuildingPosition: () => {
      oldCameraPosition.current = new THREE.Vector3().copy(camera.position);
      const position = objectsContext.selectedObjectRef.current?.position;
      if (position) {
        positionBuilding.current = position;
        rotationCamera(0, position);
      }
    },
    rotationCameraOn: (rotation: number) => {
      const position = objectsContext.selectedObjectRef.current?.position;
      if (position) {
        rotationCamera(rotation, position)
      }
    },
    lookAtOldPosition: () => {
      if (oldCameraPosition.current) {
        camera.position.copy(oldCameraPosition.current);
      }
      positionBuilding.current = null;
    }

  }));

  return (
    <OrbitControls
      enabled={true}
      enableZoom={true}
      enableRotate={true}
      minPolarAngle={0}
      maxPolarAngle={0}
      minZoom={1.5}
      maxZoom={5}
      panSpeed={1}
      zoomSpeed={0.75}
      rotateSpeed={1}
    />
  );

})