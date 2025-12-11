import {useCallback, useContext, useEffect, useMemo} from "react";
import {MapNavigatorContext} from "../../../providers/Navigator/MapNavigatorContext";
import {hotelsData, mainHeight, mainWidth, svgHeight, svgWidth} from "../../MapSvgComponent/data";
import {runOnJS, useSharedValue, withTiming} from "react-native-reanimated";
import {Hotel, ObjectsMapRefCoords} from "../../../shared/types";
import {useWindowDimensions} from "react-native";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";

export const useRouterHotel = () => {

  const {width: widthPhone, height: heightPhone} = useWindowDimensions()

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const focalX = useSharedValue(mainWidth / 2);
  const focalY = useSharedValue(mainHeight / 2);
  const startScale = useSharedValue(1);
  const scale = useSharedValue(1);

  const navigatorContext = useContext(MapNavigatorContext);
  const objectsContext = useContext(MapObjectsContext);

  useEffect(() => {

    if (navigatorContext?.pathCoords && navigatorContext?.parentSvgElement.current?.measure) {

      const pathElement = navigatorContext.pathRouteElement.current;

      navigatorContext?.parentSvgElement?.current?.measure(async (x, y, width, height, pageX, pageY) => {

        if (pathElement) {

          const dFocalX = - focalX.value + mainWidth / 2;
          const dFocalY = - focalY.value + mainHeight / 2;

          focalX.value = mainWidth / 2;
          focalY.value = mainHeight / 2;

          translateX.value = withTiming(0, {duration: 1000})
          translateY.value = withTiming(0, {duration: 1000})

          scale.value = withTiming(0.5, {duration: 1000})
        }
      });
    }
  }, [navigatorContext?.pathCoords, navigatorContext?.parentSvgElement]);

  const onPress = useCallback((info: ObjectsMapRefCoords) => {
    navigatorContext?.parentSvgElement.current?.measure(async (x, y, width, height, pageX, pageY) => {
      if (info.ref.current) {
        const bbox = info.ref.current.getBBox();

        const dFocalX = - focalX.value + info!.x * mainWidth / svgWidth + (bbox!.width * mainWidth / svgWidth) / 2;
        const dFocalY = - focalY.value + info!.y * mainHeight / svgHeight + (bbox!.height * mainHeight / svgHeight) / 2;

        focalX.value = info!.x * mainWidth / svgWidth + (bbox!.width * mainWidth / svgWidth) / 2;
        focalY.value = info!.y * mainHeight / svgHeight + (bbox!.height * mainHeight / svgHeight) / 2;

        translateX.value = withTiming(translateX.value + dFocalX * (scale.value - 1) - pageX - (info!.x * width / svgWidth) + widthPhone / 2 - (bbox!.width * width / svgWidth) / 2, {duration: 300})
        translateY.value = withTiming(translateY.value + dFocalY * (scale.value - 1) - pageY - (info!.y * height / svgHeight) + heightPhone / 2 - (bbox!.height * height / svgHeight) / 2, {duration: 300})

        scale.value = withTiming(3, {duration: 1000})
      }
    });
  }, [navigatorContext?.parentSvgElement, focalX, focalY, translateX, translateY, scale]);

  const clearSelection =  useCallback(() => {
    objectsContext?.setSelectedObjects({hotel: undefined, areas: undefined});
  }, [objectsContext?.setSelectedObjects])

  const onRoutePointSelected = useCallback(() => {
    scale.value = withTiming(1, {duration: 1000})
    runOnJS(clearSelection)();
  }, [scale, clearSelection]);

  const setRouteHotel = useCallback((type: 'from' | 'to', hotel?: Hotel) => {

    const selectedId = hotelsData.find((e) => e.type === hotel)?.id;

    if (type === 'from') {
      const from = objectsContext?.refs.hotels.find((e) => e.id === selectedId);

      from && navigatorContext?.setRoute([from.idGeoJson, navigatorContext?.route[1]])
      if (!!navigatorContext?.route[1]) {
        runOnJS(clearSelection)();
        return;
      }

    } else {
      const to = objectsContext?.refs.hotels.find((e) => e.id === selectedId);
      to && navigatorContext?.setRoute([navigatorContext?.route[0], to.idGeoJson])
      if (!!navigatorContext?.route[0]) {
        runOnJS(clearSelection)();
        return;
      }
    }

    onRoutePointSelected();


  }, [onRoutePointSelected, clearSelection, navigatorContext?.setRoute, navigatorContext?.route, objectsContext?.refs.hotels])

  const onCenterWindowFocal = useCallback(() => {
    navigatorContext?.parentSvgElement.current?.measure(async (x, y, width, height, pageX, pageY) => {
      focalX.value = (-pageX + widthPhone / 2) / scale.value;
      focalY.value = (-pageY + heightPhone / 2) / scale.value;
    })
  }, [focalX, focalY, navigatorContext?.parentSvgElement, scale])

  const onDefaultWindowFocal = useCallback(() => {
      focalX.value = mainWidth / 2;
      focalY.value = mainHeight / 2;
  }, [focalX, focalY])

  return {translateY, translateX, focalY, focalX, scale, startScale, startX, startY, onPress, setRouteHotel, clearSelection, onCenterWindowFocal, onDefaultWindowFocal}

}