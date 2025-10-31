import {Component, FC} from "react";
import Svg, {Circle, ClipPath, Defs, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {AreasTemplateSvgComponent} from "./AreasTemplateSvgComponent";



export const BookSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, opacity = 1, title = '', ...props }) => {

  return (
  <AreasTemplateSvgComponent backgroundColor={'#FEE'} mainColor={'#00A493'} x={x} y={y} title={title} opacity={opacity} {...props}>
    <Path
      fill="#00A493"
      opacity={opacity}
      d="M294.137 75H129.391c-17.016 0-30.86 13.844-30.86 30.859v188.282c0 17.016 13.844 30.859 30.859 30.859h164.746a7.323 7.323 0 0 0 7.324-7.324V82.324A7.322 7.322 0 0 0 294.137 75ZM113.18 105.859c0-8.938 7.273-16.21 16.211-16.21h157.421v173.633H129.391a30.675 30.675 0 0 0-16.211 4.615V105.859Zm16.211 204.493c-8.939 0-16.211-7.272-16.211-16.211 0-8.939 7.272-16.211 16.211-16.211h157.421v32.422H129.391Z"
    />
    <Path
      fill="#00A493"
      opacity={opacity}
      d="M247.075 122.07h-94.141a7.326 7.326 0 0 0 0 14.649h94.141a7.325 7.325 0 0 0 0-14.649Z"
    />
  </AreasTemplateSvgComponent>

  )

}
