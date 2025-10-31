import {Component, FC} from "react";
import Svg, {Circle, ClipPath, Defs, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {StyleSheet} from "react-native";
import {wrapText} from "../data";
import {font_family} from "../../../styles/fonts";



export const RepairSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, deltaX = 0, title = '', ...props }) => {

  return (
    <G fill="none" transform={`translate(${x + deltaX}, ${y})`}>
      <Circle cx={200} cy={200} r={200} fill="#E0F9FF" />
      <Circle
        cx={200}
        cy={200}
        r={197.5}
        stroke="#006C66"
        strokeOpacity={0.5}
        strokeWidth={5}
      />
      <Path
        fill="#006C66"
        d="M262.586 350H137.43a25.807 25.807 0 0 1-25.782-25.781V75.781A25.813 25.813 0 0 1 137.43 50h125.156a25.81 25.81 0 0 1 25.781 25.781V324.22A25.81 25.81 0 0 1 262.586 350ZM137.42 64.062a11.719 11.719 0 0 0-11.718 11.72v248.437a11.717 11.717 0 0 0 11.718 11.719h125.157a11.718 11.718 0 0 0 11.718-11.719V75.781a11.717 11.717 0 0 0-11.718-11.719H137.42Z"
      />
      <Path
        fill="#006C66"
        d="M232.531 89.16h-65.062a7.032 7.032 0 0 1 0-14.062h65.062a7.032 7.032 0 1 1 0 14.062Z"
      />
      <Text x={180} y={500} fontSize={100} fill="#000" fontFamily={font_family.Biform} textAnchor="middle">
        {title}
      </Text>
    </G>

  )

}
