import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Animated} from "react-native";
import {pathsCenter, pathsRotate} from "../data";
import {Hotel} from "../../../shared/types";

export const useAnimationTransform = (typeHotelSelected?: Hotel) => {

  const [prevType, setPrevType] = useState<Hotel | undefined>(undefined)

  const rotations = useRef<Record<Hotel, Animated.Value>>({
    [Hotel.ONE]: new Animated.Value(0),
    [Hotel.TWO]: new Animated.Value(0),
    [Hotel.THREE]: new Animated.Value(0),
    [Hotel.FOUR]: new Animated.Value(0),
    [Hotel.FIVE]: new Animated.Value(0),
    [Hotel.SIX]: new Animated.Value(0),
    [Hotel.SEVEN]: new Animated.Value(0),
    [Hotel.EIGHT]: new Animated.Value(0),
    [Hotel.NINE]: new Animated.Value(0),
    [Hotel.TEN]: new Animated.Value(0),
    [Hotel.ELEVEN]: new Animated.Value(0),
    [Hotel.TWELVE]: new Animated.Value(0),
    [Hotel.THIRTEEN]: new Animated.Value(0),
    [Hotel.FOURTEEN]: new Animated.Value(0),
    [Hotel.FIFTEEN]: new Animated.Value(0),
    [Hotel.SIXTEEN]: new Animated.Value(0),
    [Hotel.SEVENTEEN]: new Animated.Value(0),
    [Hotel.EIGHTEEN]: new Animated.Value(0)
  }).current;

  useEffect(() => {
    Object.entries(rotations).forEach(([key, anim]) => {
      Animated.timing(anim, {
        toValue: key === typeHotelSelected ? pathsRotate[key as Hotel] : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }, []);

  useEffect(() => {
    if (prevType) {
      Animated.timing(rotations[prevType], {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    if (typeHotelSelected) {
      Animated.timing(rotations[typeHotelSelected], {
        toValue: pathsRotate[typeHotelSelected],
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    setPrevType(typeHotelSelected);

  }, [typeHotelSelected]);

  const rotate = (type: Hotel) =>
    rotations[type].interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });

  const transform =
    useCallback((type: Hotel) => {
      return [
        { translateX: pathsCenter[type].x },
        { translateY: pathsCenter[type].y },
        { rotate: rotate(type) },
        { translateX: -pathsCenter[type].x },
        { translateY: -pathsCenter[type].y },
      ];
    }, [typeHotelSelected]);

  return transform;

}