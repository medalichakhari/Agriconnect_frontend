import { useState } from 'react'
import { Search, Filter, Plus } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Select } from '../components/ui/select'
import { Layout } from '../components/layout/Layout'
import { useAuth } from '../hooks/useAuth'
// import { ProductCard } from '../components/ProductCard'
// import { productsApi, categoriesApi } from '../services/api'
// import type { Product, Category, ProductFilters } from '../types'

const ProductsPage = () => {
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [priceRange, setPriceRange] = useState('')
  // const [products, setProducts] = useState<Product[]>([])
  // const [categories, setCategories] = useState<Category[]>([])
  const [isLoading] = useState(false)

  // Placeholder data for now
  const mockProducts = [
    {
      id: '1',
      name: 'Organic Tomatoes',
      description: 'Fresh, locally grown organic tomatoes perfect for cooking and salads.',
      price: 4.99,
      quantity: 50,
      unit: 'lb',
      categoryId: '1',
      category: {
        id: '1',
        name: 'Vegetables',
        description: '',
        isActive: true,
        createdAt: '',
        updatedAt: '',
      },
      farmerId: '1',
      farmer: {
        id: '1',
        name: 'John Farmer',
        email: '',
        role: 'FARMER' as const,
        createdAt: '',
        updatedAt: '',
      },
      images: [],
      isActive: true,
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '2',
      name: 'Fresh Apples',
      description: 'Crispy red apples, perfect for snacking or baking.',
      price: 3.5,
      quantity: 100,
      unit: 'lb',
      categoryId: '2',
      category: {
        id: '2',
        name: 'Fruits',
        description: '',
        isActive: true,
        createdAt: '',
        updatedAt: '',
      },
      farmerId: '2',
      farmer: {
        id: '2',
        name: 'Mary Orchard',
        email: '',
        role: 'FARMER' as const,
        createdAt: '',
        updatedAt: '',
      },
      images: [],
      isActive: true,
      createdAt: '',
      updatedAt: '',
    },
  ]

  const mockCategories = [
    { id: '1', name: 'Vegetables' },
    { id: '2', name: 'Fruits' },
    { id: '3', name: 'Grains' },
    { id: '4', name: 'Dairy' },
  ]

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || product.categoryId === selectedCategory
    const matchesPrice = !priceRange || checkPriceRange(product.price, priceRange)
    return matchesSearch && matchesCategory && matchesPrice
  })

  function checkPriceRange(price: number, range: string): boolean {
    switch (range) {
      case 'under-5':
        return price < 5
      case '5-10':
        return price >= 5 && price <= 10
      case 'over-10':
        return price > 10
      default:
        return true
    }
  }

  const isFarmer = user?.role === 'FARMER'

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {isFarmer ? 'My Products' : 'Browse Products'}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              {isFarmer
                ? 'Manage your product listings and inventory'
                : 'Discover fresh produce from local farmers'}
            </p>
          </div>
          {isFarmer && (
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          )}
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border dark:border-slate-700 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              placeholder="All Categories"
            >
              <option value="">All Categories</option>
              {mockCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>

            <Select
              value={priceRange}
              onChange={e => setPriceRange(e.target.value)}
              placeholder="Price Range"
            >
              <option value="">All Prices</option>
              <option value="under-5">Under $5</option>
              <option value="5-10">$5 - $10</option>
              <option value="over-10">Over $10</option>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('')
                setPriceRange('')
              }}
            >
              <Filter className="mr-2 h-4 w-4" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-slate-200 dark:bg-slate-700 h-64 rounded-lg mb-4"></div>
                <div className="bg-slate-200 dark:bg-slate-700 h-4 rounded mb-2"></div>
                <div className="bg-slate-200 dark:bg-slate-700 h-4 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border dark:border-slate-700 p-6"
              >
                <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-slate-400">No Image</span>
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-slate-500">per {product.unit}</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-slate-600 dark:text-slate-300">
                    Available: {product.quantity} {product.unit}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    {product.category.name}
                  </span>
                </div>
                <Button className="w-full">{isFarmer ? 'Edit Product' : 'Add to Cart'}</Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
              No products found
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Try adjusting your search or filter criteria
            </p>
            {isFarmer && (
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Your First Product
              </Button>
            )}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ProductsPage
