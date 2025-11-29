import {useEffect, useRef, useState} from "react";
import {GLTF} from "three-stdlib";
import {ObjectMap, useFrame, useThree} from "@react-three/fiber/native";
import {MeshStandardMaterial} from 'three'
import {useGLTF} from "@react-three/drei/native";
import * as THREE from "three";

interface MaterialMesh extends THREE.Mesh {
  material: THREE.Material | THREE.Material[];
}

export const Model = () => {


  const model = require('../neimark-hotel-without-textures.glb');

  const modelRef = useRef<any>(null);

  const gltf: (GLTF & ObjectMap) | (GLTF & ObjectMap)[]= useGLTF(model);

  let gltfModel: (GLTF & ObjectMap)

  const [selectedObject, setSelectedObject] = useState<THREE.Object3D | null>(null);

  const handleClick = (event: any) => {
    event.stopPropagation();
    const object = event.object as MaterialMesh;

    console.log('🎯 КЛИК! Объект:', object.name);
    // locationContext[1](object ? object.name : null);
    // console.log(new Date())
    setSelectedObject(object);
  };

  if (Array.isArray(gltf)) {
    //console.log(gltf);
    gltfModel = gltf[0]
  } else {
    //console.log(gltf);
    gltfModel = gltf;
  }

  // useEffect(() => {
  //   if (modelRef.current) {
  //     modelRef.current.addEventListener('click', handleClick);
  //   }
  // }, [modelRef.current])

  // const { gl } = useThree();
  //
  // const fixAndroidTextures = (scene: any, gl: any) => {
  //   scene.traverse((child: any) => {
  //     if (child.isMesh && child.material) {
  //       const materials = Array.isArray(child.material) ? child.material : [child.material];
  //
  //       materials.forEach((material: any) => {
  //         material.needsUpdate = true;
  //
  //         if (material.map) {
  //           // Устанавливаем правильный colorSpace
  //           material.map.colorSpace = THREE.SRGBColorSpace;
  //           material.map.flipY = false;
  //           material.map.needsUpdate = true;
  //
  //           // Принудительно инициализируем текстуру в WebGL
  //           gl.initTexture(material.map);
  //         }
  //       });
  //     }
  //   });
  // };


  // useEffect(() => {
  //   if (gltfModel && gltfModel.scene) {
  //     fixAndroidTextures(gltfModel.scene, gl);
  //   }
  // }, [gltfModel, gl]);

  return <primitive ref={modelRef} object={gltfModel.scene} onPointerDown={handleClick} onDoubleClick={() => {
    console.log('Pointer up!');
  }} />;

}