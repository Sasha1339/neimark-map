import {StyleSheet, View, Text, useWindowDimensions} from "react-native";
import Animated, {runOnJS, withTiming} from 'react-native-reanimated'
import {FC, MutableRefObject, useRef, useState} from "react";
import {MapSvgComponent} from "../MapSvgComponent/MapSvgComponent";
import {Gesture, GestureDetector, GestureType, PinchGesture} from "react-native-gesture-handler";
import {useAnimatedStyle, useSharedValue} from "react-native-reanimated";

export const MapServiceComponent: FC = () => {

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const startScale = useSharedValue(1);
  const scale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onBegin((e) => {
      startScale.value = scale.value;
    })
    .onUpdate((e) => {
      const newScale = Math.min(Math.max(0.8, startScale.value * e.scale), 2);

      scale.value = newScale;
    });

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startX.value = translateX.value;
      startY.value = translateY.value;
    })
    .onUpdate((event) => {
      translateX.value = Math.max(-200 * scale.value * scale.value, Math.min(200 * scale.value * scale.value, startX.value + event.translationX));
      translateY.value = Math.max(-200 * scale.value * scale.value, Math.min(200 * scale.value * scale.value, startY.value + event.translationY));
    })

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

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
