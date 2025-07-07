import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux'
import { loginStart, loginSuccess, loginFailure, logout } from '../store/slices/authSlice'
import { authApi } from '../services/api'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import type { LoginRequest, RegisterRequest } from '../types'

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const { user, token, isAuthenticated, isLoading, error } = useAppSelector(state => state.auth)
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize auth state from stored data
  useEffect(() => {
    const handleLogout = () => {
      Cookies.remove('authToken')
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
      dispatch(logout())
    }

    const initializeAuth = async () => {
      try {
        const storedToken = Cookies.get('authToken') || localStorage.getItem('authToken')
        const storedUser = localStorage.getItem('user')

        if (storedToken && storedUser) {
          const user = JSON.parse(storedUser)
          dispatch(loginSuccess({ user, token: storedToken }))

          // Verify token is still valid
          try {
            await authApi.me()
          } catch {
            // Token is invalid, clear auth
            handleLogout()
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        handleLogout()
      } finally {
        setIsInitialized(true)
      }
    }

    initializeAuth()
  }, [dispatch])

  const handleLogin = async (credentials: LoginRequest) => {
    try {
      dispatch(loginStart())
      const response = await authApi.login(credentials)

      // Store auth data
      Cookies.set('authToken', response.token, { expires: 7 }) // 7 days
      localStorage.setItem('authToken', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))

      dispatch(loginSuccess(response))
      toast.success('Login successful!')
      return response
    } catch (error: unknown) {
      const message = 'Login failed'
      dispatch(loginFailure(message))
      toast.error(message)
      throw error
    }
  }

  const handleRegister = async (data: RegisterRequest) => {
    try {
      dispatch(loginStart())
      const response = await authApi.register(data)

      // Store auth data
      Cookies.set('authToken', response.token, { expires: 7 })
      localStorage.setItem('authToken', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))

      dispatch(loginSuccess(response))
      toast.success('Registration successful!')
      return response
    } catch (error: unknown) {
      const message = 'Registration failed'
      dispatch(loginFailure(message))
      toast.error(message)
      throw error
    }
  }

  const handleLogout = async () => {
    try {
      await authApi.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear auth data
      Cookies.remove('authToken')
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
      dispatch(logout())
      toast.success('Logged out successfully')
    }
  }

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    isInitialized,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  }
}
