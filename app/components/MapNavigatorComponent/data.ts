import {svgHeight, svgWidth} from "../MapSvgComponent/data";

const lonMin = 43.980087601385776;
const lonMax = 43.98182047617857;
const latMin = 56.31396017307773;
const latMax = 56.31589942282906;

const coordsGeoOne = {x: 43.98012794362754, y: 56.3160636430278};
const coordsGeoTwo = {x: 43.979036082504166, y: 56.31462992548478};
const coordsGeoThree = {x: 43.98182047617857, y: 56.31396017307773};

const coordsSvgOne = {x: svgWidth, y: 0};
const coordsSvgTwo = {x: 0, y: 0};
const coordsSvgThree = {x: 0, y: svgHeight};

/**
 * Строит матрицу аффинного преобразования 2D по 3 соответствиям точек.
 */
function computeAffineMatrix() {
  // Берём первые 3 точки (хватает для матрицы)
  const [A1, A2, A3] = [coordsGeoOne, coordsGeoTwo, coordsGeoThree];
  const [B1, B2, B3] = [coordsSvgOne, coordsSvgTwo, coordsSvgThree];

  // Решаем систему линейных уравнений для коэффициентов
  // x' = a*x + b*y + c
  // y' = d*x + e*y + f

  const det =
    (A2.x - A1.x) * (A3.y - A1.y) -
    (A3.x - A1.x) * (A2.y - A1.y);

  if (Math.abs(det) < 1e-8) {
    throw new Error("Точки вырожденные — нельзя построить преобразование");
  }

  const a =
    ((B2.x - B1.x) * (A3.y - A1.y) -
      (B3.x - B1.x) * (A2.y - A1.y)) /
    det;

  const b =
    ((B3.x - B1.x) * (A2.x - A1.x) -
      (B2.x - B1.x) * (A3.x - A1.x)) /
    det;

  const c = B1.x - a * A1.x - b * A1.y;

  const d =
    ((B2.y - B1.y) * (A3.y - A1.y) -
      (B3.y - B1.y) * (A2.y - A1.y)) /
    det;

  const e =
    ((B3.y - B1.y) * (A2.x - A1.x) -
      (B2.y - B1.y) * (A3.x - A1.x)) /
    det;

  const f = B1.y - d * A1.x - e * A1.y;

  // Возвращаем матрицу 2x3
  return { a, b, c, d, e, f };
}

/**
 * Применение матрицы к точке
 */
function applyMatrix(p: [number, number], m: ReturnType<typeof computeAffineMatrix>): [number, number] {
  return [
    m.a * p[0] + m.b * p[1] + m.c,
    m.d * p[0] + m.e * p[1] + m.f,
  ];
}

/**
 * Основная функция преобразования координат внутренних объектов
 */
export function transformPoints(
  object: [number, number],
): [number, number] {
  const matrix = computeAffineMatrix();

  return applyMatrix(object, matrix);
}