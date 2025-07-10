import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LoginForm } from '../components/forms/AuthForms'
import { Layout } from '../components/layout/Layout'
import { useAuth } from '../hooks/useAuth'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import type { LoginRequest } from '../types'

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, isLoading } = useAuth()
  const [error, setError] = useState<string | null>(null)

  const from = location.state?.from?.pathname || '/dashboard'

  const handleLogin = async (data: LoginRequest) => {
    try {
      setError(null)
      await login(data)
      navigate(from, { replace: true })
    } catch {
      setError('Invalid email or password')
    }
  }

  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-950/20 dark:via-slate-900 dark:to-blue-950/20">
          <div className="absolute inset-0 bg-pattern opacity-50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-md w-full space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mx-auto h-16 w-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-2xl">🌾</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                  Welcome Back
                </h2>
                <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
                  Sign in to your AgriConnect account
                </p>
              </motion.div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-3 dark:bg-red-950/50 dark:border-red-800 dark:text-red-400"
              >
                <ExclamationTriangleIcon className="h-5 w-5 flex-shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Login Form */}
            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />

            {/* Register Link */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="font-medium text-green-600 hover:text-green-500 transition-colors duration-200"
                >
                  Create one here
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default LoginPage
