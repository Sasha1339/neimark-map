import {Hotel, ObjectsMapRefCoords} from "../../shared/types";
import {GestureResponderEvent} from "react-native";
import {RefObject} from "react";
import {Path} from "react-native-svg";
import {svgPathBbox} from 'svg-path-bbox';
import {HotelMapInfo, HotelRefData} from "./Hotels/types";

export const mainWidth = 893.58;
export const mainHeight = 1000;

export const propsDHotels = {
    [Hotel.ONE]: "M2053.68 10C2086.73 10 2110.67 41.534 2102.15 73.4651C2006.34 432.786 1961.83 721.313 1963.67 1008.5C1965.52 1295.63 2013.7 1581.42 2103.24 1935.29C2111.27 1967.03 2087.38 1998 2054.65 1998H60C32.3858 1998 10 1975.61 10 1948V60C10 32.3857 32.3858 10 60 10H2053.68Z",
    [Hotel.TWO]: "M2083.47 1923C2083.47 1950.61 2061.08 1973 2033.47 1973H69.522C35.3508 1973 11.2599 1939.45 21.7789 1906.94C135.651 1554.99 190.892 1273.29 189.96 991.5C189.037 709.677 131.879 427.854 20.9979 75.5959C10.7971 43.1892 34.8651 10 68.8393 10H2033.47C2061.08 10 2083.47 32.3858 2083.47 60V1923Z",
    [Hotel.THREE]: "M1929.17 289.647L347.569 10.7683C320.374 5.97318 294.441 24.1316 289.646 51.3263L10.7667 1632.93C5.97158 1660.12 24.13 1686.06 51.3247 1690.85L1632.93 1969.73C1660.12 1974.52 1686.05 1956.37 1690.85 1929.17L1969.73 347.57C1974.52 320.375 1956.36 294.442 1929.17 289.647Z",
    [Hotel.FOUR]: "M1836.88 10.7691L51.3263 325.611C24.1316 330.406 5.97319 356.339 10.7684 383.533L328.232 2183.96C333.027 2211.15 358.96 2229.31 386.155 2224.52L2171.71 1909.68C2198.9 1904.88 2217.06 1878.95 2212.27 1851.75L1894.8 51.327C1890.01 24.1323 1864.08 5.97389 1836.88 10.7691Z",
    [Hotel.FIVE]: "M2471.23 749.733L819.505 14.3368C794.279 3.10511 764.723 14.4504 753.491 39.6772L14.3368 1699.85C3.10509 1725.07 14.4505 1754.63 39.6773 1765.86L1691.4 2501.26C1716.63 2512.49 1746.19 2501.14 1757.42 2475.92L2496.57 815.747C2507.8 790.52 2496.46 760.965 2471.23 749.733Z",
    [Hotel.SIX]: "M2448.97 744.295L809.459 14.3368C784.232 3.10511 754.676 14.4504 743.444 39.6773L14.3364 1677.28C3.10469 1702.51 14.45 1732.06 39.6769 1743.29L1679.19 2473.25C1704.42 2484.48 1733.97 2473.14 1745.2 2447.91L2474.31 810.309C2485.54 785.082 2474.2 755.526 2448.97 744.295Z",
    [Hotel.SEVEN]: "M2092.62 484.375L548.206 12.2006C521.798 4.12699 493.846 18.9897 485.772 45.3973L12.2001 1594.38C4.12651 1620.79 18.9891 1648.74 45.3968 1656.82L1589.81 2128.99C1616.22 2137.06 1644.17 2122.2 1652.24 2095.79L2125.82 546.809C2133.89 520.401 2119.03 492.449 2092.62 484.375Z",
    [Hotel.EIGHT]: "M2621.43 1353.79L1426.37 26.544C1407.89 6.02258 1376.28 4.36575 1355.76 22.8433L26.5454 1219.67C6.02405 1238.15 4.36718 1269.76 22.8447 1290.28L1217.91 2617.53C1236.38 2638.06 1268 2639.71 1288.52 2621.23L2617.73 1424.41C2638.25 1405.93 2639.91 1374.31 2621.43 1353.79Z",
    [Hotel.NINE]: "M1852.63 10.0718L57.3846 104.157C29.8082 105.602 8.62471 129.129 10.0699 156.705L103.707 1943.41C105.153 1970.99 128.679 1992.17 156.256 1990.73L1951.5 1896.64C1979.08 1895.2 2000.26 1871.67 1998.82 1844.09L1905.18 57.3864C1903.73 29.8101 1880.21 8.62655 1852.63 10.0718Z",
    [Hotel.TEN]: "M2293.5 824.197L894.887 16.707C870.973 2.89991 840.393 11.0937 826.586 35.0083L16.7061 1437.76C2.89893 1461.68 11.0927 1492.26 35.0073 1506.06L1433.62 2313.55C1457.54 2327.36 1488.12 2319.17 1501.92 2295.25L2311.8 892.499C2325.61 868.584 2317.42 838.004 2293.5 824.197Z",
    [Hotel.ELEVEN]: "M2550.99 942.38L1011.15 17.1503C987.477 2.92796 956.76 10.5868 942.537 34.2568L17.1478 1574.36C2.92539 1598.03 10.5842 1628.75 34.2543 1642.97L1574.1 2568.2C1597.77 2582.43 1628.48 2574.77 1642.71 2551.1L2568.09 1010.99C2582.32 987.32 2574.66 956.602 2550.99 942.38Z",
    [Hotel.TWELVE]: "M2349.4 570.013L633.436 12.4626C607.173 3.9293 578.965 18.3018 570.432 44.5645L12.4648 1761.81C3.93152 1788.07 18.3041 1816.28 44.5668 1824.81L1760.53 2382.36C1786.79 2390.9 1815 2376.53 1823.53 2350.26L2381.5 633.016C2390.03 606.754 2375.66 578.546 2349.4 570.013Z",
    [Hotel.THIRTEEN]: "M2370.45 1059.79L1133.3 21.698C1112.15 3.94788 1080.61 6.70709 1062.86 27.8608L21.6991 1268.67C3.94897 1289.82 6.70816 1321.36 27.8619 1339.11L1265.01 2377.2C1286.16 2394.95 1317.7 2392.19 1335.45 2371.04L2376.61 1130.23C2394.36 1109.08 2391.6 1077.54 2370.45 1059.79Z",
    [Hotel.FOURTEEN]: "M2198.26 330.015L387.725 10.7683C360.53 5.97318 334.597 24.1317 329.802 51.3264L10.7686 1860.65C5.97342 1887.85 24.1319 1913.78 51.3266 1918.58L1861.87 2237.82C1889.06 2242.62 1914.99 2224.46 1919.79 2197.27L2238.82 387.938C2243.62 360.743 2225.46 334.81 2198.26 330.015Z",
    [Hotel.FIFTEEN]: "M2345.02 356.844C2345.06 356.851 2345.09 356.884 2345.09 356.924C2345.09 356.976 2345.04 357.014 2344.99 357.002L2344.79 356.955C2344.67 356.927 2344.55 356.992 2344.51 357.104C2057.04 1090.07 1977.12 1499.25 2010.18 2170.83C2011.77 2203.06 1983.09 2228.62 1951.31 2223.02L51.3265 1888C24.1317 1883.2 5.97323 1857.27 10.7684 1830.08L324.413 51.3263C329.208 24.1316 355.141 5.9732 382.336 10.7684L2345.02 356.844Z",
    [Hotel.SIXTEEN]: "M1060.72 10.4317C1060.75 10.4574 1060.75 10.5004 1060.72 10.5282C1060.69 10.5595 1060.7 10.6089 1060.73 10.632L2645.93 1040.08C2669.09 1055.12 2675.68 1086.08 2660.64 1109.24L1665.4 2641.85C1650.36 2665.01 1619.39 2671.6 1596.23 2656.55L11.2778 1627.25C11.1578 1627.18 10.9984 1627.2 10.9068 1627.31C10.8248 1627.41 10.6866 1627.44 10.5703 1627.39L10.3456 1627.28C10.0716 1627.15 9.93534 1626.84 10.0251 1626.55C129.171 1243.48 246.438 963.639 406.567 717.438C566.604 471.216 769.506 258.657 1059.72 10.1242C1059.92 9.95668 1060.21 9.96036 1060.4 10.1356L1060.72 10.4317Z",
    [Hotel.SEVENTEEN]: "M2567.35 1628.38L1684.55 35.77C1671.17 11.6181 1640.73 2.8919 1616.58 16.2796L35.7674 892.539C11.6155 905.927 2.88926 936.359 16.2769 960.51L899.076 2553.12C912.464 2577.27 942.896 2586 967.048 2572.61L2547.86 1696.35C2572.01 1682.97 2580.74 1652.53 2567.35 1628.38Z",
    [Hotel.EIGHTEEN]: "M2373.99 1283.61L1357.65 28.537C1340.27 7.07669 1308.78 3.76746 1287.32 21.1457L28.5322 1040.49C7.07191 1057.87 3.76272 1089.36 21.1409 1110.82L1037.48 2365.89C1054.86 2387.35 1086.34 2390.66 1107.8 2373.28L2366.59 1353.94C2388.05 1336.56 2391.36 1305.07 2373.99 1283.61Z"
}

// export const hotelsData: HotelMapInfo[] = [
//     { type: Hotel.ONE, dProps: propsDHotels[Hotel.ONE], y: 16430.5, x: 983.5, rotationDefault: 0, name: '' },
//     { type: Hotel.TWO, dProps: propsDHotels[Hotel.TWO], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.THREE, dProps: propsDHotels[Hotel.THREE], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.FOUR, dProps: propsDHotels[Hotel.FOUR], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.FIVE, dProps: propsDHotels[Hotel.FIVE], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.SIX, dProps: propsDHotels[Hotel.SIX], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.SEVEN, dProps: propsDHotels[Hotel.SEVEN], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.EIGHT, dProps: propsDHotels[Hotel.EIGHT], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.NINE, dProps: propsDHotels[Hotel.NINE], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.TEN, dProps: propsDHotels[Hotel.TEN], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.ELEVEN, dProps: propsDHotels[Hotel.ELEVEN], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.TWELVE, dProps: propsDHotels[Hotel.TWELVE], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.THIRTEEN, dProps: propsDHotels[Hotel.THIRTEEN], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.FOURTEEN, dProps: propsDHotels[Hotel.FOURTEEN], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.FIFTEEN, dProps: propsDHotels[Hotel.FIFTEEN], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.SIXTEEN, dProps: propsDHotels[Hotel.SIXTEEN], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.SEVENTEEN, dProps: propsDHotels[Hotel.SEVENTEEN], y: 0, x: 0, rotationDefault: 0, name: '' },
//     { type: Hotel.EIGHTEEN, dProps: propsDHotels[Hotel.EIGHTEEN], y: 0, x: 0, rotationDefault: 0, name: '' }
// ]

export const hotelsData: HotelMapInfo[] = [
    { type: Hotel.ONE, dProps: propsDHotels[Hotel.ONE], y: 16430.5, x: 983.5, rotationDefault: 0, name: '', id: 'h1' },
    { type: Hotel.TWO, dProps: propsDHotels[Hotel.TWO], y: 16475.50, x: 5989.30, rotationDefault: 0, name: '', id: 'h2' },
    { type: Hotel.THREE, dProps: propsDHotels[Hotel.THREE], y: 16731, x: 8982.97, rotationDefault: 0, name: '', id: 'h3' },
    { type: Hotel.FOUR, dProps: propsDHotels[Hotel.FOUR], y: 13122.00, x: 1566.24, rotationDefault: 0, name: '', id: 'h4' },
    { type: Hotel.FIVE, dProps: propsDHotels[Hotel.FIVE], y: 9860.04, x: 2586.46, rotationDefault: 0, name: '', id: 'h5' },
    { type: Hotel.SIX, dProps: propsDHotels[Hotel.SIX], y: 12772.8, x: 5993.91, rotationDefault: 0, name: '', id: 'h6' },
    { type: Hotel.SEVEN, dProps: propsDHotels[Hotel.SEVEN], x: 9559.61, y: 13952.5, rotationDefault: 0, name: '', id: 'h7' },
    { type: Hotel.EIGHT, dProps: propsDHotels[Hotel.EIGHT], x: 3287.86, y: 6610.17, rotationDefault: 0, name: '', id: 'h8' },
    { type: Hotel.NINE, dProps: propsDHotels[Hotel.NINE], y: 9680.63, x: 7717.18, rotationDefault: 0, name: '', id: 'h9' },
    { type: Hotel.TEN, dProps: propsDHotels[Hotel.TEN], y: 11193.4, x: 10536.3, rotationDefault: 0, name: '', id: 'h10' },
    { type: Hotel.ELEVEN, dProps: propsDHotels[Hotel.ELEVEN], y: 4521.75, x: 5852.66, rotationDefault: 0, name: '', id: 'h11' },
    { type: Hotel.TWELVE, dProps: propsDHotels[Hotel.TWELVE], y: 6491.02, x: 9633.48, rotationDefault: 0, name: '', id: 'h12' },
    { type: Hotel.THIRTEEN, dProps: propsDHotels[Hotel.THIRTEEN], y: 8813.98, x: 12102.0, rotationDefault: 0, name: '', id: 'h13' },
    { type: Hotel.FOURTEEN, dProps: propsDHotels[Hotel.FOURTEEN], y: 837.97, x: 4924.07, rotationDefault: 0, name: '', id: 'h14' },
    { type: Hotel.FIFTEEN, dProps: propsDHotels[Hotel.FIFTEEN], y: 1363.18, x: 7701.18, rotationDefault: 0, name: '', id: 'h15' },
    { type: Hotel.SIXTEEN, dProps: propsDHotels[Hotel.SIXTEEN], y: 2154.42, x: 10454.1, rotationDefault: 0, name: '', id: 'h16' },
    { type: Hotel.SEVENTEEN, dProps: propsDHotels[Hotel.SEVENTEEN], y: 4561.94, x: 12306.0, rotationDefault: 0, name: '', id: 'h17' },
    { type: Hotel.EIGHTEEN, dProps: propsDHotels[Hotel.EIGHTEEN], y: 6816.65, x: 14115.7, rotationDefault: 0, name: '', id: 'h18' }
]


const getPathCenter = (pathData?: string): { x: number; y: number } => {
    const [x1, y1, x2, y2] = svgPathBbox(pathData!);
    return {
        x: (x1 + x2) / 2,
        y: (y1 + y2) / 2,
    };
};

export const compareWithHotel = (e: GestureResponderEvent, info: ObjectsMapRefCoords) => {
    const boxHotel = info.ref.current!.getBBox()!;

    return (e.nativeEvent.locationX * 17122 / mainWidth >= info.x && e.nativeEvent.locationX * 17122 / mainWidth <= info.x + boxHotel.width)
        && (e.nativeEvent.locationY * 19161 / mainHeight >= info.y && e.nativeEvent.locationY * 19161 / mainHeight <= info.y + boxHotel.height);
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
    [Hotel.SIXTEEN]: -33,
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



