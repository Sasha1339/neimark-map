import {GLTF} from "three-stdlib";
import {ObjectMap} from "@react-three/fiber/native";
import {useGLTF} from "@react-three/drei/native";
import {useEffect, useRef, useState} from "react";
import {MaterialMesh} from "../Model/Model";
import * as THREE from "three";
import {data} from "../__mock__/data";
import {endEvent} from "react-native/Libraries/Performance/Systrace";

export const useModelInit = (src: string) => {

  const groupRef = useRef<THREE.Group>(null);
  const rotationRef = useRef<any>(null);
  const rotationAreasRef = useRef<any>(null);
  const spotLightRef = useRef<any>(null);
  const descriptionTextRef = useRef<any>(null);
  const markerTextRef = useRef<any>(null);

  const model = require('../neimark-hotel-lite.glb');

  const gltf: (GLTF & ObjectMap) | (GLTF & ObjectMap)[] = useGLTF(model);

  const [gltfModel, setGltfModel] =useState<(GLTF & ObjectMap) | null>(null);

  const allObjectsWithBuilding = useRef<MaterialMesh[]>([]);
  const allBuilding = useRef<MaterialMesh[]>([]);

  const setColorForCommonAreas = () => {
    for (let building in data) {

      for (let enter in data[building].places) {

        allBuilding.current.filter(e => `${building}_${enter}` === e.name).forEach(e => {

          if (e.material) {
            const materials = Array.isArray(e.material) ? e.material : [e.material];



            materials.forEach((material) => {
              if (material && !Array.isArray(material)) {

                (material as THREE.MeshStandardMaterial).color.set(new THREE.Color(data[building].places[enter].color))

                material.needsUpdate = true;
              }
            });
          }

        });


      }

    }


  }

  useEffect(() => {
    if (gltf) {
      if (Array.isArray(gltf)) {
        //console.log(gltf);
        gltf[0].scene.traverse((child) => {
          child.castShadow = true;  // объект отбрасывает тень
          child.receiveShadow = true; // объект получает тень
        });
        setGltfModel(gltf[0]);
      } else {
        //console.log(gltf);
        gltf.scene.traverse((child) => {
          child.castShadow = true;  // объект отбрасывает тень
          child.receiveShadow = true; // объект получает тень
          if (child.name.includes('Building')) {
            allBuilding.current.push(child as MaterialMesh)
          }
        });
        setColorForCommonAreas();
        setGltfModel(gltf);
      }
    }
  }, [gltf])


  return {gltfModel, groupRef, rotationAreasRef, rotationRef, spotLightRef, descriptionTextRef, markerTextRef, allObjectsWithBuilding, allBuilding};

}