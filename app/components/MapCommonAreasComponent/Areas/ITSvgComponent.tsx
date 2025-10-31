import {Component, FC} from "react";
import Svg, {Circle, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {AreasTemplateSvgComponent} from "./AreasTemplateSvgComponent";



export const ITSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, opacity = 1, title = '', ...props }) => {

  return (
    <AreasTemplateSvgComponent backgroundColor={'#D7D3FF'} mainColor={'#5500FF'} x={x} y={y} title={title} opacity={opacity} {...props}>
    <Path
      fill="#5500FF"
      opacity={opacity}
      d="M127.12 261.8V155.4h-38.6v-17.2h95.2v17.2h-38.2v106.4h38V279h-95.2v-17.2h38.8Zm190.63-123.6v17.2h-50.8V279h-18.4V155.4h-50.8v-17.2h120Z"
    />
  </AreasTemplateSvgComponent>

  )

}
