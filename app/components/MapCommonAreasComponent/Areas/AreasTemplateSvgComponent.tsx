import {FC, PropsWithChildren, useContext, useEffect, useRef} from "react";
import {PropsAreas} from "./types";
import {Circle, G, Path, Text} from "react-native-svg";
import {font_family} from "../../../styles/fonts";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";
import {ObjectsType} from "../../../shared/types";
import Animated, {useAnimatedProps, useSharedValue, withTiming} from "react-native-reanimated";


type PropsTemplate = {
  mainColor?: string,
  backgroundColor?: string,
}

const AnimateCircle = Animated.createAnimatedComponent(Circle);

export const AreasTemplateSvgComponent: FC<PropsWithChildren & PropsTemplate & PropsAreas> = ({children, opacity = 1, mainColor = '#fff', backgroundColor = '#000', x = 0, y = 0, title = '', id, ...props }) => {
  const radius = useSharedValue(200);
  const strokeWidth = useSharedValue(5);

  const ref = useRef<Path>(null);

  const objectsContext = useContext(MapObjectsContext);

  useEffect(() => {
    if (ref.current) {
      objectsContext?.addHotelRef({
        id: id,
        ref: ref,
        width: 400,
        height: 400,
        x: x,
        y: y,
      }, ObjectsType.Areas)
    }
  }, [ref]);

  useEffect(() => {
    if (objectsContext?.selectedObject.areas === title) {
      radius.value = withTiming(300, { duration: 500 });
      strokeWidth.value = withTiming(50, { duration: 500 });
    } else {
      radius.value = withTiming(200, { duration: 200 });
      strokeWidth.value = withTiming(5, { duration: 200 });
    }
  }, [objectsContext?.selectedObject.areas]);

  const animatedPropsBack = useAnimatedProps(() => ({
    r: radius.value,
  }))

  const animatedPropsStroke = useAnimatedProps(() => ({
    strokeWidth: strokeWidth.value,
    r: radius.value,
  }))


  return (
    <G fill="none" transform={`translate(${x}, ${y})`}>
      <AnimateCircle animatedProps={animatedPropsBack} ref={ref} cx={200} cy={200} fill={backgroundColor} opacity={opacity} />
      <AnimateCircle
        animatedProps={animatedPropsStroke}
        cx={200}
        cy={200}
        stroke={mainColor}
        opacity={opacity}
        strokeOpacity={opacity}
      />

      {children}

      {objectsContext?.selectedObject.areas !== title && <Text fillOpacity={opacity} x={180} y={500} fontSize={100} fill="#000" fontFamily={font_family.Biform} textAnchor="middle">
        {title}
      </Text>}
    </G>

  )

}

