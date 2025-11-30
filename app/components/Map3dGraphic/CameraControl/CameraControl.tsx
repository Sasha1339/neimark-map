import React, {FC} from "react";
import {OrbitControlsProps} from "r3f-native-orbitcontrols";

type Props = {
  OrbitControls: (props: OrbitControlsProps) => any;
}

export const CameraControl: FC<Props> = ({OrbitControls}) => {

  // const {camera} = useThree()
  //
  // const objectsContext = useContext(MapObjectsContext);
  //
  // const panEnabled = useRef(true);
  //
  //
  // useFrame(() => {
  //   const position = objectsContext.selectedObjectRef.current?.position;
  //
  //   if (position && camera.position.x !== position.x && camera.position.z !== position.z) {
  //     //
  //     // camera.position.set(position.x, 5, position.z);
  //
  //     panEnabled.current = false;
  //
  //   } else {
  //     panEnabled.current = true;
  //   }
  // });

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
    zoomSpeed={0.5}
    rotateSpeed={1}
  />
);

}