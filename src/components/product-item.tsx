import { AvailableToSale, Product } from "@/types/product"

// Utilities
import { formatMoney } from "@/helpers/formatMoney"
import { Badge } from "@/components/ui/badge"

interface ProductItemProps {
  product: Product
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div
      key={product.id}
      className="flex items-center border-b border-zinc-800 p-1"
    >
      <div className="flex flex-1 items-center gap-4">
        <div className="text-lg leading-none">
          <p>{product.name}</p>
          <small className="text-xs text-muted-foreground">
            {product.description}
          </small>
        </div>
        {product.availableToSale === AvailableToSale.YES && (
          <Badge className="text-xs">Disponível</Badge>
        )}
      </div>

      <div>{formatMoney(product.value)}</div>
    </div>
  )
}
