import React, {FC, useContext, useRef, useState} from "react";
import {OrbitControlsProps} from "r3f-native-orbitcontrols";
import {useFrame, useThree} from "@react-three/fiber/native";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";
import * as THREE from "three";
import {OrthographicCamera, PerspectiveCamera} from "three";

type Props = {
  OrbitControls: (props: OrbitControlsProps) => any;
}

const dummy = new THREE.Vector3();

const stepOn = 1;
const stepOff = 0.05;

export const CameraControl: FC<Props> = ({OrbitControls}) => {

  const {camera} = useThree()

  const objectsContext = useContext(MapObjectsContext);


  const [target, setTarget] = useState<THREE.Vector3>(new THREE.Vector3(0, 5, 0));


  const building = useRef(false)


  useFrame((state, delta, frame) => {


    const position = objectsContext.selectedObjectRef.current?.position;

    if (position) {

      building.current = true;


      const ROTATION_RADIUS = 1;
      const ROTATION_HEIGHT = 1.5;


      if (objectsContext.rotationAngleRef.current !== null) {
        const cameraX = position.x + Math.cos(objectsContext.rotationAngleRef.current) * ROTATION_RADIUS;
        const cameraY = position.y + ROTATION_HEIGHT;
        const cameraZ = position.z + Math.sin(objectsContext.rotationAngleRef.current) * ROTATION_RADIUS;


        camera.position.lerp(
          new THREE.Vector3(cameraX, cameraY, cameraZ),
          stepOn
        );
      }



      camera.lookAt(position.x, position.y, position.z);



    } else if (building.current ) {

      camera.position.set(0, 5, 0);

      camera.position.applyEuler(new THREE.Euler(0, 0, Math.PI, "XYZ"))

      building.current = false;

    }
  });

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

}