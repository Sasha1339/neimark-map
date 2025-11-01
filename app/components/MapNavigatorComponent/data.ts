import {svgHeight, svgWidth} from "../MapSvgComponent/data";

const lonMin = 43.980087601385776;
const lonMax = 43.98182047617857;
const latMin = 56.31396017307773;
const latMax = 56.31589942282906;

export function geoToPixelCorrect(lon: number, lat: number) {
  const latCenter = (latMin + latMax) / 2;
  const lonScale = Math.cos(latCenter * Math.PI / 180); // сжатие X по широте

  const x = ((lon - lonMin) * lonScale / ((lonMax - lonMin) * lonScale)) * svgWidth;
  const y = svgHeight - ((lat - latMin) / (latMax - latMin)) * svgHeight;

  return [x, y];
}


// export function geoToPixelCorrect(lon: number, lat: number) {
//   const latCenter = (latMin + latMax) / 2;
//   const lonScale = Math.cos(latCenter * Math.PI / 180); // сжатие X по широте
//
//   const x = ((lon - lonMin) / (lonMax - lonMin)) * svgWidth * lonScale;
//   const y = svgHeight - ((lat - latMin) / (latMax - latMin)) * svgHeight;
//
//   return [x, y];
// }