import {ReactNode} from "react";

export type PropsAreas = {
  id?: string;
  title?: string,
  x?: number,
  y?: number,
  opacity?: number
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
  id?: string;
  type: AreaType,
  x: number,
  y: number,
  title: string
}