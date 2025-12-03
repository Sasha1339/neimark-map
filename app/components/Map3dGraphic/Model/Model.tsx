import {
  forwardRef, memo,
  RefObject,
  useCallback,
  useContext,
  useImperativeHandle, useMemo,
  useRef,
} from "react";
import * as THREE from "three";
import {SpotLight} from "../SpotLight/SpotLight";
import {DescriptionText} from "../DescriptionText/DescriptionText";
import {MarkerText} from "../MarkerText/MarkerText";
import {RotationText} from "../RotationtText/RotationText";
import {data} from "../__mock__/data";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";
import {PrimitiveElement} from "../ PrimitiveElement/PrimitiveElement";
import {useModelInit} from "../hooks/useModelInit";
import {RotationTextAreas} from "../RotationtTextAreas/RotationTextAreas";
import {SelectedObjectContext} from "../../../providers/SelectedObjectContext/SelectedObjectContext";

export interface MaterialMesh extends THREE.Mesh {
  material: THREE.Material | THREE.Material[];
}

type Props = {
  primitiveRef: RefObject<any>
}

export const Model = memo(forwardRef<any, Props>(({primitiveRef, ...props}, ref) => {

  const modelRef = useRef<any>(null);

  const MAX_AMOUNT = useMemo(() => 3, []);

  const {
  groupRef,
    rotationRef,
    spotLightRef,
    descriptionTextRef,
    rotationAreasRef,
    markerTextRef,
    gltfModel,
    allObjectsWithBuilding,
    allBuilding,
} = useModelInit('');

  const spotLightRefUp = useRef<THREE.SpotLight>(null);
  const objectContext = useContext(MapObjectsContext);
  const selectedObjectContext = useContext(SelectedObjectContext);

  const isObjectSelected = () => {
    spotLightRef.current.showSpotLight();
    descriptionTextRef.current.showDescriptionText();
    markerTextRef.current.showMarkerText();
    rotationRef.current.hide();
    rotationAreasRef.current.hideAreas();
    turnOnSpotLight();
    objectContext.cameraControlRef.current.lookAtBuildingPosition();
  }

  useImperativeHandle(ref, () => ({

    resetSelectedObject: (isEnv: boolean) => {
      selectedObjectContext.selectedObjectRef.current = null;
      allObjectsWithBuilding.current = [];
      objectContext?.setSelectedObjects(null)
      !isEnv && rotationRef.current.show();
      isEnv && rotationAreasRef.current.showAreas();
      spotLightRef.current.hideSpotLight();
      descriptionTextRef.current.hideDescriptionText();
      markerTextRef.current.hideMarkerText();
      turnOffSpotLight();
      objectContext.cameraControlRef.current.lookAtOldPosition();
    },

    turnOnPlacesMode: () => {

      rotationRef.current.hide();
      rotationAreasRef.current.showAreas();
      modelRef.current?.traverse((child: any) => {
        if (child.isMesh && (child as THREE.Mesh).material && child.name.includes('Building') && !child.name.includes('_')) {
          const material = Array.isArray((child as THREE.Mesh).material)
            ? (child as THREE.Mesh).material
            : [(child as THREE.Mesh).material];

          if (!Array.isArray(material)) return;
          material.forEach((material) => {
            if (material && !Array.isArray(material)) {
              // Просто делаем материал прозрачным, текстуры остаются
              material.opacity = 0.2;
              material.transparent = true;

              // Важно для корректного отображения прозрачности:
              material.depthWrite = false; // Улучшает blending прозрачных объектов
              material.alphaTest = 0.1; // Убирает артефакты на краях

              // Для правильного смешивания прозрачных объектов
              material.blending = THREE.NormalBlending;

              material.needsUpdate = true;
            }
          });
        }
      });

    },

    turnOnBuildingsMode: () => {

      rotationRef.current.show();
      rotationAreasRef.current.hideAreas();
      modelRef.current?.traverse((child: any) => {
        if (child.isMesh && (child as THREE.Mesh).material && child.name.includes('Building') && !child.name.includes('_')) {
          const material = Array.isArray((child as THREE.Mesh).material)
            ? (child as THREE.Mesh).material
            : [(child as THREE.Mesh).material];

          if (!Array.isArray(material)) return;
          material.forEach((material) => {
            if (material && !Array.isArray(material)) {
              // Просто делаем материал прозрачным, текстуры остаются
              material.opacity = 1;
              material.transparent = false;

              // Важно для корректного отображения прозрачности:
              material.depthWrite = true; // Включаем обратно
              material.alphaTest = 0; // Отключаем alphaTesх

              // Для правильного смешивания прозрачных объектов
              material.blending = THREE.NormalBlending;

              material.needsUpdate = true;
            }
          });
        }
      });

    }
  }), [gltfModel]);


  const findObjectsByName = (searchString: string) => {
    const foundObjects: MaterialMesh[] = [];

    modelRef.current?.traverse((child: any) => {
      if (child.isMesh && child.name.includes(searchString)) {
        foundObjects.push(child as MaterialMesh);
      }
    });

    return foundObjects;
  };

  const handleClick = useCallback((object: any) => {

    if (!selectedObjectContext.selectedObjectRef.current && Object.keys(data).includes(object.name)) {


      if (object.name.includes('Building') && !object.name.includes('_')) {
        const meshes = findObjectsByName(object.name).filter((e) => e.name.includes('_'));

        selectedObjectContext.selectedObjectRef.current = object;
        selectedObjectContext.selectedObjectRef.current = object;
        allObjectsWithBuilding.current = meshes;
        objectContext?.setSelectedObjects(data[object.name] ? object.name : null)

        isObjectSelected();
      }

      //console.log('🎯 КЛИК! Объект:', object.name);
    }

  }, []);

  const turnOffSpotLight = () => {
    if (spotLightRefUp.current) {
      spotLightRefUp.current.visible = false;
    }
  }

  const turnOnSpotLight = () => {

    if (selectedObjectContext.selectedObjectRef.current
      && spotLightRefUp.current
     ) {
      const boundingBox = new THREE.Box3().setFromObject(selectedObjectContext.selectedObjectRef.current);

      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      if (!(spotLightRefUp.current.visible && spotLightRefUp.current.target === selectedObjectContext.selectedObjectRef.current)) {
        spotLightRefUp.current.position.set(
          center.x,
          center.y + 2,
          center.z
        );

        spotLightRefUp.current.target = selectedObjectContext.selectedObjectRef.current;

        spotLightRefUp.current.visible = true;
      }

    }
  }

  return (
    <group ref={groupRef}>
      <PrimitiveElement ref={primitiveRef} gltfModel={gltfModel} modelRef={modelRef} handleClick={handleClick} />

      <spotLight
        ref={spotLightRefUp}
        color={0xFFD29A}
        intensity={10}
        distance={50}
        angle={Math.PI / 15}
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


      <SpotLight ref={spotLightRef} MAX_AMOUNT={MAX_AMOUNT} allObjectsWithBuilding={allObjectsWithBuilding} />
      <DescriptionText ref={descriptionTextRef} MAX_AMOUNT={MAX_AMOUNT} allObjectsWithBuilding={allObjectsWithBuilding} />
      <MarkerText ref={markerTextRef} MAX_AMOUNT={MAX_AMOUNT} allObjectsWithBuilding={allObjectsWithBuilding} />
      <RotationText ref={rotationRef} allBuildings={allBuilding} />
      <RotationTextAreas ref={rotationAreasRef} allBuildings={allBuilding} />

    </group>
  );

}));