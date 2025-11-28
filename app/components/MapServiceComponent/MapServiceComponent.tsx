import {
  StyleSheet,
  View,
  Text,
  Pressable
} from "react-native";
import Animated, {withSpring} from 'react-native-reanimated'
import {FC, useEffect, useRef, useState} from "react";
import {useAnimatedStyle, useSharedValue} from "react-native-reanimated";
import colors from "../../styles/colors";
import {font_family, font_sizes} from "../../styles/fonts";
import {MapSearchingComponent} from "../MapSearchingComponent/MapSearchingComponent";
import {mainHeight, mainWidth} from "../MapSvgComponent/data";
import {MapNavigatorComponent} from "../MapNavigatorComponent/MapNavigatorComponent";
import MapView, {Polygon} from "react-native-maps";
import {lightMapStyle} from "../../shared/constants/const";
import {default as MapFeatures} from "./map/test.json";

const overlayArea = [
  { latitude: 56.315852, longitude: 43.981306 },
  { latitude: 56.315671, longitude: 43.980914 },
  { latitude: 56.315689, longitude: 43.980277 },
  { latitude: 56.314821, longitude: 43.979054 },
  { latitude: 56.313958, longitude: 43.981762 },
  { latitude: 56.314846, longitude: 43.982508 },
  { latitude: 56.315132, longitude: 43.981879 },
  { latitude: 56.315476, longitude: 43.981472 },
];

const mapsObjects = MapFeatures.features.filter(feature => feature.geometry.type === 'Polygon')

export const MapServiceComponent: FC = () => {

  const [openSearch, setOpenSearch] = useState(false);
  const mapRef = useRef<MapView>(null);

  const scaleButton = useSharedValue(1);

  const animatedStyleSearch = useAnimatedStyle(() => ({
    transform: [{scale: scaleButton.value}],
  }));

  useEffect(() => {
    // Принудительное приближение после загрузки
    mapRef.current?.animateToRegion({
      latitude: 56.314931,
      longitude: 43.980980,
      latitudeDelta: 0.01,  // Сильное приближение
      longitudeDelta: 0.01,
    }, 500);
  }, []);

  const onCloseSearch = () => {
    setOpenSearch(false);
  }

  return (
    <View style={[styles.container, {overflow: openSearch ? 'hidden' : 'visible'}]}>
      <MapNavigatorComponent />
        <Animated.View style={[styles.mapView]}>
          <MapView ref={mapRef} style={styles.map}
                   pitchEnabled={true}
                   rotateEnabled={true}
                   showsBuildings={false}
                   userInterfaceStyle="light"
                   customMapStyle={lightMapStyle}
                   initialRegion={
                     {
                       latitude: 56.314931,
                       longitude: 43.980980,
                       latitudeDelta: 0.001,
                       longitudeDelta: 0.001
                     }

                   }
          >
            <Polygon
              coordinates={overlayArea}
              fillColor="#f5f5f5" // Белый фон
              strokeColor="transparent"
              zIndex={1} // Поверх других элементов
            />
            {mapsObjects.map((e, i) => (
              <Polygon
                key={i}
                coordinates={(e.geometry.coordinates as number[][][])[0].map((e) => ({latitude: e[1], longitude: e[0]}))}
                fillColor="#ff0000" // Белый фон
                strokeColor="transparent"
                zIndex={1} // Поверх других элементов
              />
            ))}
          </MapView>
        </Animated.View>

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
      {(openSearch) && <View style={styles.overlay}></View>}
      {openSearch && <MapSearchingComponent isOpen={openSearch} onClose={onCloseSearch}/>}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: '100%',
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
