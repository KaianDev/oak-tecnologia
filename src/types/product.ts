export enum AvailableToSale {
  YES = "YES",
  NO = "NO",
}

export interface Product {
  id: string
  name: string
  description: string
  value: number
  availableToSale: AvailableToSale
}
