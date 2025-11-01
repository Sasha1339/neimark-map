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
import {MapSearchingComponent} from "../MapSearchingComponent/MapSearchingComponent";
import Svg, {Path} from "react-native-svg";
import {Hotel, ObjectsMapRefCoords} from "../../shared/types";
import {MapFloorComponent} from "../MapFloorComponent/MapFloorComponent";
import {MapObjectsContext} from "../../providers/Objects/MapObjectsContext";
import {hotelsData, mainHeight, mainWidth} from "../MapSvgComponent/data";
import {MapNavigatorContext} from "../../providers/Navigator/MapNavigatorContext";
import {MapNavigatorComponent} from "../MapNavigatorComponent/MapNavigatorComponent";

export const MapServiceComponent: FC = () => {

  const {width: widthPhone, height: heightPhone} = useWindowDimensions()

  const [openSearch, setOpenSearch] = useState(false);
  const [openFloors, setOpenFloors] = useState<Hotel | undefined>(undefined);

  const objectsContext = useContext(MapObjectsContext);
  const navigatorContext = useContext(MapNavigatorContext);

  const scaleButton = useSharedValue(1);

  const animatedStyleSearch = useAnimatedStyle(() => ({
    transform: [{scale: scaleButton.value}],
  }));

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);
  const allowed = useSharedValue(0);
  const startScale = useSharedValue(1);
  const scale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onBegin((e) => {
      startScale.value = scale.value;

    })
      .onStart((e) => {
        focalX.value = e.focalX;
        focalY.value = e.focalY;
      })
    .onUpdate((e) => {
      const newScale = Math.min(Math.max(0.6, startScale.value * e.scale), 3);

      scale.value = newScale;
    })
    ;

  const clearSelection = () => {
    objectsContext?.setSelectedObjects({hotel: undefined, areas: undefined});
  }

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startX.value = translateX.value;
      startY.value = translateY.value;
      runOnJS(clearSelection)();

    })
    .onUpdate((event) => {
      translateX.value = Math.max(-200 * scale.value * scale.value, Math.min(200 * scale.value * scale.value, startX.value + event.translationX));
      translateY.value = Math.max(-400 * scale.value * scale.value, Math.min(400 * scale.value * scale.value, startY.value + event.translationY));
    })

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

  const animatedStyleMap = useAnimatedStyle(() => ({
    // transformOrigin: [focalX.value, focalY.value, 0],
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

  const onPress = (info: ObjectsMapRefCoords, refParent: RefObject<Svg | null>) => {
    scale.value = withTiming(3, {duration: 50})
    setTimeout(async () => {
      refParent.current?.measure(async (x, y, width, height, pageX, pageY) => {
        if (info.ref.current && refParent.current) {
          const bbox = info.ref.current.getBBox();

          translateX.value = withTiming(translateX.value - pageX - (info!.x * width / 17122) + widthPhone / 2 - (bbox!.width * width / 17122) / 2, {duration: 300})
          translateY.value = withTiming(translateY.value - pageY - (info!.y * height / 19161) + heightPhone / 2 - (bbox!.height * height / 19161) / 2, {duration: 300})
        }
      });
    }, 350)

  }

  const setRouteHotel = (type: 'from' | 'to', hotel?: Hotel) => {

    const selectedId = hotelsData.find((e) => e.type === hotel)?.id;

    if (type === 'from') {
      const from = objectsContext?.refs.hotels.find((e) => e.id === selectedId);
      from && navigatorContext?.setRoute([from.idGeoJson, navigatorContext?.route[1]])
    } else {
      const to = objectsContext?.refs.hotels.find((e) => e.id === selectedId);
      to && navigatorContext?.setRoute([navigatorContext?.route[0], to.idGeoJson])
    }
  }

  return (
    <View style={[styles.container, {overflow: openSearch ? 'hidden' : 'visible'}]}>
      <MapNavigatorComponent />
      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[styles.mapView, animatedStyleMap]}>
          <MapSvgComponent onPress={onPress}/>
        </Animated.View>
      </GestureDetector>
      {objectsContext?.selectedObject.hotel && <View style={styles.hintContainer}>
        <TouchableOpacity style={styles.hintRow} onPress={() => setOpenFloors(objectsContext.selectedObject.hotel)}>
          <Text style={styles.hintText}>Открыть</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.hintRow} onPress={() => setRouteHotel('from', objectsContext.selectedObject.hotel)}>
          <Text style={styles.hintText}>Маршрут отсюда</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.hintRow} onPress={() => setRouteHotel('to', objectsContext.selectedObject.hotel)}>
          <Text style={styles.hintText}>Маршрут сюда</Text>
        </TouchableOpacity>
      </View>}

      {objectsContext?.selectedObject.areas && <>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{objectsContext.selectedObject.areas}</Text>
        </View>
        <View style={styles.hintContainer}>
          <TouchableOpacity style={styles.hintRow}>
            <Text style={styles.hintText}>Маршрут отсюда</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hintRow}>
            <Text style={styles.hintText}>Маршрут сюда</Text>
          </TouchableOpacity>
        </View>
      </>}
      <Pressable style={styles.touchContainer}
                 onPressIn={() => {
                   scaleButton.value = withSpring(0.95);
                 }}
                 onPressOut={() => {
                   scaleButton.value = withSpring(1);
                   setOpenSearch(true);
                 }}>
        <Animated.View style={[styles.searchButton, animatedStyleSearch]}>
          <Text style={styles.text}>Поиск</Text>
        </Animated.View>
      </Pressable>
      {(openSearch || openFloors) && <View style={styles.overlay}></View>}
      {openSearch && <MapSearchingComponent isOpen={openSearch} onClose={onCloseSearch}/>}
      {!!openFloors && <MapFloorComponent hotel={openFloors} isOpen={!!openFloors} onClose={onCloseFloor}/>}
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
