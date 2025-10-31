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
  opacity?: number;
}

export const MapCommonAreasComponent: FC<Props> = ({areas, opacity = 1}) => {

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
          <MarketplaceSvgComponent key={i} {...e} opacity={opacity}/>
        ))
      }
      {
        sports.map((e, i) => (
          <SportSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        fruitsShop.map((e, i) => (
          <ShopSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        barbershops.map((e, i) => (
          <BarbershopSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        its.map((e, i) => (
          <ITSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        games.map((e, i) => (
          <GameSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        pizza.map((e, i) => (
          <PizzaSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        reception.map((e, i) => (
          <ReceptionSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        coffee.map((e, i) => (
          <CoffeeSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        studio.map((e, i) => (
          <StudioSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        school.map((e, i) => (
          <SchoolSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        flower.map((e, i) => (
          <FlowerSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        living.map((e, i) => (
          <LivingSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        diving.map((e, i) => (
          <DivingSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        repair.map((e, i) => (
          <RepairSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        hearth.map((e, i) => (
          <HearthSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        beauty.map((e, i) => (
          <BeautySvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
      {
        book.map((e, i) => (
          <BookSvgComponent key={i} {...e} opacity={opacity} />
        ))
      }
    </>
  )

}