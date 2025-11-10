import * as Location from 'expo-location';
import {useEffect, useState} from "react";
import {LocationObjectCoords} from "expo-location/src/Location.types";
import {transformPoints} from "../data";

export const usePosition = () => {
  const [position, setPosition] = useState<LocationObjectCoords | null>(null);

  const [coords, setCoords] = useState<{x: number, y: number}>({x: 0, y: 0});

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
      console.log(coords)
    }

  }, [position]);

  return position;
}