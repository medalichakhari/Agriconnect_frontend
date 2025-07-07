import api from '../lib/api'
import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  User,
  Product,
  CreateProductRequest,
  ProductFilters,
  Category,
  CreateCategoryRequest,
  Order,
  CreateOrderRequest,
  OrderFilters,
  OrderStatus,
  ApiResponse,
  PaginatedResponse,
} from '../types'

// Auth API
export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/login', data)
    return response.data.data
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/register', data)
    return response.data.data
  },

  logout: async (): Promise<void> => {
    await api.post('/auth/logout')
  },

  me: async (): Promise<User> => {
    const response = await api.get<ApiResponse<User>>('/auth/me')
    return response.data.data
  },

  refreshToken: async (): Promise<AuthResponse> => {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/refresh')
    return response.data.data
  },
}

// Products API
export const productsApi = {
  getProducts: async (filters?: ProductFilters): Promise<PaginatedResponse<Product>> => {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await api.get<ApiResponse<PaginatedResponse<Product>>>(
      `/products?${params.toString()}`
    )
    return response.data.data
  },

  getProduct: async (id: string): Promise<Product> => {
    const response = await api.get<ApiResponse<Product>>(`/products/${id}`)
    return response.data.data
  },

  createProduct: async (data: CreateProductRequest): Promise<Product> => {
    const response = await api.post<ApiResponse<Product>>('/products', data)
    return response.data.data
  },

  updateProduct: async (id: string, data: Partial<CreateProductRequest>): Promise<Product> => {
    const response = await api.put<ApiResponse<Product>>(`/products/${id}`, data)
    return response.data.data
  },

  deleteProduct: async (id: string): Promise<void> => {
    await api.delete(`/products/${id}`)
  },
}

// Categories API
export const categoriesApi = {
  getCategories: async (): Promise<Category[]> => {
    const response = await api.get<ApiResponse<Category[]>>('/categories')
    return response.data.data
  },

  getCategory: async (id: string): Promise<Category> => {
    const response = await api.get<ApiResponse<Category>>(`/categories/${id}`)
    return response.data.data
  },

  createCategory: async (data: CreateCategoryRequest): Promise<Category> => {
    const response = await api.post<ApiResponse<Category>>('/categories', data)
    return response.data.data
  },

  updateCategory: async (id: string, data: Partial<CreateCategoryRequest>): Promise<Category> => {
    const response = await api.put<ApiResponse<Category>>(`/categories/${id}`, data)
    return response.data.data
  },

  deleteCategory: async (id: string): Promise<void> => {
    await api.delete(`/categories/${id}`)
  },
}

// Orders API
export const ordersApi = {
  getOrders: async (filters?: OrderFilters): Promise<PaginatedResponse<Order>> => {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await api.get<ApiResponse<PaginatedResponse<Order>>>(
      `/orders?${params.toString()}`
    )
    return response.data.data
  },

  getOrder: async (id: string): Promise<Order> => {
    const response = await api.get<ApiResponse<Order>>(`/orders/${id}`)
    return response.data.data
  },

  createOrder: async (data: CreateOrderRequest): Promise<Order> => {
    const response = await api.post<ApiResponse<Order>>('/orders', data)
    return response.data.data
  },

  updateOrderStatus: async (id: string, status: OrderStatus): Promise<Order> => {
    const response = await api.patch<ApiResponse<Order>>(`/orders/${id}/status`, { status })
    return response.data.data
  },

  cancelOrder: async (id: string): Promise<void> => {
    await api.delete(`/orders/${id}`)
  },
}

// Health API
export const healthApi = {
  check: async (): Promise<{ status: string; timestamp: string }> => {
    const response = await api.get<ApiResponse<{ status: string; timestamp: string }>>('/health')
    return response.data.data
  },
}
