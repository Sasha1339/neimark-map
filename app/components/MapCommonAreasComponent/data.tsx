import {AreasInfo, AreaType} from "./Areas/types";
import {GestureResponderEvent} from "react-native";
import {mainHeight, mainWidth} from "../MapSvgComponent/data";


export const areas: AreasInfo[] = [
  { type: AreaType.MARKETPLACE, title: 'Wildberries', x: 10000, y: 13800, id: 'a1' },
  { type: AreaType.MARKETPLACE, title: 'Яндекс Маркет', x: 9600, y: 14700, id: 'a2' },
  { type: AreaType.SCHOOL, title: 'Школа Ин. Языков', x: 11400, y: 14700, id: 'a3' },
  { type: AreaType.IT, title: 'Т-технологии', x: 10400, y: 6300, id: 'a4' },
  { type: AreaType.BARBERSHOP, title: 'Барбершоп', x: 7900, y: 3100, id: 'a5' },
  { type: AreaType.SHOP, title: 'Овощи  и фрукты', x: 3200, y: 14900, id: 'a6' },
  { type: AreaType.GAMES, title: 'Компьютерный клуб', x: 4200, y: 6600, id: 'a7' },
  { type: AreaType.FLOWER, title: 'Цветочный', x: 5500, y: 8000, id: 'a8' },
  { type: AreaType.GAMES, title: 'Игровой центр', x: 7800, y: 14600, id: 'a9' },
  { type: AreaType.PIZZA, title: 'Пиццерия', x: 12300, y: 12500, id: 'a10' },
  { type: AreaType.RECEPTION, title: 'Ресепшен', x: 2000, y: 16200, id: 'a11' },
  { type: AreaType.COFFEE, title: 'Starbucks', x: 8900, y: 17900, id: 'a12' },
  { type: AreaType.SPORT, title: 'Зал единоборств', x: 12700, y: 8900, id: 'a13' },
  { type: AreaType.STUDIO, title: 'Фотостудия', x: 3700, y: 11900, id: 'a14' },
  { type: AreaType.SPORT, title: 'Групповые тренировки', x: 1400, y: 13900, id: 'a15' },
  { type: AreaType.LIVING, title: 'Гостинная', x: 7600, y: 11000, id: 'a6' },
  { type: AreaType.DINING, title: 'Столовая', x: 9500, y: 10000, id: 'a17' },
  { type: AreaType.REPAIR, title: 'Ремонт техники', x: 7900, y: 9500, id: 'a18' },
  { type: AreaType.REPAIR, title: '3D печать', x: 10500, y: 12000, id: 'a19' },
  { type: AreaType.HEARTH, title: 'Центр мент. здор.', x: 6400, y: 4500, id: 'a20' },
  { type: AreaType.BEAUTY, title: 'Сaлон красоты', x: 12900, y: 10800, id: 'a21' },
  { type: AreaType.BOOK, title: 'Книжный магазин', x: 13800, y: 9200, id: 'a22' },
  { type: AreaType.IT, title: 'Т-технологии', x: 12600, y: 4900, id: 'a23' },
  { type: AreaType.IT, title: 'Выставка технологий', x: 11600, y: 4400, id: 'a24' },
  { type: AreaType.STUDIO, title: 'Запиши подкаст', x: 10400, y: 3200, id: 'a25' },
  { type: AreaType.COFFEE, title: 'Coffee Like', x: 9700, y: 2000, id: 'a26' },
]


export function wrapText(text: string, fontSize: number, maxWidth: number) {
  const avg = fontSize * 0.6;
  const words = text.split(' ');
  let lines = [];
  let current = '';

  for (let word of words) {
    if ((current + ' ' + word).length * avg < maxWidth) {
      current += (current ? ' ' : '') + word;
    } else {
      lines.push(current);
      current = word;
    }
  }

  if (current) lines.push(current);

  return lines;
}
