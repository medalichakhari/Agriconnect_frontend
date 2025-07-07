import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterForm } from '../components/forms/AuthForms'
import { Layout } from '../components/layout/Layout'
import { useAuth } from '../hooks/useAuth'
import type { RegisterRequest } from '../types'

const RegisterPage = () => {
  const navigate = useNavigate()
  const { register: registerUser, isLoading } = useAuth()
  const [error, setError] = useState<string | null>(null)

  const handleRegister = async (data: RegisterRequest) => {
    try {
      setError(null)
      await registerUser(data)
      navigate('/dashboard')
    } catch {
      setError('Registration failed. Please try again.')
    }
  }

  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Join AgriConnect
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
                Sign in here
              </Link>
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />

          <div className="text-center text-xs text-slate-500">
            By registering, you agree to our{' '}
            <a href="#" className="text-green-600 hover:text-green-500">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-green-600 hover:text-green-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RegisterPage
