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


export const MapServiceComponent: FC = () => {

  const insets = useSafeAreaInsets();
  const {width, height} = useWindowDimensions();

  const [openSearch, setOpenSearch] = useState(false);
  const [openFloors, setOpenFloors] = useState<string | null>(null);

  const objectsContext = useContext(MapObjectsContext);

  const resetContext = () => {
    objectsContext.selectedObjectRef.current = null;
    objectsContext.setSelectedObjects(null)
  }


  const onCloseFloor = () => {
    setOpenFloors(null);
  }


  return (
    <View style={[styles.container]}>

        <View style={[styles.mapView, {height: height, width: width, transform: [{translateY: -insets.top}]}]}>
          <Map3dGraphic />
        </View>

      {objectsContext?.selectedObject && <View style={styles.closeButton}>
        <Text style={styles.text}  onPress={() => resetContext()}>Закрыть</Text>
      </View>}

      {objectsContext?.selectedObject && <View style={styles.searchButton}>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => setOpenFloors(objectsContext.selectedObject)}>
            <Text style={styles.text}>Этажи</Text>
          </TouchableOpacity>

        </View>

        <View
          style={{
            borderBottomColor: colors.blue_main,
            borderBottomWidth: StyleSheet.hairlineWidth,
            width: '100%'
          }}
        />
          <Text style={styles.text}>{data[objectsContext?.selectedObject].name}</Text>
        </View>}


        {(openSearch || openFloors) && <View style={[styles.overlay, {height: height, width: width, transform: [{translateY: -insets.top}]}]}></View>}
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
  closeButton: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    right: '5%',
    left: 'auto',
    bottom: 'auto',
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
