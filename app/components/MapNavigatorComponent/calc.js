
const lonMin = 43.980087601385776;
const lonMax = 43.98182047617857;
const latMin = 56.31396017307773;
const latMax = 56.31589942282906;

export const svgWidth = 17122;
export const svgHeight = 19161;

const coordMX = 43.98095403878217;
const coordMY = 56.3149297979534;


const coordUpX = (lonMax - lonMin) / 2;
const coordUpY = (latMax - latMin) / 2;

const alpha = -67 / 180 * Math.PI;

const coordsUpXNew = coordUpX * Math.cos(alpha) - coordUpY * Math.sin(alpha) + coordMX;
const coordsUpYNew = coordUpX * Math.sin(alpha) + coordUpY * Math.cos(alpha) + coordMY;


console.log(coordsUpXNew);
console.log(coordsUpYNew);