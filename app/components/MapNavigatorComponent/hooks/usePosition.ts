import * as Location from 'expo-location';
import {useEffect, useState} from "react";
import {LocationObjectCoords} from "expo-location/src/Location.types";
import {transformPoints} from "../data";
import {useAnimatedProps, useSharedValue, withTiming} from "react-native-reanimated";

export const usePosition = () => {
  const [position, setPosition] = useState<LocationObjectCoords | null>(null);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Permission denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setPosition(location.coords);

      void Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 1 },
        (loc) => setPosition(loc.coords)
      );
    })();
  }, []);

  useEffect(() => {
    if (position) {
      const coords = transformPoints([position.longitude, position.latitude]);
      translateX.value = withTiming(coords[0], {duration: 500});
      translateY.value = withTiming(coords[1], {duration: 500});
    }

  }, [position]);

    const animatedProps = useAnimatedProps(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
        ],
    }));

  return {x: translateX, y: translateY, animatedProps};
}