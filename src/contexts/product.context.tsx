import { Product } from "@/types/product"
import { ReactNode, createContext, useContext, useState } from "react"
import { products as data } from "@/data/products"

interface IProductContext {
  products: Product[]
  addProduct: (product: Product) => void
  sortProduct: (type: "value" | "name") => void
}

const ProductContext = createContext({} as IProductContext)

interface IProductContextProviderProps {
  children: ReactNode
}

export const ProductContextProvider = ({
  children,
}: IProductContextProviderProps) => {
  const [products, setProducts] = useState<Product[]>(data)

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product])
  }

  const sortProduct = (type: "value" | "name") => {
    const clone = [...products]

    switch (type) {
      case "value":
        clone.sort((a, b) => {
          if (a.value > b.value) {
            return 1
          } else {
            return -1
          }
        })
        setProducts(clone)
        break

      case "name":
        clone.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          } else {
            return -1
          }
        })
        setProducts(clone)
        break

      default:
        setProducts(products)
    }
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, sortProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
