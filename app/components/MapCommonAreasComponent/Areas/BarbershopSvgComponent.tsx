import {Component, FC} from "react";
import Svg, {Circle, ClipPath, Defs, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {StyleSheet} from "react-native";
import {wrapText} from "../data";
import {font_family} from "../../../styles/fonts";



export const BarbershopSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, deltaX = 0, title = '', ...props }) => {

  return (
    <G fill="none" transform={`translate(${x + deltaX}, ${y})`}>
      <Circle cx={200} cy={200} r={200} fill="#D0D0D0" />
      <Circle
        cx={200}
        cy={200}
        r={197.5}
        stroke="#000"
        strokeOpacity={0.5}
        strokeWidth={5}
      />
      <G clipPath="url(#a)">
        <Path
          fill="#000"
          d="M349.008 190.289s-9.165 17.588-26.349 16.333c-17.203-1.254-35.532-41.464-69.928-54.035-34.388-12.57-52.735 7.535-52.735 7.535s-18.338-20.105-52.716-7.535c-34.387 12.571-52.725 52.781-69.919 54.035-17.193 1.255-26.367-16.333-26.367-16.333s-5.73 15.079 10.327 36.438c16.04 21.36 60.736 30.341 89.401 21.359 32.081-10.052 49.274-35.174 49.274-35.174s16.05 26.385 49.292 35.174c28.977 7.673 73.371.001 89.411-21.359 16.04-21.359 10.309-36.438 10.309-36.438Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M50 50h300v300H50z" />
        </ClipPath>
      </Defs>
      <Text x={180} y={500} fontSize={100} fill="#000" fontFamily={font_family.Biform} textAnchor="middle">
        {title}
      </Text>
    </G>

  )

}



