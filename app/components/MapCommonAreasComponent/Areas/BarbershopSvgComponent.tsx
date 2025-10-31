import {Component, FC} from "react";
import Svg, {Circle, ClipPath, Defs, G, Path, SvgProps, Text, TSpan} from "react-native-svg";
import {PropsAreas} from "./types";
import {AreasTemplateSvgComponent} from "./AreasTemplateSvgComponent";



export const BarbershopSvgComponent: FC<PropsAreas> = ({x = 0, y = 0, title = '', opacity = 1, ...props }) => {

  return (

    <AreasTemplateSvgComponent backgroundColor={'#D0D0D0'} mainColor={'#000'} x={x} y={y} title={title} opacity={opacity} {...props}>
      <G opacity={opacity} clipPath="url(#a)">
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
    </AreasTemplateSvgComponent>

  )

}



