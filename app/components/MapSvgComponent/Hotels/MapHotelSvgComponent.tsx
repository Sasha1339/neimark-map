import {Hotel, ObjectsType} from "../../../shared/types";
import colors from "../../../styles/colors";
import {G, Path, Text} from "react-native-svg";
import * as React from "react";
import {FC, useContext, useEffect, useRef, useState} from "react";
import {Animated} from "react-native";
import {HotelMapInfo} from "./types";
import {font_family} from "../../../styles/fonts";
import {svgPathBbox} from "svg-path-bbox";
import {MapObjectsContext} from "../../../providers/Objects/MapObjectsContext";

type Props = {
  data: HotelMapInfo;
  typeHotelSelected?: Hotel;
  transform: (type: Hotel) => ({ translateX: number; translateY?: undefined; rotate?: undefined; } | {
    translateY: number;
    translateX?: undefined;
    rotate?: undefined;
  } | { rotate: Animated.AnimatedInterpolation<string | number>; translateX?: undefined; translateY?: undefined; })[];
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const MapHotelSvgComponent: FC<Props> = ({data, typeHotelSelected, transform, ...props}) => {

  const ref = useRef<Path>(null);
  const objectsContext = useContext(MapObjectsContext);

  const [layout, setLayout] = useState<{width: number, height: number} | undefined>(undefined);

  useEffect(() => {
    const [x1, y1, x2, y2] = svgPathBbox(data.dProps);
    setLayout({width: x2 - x1, height: y2 - y1})
  }, []);

  useEffect(() => {
    if (ref.current) {
      objectsContext?.addHotelRef({
        idGeoJson: data.idGeoJson,
        id: data.id,
        ref: ref,
        width: layout?.width,
        height: layout?.height,
        x: data.x,
        y: data.y,
      }, ObjectsType.Hotel)
    }
  }, [ref]);


  return (
    <><G fillOpacity={typeHotelSelected === data.type || typeHotelSelected === undefined ? 1 : 0.2}
       transform={`translate(${data.x}, ${data.y})`} >
      <AnimatedPath
        ref={ref}
        fill={typeHotelSelected === data.type ? colors.white : colors.background_hotel}
        stroke={colors.color_stroke_hotel}
        strokeWidth={20}
        strokeOpacity={typeHotelSelected === data.type || typeHotelSelected === undefined ? 0.5 : 0.2}
        d={data.dProps}
        transform={transform(data.type)}

      />
      {!!layout && <Text x={layout.width / 2} y={layout.height / 2} fontSize={150} fill={colors.color_stroke_hotel}
                       fontFamily={font_family.Biform} textAnchor="middle">
        {`Корпус  ${Object.keys(Hotel).indexOf(data.type) + 1}`}
      </Text>}

    </G></>
  )


}