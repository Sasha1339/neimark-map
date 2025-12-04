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
import MapView, {Marker, Polygon, Polyline} from "react-native-maps";
import {lightMapStyle} from "../../shared/constants/const";
import {default as MapFeatures} from "./map/test.json";


const overlayArea = [
  { latitude: 56.315042, longitude: 43.979515 },
  { latitude: 56.314889, longitude: 43.979960 },
  { latitude: 56.314906, longitude: 43.980223 },
  { latitude: 56.314555, longitude: 43.980293 },
  { latitude: 56.314503, longitude: 43.980459 },
  { latitude: 56.314456, longitude: 43.980735 },
  { latitude: 56.314166, longitude: 43.981225 },
  { latitude: 56.313951, longitude: 43.981816 },
  { latitude: 56.313750, longitude: 43.982456 },
  { latitude: 56.314645, longitude: 43.9830366 },
  { latitude: 56.315112, longitude: 43.981934 },
  { latitude: 56.315183, longitude: 43.981821 },
  { latitude: 56.315469, longitude: 43.981495 },
  { latitude: 56.315739, longitude: 43.981388 },
  { latitude: 56.315615, longitude: 43.980365 },
  { latitude: 56.315524, longitude: 43.980059 },
  { latitude: 56.315053, longitude: 43.979490 },
  { latitude: 56.315042, longitude: 43.979515 },
];

const mapsObjects = MapFeatures.features.filter(feature => feature.geometry.type === 'Polygon');
const lineObjects = MapFeatures.features.filter(feature => feature.geometry.type === 'LineString');

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

  const getPolygonCenter = (coordinates: {latitude: number, longitude: number}[]) => {
    if (coordinates.length === 0) return null;

    let sumLat = 0;
    let sumLng = 0;

    coordinates.forEach(coord => {
      sumLat += coord.latitude;
      sumLng += coord.longitude;
    });

    return {
      latitude: sumLat / coordinates.length,
      longitude: sumLng / coordinates.length
    };
  };

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
              fillColor="#DDEFBF" // Белый фон
              strokeColor="#66D300"
              zIndex={1} // Поверх других элементов
            />
            {lineObjects.map((e, i) => (
              <Polyline
                key={i}
                coordinates={(e.geometry.coordinates as number[][]).map((e) => ({latitude: e[1], longitude: e[0]}))}
                strokeColor="#fff"
                strokeWidth={10}       // Ширина дорожки (основной параметр!)
                zIndex={1} // Поверх других элементов
              />
            ))}
            {mapsObjects.map((e, i) => (
              <Polygon
                key={i}
                coordinates={(e.geometry.coordinates as number[][][])[0].map((e) => ({latitude: e[1], longitude: e[0]}))}
                fillColor="#EAE9E8" // Белый фон
                strokeColor="#8F8F8E"
                zIndex={2} // Поверх других элементов
              />
            ))}
            {mapsObjects.map((e, i) => {

              const polygonCoords = (e.geometry.coordinates as number[][][])[0].map((coord) =>
                ({latitude: coord[1], longitude: coord[0]})
              );

              const center = getPolygonCenter(polygonCoords);

              console.log(center);

              // Получаем название из свойств GeoJSON (если есть)
              const label = e.properties?.name || `Объект ${i + 1}`;

              if (center)

              return(
                  <Marker
                    key={`marker-${i}`}
                    coordinate={center}
                    zIndex={5}
                    tracksViewChanges={false} // Оптимизация производительности
                  >
                    <View style={styles.labelContainer}>
                      <Text style={styles.labelText}>{label}</Text>
                    </View>
                  </Marker>
            )})}
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
  labelContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#8F8F8E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  labelText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
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
