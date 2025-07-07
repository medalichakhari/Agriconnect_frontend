// User types
export interface User {
  id: string
  email: string
  name: string
  role: 'FARMER' | 'SUPPLIER' | 'ADMIN'
  phone?: string
  address?: string
  createdAt: string
  updatedAt: string
}

// Auth types
export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  name: string
  role: 'FARMER' | 'SUPPLIER'
  phone?: string
  address?: string
}

export interface AuthResponse {
  user: User
  token: string
}

// Product types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  unit: string
  categoryId: string
  category: Category
  farmerId: string
  farmer: User
  images?: string[]
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateProductRequest {
  name: string
  description: string
  price: number
  quantity: number
  unit: string
  categoryId: string
  images?: string[]
}

// Category types
export interface Category {
  id: string
  name: string
  description?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateCategoryRequest {
  name: string
  description?: string
}

// Order types
export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED'

export interface OrderItem {
  id: string
  productId: string
  product: Product
  quantity: number
  price: number
  total: number
}

export interface Order {
  id: string
  supplierId: string
  supplier: User
  items: OrderItem[]
  status: OrderStatus
  totalAmount: number
  shippingAddress: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface CreateOrderRequest {
  items: {
    productId: string
    quantity: number
  }[]
  shippingAddress: string
  notes?: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Filter types
export interface ProductFilters {
  search?: string
  categoryId?: string
  minPrice?: number
  maxPrice?: number
  farmerId?: string
  isActive?: boolean
  page?: number
  limit?: number
}

export interface OrderFilters {
  status?: OrderStatus
  supplierId?: string
  page?: number
  limit?: number
}

// UI types
export interface LoadingState {
  isLoading: boolean
  error: string | null
}

export interface Toast {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
}
