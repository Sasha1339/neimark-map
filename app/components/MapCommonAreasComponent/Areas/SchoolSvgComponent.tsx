import {Component, FC} from "react";
import Svg, {Circle, ClipPath, Defs, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {StyleSheet} from "react-native";
import {wrapText} from "../data";
import {font_family} from "../../../styles/fonts";



export const SchoolSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, deltaX = 300, title = '', ...props }) => {

  return (
    <G fill="none" transform={`translate(${x}, ${y})`}>
        <Circle cx={200} cy={200} r={200} fill="#CEF5FF" />
        <Circle
          cx={200}
          cy={200}
          r={197.5}
          stroke="#002B7A"
          strokeOpacity={0.5}
          strokeWidth={5}
        />
      <G clipPath="url(#a)">
        <Path
          stroke="#002B7A"
          strokeWidth={20}
          d="M283.287 257.632c0 6.709-3.575 12.964-9.252 16.334l-.556.316-72.137 39.431-.013.007-.014.008a18.622 18.622 0 0 1-18.056 0l-.014-.008-.014-.007-72.137-39.431h.001c-5.999-3.284-9.808-9.724-9.808-16.65V233.91l72.35 39.572a38.618 38.618 0 0 0 37.3 0l.001.001 72.349-39.573v23.722Zm55.322-96.433c1.559.885 2.392 2.373 2.392 3.989v92.588c0 2.432-2.026 4.445-4.429 4.445-2.402-.001-4.427-2.013-4.427-4.445V157.671l6.464 3.528ZM183.146 86.331a19.404 19.404 0 0 1 18.273-.005l128.78 70.283-12.851 7.026-116.006 63.411-.014.008-.013.007a18.622 18.622 0 0 1-18.056 0l-.03-.016-121.598-66.426c-3.055-1.684-3.06-6.205-.017-7.899l121.532-66.389Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M48 70h303v260H48z" />
        </ClipPath>
      </Defs>
      <Text x={180} y={500} fontSize={100} fill="#000" fontFamily={font_family.Biform} textAnchor="middle">
        {title}
      </Text>
    </G>

  )

}
