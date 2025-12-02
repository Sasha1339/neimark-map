import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable, GestureResponderEvent, Dimensions
} from "react-native";

import {FC, useContext, useEffect, useRef, useState} from "react";
import colors from "../../styles/colors";
import {font_family, font_sizes} from "../../styles/fonts";
import {Hotel} from "../../shared/types";
import {MapFloorComponent} from "../MapFloorComponent/MapFloorComponent";
import {MapObjectsContext} from "../../providers/Objects/MapObjectsContext";
import {Map3dGraphic} from "../Map3dGraphic/Map3dGraphic";
import {GestureDetectorProvider} from "react-native-screens/gesture-handler";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {data} from "../Map3dGraphic/__mock__/data";
import Slider from "@react-native-community/slider";


export const MapServiceComponent: FC = () => {

  const insets = useSafeAreaInsets();
  const {width, height} = useWindowDimensions();
  const graphicRef = useRef<any>(null);

  const [openSearch, setOpenSearch] = useState(false);
  const [openFloors, setOpenFloors] = useState<string | null>(null);
  const [isEnv, setIsEnv] = useState(false);

  const objectsContext = useContext(MapObjectsContext);

  const turnOnPlacesMode = () => {
    graphicRef.current.placesMode();
    setIsEnv(true)
  }

  const turnOnBuildingMode = () => {
    graphicRef.current.buildingsMode();
    setIsEnv(false)
  }

  const resetContext = () => {
    graphicRef.current.reset();
    objectsContext.rotationAngleRef.current = 0;
  }


  const onCloseFloor = () => {
    setOpenFloors(null);
  }


  return (
    <View style={[styles.container]}>

      <View style={[styles.mapView, {height: height, width: width, transform: [{translateY: -insets.top}]}]}>
        <Map3dGraphic ref={graphicRef}/>
      </View>

      {!objectsContext?.selectedObject && <View style={styles.headerButton}>
        <View style={styles.closeButton}>

          {isEnv ? <Text style={styles.text} onPress={() => turnOnBuildingMode()}>Режим корпусов</Text> : <Text style={styles.text} onPress={() => turnOnPlacesMode()}>Режим окружения</Text>}
        </View>

      </View>}

      {objectsContext?.selectedObject && <View style={styles.header}>
        <View style={styles.closeButton}>

          <Text style={styles.text} onPress={() => resetContext()}>{`«${data[objectsContext?.selectedObject].name}»`}</Text>
        </View>
        <View style={styles.closeButton}>

        <Text style={[styles.text, {color: colors.mainRed}]} onPress={() => resetContext()}>Закрыть</Text>
      </View>
      </View>}

      {objectsContext?.selectedObject && <>
        <View style={styles.searchButton}>
          <Text style={styles.text}>Вращать корпус</Text>
          <Slider
            style={{width: '100%', height: 40}}
            onValueChange={(e) => objectsContext.rotationAngleRef.current = e}
            minimumValue={0}
            maximumValue={Math.PI * 2}
            step={Math.PI / 64}
            minimumTrackTintColor={colors.background_hotel}
            maximumTrackTintColor={colors.blue_main}
          />

          <View
            style={{
              borderBottomColor: colors.blue_main,
              borderBottomWidth: StyleSheet.hairlineWidth,
              width: '100%'
            }}
          />

          <View style={styles.buttons}>

            <TouchableOpacity onPress={() => setOpenFloors(objectsContext.selectedObject)}>
              <Text style={styles.text}>Открыть этажи</Text>
            </TouchableOpacity>

          </View>


        </View>
      </>}


      {(openSearch || openFloors) &&
        <View style={[styles.overlay, {height: height, width: width, transform: [{translateY: -insets.top}]}]}></View>}
      {!!openFloors && <MapFloorComponent hotel={openFloors} isOpen={!!openFloors} onClose={onCloseFloor}/>}

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
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
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  touchContainer: {
    position: 'absolute',
    top: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    ...StyleSheet.absoluteFillObject,
    width: '90%',
    top: 0,
    bottom: 'auto',
    left: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerButton: {
    ...StyleSheet.absoluteFillObject,
    width: '90%',
    top: 5,
    bottom: 'auto',
    left: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  closeButton: {
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
    gap: 10,
    alignItems: 'center'
  },
  searchButton: {
    ...StyleSheet.absoluteFillObject,
    bottom: 0,
    left: '5%',
    width: '90%',
    top: 'auto',
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
    gap: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: font_sizes.h3_main,
    fontFamily: font_family.Biform,
    color: colors.blue_main,
    opacity: 1
  }

})
