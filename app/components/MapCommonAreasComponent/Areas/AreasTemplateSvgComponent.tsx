import {FC, PropsWithChildren, useContext, useEffect, useRef} from "react";
import {PropsAreas} from "./types";
import {Circle, G, Path, Text} from "react-native-svg";
import {font_family} from "../../../styles/fonts";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";
import {ObjectsType} from "../../../shared/types";

type PropsTemplate = {
  mainColor?: string,
  backgroundColor?: string,
}

export const AreasTemplateSvgComponent: FC<PropsWithChildren & PropsTemplate & PropsAreas> = ({children, opacity = 1, mainColor = '#fff', backgroundColor = '#000', x = 0, y = 0, title = '', id, ...props }) => {

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

  return (
    <G fill="none" transform={`translate(${x}, ${y})`}>
      <Circle ref={ref} cx={200} cy={200} r={200} fill={backgroundColor} opacity={opacity} />
      <Circle
        cx={200}
        cy={200}
        r={197.5}
        stroke={mainColor}
        opacity={opacity}
        strokeOpacity={opacity}
        strokeWidth={5}
      />

      {children}

      <Text opacity={opacity} x={180} y={500} fontSize={100} fill="#000" fontFamily={font_family.Biform} textAnchor="middle">
        {title}
      </Text>
    </G>

  )

}

