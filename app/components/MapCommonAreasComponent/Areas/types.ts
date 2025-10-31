import {ReactNode} from "react";

export type PropsAreas = {
  title?: string,
  x?: number,
  y?: number,
  deltaX?: number,
}

export enum AreaType {
  MARKETPLACE = 'MARKETPLACE',
  SPORT = 'SPORT',
  PIZZA = 'PIZZA',
  BARBERSHOP = 'BARBERSHOP',
  FLOWER = 'FLOWER',
  IT = 'IT',
  GAMES = 'GAMES',
  SCHOOL = 'SCHOOL',
  COFFEE = 'COFFEE',
  RECEPTION = 'RECEPTION',
  STUDIO = 'STUDIO',
  REPAIR = 'REPAIR',
  LIVING = 'LIVING',
  DINING = 'DINING',
  HEARTH = 'HEARTH',
  BEAUTY = 'BEAUTY',
  BOOK = 'BOOK',
  SHOP = 'SHOP'
}

export interface AreasInfo {
  type: AreaType,
  x: number,
  y: number,
  title: string
}