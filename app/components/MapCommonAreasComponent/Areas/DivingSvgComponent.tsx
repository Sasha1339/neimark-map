import {Component, FC} from "react";
import Svg, {Circle, ClipPath, Defs, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {AreasTemplateSvgComponent} from "./AreasTemplateSvgComponent";



export const DivingSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, opacity = 1, title = '', ...props }) => {

  return (
  <AreasTemplateSvgComponent backgroundColor={'#FFF5EB'} mainColor={'#644B4B'} x={x} y={y} title={title} opacity={opacity} {...props}>
    <Path
      fill="#644B4B"
      opacity={opacity}
      d="M293.75 65c0-9.375-7.5-15-15-15H275c-31.875 0-56.25 35.625-56.25 88.125V155c0 18.75 9.375 35.625 26.25 45-5.625 22.5-7.5 46.875-7.5 46.875v75c0 15 13.125 28.125 28.125 28.125s28.125-13.125 28.125-28.125v-75c0-7.5-1.875-26.25-5.625-43.125 3.75-3.75 5.625-7.5 5.625-13.125V65ZM185 50h-3.75v65.625c0 5.625-3.75 9.375-9.375 9.375s-9.375-3.75-9.375-9.375v-56.25c0-5.625-3.75-9.375-9.375-9.375s-9.375 3.75-9.375 9.375v56.25c0 5.625-3.75 9.375-9.375 9.375S125 121.25 125 115.625V50h-3.75c-7.5 0-15 7.5-15 15v69.375c0 18.75 11.25 35.625 28.125 43.125-7.5 30-9.375 69.375-9.375 69.375v75c0 15 13.125 28.125 28.125 28.125s28.125-13.125 28.125-28.125v-75c0-9.375-1.875-43.125-7.5-69.375 15-7.5 26.25-24.375 26.25-43.125V65c0-7.5-7.5-15-15-15Z"
    />
  </AreasTemplateSvgComponent>
  )

}
