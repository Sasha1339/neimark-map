import React, {FC, FunctionComponent, ReactNode, useEffect, useRef, useState} from "react";
import {Alert, LayoutChangeEvent, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../../styles/colors";
import Animated, {runOnJS, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {font_family, font_sizes} from "../../styles/fonts";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import {Hotel} from "../../shared/types";
import {getNumberFloorByType, getNumberHotelByType, getSvgFloorsByType} from "./data";
import {Floor} from "./types";
import {SvgProps} from "react-native-svg";
import {HotelMapInfo} from "../MapServiceComponent/types";
import {hotelsData} from "../MapServiceComponent/data";
import {data} from "../Map3dGraphic/__mock__/data";



type Props = {
  hotel: string;
  isOpen: boolean;
  onClose: () => void;
}

export const MapFloorComponent: FC<Props> = ({isOpen, hotel, onClose, ...props}) => {

  const translateY = useSharedValue(0);
  const startY = useSharedValue(0);
  const [height, setHeight] = useState(0);
  const scrollY = useSharedValue(0);

  const [currentFloor, setCurrentFloor] = useState<Floor>(Floor.FIRST);
  const [currentFloorSvg, setCurrentFloorSvg] = useState<ReactNode>(<></>);

  const allFloors = useRef<Partial<Record<Floor, ReactNode>>>(getSvgFloorsByType(hotel)).current;
  const amountFloors = useRef<string[]>(Object.keys(getSvgFloorsByType(hotel))).current;

  useEffect(() => {
    if (amountFloors.length === 0 || !amountFloors) {
      Alert.alert(
        'Ошибка',
        'Для данного корпуса этажность не загружена'
      );
      onClose();
    }

    setCurrentFloorSvg(allFloors[currentFloor]);
  }, [currentFloor]);

  const onLayout = (e: LayoutChangeEvent) => {
    const h = e.nativeEvent.layout.height;
    setHeight(h);

    translateY.value = h;

    if (isOpen) {
      translateY.value = withTiming(0, {duration: 300});
    }
  };

  const panGesture = Gesture.Pan()
    .onStart((e) => {
      startY.value = translateY.value;
    })
    .onUpdate((event) => {
      if (scrollY.value <= 0) {
        translateY.value = Math.max(0, startY.value + event.translationY);
      }
    })
    .onEnd(() => {
      if (translateY.value > height / 3) {
        translateY.value = withTiming(height, {duration: 300}, () => {
          runOnJS(onClose)();
        });
      } else {
        translateY.value = withTiming(0, {duration: 300});
      }
    })


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.main, animatedStyle]} onLayout={onLayout}>
        <View style={styles.container}>
          <View style={styles.touchBorderContainer}>
            <View style={styles.touchBorder}></View>
          </View>
          <View style={styles.searchContainer}>
            <Text style={styles.searchInput}>{data[hotel].name}</Text>
          </View>
          <View style={styles.resultContainer}>
            {currentFloorSvg}
          </View>
          <View style={styles.floorContainer}>
            <Text style={styles.searchInput}>Этажи</Text>
            <View style={styles.buttonContainer}>
              {amountFloors.map((e, i) => (
                <TouchableOpacity key={i} style={[styles.button, (e as Floor) === currentFloor && styles.buttonActive]} onPress={() => setCurrentFloor(e as Floor)}>
                  <Text style={[styles.buttonText, (e as Floor) === currentFloor && styles.buttonTextActive]}>{getNumberFloorByType(e as Floor)}</Text>
                </TouchableOpacity>))
              }
            </View>

          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  )

}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
    position: 'absolute',
    top: 50,
    backgroundColor: colors.background_main,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    transform: [{translateY: '100%'}],
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  touchBorderContainer: {
    height: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchBorder: {
    height: 5,
    width: 60,
    borderRadius: 10,
    backgroundColor: colors.blue_main,
    opacity: 0.5
  },
  searchContainer: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    width: '90%',
    height: '60%',
    fontSize: font_sizes.h1_main,
    fontFamily: font_family.Biform,
    textAlign: 'center'
  },
  resultContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  floorContainer: {
    height: '20%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonContainer: {

    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 10,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowOpacity: 0.2,
    borderRadius: 4
  },
  buttonText: {
    fontSize: font_sizes.h1_main,
    fontFamily: font_family.Biform,
    textAlign: 'center'
  },
  buttonTextActive: {
    color: colors.white
  },
  button: {
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  buttonActive: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    backgroundColor: colors.blue_main,
    elevation: 10,
    color: colors.white,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowOpacity: 0.2,
    borderRadius: 4
  },
  textResultsContainer: {
    width: '100%',
    height: '90%'
  },
  textResultsContainerScroll: {
    width: '100%',
    boxSizing: "border-box",
    paddingBottom: 100,
    paddingHorizontal: 20
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    boxSizing: 'border-box',
    alignItems: 'flex-start',
  },
  descriptionResult: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textResult: {
    fontSize: font_sizes.p1_main,
    fontFamily: font_family.Biform,
    color: colors.blue_main,
  },

})