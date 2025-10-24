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
import {FC, MutableRefObject, RefObject, useEffect, useRef, useState} from "react";
import {MapSvgComponent} from "../MapSvgComponent/MapSvgComponent";
import {Gesture, GestureDetector, GestureType, PinchGesture} from "react-native-gesture-handler";
import {useAnimatedStyle, useSharedValue} from "react-native-reanimated";
import colors from "../../styles/colors";
import {font_family, font_sizes} from "../../styles/fonts";
import {MapSearchingComponent} from "../MapSearchingComponent/MapSearchingComponent";
import Svg, {Path} from "react-native-svg";
import {Hotel} from "../../shared/types";

export const MapServiceComponent: FC = () => {

  const {width: widthPhone, height: heightPhone} = useWindowDimensions()

  const [openSearch, setOpenSearch] = useState(false);
  const [selectHotel, setSelectHotel] = useState<Hotel | undefined>(undefined)

  const scaleButton = useSharedValue(1);

  const animatedStyleSearch = useAnimatedStyle(() => ({
    transform: [{ scale: scaleButton.value }],
  }));

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const startScale = useSharedValue(1);
  const scale = useSharedValue(1);
  const backgroundHotelColor = useSharedValue(colors.background_hotel);

  const pinchGesture = Gesture.Pinch()
    .onBegin((e) => {
      startScale.value = scale.value;
    })
    .onUpdate((e) => {
      const newScale = Math.min(Math.max(0.8, startScale.value * e.scale), 3);

      scale.value = newScale;
    });

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startX.value = translateX.value;
      startY.value = translateY.value;
      runOnJS(setSelectHotel)(undefined);
    })
    .onUpdate((event) => {
      translateX.value = Math.max(-200 * scale.value * scale.value, Math.min(200 * scale.value * scale.value, startX.value + event.translationX));
      translateY.value = Math.max(-200 * scale.value * scale.value, Math.min(200 * scale.value * scale.value, startY.value + event.translationY));
    })

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

  const animatedStyleMap = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value }
    ],
  }));

  const onClose = () => {
    setOpenSearch(false);
  }

  const onPress = async (ref: RefObject<Path | null>, refParent: RefObject<Svg | null>, hotelType: Hotel, deltaX: number = 0) => {
    scale.value = withTiming(3, {duration: 50})
    setSelectHotel(hotelType);
     setTimeout(async () => {
      refParent.current?.measure(async  (x, y, width, height, pageX, pageY) => {
        if (ref.current && refParent.current) {
          const bbox = ref.current.getBBox();

          translateX.value = withTiming(translateX.value - pageX - (bbox!.x * width / 17122) + widthPhone / 2 - (bbox!.width * width / 17122) / 2 + deltaX * (bbox!.width * width / 17122), {duration: 300})
          translateY.value = withTiming(translateY.value - pageY - (bbox!.y * height / 19161) + heightPhone / 2 - (bbox!.height * height / 19161) / 2, {duration: 300})
        }
      });
    }, 70)

  }

  return (
    <View style={[styles.container, {overflow: openSearch ? 'hidden' : 'visible'}]}>
      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[styles.mapView, animatedStyleMap]}>
          <MapSvgComponent onPress={onPress} typeHotelSelected={selectHotel}/>
        </Animated.View>
      </GestureDetector>
      {selectHotel && <View style={styles.hintContainer}>
        <TouchableOpacity style={styles.hintRow}>
            <Text style={styles.hintText}>Открыть</Text>
        </TouchableOpacity>
      </View>}
      <Pressable style={styles.touchContainer}
                 onPressIn={() => { scaleButton.value = withSpring(0.95); }}
                 onPressOut={() => {
                   scaleButton.value = withSpring(1);
                   setOpenSearch(true);
                 }}>
        <Animated.View style={[styles.searchButton, animatedStyleSearch]}>
          <Text style={styles.text}>Поиск</Text>
        </Animated.View>
      </Pressable>
      {openSearch && <View style={styles.overlay}></View>}
      {openSearch && <MapSearchingComponent isOpen={openSearch} onClose={onClose} />}
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
    bottom: 50,
    elevation: 8,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  hintRow: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  hintText: {
    fontSize: font_sizes.h3_main,
    fontFamily: font_family.Biform,
    color: colors.blue_main
  },
  mapView: {
    height: 1000,
    width: 1000,
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
