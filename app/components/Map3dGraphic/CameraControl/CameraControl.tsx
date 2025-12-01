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


  // const target = useRef<THREE.Vector3>([0, 5, 0]);

  const [target, setTarget] = useState<THREE.Vector3>(new THREE.Vector3(0, 5, 0));

  // const panEnabled = useRef(true);

  const building = useRef(false)
  // const rotationAngle = useRef(0)

  useFrame((state, delta, frame) => {


    const position = objectsContext.selectedObjectRef.current?.position;

    if (position) {

      building.current = true;

      // ПАРАМЕТРЫ ВРАЩЕНИЯ
      const ROTATION_SPEED = 0.5; // радиан в секунду (настройте под себя)
      const ROTATION_RADIUS = 1;  // радиус вращения
      const ROTATION_HEIGHT = 1.5;  // высота камеры

      // 1. Увеличиваем угол вращения с учетом времени между кадрами
      // rotationAngle.current += ROTATION_SPEED * delta;
      //
      // 2. Рассчитываем позицию камеры на круговой орбите
      if (objectsContext.rotationAngleRef.current !== null) {
        const cameraX = position.x + Math.cos(objectsContext.rotationAngleRef.current) * ROTATION_RADIUS;
        const cameraY = position.y + ROTATION_HEIGHT;
        const cameraZ = position.z + Math.sin(objectsContext.rotationAngleRef.current) * ROTATION_RADIUS;

        // 3. Плавно двигаем камеру к этой позиции
        camera.position.lerp(
          new THREE.Vector3(cameraX, cameraY, cameraZ),
          stepOn
        );
      }



      // 4. Смотрим на объект
      camera.lookAt(position.x, position.y, position.z);

      // }


      // camera.updateProjectionMatrix()

    } else if (building.current ) {
      // console.log(camera.current.rotation);
      // const matrix = new THREE.Matrix4().setPosition( new THREE.Vector3(0, 0, 0));
      camera.position.set(0, 5, 0);

      camera.position.applyEuler(new THREE.Euler(0, 0, Math.PI, "XYZ"))

      building.current = false;

    }
  });

  return (
    <OrbitControls
      onChange={(e) => {
        // const rotation = e.target.camera?.rotation
        // if (rotation && firstEnter.current) {
        //   e.target.camera?.rotation.set(rotation.x, rotation.y, rotation.z + Math.PI / 3);
        //   firstEnter.current = false;
        // } else if (rotation) {
        //   e.target.camera?.rotation.set(rotation.x, rotation.y, rotation.z);
        // }
      }}
      enabled={!building.current}
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