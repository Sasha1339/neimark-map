import {FC, useContext, useEffect, useRef} from "react";

import {MapNavigatorContext} from "../../../providers/Navigator/MapNavigatorContext";
import {Path} from "react-native-svg";
import Animated, { useSharedValue, withTiming, useAnimatedProps } from 'react-native-reanimated';
import {svgPathProperties} from "svg-path-properties";

const AnimatedPath = Animated.createAnimatedComponent(Path);


type Props = {
  d?: string,
  opacity?: number
}


export const RouteComponent: FC<Props> = ({ d, opacity }) => {
  const progress = useSharedValue(1);
  const navigatorContext = useContext(MapNavigatorContext);

  let lengthPath = useSharedValue(0);

  useEffect(() => {
    if (d) {
      progress.value = 1;
      lengthPath.value = withTiming(getPathLength(d), { duration: 10 });
      progress.value = withTiming(0, { duration: 2000 });
    }
  }, [d]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: lengthPath.value * progress.value,
    strokeDasharray: lengthPath.value
  }));

  function getPathLength(d: string): number {
    const properties = new svgPathProperties(d);
    return properties.getTotalLength();
  }

  return (
    <AnimatedPath
      animatedProps={animatedProps}
      ref={navigatorContext?.pathRouteElement}
      opacity={opacity}
      d={d}
      stroke="#FF0000"
      strokeWidth={50}
      fill="none"
    />
  );
}