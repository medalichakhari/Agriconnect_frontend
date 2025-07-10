import { Package, Clock, CheckCircle, XCircle, Truck } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { useAuth } from '../hooks/useAuth'
import type { Order, OrderStatus } from '../types'

interface OrderCardProps {
  order: Order
  onUpdateStatus?: (orderId: string, status: OrderStatus) => void
  onCancelOrder?: (orderId: string) => void
}

export const OrderCard = ({ order, onUpdateStatus, onCancelOrder }: OrderCardProps) => {
  const { user } = useAuth()
  const isSupplier = user?.id === order.supplierId
  const isFarmer = order.items.some(item => item.product.farmerId === user?.id)

  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'PENDING':
        return <Clock className="h-4 w-4 text-yellow-500" />
      case 'CONFIRMED':
        return <CheckCircle className="h-4 w-4 text-blue-500" />
      case 'SHIPPED':
        return <Truck className="h-4 w-4 text-purple-500" />
      case 'DELIVERED':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'CANCELLED':
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Package className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case 'PENDING':
        return 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800'
      case 'CONFIRMED':
        return 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800'
      case 'SHIPPED':
        return 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800'
      case 'DELIVERED':
        return 'bg-gradient-to-r from-green-100 to-green-200 text-green-800'
      case 'CANCELLED':
        return 'bg-gradient-to-r from-red-100 to-red-200 text-red-800'
      default:
        return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800'
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const getAvailableActions = () => {
    if (order.status === 'CANCELLED' || order.status === 'DELIVERED') {
      return []
    }

    if (isSupplier) {
      if (order.status === 'PENDING') {
        return [
          {
            label: 'Cancel Order',
            action: () => onCancelOrder?.(order.id),
            variant: 'destructive' as const,
          },
        ]
      }
      return []
    }

    if (isFarmer) {
      if (order.status === 'PENDING') {
        return [
          {
            label: 'Confirm',
            action: () => onUpdateStatus?.(order.id, 'CONFIRMED'),
            variant: 'default' as const,
          },
          {
            label: 'Cancel',
            action: () => onCancelOrder?.(order.id),
            variant: 'destructive' as const,
          },
        ]
      }
      if (order.status === 'CONFIRMED') {
        return [
          {
            label: 'Mark as Shipped',
            action: () => onUpdateStatus?.(order.id, 'SHIPPED'),
            variant: 'default' as const,
          },
        ]
      }
      if (order.status === 'SHIPPED') {
        return [
          {
            label: 'Mark as Delivered',
            action: () => onUpdateStatus?.(order.id, 'DELIVERED'),
            variant: 'default' as const,
          },
        ]
      }
    }

    return []
  }

  const actions = getAvailableActions()

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            Order #{order.id.slice(-8)}
          </CardTitle>
          <div
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium shadow-sm ${getStatusColor(order.status)}`}
          >
            {getStatusIcon(order.status)}
            {order.status}
          </div>
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-300">
          Ordered on {formatDate(order.createdAt)}
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Order Items */}
          <div>
            <h4 className="font-medium mb-2">Items ({order.items.length})</h4>
            <div className="space-y-2">
              {order.items.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-2"
                >
                  <div>
                    <div className="font-medium">{item.product.name}</div>
                    <div className="text-slate-600 dark:text-slate-300">
                      {item.quantity} {item.product.unit} × {formatPrice(item.price)}
                    </div>
                  </div>
                  <div className="font-medium">{formatPrice(item.total)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center text-lg font-semibold border-t border-slate-200 dark:border-slate-700 pt-2">
            <span>Total</span>
            <span className="text-green-600">{formatPrice(order.totalAmount)}</span>
          </div>

          {/* Shipping Address */}
          <div>
            <h4 className="font-medium mb-1">Shipping Address</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">{order.shippingAddress}</p>
          </div>

          {/* Notes */}
          {order.notes && (
            <div>
              <h4 className="font-medium mb-1">Notes</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">{order.notes}</p>
            </div>
          )}

          {/* Supplier/Farmer Info */}
          <div>
            <h4 className="font-medium mb-1">{isSupplier ? 'Farmer' : 'Supplier'}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {isSupplier ? order.items[0]?.product.farmer.name : order.supplier.name}
            </p>
          </div>
        </div>
      </CardContent>

      {actions.length > 0 && (
        <CardFooter>
          <div className="flex gap-2 w-full">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant}
                onClick={action.action}
                className="flex-1"
              >
                {action.label}
              </Button>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
