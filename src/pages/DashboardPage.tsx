import { Link } from 'react-router-dom'
import { Package, ShoppingCart, TrendingUp, Users, DollarSign, Clock } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Layout } from '../components/layout/Layout'
import { useAuth } from '../hooks/useAuth'

const DashboardPage = () => {
  const { user } = useAuth()

  const farmerStats = [
    { title: 'Active Products', value: '24', icon: Package, color: 'text-blue-600' },
    { title: 'Total Orders', value: '156', icon: ShoppingCart, color: 'text-green-600' },
    { title: 'Revenue This Month', value: '$3,450', icon: DollarSign, color: 'text-yellow-600' },
    { title: 'Pending Orders', value: '8', icon: Clock, color: 'text-orange-600' },
  ]

  const supplierStats = [
    { title: 'Orders Placed', value: '45', icon: ShoppingCart, color: 'text-blue-600' },
    { title: 'Favorite Farmers', value: '12', icon: Users, color: 'text-green-600' },
    { title: 'Spent This Month', value: '$2,180', icon: DollarSign, color: 'text-yellow-600' },
    { title: 'Pending Deliveries', value: '3', icon: Clock, color: 'text-orange-600' },
  ]

  const stats = user?.role === 'FARMER' ? farmerStats : supplierStats

  const quickActions =
    user?.role === 'FARMER'
      ? [
          {
            title: 'Add New Product',
            description: 'List a new product for sale',
            href: '/products/new',
            icon: Package,
          },
          {
            title: 'Manage Orders',
            description: 'View and update order status',
            href: '/orders',
            icon: ShoppingCart,
          },
          {
            title: 'View Analytics',
            description: 'Check your sales performance',
            href: '/analytics',
            icon: TrendingUp,
          },
        ]
      : [
          {
            title: 'Browse Products',
            description: 'Discover fresh produce from farmers',
            href: '/products',
            icon: Package,
          },
          {
            title: 'My Orders',
            description: 'Track your current orders',
            href: '/orders',
            icon: ShoppingCart,
          },
          {
            title: 'Find Farmers',
            description: 'Connect with local farmers',
            href: '/farmers',
            icon: Users,
          },
        ]

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            {user?.role === 'FARMER'
              ? "Here's an overview of your farming business"
              : "Here's your supplier dashboard overview"}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <action.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{action.description}</p>
                  <Button asChild className="w-full">
                    <Link to={action.href}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Recent Activity
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { action: 'New order received', time: '2 hours ago', type: 'order' },
                  {
                    action: 'Product "Organic Tomatoes" updated',
                    time: '5 hours ago',
                    type: 'product',
                  },
                  {
                    action: 'Payment received for Order #1234',
                    time: '1 day ago',
                    type: 'payment',
                  },
                  { action: 'New customer review received', time: '2 days ago', type: 'review' },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 last:border-b-0"
                  >
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        {activity.action}
                      </p>
                      <p className="text-sm text-slate-500">{activity.time}</p>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.type === 'order'
                          ? 'bg-blue-100 text-blue-800'
                          : activity.type === 'product'
                            ? 'bg-green-100 text-green-800'
                            : activity.type === 'payment'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {activity.type}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
