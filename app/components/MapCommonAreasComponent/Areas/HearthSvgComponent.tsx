import {Component, FC} from "react";
import Svg, {Circle, ClipPath, Defs, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {StyleSheet} from "react-native";
import {wrapText} from "../data";
import {font_family} from "../../../styles/fonts";



export const HearthSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, deltaX = -200, title = '', ...props }) => {

  return (
    <G fill="none" transform={`translate(${x + deltaX}, ${y})`}>
      <Circle cx={200} cy={200} r={200} fill="#E2D0FF" />
      <Circle
        cx={200}
        cy={200}
        r={197.5}
        stroke="#FF0062"
        strokeOpacity={0.5}
        strokeWidth={5}
      />
      <Path
        fill="#FF0062"
        d="M275 72.86c-31.247 0-54.891 18.337-75 37.499-19.162-20.334-43.753-37.5-75-37.5-44.006 0-75 37.838-75 79.097 0 22.135 9.066 38.082 18.994 53.053l116.559 139.744c13.088 13.847 15.553 13.847 28.641 0l116.821-139.744C342.687 190.038 350 174.091 350 151.956c0-41.259-30.994-79.097-75-79.097Zm37.5 128.268L200 335.359 87.5 200.575c-13.453-18.703-18.75-31.322-18.75-48.619 0-32.231 23.016-61.247 56.25-61.519 27.338-.225 58.322 27.694 75 48.741 16.238-20.316 47.662-48.74 75-48.74 32.353 0 56.25 29.287 56.25 61.518 0 17.297-4.191 30.853-18.75 49.172Z"
      />
      <Text x={180} y={500} fontSize={100} fill="#000" fontFamily={font_family.Biform} textAnchor="middle">
        {title}
      </Text>
    </G>

  )

}
