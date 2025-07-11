import { Edit, Trash2, ShoppingCart, Package } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { useAuth } from '../hooks/useAuth'
import type { Product } from '../types'

interface ProductCardProps {
  product: Product
  onEdit?: (product: Product) => void
  onDelete?: (productId: string) => void
  onAddToCart?: (product: Product) => void
}

export const ProductCard = ({ product, onEdit, onDelete, onAddToCart }: ProductCardProps) => {
  const { user } = useAuth()
  const isOwner = user?.id === product.farmerId
  const canPurchase = user?.role === 'SUPPLIER' && !isOwner

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl shadow-md"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl flex items-center justify-center">
            <Package className="h-12 w-12 text-green-600" />
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 line-clamp-2">
            {product.name}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-slate-500">per {product.unit}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-300">
              Available: {product.quantity} {product.unit}
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-xs font-medium shadow-sm">
              {product.category.name}
            </span>
          </div>

          <div className="text-xs text-slate-500 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-lg">
            By: {product.farmer.name}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex gap-2 w-full">
          {isOwner ? (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit?.(product)}
                className="flex-1"
              >
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete?.(product.id)}
                className="flex-1"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </Button>
            </>
          ) : canPurchase ? (
            <Button
              onClick={() => onAddToCart?.(product)}
              className="w-full"
              disabled={product.quantity === 0}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              {product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          ) : (
            <Button variant="outline" className="w-full" disabled>
              View Details
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
