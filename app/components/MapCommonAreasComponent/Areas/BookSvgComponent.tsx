import {Component, FC} from "react";
import Svg, {Circle, ClipPath, Defs, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {StyleSheet} from "react-native";
import {wrapText} from "../data";
import {font_family} from "../../../styles/fonts";



export const BookSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, deltaX = 600, title = '', ...props }) => {

  return (
    <G fill="none" transform={`translate(${x + deltaX}, ${y})`}>
      <Circle cx={200} cy={200} r={200} fill="#FEE" />
      <Circle
        cx={200}
        cy={200}
        r={197.5}
        stroke="#00A493"
        strokeOpacity={0.5}
        strokeWidth={5}
      />
      <Path
        fill="#00A493"
        d="M294.137 75H129.391c-17.016 0-30.86 13.844-30.86 30.859v188.282c0 17.016 13.844 30.859 30.859 30.859h164.746a7.323 7.323 0 0 0 7.324-7.324V82.324A7.322 7.322 0 0 0 294.137 75ZM113.18 105.859c0-8.938 7.273-16.21 16.211-16.21h157.421v173.633H129.391a30.675 30.675 0 0 0-16.211 4.615V105.859Zm16.211 204.493c-8.939 0-16.211-7.272-16.211-16.211 0-8.939 7.272-16.211 16.211-16.211h157.421v32.422H129.391Z"
      />
      <Path
        fill="#00A493"
        d="M247.075 122.07h-94.141a7.326 7.326 0 0 0 0 14.649h94.141a7.325 7.325 0 0 0 0-14.649Z"
      />
      <Text x={180} y={500} fontSize={100} fill="#000" fontFamily={font_family.Biform} textAnchor="middle">
        {title}
      </Text>
    </G>

  )

}
