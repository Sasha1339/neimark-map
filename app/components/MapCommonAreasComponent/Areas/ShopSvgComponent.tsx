import {Component, FC} from "react";
import Svg, {Circle, ClipPath, Defs, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {AreasTemplateSvgComponent} from "./AreasTemplateSvgComponent";



export const ShopSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, opacity = 1, title = '', ...props }) => {

  return (
  <AreasTemplateSvgComponent backgroundColor={'#CBDEB9'} mainColor={'#489400'} x={x} y={y} title={title} opacity={opacity} {...props}>
    <Path
      opacity={opacity}
      fill="#489400"
      fillRule="evenodd"
      d="M326.721 334.32H71.671v-225h255.05v225ZM87.713 318.249H310.68V125.392H87.713v192.857Z"
      clipRule="evenodd"
    />
    <Path
      opacity={opacity}
      fill="#489400"
      fillRule="evenodd"
      d="M272.179 174.678h-16.041V97.535c0-23.036-18.714-41.786-41.706-41.786h-29.943c-22.992 0-41.706 18.75-41.706 41.786v77.143h-16.041V97.535c0-32.143 25.665-57.857 57.747-57.857h29.943c32.082 0 57.747 25.714 57.747 57.857v77.143Z"
      clipRule="evenodd"
    />
  </AreasTemplateSvgComponent>

  )

}
