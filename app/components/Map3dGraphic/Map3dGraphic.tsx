import {Canvas, ObjectMap, useFrame} from "@react-three/fiber/native";
import {useGLTF} from "@react-three/drei/native";
import React, {FC, Suspense, useRef} from "react";
import {GLTF} from 'three-stdlib'
import {Model} from "./Model/Model";
import useControls from "r3f-native-orbitcontrols";
import {View} from "react-native";
import {THREE} from "expo-three";

type Props = {

}

export const Map3dGraphic: FC<Props> = () => {

  const [OrbitControls, events] = useControls();

  return (
    <View style={{flex: 1}} {...events}>
      <Canvas
        shadows={true}
        camera={{ position: [5, 5, 5] }}
        gl={{
          powerPreference: "low-power",
          antialias: false, // что-то из них сделало экран темным
          alpha: false,
        }}
        performance={{ min: 0.5 }}
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
          state.gl.setClearColor(0xadc57b)
        }}>
        <ambientLight intensity={2}/>
        {/*<directionalLight position={[10, 10, 5]} intensity={0.5}/>*/}
        <Suspense>
          <Model/>

          <OrbitControls
            enablePan={true}
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
        </Suspense>
      </Canvas>
    </View>
  )

}