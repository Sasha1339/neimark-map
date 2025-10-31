import {FC, useEffect, useRef} from "react";
import {G} from 'react-native-svg'
import {AreasInfo, AreaType} from "./Areas/types";
import {MarketplaceSvgComponent} from "./Areas/MarketplaceSvgComponent";
import {SportSvgComponent} from "./Areas/SportSvgComponent";
import {ShopSvgComponent} from "./Areas/ShopSvgComponent";
import {BarbershopSvgComponent} from "./Areas/BarbershopSvgComponent";
import {ITSvgComponent} from "./Areas/ITSvgComponent";
import {GameSvgComponent} from "./Areas/GameSvgComponent";
import {PizzaSvgComponent} from "./Areas/PizzaSvgComponent";
import {ReceptionSvgComponent} from "./Areas/ReceptionSvgComponent";
import {CoffeeSvgComponent} from "./Areas/CoffeeSvgComponent";
import {StudioSvgComponent} from "./Areas/StudioSvgComponent";
import {SchoolSvgComponent} from "./Areas/SchoolSvgComponent";
import {FlowerSvgComponent} from "./Areas/FlowerSvgComponent";
import {RepairSvgComponent} from "./Areas/RepairSvgComponent";
import {DivingSvgComponent} from "./Areas/DivingSvgComponent";
import {LivingSvgComponent} from "./Areas/LivingSvgComponent";
import {HearthSvgComponent} from "./Areas/HearthSvgComponent";
import {BeautySvgComponent} from "./Areas/BeautySvgComponent";
import {BookSvgComponent} from "./Areas/BookSvgComponent";

type Props = {
  areas: AreasInfo[];
}

export const MapCommonAreasComponent: FC<Props> = ({areas}) => {

  const marketplaces = areas.filter((e) => e.type === AreaType.MARKETPLACE);
  const sports = areas.filter((e) => e.type === AreaType.SPORT);
  const fruitsShop = areas.filter((e) => e.type === AreaType.SHOP);
  const barbershops = areas.filter((e) => e.type === AreaType.BARBERSHOP);
  const its = areas.filter((e) => e.type === AreaType.IT);
  const games = areas.filter((e) => e.type === AreaType.GAMES);
  const pizza = areas.filter((e) => e.type === AreaType.PIZZA);
  const reception = areas.filter((e) => e.type === AreaType.RECEPTION);
  const coffee = areas.filter((e) => e.type === AreaType.COFFEE);
  const studio = areas.filter((e) => e.type === AreaType.STUDIO);
  const school = areas.filter((e) => e.type === AreaType.SCHOOL);
  const flower = areas.filter((e) => e.type === AreaType.FLOWER);
  const living = areas.filter((e) => e.type === AreaType.LIVING);
  const diving = areas.filter((e) => e.type === AreaType.DINING);
  const repair = areas.filter((e) => e.type === AreaType.REPAIR);
  const hearth = areas.filter((e) => e.type === AreaType.HEARTH);
  const beauty = areas.filter((e) => e.type === AreaType.BEAUTY);
  const book = areas.filter((e) => e.type === AreaType.BOOK);

  return (
    <>
      {
        marketplaces.map((e, i) => (
          <MarketplaceSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        sports.map((e, i) => (
          <SportSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        fruitsShop.map((e, i) => (
          <ShopSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        barbershops.map((e, i) => (
          <BarbershopSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        its.map((e, i) => (
          <ITSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        games.map((e, i) => (
          <GameSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        pizza.map((e, i) => (
          <PizzaSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        reception.map((e, i) => (
          <ReceptionSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        coffee.map((e, i) => (
          <CoffeeSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        studio.map((e, i) => (
          <StudioSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        school.map((e, i) => (
          <SchoolSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        flower.map((e, i) => (
          <FlowerSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        living.map((e, i) => (
          <LivingSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        diving.map((e, i) => (
          <DivingSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        repair.map((e, i) => (
          <RepairSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        hearth.map((e, i) => (
          <HearthSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        beauty.map((e, i) => (
          <BeautySvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
      {
        book.map((e, i) => (
          <BookSvgComponent x={e.x} y={e.y} title={e.title} deltaX={e.deltaX} key={i} />
        ))
      }
    </>
  )

}