import {Canvas, ObjectMap, useFrame, useThree, Vector3} from "@react-three/fiber/native";
import {useGLTF} from "@react-three/drei/native";
import React, {FC, Suspense, useContext, useEffect, useRef, useState} from "react";
import {GLTF} from 'three-stdlib'
import {Model} from "./Model/Model";
import useControls from "r3f-native-orbitcontrols";
import {View} from "react-native";
import * as THREE from 'three';
import {MapObjectsContext} from "../../providers/Objects/MapObjectsContext";
import {CameraControl} from "./CameraControl/CameraControl";

type Props = {

}

export const Map3dGraphic: FC<Props> = () => {

  const [OrbitControls, events] = useControls();

  return (
    <View style={{flex: 1}} {...events}>
      <Canvas
        shadows={true}
        camera={{
          position: [0, 5, 0], // Измените Z на положительное значение
          // quaternion: [- Math.PI / 2, 0, 6 * Math.PI / 18, 0],
          rotation: [-Math.PI / 2, 0, 6 * Math.PI / 18],
          fov: 50,
          near: 0.1,
          far: 1000
        }}
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

          <CameraControl OrbitControls={OrbitControls} />

        </Suspense>
      </Canvas>
    </View>
  )

}