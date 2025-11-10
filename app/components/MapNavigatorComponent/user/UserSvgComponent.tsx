import {FC, PropsWithChildren, useContext, useEffect, useRef} from "react";
import {PropsAreas} from "../../MapCommonAreasComponent/Areas/types";
import Animated, {useAnimatedProps, useSharedValue, withTiming} from "react-native-reanimated";
import {Circle, G, Path, Text} from "react-native-svg";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";
import {ObjectsType} from "../../../shared/types";
import {font_family} from "../../../styles/fonts";
import colors from "../../../styles/colors";
import {usePosition} from "../hooks/usePosition";

const AnimateG = Animated.createAnimatedComponent(G);

type Props = {
  opacity: number;
}

export const UserSvgComponent: FC<Props> = ({opacity}) => {

  const {animatedProps} = usePosition();


  return (
    <AnimateG animatedProps={animatedProps} fill={'none'}>
      <Circle cx={200} cy={200} r={200} fill={colors.white} opacity={opacity} />
      <Circle
        cx={200}
        cy={200}
        r={200}
        stroke={colors.mainRed}
        opacity={opacity}
        strokeWidth={20}
        strokeOpacity={opacity}
      />

        <Circle cx={200} cy={200} r={100} fill={colors.mainRed} opacity={opacity} />
    </AnimateG>

  )

}