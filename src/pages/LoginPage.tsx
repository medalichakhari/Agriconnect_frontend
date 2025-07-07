import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LoginForm } from '../components/forms/AuthForms'
import { Layout } from '../components/layout/Layout'
import { useAuth } from '../hooks/useAuth'
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
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Welcome Back</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-green-600 hover:text-green-500">
                Sign up here
              </Link>
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
        </div>
      </div>
    </Layout>
  )
}

export default LoginPage
