import {useEffect, useRef, useState} from "react";
import {GLTF} from "three-stdlib";
import {ObjectMap, useFrame, useThree} from "@react-three/fiber/native";
import {MeshStandardMaterial} from 'three'
import {useGLTF} from "@react-three/drei/native";
import * as THREE from "three";
import {SpotLight} from "../SpotLight/SpotLight";

export interface MaterialMesh extends THREE.Mesh {
  material: THREE.Material | THREE.Material[];
}

export const Model = () => {


  const model = require('../neimark-hotel-without-textures.glb');

  const modelRef = useRef<any>(null);
  const groupRef = useRef<THREE.Group>(null);

  const gltf: (GLTF & ObjectMap) | (GLTF & ObjectMap)[] = useGLTF(model);

  let gltfModel: (GLTF & ObjectMap)

  const selectedObjectRef = useRef<THREE.Object3D | null>(null);
  const allObjectsWithBuilding = useRef<MaterialMesh[]>([]);

  const spotLightRefUp = useRef<THREE.SpotLight>(null);

  const findObjectsByName = (searchString: string) => {
    const foundObjects: MaterialMesh[] = [];

    modelRef.current?.traverse((child: any) => {
      if (child.isMesh && child.name.includes(searchString)) {
        foundObjects.push(child as MaterialMesh);
      }
    });

    return foundObjects;
  };

  const handleClick = (event: any) => {
    event.stopPropagation();
    const object = event.object as MaterialMesh;

    if (object.name.includes('Building') && !object.name.includes('_')) {
      const meshes = findObjectsByName(object.name).filter((e) => e.name.includes('_'));

      selectedObjectRef.current = object;
      allObjectsWithBuilding.current = meshes;
    } else {
      selectedObjectRef.current = null;
      allObjectsWithBuilding.current = []
    }

    console.log('🎯 КЛИК! Объект:', object.name);
  };

  useFrame(() => {

    // console.log(selectedObjectRef.current);

    if (selectedObjectRef.current
      && spotLightRefUp.current
     ) {
      // Получаем bounding box объекта
      const boundingBox = new THREE.Box3().setFromObject(selectedObjectRef.current);

      // Получаем центр объекта
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      // console.log('center:'+center.y)

      // Устанавливаем позицию света

      if (!(spotLightRefUp.current.visible && spotLightRefUp.current.target === selectedObjectRef.current)) {
        spotLightRefUp.current.position.set(
          center.x,
          center.y + 3, // Над объектом на половине его высоты
          center.z
        );

        // Направляем свет на объект
        spotLightRefUp.current.target = selectedObjectRef.current;

        // Включаем свет
        spotLightRefUp.current.visible = true;
      }

    } else if (spotLightRefUp.current) {
      // Если объект не выбран, выключаем свет
      spotLightRefUp.current.visible = false;
    }
  });

  if (Array.isArray(gltf)) {
    //console.log(gltf);
    gltfModel = gltf[0]
  } else {
    //console.log(gltf);
    gltfModel = gltf;
  }

  return (
    <group ref={groupRef}>
      <primitive ref={modelRef} object={gltfModel.scene} onPointerDown={handleClick}/>


      <spotLight
        ref={spotLightRefUp}
        color={0xFFD29A}
        intensity={30}
        distance={50}
        angle={Math.PI /30}
        penumbra={0.1}
        decay={2}
        visible={false}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />

      <SpotLight MAX_AMOUNT={5} selectedBuilding={selectedObjectRef} allObjectsWithBuilding={allObjectsWithBuilding} />

    </group>
  );

}