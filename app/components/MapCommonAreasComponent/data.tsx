import {AccessibleAreas, AreasInfo, AreaType} from "./Areas/types";
import {GestureResponderEvent} from "react-native";
import {mainHeight, mainWidth} from "../MapSvgComponent/data";


export const areas: AreasInfo[] = [
  { type: AreaType.MARKETPLACE, title: 'Wildberries', x: 19700, y: 16100, id: 'a1' },
  { type: AreaType.MARKETPLACE, title: 'Яндекс Маркет', x: 19300, y: 17000, id: 'a2' },
  { type: AreaType.SCHOOL, title: 'Школа Ин. Языков', x: 21100, y: 17000, id: 'a3' },
  { type: AreaType.IT, title: 'Т-технологии', x: 20100, y: 8600, id: 'a4' },
  { type: AreaType.BARBERSHOP, title: 'Барбершоп', x: 17600, y: 5400, id: 'a5' },
  { type: AreaType.SHOP, title: 'Овощи и фрукты', x: 12900, y: 17200, id: 'a6' },
  { type: AreaType.GAMES, title: 'Компьютерный клуб', x: 13900, y: 8900, id: 'a7' },
  { type: AreaType.FLOWER, title: 'Цветочный', x: 15200, y: 10300, id: 'a8' },
  { type: AreaType.GAMES, title: 'Игровой центр', x: 17500, y: 16900, id: 'a9' },
  { type: AreaType.PIZZA, title: 'Пиццерия', x: 22000, y: 14800, id: 'a10' },
  { type: AreaType.RECEPTION, title: 'Ресепшен', x: 11700, y: 18500, id: 'a11' },
  { type: AreaType.COFFEE, title: 'Starbucks', x: 18600, y: 20200, id: 'a12' },
  { type: AreaType.SPORT, title: 'Зал единоборств', x: 22400, y: 11200, id: 'a13' },
  { type: AreaType.STUDIO, title: 'Фотостудия', x: 13400, y: 14200, id: 'a14' },
  { type: AreaType.SPORT, title: 'Групповые тренировки', x: 11200, y: 16200, id: 'a15' },
  { type: AreaType.LIVING, title: 'Гостинная', x: 17300, y: 13300, id: 'a16' },
  { type: AreaType.DINING, title: 'Столовая', x: 19200, y: 12300, id: 'a17' },
  { type: AreaType.REPAIR, title: 'Ремонт техники', x: 17600, y: 11800, id: 'a18' },
  { type: AreaType.REPAIR, title: '3D печать', x: 20200, y: 14300, id: 'a19' },
  { type: AreaType.HEARTH, title: 'Центр мент. здор.', x: 16100, y: 6800, id: 'a20' },
  { type: AreaType.BEAUTY, title: 'Салон красоты', x: 22600, y: 13100, id: 'a21' },
  { type: AreaType.BOOK, title: 'Книжный магазин', x: 23500, y: 11500, id: 'a22' },
  { type: AreaType.IT, title: 'Т-технологии', x: 22300, y: 7200, id: 'a23' },
  { type: AreaType.IT, title: 'Выставка технологий', x: 21300, y: 6700, id: 'a24' },
  { type: AreaType.STUDIO, title: 'Запиши подкаст', x: 20100, y: 5500, id: 'a25' },
  { type: AreaType.COFFEE, title: 'Coffee Like', x: 19400, y: 4300, id: 'a26' },
]


export const accessibleAreas: AccessibleAreas[] = [
  {
    id: 'building_1_enter_1',
    x: 10750,
    y: 20700,
    width: 860,
    height: 1820,
    deg: 90,
  },
  {
    id: 'building_4_enter_2',
    x: 11350,
    y: 15800,
    width: 860,
    height: 1820,
    deg: 10,
  },
  {
    id: 'building_4_enter_1',
    x: 12250,
    y: 15650,
    width: 860,
    height: 860,
    deg: 10,
  },
  {
    id: 'building_4_enter_3',
    x: 12420,
    y: 16570,
    width: 860,
    height: 860,
    deg: 10,
  },
  {
    id: 'building_2_enter_2',
    x: 15950,
    y: 18850,
    d: "M1741.79 -0.00300491C1769.41 -0.00300474 1791.79 22.3829 1791.79 49.9971L1791.79 1802.1C1791.79 1829.71 1769.41 1852.1 1741.79 1852.1L944.131 1852.1C941.222 1852.1 938.372 1851.85 935.6 1851.37C934.014 1851.53 932.406 1851.6 930.779 1851.6L49.9976 1851.6C22.3834 1851.6 -0.00298337 1829.22 -0.00306251 1801.6L-0.00301361 996.204C-0.00301344 968.589 22.3827 946.203 49.9969 946.203L894.131 946.203L894.13 49.9975C894.13 22.3834 916.516 -0.00295772 944.13 -0.00310743L1741.79 -0.00300491Z",
  }
]