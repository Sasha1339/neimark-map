import {AreasInfo, AreaType} from "./Areas/types";
import {GestureResponderEvent} from "react-native";

export const areas: AreasInfo[] = [
  { type: AreaType.MARKETPLACE, title: 'Wildberries', x: 9800, y: 13800 },
  { type: AreaType.IT, title: 'Т-технологии', x: 10000, y: 6300 },
  { type: AreaType.BARBERSHOP, title: 'Барбершоп', x: 7900, y: 3100 },
  { type: AreaType.FRUIT_SHOP, title: 'Овощи  и фрукты', x: 3900, y: 14900 },
  { type: AreaType.GAMES, title: 'Компьютерный клуб', x: 4600, y: 6600 },
  { type: AreaType.PIZZA, title: 'Пиццерия', x: 11900, y: 12500 },
  { type: AreaType.SPORT, title: 'Зал единоборств', x: 12300, y: 8900 }
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

export const compareWithAreas = (e: GestureResponderEvent) => {

  const areaSelected = areas.find((area) => (e.nativeEvent.locationX * 17122 / 1000 >= area.x && e.nativeEvent.locationX * 17122 / 1000 <= area.x + 400)
    && (e.nativeEvent.locationY * 19161 / 1000 >= area.y && e.nativeEvent.locationY * 19161 / 1000 <= area.y + 400))

  //console.log(areaSelected?.title);

  return !!areaSelected
}



