import {Component, FC} from "react";
import Svg, {Circle, ClipPath, Defs, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {StyleSheet} from "react-native";
import {wrapText} from "../data";
import {font_family} from "../../../styles/fonts";



export const ShopSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, deltaX = -600, title = '', ...props }) => {

  return (
    <G fill="none" transform={`translate(${x}, ${y})`}>
      <Circle cx={200} cy={200} r={200} fill="#CBDEB9" />
      <Circle
        cx={200}
        cy={200}
        r={197.5}
        stroke="#489400"
        strokeOpacity={0.5}
        strokeWidth={5}
      />
      <Path
        fill="#489400"
        fillRule="evenodd"
        d="M326.721 334.32H71.671v-225h255.05v225ZM87.713 318.249H310.68V125.392H87.713v192.857Z"
        clipRule="evenodd"
      />
      <Path
        fill="#489400"
        fillRule="evenodd"
        d="M272.179 174.678h-16.041V97.535c0-23.036-18.714-41.786-41.706-41.786h-29.943c-22.992 0-41.706 18.75-41.706 41.786v77.143h-16.041V97.535c0-32.143 25.665-57.857 57.747-57.857h29.943c32.082 0 57.747 25.714 57.747 57.857v77.143Z"
        clipRule="evenodd"
      />

      <Text x={180} y={500} fontSize={100} fill="#000" fontFamily={font_family.Biform} textAnchor="middle">
        {title}
      </Text>
    </G>

  )

}
