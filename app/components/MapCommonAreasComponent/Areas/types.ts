import {ReactNode} from "react";

export type PropsAreas = {
  title?: string,
  x?: number,
  y?: number,
}

export enum AreaType {
  MARKETPLACE = 'MARKETPLACE',
  SPORT = 'SPORT',
  PIZZA = 'PIZZA',
  BARBERSHOP = 'BARBERSHOP',
  IT = 'IT',
  GAMES = 'GAMES',
  FRUIT_SHOP = 'FRUIT_SHOP'
}

export interface AreasInfo {
  type: AreaType,
  x: number,
  y: number,
  title: string
}