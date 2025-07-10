import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, User, ShoppingCart, Package, Home, LogOut, Leaf, Bell } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../ui/button'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  // Get auth state
  const authResult = useAuth()

  // Early return if auth hook returns invalid data
  if (!authResult) {
    return <div>Loading...</div>
  }

  const { user, isAuthenticated, isInitialized, logout } = authResult

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  // Don't render auth-dependent content until auth is initialized
  if (!isInitialized) {
    return (
      <header className="bg-white/80 backdrop-blur-md dark:bg-slate-900/80 shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                    AgriConnect
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 -mt-1">
                    Farm to Table Direct
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-green-600 border-t-transparent"></div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  const getRoleBasedLinks = () => {
    if (!user) return []

    const commonLinks = [
      { to: '/dashboard', label: 'Dashboard', icon: Home },
      { to: '/profile', label: 'Profile', icon: User },
    ]

    if (user.role === 'FARMER') {
      return [
        ...commonLinks,
        { to: '/products', label: 'My Products', icon: Package },
        { to: '/orders', label: 'Orders', icon: ShoppingCart },
        { to: '/categories', label: 'Categories', icon: Package },
      ]
    }

    if (user.role === 'SUPPLIER') {
      return [
        ...commonLinks,
        { to: '/products', label: 'Browse Products', icon: Package },
        { to: '/orders', label: 'My Orders', icon: ShoppingCart },
      ]
    }

    return commonLinks
  }

  const navLinks = getRoleBasedLinks()

  return (
    <header className="bg-white/80 backdrop-blur-md dark:bg-slate-900/80 shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                AgriConnect
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 -mt-1">
                Farm to Table Direct
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {isAuthenticated ? (
              <>
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200 group"
                  >
                    <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
                <div className="h-6 w-px bg-slate-300 dark:bg-slate-600 mx-2"></div>
                <button
                  className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="View notifications"
                  title="Notifications"
                >
                  <Bell className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 px-4 py-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200 font-medium"
                >
                  About
                </Link>
                <Link
                  to="/products"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 px-4 py-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200 font-medium"
                >
                  Products
                </Link>
              </>
            )}
          </nav>

          {/* Desktop Auth Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-full">
                  <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {user?.name}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 -mt-1">
                      {user?.role?.toLowerCase()}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-200"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" asChild className="font-medium">
                  <Link to="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 backdrop-blur-md dark:bg-slate-900/95">
            <div className="flex flex-col space-y-1">
              {isAuthenticated ? (
                <>
                  <div className="px-4 py-3 mb-2 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl mx-2">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {user?.name?.charAt(0).toUpperCase() || 'U'}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900 dark:text-slate-100">
                          {user?.name}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {user?.role?.toLowerCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  {navLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 flex items-center space-x-3 py-3 px-4 mx-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                  <div className="pt-2 mt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 flex items-center space-x-3 py-3 px-4 mx-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-200"
                    >
                      <LogOut className="h-5 w-5" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/about"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 py-3 px-4 mx-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/products"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 py-3 px-4 mx-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <div className="pt-2 mt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                    <Link
                      to="/login"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 py-3 px-4 mx-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-3 px-4 mx-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-medium flex items-center justify-center mt-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
