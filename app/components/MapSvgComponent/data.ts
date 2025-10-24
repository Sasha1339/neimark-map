import {Hotel} from "../../shared/types";
import {GestureResponderEvent} from "react-native";
import {RefObject} from "react";
import {Path} from "react-native-svg";

export const propsDHotels = {
    [Hotel.ONE]: "M3092.9 16430.5c-107.72 389.2-157.68 694.6-155.73 998.5 1.96 303.9 55.82 606.3 155.68 989.5H983.5v-1988h2109.4Z",
    [Hotel.TWO]: "M8061.97 18438.5H5978.5c128.61-383.2 190.95-682.3 189.96-981.5-.98-299.1-65.3-598.2-189.96-981.5h2083.47v1963Z",
    [Hotel.THREE]: "m9275.33 16727.1 1680.082 296.244-296.244 1680.082-1680.082-296.244z",
    [Hotel.FOUR]: "m1562.35 13450.3 1884.036-332.206L3781.214 15017l-1884.036 332.206z",
    [Hotel.FIVE]: "m3357.18 9839.7 1743.081 776.07-779.828 1751.522-1743.081-776.07z",
    [Hotel.SIX]: "m6743.35 12763.7 1730.867 770.632-769.781 1728.958-1730.868-770.632z",
    [Hotel.SEVEN]: "m10047.8 13946 1640.044 501.412-502.81 1644.614-1640.043-501.411z",
    [Hotel.EIGHT]: "m4676.4 6595.19 1261.974 1401.564-1403.526 1263.74L3272.874 7858.93z",
    [Hotel.NINE]: "m7716.01 9778.78 1895.11-99.318 98.87 1886.57-1895.109 99.319z",
    [Hotel.TEN]: "m11385 11182.2 1485.216 857.49-859.88 1489.356-1485.216-857.49z",
    [Hotel.ELEVEN]: "m6878.41 4510.22 1625.558 976.734-976.894 1625.823-1625.557-976.733z",
    [Hotel.TWELVE]: "m10206.9 6484.1 1811.068 588.452-588.869 1812.352-1811.068-588.452z",
    [Hotel.THIRTEEN]: "m13193 8799.59 1313.75 1102.368-1105.44 1317.412-1313.75-1102.367z",
    [Hotel.FOURTEEN]: "m5251.79 834.085 1909.02 336.612-336.398 1907.809-1909.02-336.612z",
    [Hotel.FIFTEEN]: "M10035.5 1709.27v.17l-.5-.12c-296.43 755.79-372.22 1167.31-331.01 1877.09L7692.5 3231.73l331.01-1877.23 2011.99 354.77Z",
    [Hotel.SIXTEEN]: "m11504.9 2154.77-.1.11L13132 3211.6l-1049.7 1616.48-1627.1-1056.67-.3.36-.9-.42c119.2-383.33 236.5-663.31 396.7-909.62 160.1-246.32 363.1-458.95 653.5-707.61l.7.65Z",
    [Hotel.SEVENTEEN]: "m13963.4 4551.09 931.28 1680.074-1668.275 924.74-931.28-1680.074z",
    [Hotel.EIGHTEEN]: "m15438.1 6802.56 1079.272 1332.79-1336.505 1082.28-1079.272-1332.79z"
}

const getPathCenter = (pathData?: string): { x: number; y: number } => {
    if (!pathData) return { x: 0, y: 0 };

    const numbers = pathData.match(/-?\d+\.?\d*/g)?.map(Number) || [];

    // Для разных форматов path данных
    if (numbers.length >= 8) {
        // Формат: m x y dx1 dy1 dx2 dy2 dx3 dy3
        const startX = numbers[0];
        const startY = numbers[1];
        const dx1 = numbers[2];
        const dy1 = numbers[3];
        const dx2 = numbers[4];
        const dy2 = numbers[5];
        const dx3 = numbers[6];
        const dy3 = numbers[7];

        const centerX = startX + (dx1 + dx2) / 2;
        const centerY = startY + (dy1 + dy2 + dy3) / 2;

        return { x: centerX, y: centerY };
    } else if (numbers.length >= 2) {
        // Простой fallback - возвращаем первую точку
        return { x: numbers[0], y: numbers[1] };
    }

    return { x: 0, y: 0 };
};

export  const compareWithHotel = (e: GestureResponderEvent, ref: RefObject<Path | null>) => {
    const boxHotel = ref.current!.getBBox()!;

    return (e.nativeEvent.locationX * 17122 / 1000 >= boxHotel.x && e.nativeEvent.locationX * 17122 / 1000 <= boxHotel.x + boxHotel.width)
        && (e.nativeEvent.locationY * 19161 / 1000 >= boxHotel.y && e.nativeEvent.locationY * 19161 / 1000 <= boxHotel.y + boxHotel.height);
}

export const deltaPathScale = {
    [Hotel.ONE]: -0.3,
    [Hotel.TWO]: -0.1,
    [Hotel.THREE]: 0.1,
    [Hotel.FOUR]: -0.25,
    [Hotel.FIVE]: -0.25,
    [Hotel.SIX]: 0,
    [Hotel.SEVEN]: 0.1,
    [Hotel.EIGHT]: -0.2,
    [Hotel.NINE]: 0,
    [Hotel.TEN]: 0.1,
    [Hotel.ELEVEN]: -0.1,
    [Hotel.TWELVE]: 0.1,
    [Hotel.THIRTEEN]: 0.2,
    [Hotel.FOURTEEN]: 0,
    [Hotel.FIFTEEN]: 0,
    [Hotel.SIXTEEN]: 0.15,
    [Hotel.SEVENTEEN]: 0.25,
    [Hotel.EIGHTEEN]: 0.25
}

export const pathsRotate = {
    [Hotel.ONE]: 0,
    [Hotel.TWO]: 0,
    [Hotel.THREE]: -10,
    [Hotel.FOUR]: 10,
    [Hotel.FIVE]: -24,
    [Hotel.SIX]: -24,
    [Hotel.SEVEN]: -17,
    [Hotel.EIGHT]: -48,
    [Hotel.NINE]: 3,
    [Hotel.TEN]: -30,
    [Hotel.ELEVEN]: -31,
    [Hotel.TWELVE]: -18,
    [Hotel.THIRTEEN]: -40,
    [Hotel.FOURTEEN]: -10,
    [Hotel.FIFTEEN]: -10,
    [Hotel.SIXTEEN]: -0,
    [Hotel.SEVENTEEN]: -61,
    [Hotel.EIGHTEEN]: -51
}
export const pathsCenter = {
    [Hotel.ONE]: getPathCenter(propsDHotels[Hotel.ONE]),
    [Hotel.TWO]: getPathCenter(propsDHotels[Hotel.TWO]),
    [Hotel.THREE]: getPathCenter(propsDHotels[Hotel.THREE]),
    [Hotel.FOUR]: getPathCenter(propsDHotels[Hotel.FOUR]),
    [Hotel.FIVE]: getPathCenter(propsDHotels[Hotel.FIVE]),
    [Hotel.SIX]: getPathCenter(propsDHotels[Hotel.SIX]),
    [Hotel.SEVEN]: getPathCenter(propsDHotels[Hotel.SEVEN]),
    [Hotel.EIGHT]: getPathCenter(propsDHotels[Hotel.EIGHT]),
    [Hotel.NINE]: getPathCenter(propsDHotels[Hotel.NINE]),
    [Hotel.TEN]: getPathCenter(propsDHotels[Hotel.TEN]),
    [Hotel.ELEVEN]: getPathCenter(propsDHotels[Hotel.ELEVEN]),
    [Hotel.TWELVE]: getPathCenter(propsDHotels[Hotel.TWELVE]),
    [Hotel.THIRTEEN]: getPathCenter(propsDHotels[Hotel.THIRTEEN]),
    [Hotel.FOURTEEN]: getPathCenter(propsDHotels[Hotel.FOURTEEN]),
    [Hotel.FIFTEEN]: getPathCenter(propsDHotels[Hotel.FIFTEEN]),
    [Hotel.SIXTEEN]: getPathCenter(propsDHotels[Hotel.SIXTEEN]),
    [Hotel.SEVENTEEN]: getPathCenter(propsDHotels[Hotel.SEVENTEEN]),
    [Hotel.EIGHTEEN]: getPathCenter(propsDHotels[Hotel.EIGHTEEN])
}

