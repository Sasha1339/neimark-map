import {FC, PropsWithChildren, useContext, useEffect, useRef} from "react";
import {PropsAreas} from "../../MapCommonAreasComponent/Areas/types";
import {useAnimatedProps, useSharedValue, withTiming} from "react-native-reanimated";
import {Circle, G, Path, Text} from "react-native-svg";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";
import {ObjectsType} from "../../../shared/types";
import {font_family} from "../../../styles/fonts";
import colors from "../../../styles/colors";
import {usePosition} from "../hooks/usePosition";

type Props = {
  opacity: number;
}

export const UserSvgComponent: FC<Props> = ({opacity}) => {

  const position = usePosition();


  return (
    <G fill="none">
      <Circle cx={200} cy={200} fill={colors.white} opacity={opacity} />
      <Circle
        cx={200}
        cy={200}
        stroke={colors.mainRed}
        opacity={opacity}
        strokeOpacity={opacity}
      />
    </G>

  )

}