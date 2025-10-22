import {StyleSheet, View, Text, useWindowDimensions} from "react-native";
import Animated, {runOnJS, withTiming} from 'react-native-reanimated'
import {FC, MutableRefObject, useRef, useState} from "react";
import {MapSvgComponent} from "../MapSvgComponent/MapSvgComponent";
import colors from "../../styles/colors";
import {Gesture, GestureDetector, GestureType, PinchGesture} from "react-native-gesture-handler";
import {useAnimatedStyle, useSharedValue} from "react-native-reanimated";

export const MapServiceComponent: FC = () => {

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const startScale = useSharedValue(1);
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const [sfx, setSfx] = useState(0);
  const [sfy, setSfy] = useState(0);
  const [fx, setFx] = useState(0);
  const [fy, setFy] = useState(0);

  const pinchGesture = Gesture.Pinch()

    .onStart((e) => {
      startScale.value = scale.value;
      focalX.value = e.focalX;  // нормализация относительно центра
      focalY.value = e.focalY;
    })
    .onUpdate((e) => {

        const newScale = Math.min(Math.max(0.7, startScale.value * e.scale), 2);

        // Центрирование масштабирования относительно точки касания
        const scaleDiff = newScale / scale.value;


        // вычисляем сдвиг с учётом точки касания
        const nextX = translateX.value + (e.focalX - focalX.value) / scaleDiff;
        const nextY = translateY.value + (e.focalY - focalY.value) / scaleDiff;


        // обновляем плавно (не обязательно, но помогает убрать микродрожание)

          translateX.value = nextX;
          translateY.value = nextY;

        scale.value = newScale;



    }).onEnd(() => {
      // translateX.value = freezeFocalX.value;
      // translateY.value = freezeFocalY.value;
    })


  const panGesture = Gesture.Pan()
    .onStart((event) => {
      startX.value = translateX.value;
      startY.value = translateY.value;
    })
    .onUpdate((event) => {
      if (event.numberOfPointers === 1) {
        translateX.value = Math.max(-250, Math.min(250, startX.value + event.translationX));
        translateY.value = Math.max(-250, Math.min(250, startY.value + event.translationY));
      } else {
        // translateX.value = startX.value;
        // translateY.value = startY.value;
      }
    })
    .onEnd(() => {
      // при необходимости можно анимировать или сохранять

    });

  const composedGesture = Gesture.Simultaneous(pinchGesture, panGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value }
    ],
  }));

  return (
    <View style={styles.container}>
        <GestureDetector gesture={composedGesture}>
          <Animated.View style={[styles.mapView, animatedStyle]}>
            <MapSvgComponent />
          </Animated.View>
        </GestureDetector>
      <View style={{position: 'absolute', top: 0}}>
        <Text>{`sfx=${sfx}`}</Text>
        <Text>{`sfy=${sfy}`}</Text>
        <Text>{`fx=${fx}`}</Text>
        <Text>{`fy=${fy}`}</Text>
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapView: {
    height: 1000,
    width: 1000,
  }

})