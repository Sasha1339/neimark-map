const r = 56.31396017307773 + (43.98182047617857 - 43.980087601385776) / 893.58 * 1000

console.log(r);



const svgWidth = 800;
const svgHeight = 600;

const lonMin = 43.980087601385776;
const lonMax = 43.98182047617857;
const latMin = 56.31396017307773;
const latMax = 56.31589942282906;

// Преобразование гео в пиксели
function geoToLocal(lon, lat) {
  const latCenter = (latMin + latMax) / 2;
  const lonScale = Math.cos(latCenter * Math.PI / 180);

  const x = (lon - lonMin) * lonScale;
  const y = (lat - latMin);

  return [x, y];
}

// Функция перевода локальных координат обратно в гео
function localToGeo(x, y) {
  const latCenter = (latMin + latMax) / 2;
  const lonScale = Math.cos(latCenter * Math.PI / 180);

  const lon = x / lonScale + lonMin;
  const lat = y + latMin;

  return [lon, lat];
}

// Функция поворота точки вокруг центра
function rotatePoint(x, y, cx, cy, angleRad) {
  const cosA = Math.cos(angleRad);
  const sinA = Math.sin(angleRad);

  const xRot = cosA * (x - cx) - sinA * (y - cy) + cx;
  const yRot = sinA * (x - cx) + cosA * (y - cy) + cy;

  return [xRot, yRot];
}

// Центр прямоугольника
const centerX = (lonMin + lonMax) / 2;
const centerY = (latMin + latMax) / 2;

// Углы прямоугольника
const corners = [
  [lonMin, latMin],
  [lonMin, latMax],
  [lonMax, latMin],
  [lonMax, latMax],
];

// Угол поворота в радианах (например 30°)
const rotationAngle = 67 * Math.PI / 180;

// Поворот каждой вершины
const rotatedCorners = corners.map(([lon, lat]) => {
  const [x, y] = geoToLocal(lon, lat);
  const [cx, cy] = geoToLocal(centerX, centerY);
  const [xr, yr] = rotatePoint(x, y, cx, cy, rotationAngle);
  return localToGeo(xr, yr);
});

console.log(rotatedCorners);