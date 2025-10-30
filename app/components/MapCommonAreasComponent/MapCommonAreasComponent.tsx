import {FC, useEffect, useRef} from "react";
import {G} from 'react-native-svg'
import {AreasInfo, AreaType} from "./Areas/types";
import {MarketplaceSvgComponent} from "./Areas/MarketplaceSvgComponent";
import {SportSvgComponent} from "./Areas/SportSvgComponent";
import {FruitShopSvgComponent} from "./Areas/FruitShopSvgComponent";
import {BarbershopSvgComponent} from "./Areas/BarbershopSvgComponent";
import {ITSvgComponent} from "./Areas/ITSvgComponent";
import {GameSvgComponent} from "./Areas/GameSvgComponent";
import {PizzaSvgComponent} from "./Areas/PizzaSvgComponent";

type Props = {
  areas: AreasInfo[];
}

export const MapCommonAreasComponent: FC<Props> = ({areas}) => {

  const marketplaces = areas.filter((e) => e.type === AreaType.MARKETPLACE);
  const sports = areas.filter((e) => e.type === AreaType.SPORT);
  const fruitsShop = areas.filter((e) => e.type === AreaType.FRUIT_SHOP);
  const barbershops = areas.filter((e) => e.type === AreaType.BARBERSHOP);
  const its = areas.filter((e) => e.type === AreaType.IT);
  const games = areas.filter((e) => e.type === AreaType.GAMES);
  const pizza = areas.filter((e) => e.type === AreaType.PIZZA);

  return (
    <>
      {
        marketplaces.map((e, i) => (
          <MarketplaceSvgComponent x={e.x} y={e.y} title={e.title} key={i} />
        ))
      }
      {
        sports.map((e, i) => (
          <SportSvgComponent x={e.x} y={e.y} title={e.title} key={i} />
        ))
      }
      {
        fruitsShop.map((e, i) => (
          <FruitShopSvgComponent x={e.x} y={e.y} title={e.title} key={i} />
        ))
      }
      {
        barbershops.map((e, i) => (
          <BarbershopSvgComponent x={e.x} y={e.y} title={e.title} key={i} />
        ))
      }
      {
        its.map((e, i) => (
          <ITSvgComponent x={e.x} y={e.y} title={e.title} key={i} />
        ))
      }
      {
        games.map((e, i) => (
          <GameSvgComponent x={e.x} y={e.y} title={e.title} key={i} />
        ))
      }
      {
        pizza.map((e, i) => (
          <PizzaSvgComponent x={e.x} y={e.y} title={e.title} key={i} />
        ))
      }
    </>
  )

}