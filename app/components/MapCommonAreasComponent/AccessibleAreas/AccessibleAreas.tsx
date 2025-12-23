import Animated, {useAnimatedProps, useSharedValue, withTiming} from "react-native-reanimated";
import {Circle, G, Path, Rect, Text} from "react-native-svg";
import {FC, PropsWithChildren, useContext, useEffect, useRef} from "react";
import {AccessibleAreas, PropsAreas} from "../Areas/types";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";
import {ObjectsType} from "../../../shared/types";
import {font_family} from "../../../styles/fonts";

type Props = {
  areas: AccessibleAreas
}

export const AccessibleAreasSvgComponent: FC<Props> = ({areas, ...props }) => {



  return (
    <G fill="none" transform={`translate(${areas.x}, ${areas.y})`}>
      {!areas.d && areas.deg ? <Rect
        fill="#f6b2b2"
        stroke="#ff0000"
        strokeWidth={20}
        rx={40}
        width={areas.width}
        height={areas.height}
        transform={`rotate(${-1 * areas.deg})`}
      /> : <Path fill="#f6b2b2"
                 stroke="#ff0000" strokeWidth={20} d={areas.d} />}
    </G>

  )

}