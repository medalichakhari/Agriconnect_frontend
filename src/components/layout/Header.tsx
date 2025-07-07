import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, User, ShoppingCart, Package, Home, LogOut } from 'lucide-react'
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
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AC</span>
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  AgriConnect
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
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
    <header className="bg-white shadow-sm border-b dark:bg-slate-900 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AC</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-slate-100">
              AgriConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isAuthenticated ? (
              <>
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 flex items-center space-x-1 transition-colors"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </>
            ) : (
              <>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
                >
                  About
                </Link>
              </>
            )}
          </nav>

          {/* Desktop Auth Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Welcome, {user?.name}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-slate-800">
            <div className="flex flex-col space-y-2">
              {isAuthenticated ? (
                <>
                  {navLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <link.icon className="h-4 w-4" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                  <div className="pt-2 border-t dark:border-slate-800">
                    <div className="px-3 py-2 text-sm text-slate-600 dark:text-slate-300">
                      Welcome, {user?.name}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/about"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/login"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
