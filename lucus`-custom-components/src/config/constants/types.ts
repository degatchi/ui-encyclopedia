export interface Address {
  4?: string;
  1: string;
}

export interface Token {
  symbol: string;
  address?: Address;
  decimals?: number;
  projectLink?: string;
}

export type PageMeta = {
    title: string
    description: string
    image: string
  }