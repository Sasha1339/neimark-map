import {FC, useEffect, useState} from "react";
import {
  LayoutChangeEvent, NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import colors from "../../styles/colors";
import Animated, {runOnJS, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {font_family, font_sizes} from "../../styles/fonts";
import {Gesture, GestureDetector, NativeViewGestureHandler} from "react-native-gesture-handler";

const mockResults = ['Большие овраги 8', 'Большие овраги 12к1', 'Большие овраги 12к2', 'Большие овраги 12к2', 'Большие овраги 12к2', 'Большие овраги 12к2', 'Большие овраги 12к2', 'Большие овраги 12к2', 'Большие овраги 12к2', 'Большие овраги 12к2', 'Большие овраги 12к2', 'Большие овраги 12к2', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3', 'Большие овраги 12к3']

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const MapSearchingComponent: FC<Props> = ({isOpen, onClose, ...props}) => {

  const translateY = useSharedValue(0);
  const startY = useSharedValue(0);
  const [height, setHeight] = useState(0);
  const scrollY = useSharedValue(0);

  const onLayout = (e: LayoutChangeEvent) => {
    const h = e.nativeEvent.layout.height;
    setHeight(h);

    // стартовое положение панели — за экраном вниз
    translateY.value = h;

    if (isOpen) {
      // плавно выезжаем
      translateY.value = withTiming(0, { duration: 300 });
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  const nativeGesture = Gesture.Native().disallowInterruption(true);

  const panGesture = Gesture.Pan()
    .enabled(scrollY.value <= 0)
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
        translateY.value = withTiming(height, { duration: 300 }, () => {
          runOnJS(onClose)();
        });
      } else {
        translateY.value = withTiming(0, { duration: 300 });
      }
    })
    .simultaneousWithExternalGesture(nativeGesture);



  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
    <Animated.View style={[styles.main, animatedStyle]} onLayout={onLayout}>
      <View style={styles.container}>
        <View style={styles.touchBorderContainer}>
          <View style={styles.touchBorder}></View>
        </View>
        <View style={styles.searchContainer}>
          <TextInput placeholder={'Что ищите?'} style={styles.searchInput}></TextInput>
        </View>
        <View style={styles.resultContainer}>
          <View style={styles.descriptionResult}>
            <Text style={styles.textResult}>Результаты поиска</Text>
          </View>
          <GestureDetector gesture={nativeGesture} >
          <ScrollView onScroll={onScroll} style={styles.textResultsContainer}
                      contentContainerStyle={styles.textResultsContainerScroll}>
            {
              mockResults.map((e, i) => (
                <TouchableOpacity key={i} style={styles.textContainer}>
                  <Text style={styles.textResult}>{e}</Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
          </GestureDetector>
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
    backgroundColor: colors.white,
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
    borderBottomWidth: 1,
    borderColor: colors.blue_main,
    fontSize: font_sizes.h3_main,
    fontFamily: font_family.Biform
  },
  resultContainer: {
    height: '85%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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