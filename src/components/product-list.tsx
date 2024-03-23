import { ArrowDownAZ, ArrowDown01 } from "lucide-react"

// Utilities
import { useProducts } from "@/contexts/product.context"
import { ProductItem } from "@/components/product-item"

export const ProductList = () => {
  const { products, sortProduct } = useProducts()

  const handleSortProductByValue = () => {
    sortProduct("value")
  }
  const handleSortProductByName = () => {
    sortProduct("name")
  }

  return (
    <div className="overflow-hidden rounded-md border bg-zinc-100 px-2 shadow-xl">
      <div className="-mx-2 flex justify-between bg-zinc-800 px-2 py-2 font-semibold text-white">
        <button
          onClick={handleSortProductByName}
          className="flex items-center gap-2 hover:text-zinc-400"
        >
          <p>Produtos</p>
          <ArrowDownAZ size={20} />
        </button>
        <button
          onClick={handleSortProductByValue}
          className="flex items-center gap-2 hover:text-zinc-400"
        >
          <p>Valor</p>
          <ArrowDown01 size={20} />
        </button>
      </div>
      <div className="pb-4">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
