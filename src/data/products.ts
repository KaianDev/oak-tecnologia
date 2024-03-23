import { AvailableToSale, Product } from "@/types/product"
import { v4 as uuid } from "uuid"

export const products: Product[] = [
  {
    id: uuid(),
    name: "iPhone",
    description: "Smartphone",
    value: 999,
    availableToSale: AvailableToSale.YES,
  },
  {
    id: uuid(),
    name: "Samsung Galaxy",
    description: "Smartphone",
    value: 899,
    availableToSale: AvailableToSale.NO,
  },
  {
    id: uuid(),
    name: "MacBook Pro",
    description: "Laptop",
    value: 1999,
    availableToSale: AvailableToSale.YES,
  },
  {
    id: uuid(),
    name: "Dell XPS",
    description: "Laptop",
    value: 1499,
    availableToSale: AvailableToSale.YES,
  },
  {
    id: uuid(),
    name: "iPad",
    description: "Tablet",
    value: 799,
    availableToSale: AvailableToSale.NO,
  },
  {
    id: uuid(),
    name: "Microsoft Surface",
    description: "Tablet",
    value: 999,
    availableToSale: AvailableToSale.YES,
  },
  {
    id: uuid(),
    name: "Apple Watch",
    description: "Smartwatch",
    value: 399,
    availableToSale: AvailableToSale.NO,
  },
  {
    id: uuid(),
    name: "Samsung Smartwatch",
    description: "Smartwatch",
    value: 299,
    availableToSale: AvailableToSale.YES,
  },
  {
    id: uuid(),
    name: "Bose Headphones",
    description: "Headphones",
    value: 299,
    availableToSale: AvailableToSale.NO,
  },
  {
    id: uuid(),
    name: "Sony Wireless Earbuds",
    description: "Wireless Earbuds",
    value: 199,
    availableToSale: AvailableToSale.NO,
  },
]
