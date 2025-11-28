import {Canvas, ObjectMap, useFrame} from "@react-three/fiber/native";
import {useGLTF} from "@react-three/drei/native";
import React, {FC, Suspense, useRef} from "react";
import {GLTF} from 'three-stdlib'
import {Model} from "./Model/Model";
import useControls from "r3f-native-orbitcontrols";
import {View} from "react-native";

type Props = {

}

export const Map3dGraphic: FC<Props> = () => {

  const [OrbitControls, events] = useControls();

  return (
    <View style={{flex: 1}} {...events}>
      <Canvas
        onCreated={(state) => {
          const _gl = state.gl.getContext()
          const pixelStorei = _gl.pixelStorei.bind(_gl)
          _gl.pixelStorei = function (...args) {
            const [parameter] = args
            switch (parameter) {
              case _gl.UNPACK_FLIP_Y_WEBGL:
                return pixelStorei(...args)
            }
          }
        }}>
        <ambientLight intensity={3}/>
        <directionalLight position={[10, 10, 5]} intensity={0.5}/>
        <Suspense>
          <Model/>

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minPolarAngle={0}
            maxPolarAngle={8 * Math.PI / 18}
            panSpeed={0}
            zoomSpeed={0.5}
            rotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </View>
  )

}