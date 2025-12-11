import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable, GestureResponderEvent
} from "react-native";
import Animated, {runOnJS, withSpring, withTiming} from 'react-native-reanimated'
import {FC, MutableRefObject, RefObject, useContext, useEffect, useRef, useState} from "react";
import {MapSvgComponent} from "../MapSvgComponent/MapSvgComponent";
import {Gesture, GestureDetector, GestureType, PinchGesture} from "react-native-gesture-handler";
import {useAnimatedStyle, useSharedValue} from "react-native-reanimated";
import colors from "../../styles/colors";
import {font_family, font_sizes} from "../../styles/fonts";
import {Hotel, ObjectsMapRefCoords} from "../../shared/types";
import {MapFloorComponent} from "../MapFloorComponent/MapFloorComponent";
import {MapObjectsContext} from "../../providers/Objects/MapObjectsContext";
import {hotelsData, mainHeight, mainWidth, svgHeight, svgWidth} from "../MapSvgComponent/data";
import {useRouterHotel} from "./hooks/useRouterHotel";

export const MapServiceComponent: FC = () => {

  const {
    translateX,
    translateY,
    startX,
    startY,
    focalX,
    focalY,
    startScale,
    scale,
    onPress,
    clearSelection,
    setRouteHotel,
    onCenterWindowFocal,
    onDefaultWindowFocal
  } = useRouterHotel()

  const [openSearch, setOpenSearch] = useState(false);
  const [openFloors, setOpenFloors] = useState<Hotel | undefined>(undefined);

  const objectsContext = useContext(MapObjectsContext);

  const allowedPan = useSharedValue(true);

  useEffect(() => {
    if (objectsContext?.selectedObject.hotel) {
      setTimeout(() => {
        setOpenFloors(objectsContext?.selectedObject.hotel)
      }, 700)
    }
  }, [objectsContext?.selectedObject.hotel]);


  const pinchGesture = Gesture.Pinch()
    .onBegin((e) => {
      startScale.value = scale.value;
      runOnJS(clearSelection)();
      allowedPan.value = false;
    })
      .onStart((e) => {

      })
    .onUpdate((e) => {
      const newScale = Math.min(Math.max(0.5, startScale.value * e.scale), 3);

      scale.value = newScale;
    })
    .onEnd(() => {
      allowedPan.value = true;
    });




  const panGesture = Gesture.Pan()
    .onStart((e) => {
      startX.value = translateX.value;
      startY.value = translateY.value;
      runOnJS(clearSelection)();

    })
    .onUpdate((event) => {



      if (scale.value > 0.8) {
        runOnJS(onCenterWindowFocal)();
      } else {
        runOnJS(onDefaultWindowFocal)();
      }

      if (!allowedPan.value) {
        return;
      }


      if (mainWidth / 2 - (startX.value + event.translationX) / scale.value > 0 && mainWidth / 2 - (startX.value + event.translationX) / scale.value < mainWidth) {
        translateX.value = startX.value + event.translationX / (scale.value > 0.8 ? scale.value : 1);
      } else if (mainWidth / 2 - (startX.value + event.translationX) / scale.value  <= 0) {
        translateX.value = mainWidth / 2 * scale.value;
      } else if (mainWidth / 2 - (startX.value + event.translationX) / scale.value >= mainWidth) {
        translateX.value = -mainWidth / 2 * scale.value;
      }
      if (mainHeight / 2 - (startY.value + event.translationY) / scale.value > 0 && mainHeight / 2 - (startY.value + event.translationY) / scale.value < mainHeight) {
        translateY.value = startY.value + event.translationY / (scale.value > 0.8 ? scale.value : 1);
      } else if (mainHeight / 2 - (startY.value + event.translationY) / scale.value  <= 0) {
        translateY.value = mainHeight / 2 * scale.value
      } else if (mainHeight / 2 - (startY.value + event.translationY) / scale.value >= mainHeight) {
        translateY.value = -mainHeight / 2 * scale.value;
      }


    });

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

  const animatedStyleMap = useAnimatedStyle(() => ({
    transformOrigin: [focalX.value, focalY.value, 0],
    transform: [
      {translateX: translateX.value},
      {translateY: translateY.value},
      {scale: scale.value}
    ],
  }));

  const onCloseSearch = () => {
    setOpenSearch(false);
  }

  const onCloseFloor = () => {
    setOpenFloors(undefined);
  }


  return (
    <View style={[styles.container, {overflow: openSearch ? 'hidden' : 'visible'}]}>
      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[styles.mapView, animatedStyleMap]}>
          <MapSvgComponent onPress={onPress}/>
        </Animated.View>
      </GestureDetector>

      {objectsContext?.selectedObject.areas && <>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{objectsContext.selectedObject.areas}</Text>
        </View>
      </>}
      {openFloors && <View style={styles.overlay}></View>}
      {!!openFloors && <MapFloorComponent hotel={openFloors} data={hotelsData} isOpen={!!openFloors} onClose={onCloseFloor}/>}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  hintContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    bottom: 30,
    gap: 2,
    elevation: 8,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  titleContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 130,
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  hintRow: {
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  hintText: {
    fontSize: font_sizes.h3_main,
    fontFamily: font_family.Biform,
    color: colors.blue_main
  },
  titleText: {
    fontSize: font_sizes.h1_main,
    fontFamily: font_family.Biform,
    color: colors.black
  },
  mapView: {
    height: mainHeight,
    width: mainWidth,
  },
  touchContainer: {
    position: 'absolute',
    top: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    boxSizing: 'border-box',
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 10,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  text: {
    fontSize: font_sizes.h3_main,
    fontFamily: font_family.Biform,
    color: colors.blue_main,
    opacity: 0.5
  }

})
