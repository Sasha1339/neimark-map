import {Component, FC} from "react";
import Svg, {Circle, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {StyleSheet} from "react-native";
import {wrapText} from "../data";
import {font_family} from "../../../styles/fonts";



export const ITSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, deltaX = 200, title = '', ...props }) => {

  return (
    <G fill="none" transform={`translate(${x + deltaX}, ${y})`}>
      <Circle cx={200} cy={200} r={200} fill="#D7D3FF" />
      <Circle
        cx={200}
        cy={200}
        r={197.5}
        stroke="#5500FF"
        strokeOpacity={0.5}
        strokeWidth={5}
      />
      <Path
        fill="#5500FF"
        fillOpacity={0.5}
        d="M127.12 261.8V155.4h-38.6v-17.2h95.2v17.2h-38.2v106.4h38V279h-95.2v-17.2h38.8Zm190.63-123.6v17.2h-50.8V279h-18.4V155.4h-50.8v-17.2h120Z"
      />
      <Text x={180} y={500} fontSize={100} fill="#000" fontFamily={font_family.Biform} textAnchor="middle">
        {title}
      </Text>
    </G>

  )

}
