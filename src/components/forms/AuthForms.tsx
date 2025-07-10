import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Select } from '../ui/select'
import { FormField } from '../ui/form-field'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import type { LoginRequest, RegisterRequest } from '../../types'

// Enhanced validation schemas
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters long'),
    email: z.string().email('Please enter a valid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      ),
    confirmPassword: z.string(),
    role: z.enum(['FARMER', 'SUPPLIER'], {
      required_error: 'Please select your role',
    }),
    phone: z.string().optional(),
    address: z.string().optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

interface LoginFormProps {
  onSubmit: (data: LoginRequest) => Promise<void>
  isLoading?: boolean
}

export const LoginForm = ({ onSubmit, isLoading }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  })

  const watchedFields = watch()

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
          Welcome Back
        </CardTitle>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Sign in to your AgriConnect account
        </p>
      </CardHeader>
      <CardContent>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <FormField
            label="Email Address"
            required
            error={errors.email?.message}
            success={watchedFields.email && !errors.email ? 'Valid email' : undefined}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              {...register('email')}
              error={!!errors.email}
              success={!!(watchedFields.email && !errors.email)}
              leftIcon={<EnvelopeIcon className="h-5 w-5" />}
            />
          </FormField>

          <FormField
            label="Password"
            required
            error={errors.password?.message}
            success={watchedFields.password && !errors.password ? 'Password looks good' : undefined}
          >
            <Input
              type="password"
              placeholder="Enter your password"
              {...register('password')}
              error={!!errors.password}
              success={!!(watchedFields.password && !errors.password)}
              leftIcon={<LockClosedIcon className="h-5 w-5" />}
            />
          </FormField>

          <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </motion.form>
      </CardContent>
    </Card>
  )
}

interface RegisterFormProps {
  onSubmit: (data: RegisterRequest) => Promise<void>
  isLoading?: boolean
}

type RegisterFormData = z.infer<typeof registerSchema>

export const RegisterForm = ({ onSubmit, isLoading }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const watchedFields = watch()

  const handleFormSubmit = (data: RegisterFormData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...submitData } = data
    onSubmit(submitData)
  }

  const roleOptions = [
    { value: 'FARMER', label: '🌾 Farmer' },
    { value: 'SUPPLIER', label: '🏪 Supplier' },
  ]

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
          Join AgriConnect
        </CardTitle>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Create your account to get started
        </p>
      </CardHeader>
      <CardContent>
        <motion.form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <FormField
            label="Full Name"
            required
            error={errors.name?.message}
            success={watchedFields.name && !errors.name ? 'Name looks good' : undefined}
          >
            <Input
              type="text"
              placeholder="Enter your full name"
              {...register('name')}
              error={!!errors.name}
              success={!!(watchedFields.name && !errors.name)}
              leftIcon={<UserIcon className="h-5 w-5" />}
            />
          </FormField>

          <FormField
            label="Email Address"
            required
            error={errors.email?.message}
            success={watchedFields.email && !errors.email ? 'Valid email' : undefined}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              {...register('email')}
              error={!!errors.email}
              success={!!(watchedFields.email && !errors.email)}
              leftIcon={<EnvelopeIcon className="h-5 w-5" />}
            />
          </FormField>

          <FormField label="Role" required error={errors.role?.message}>
            <Select
              {...register('role')}
              placeholder="Select your role"
              options={roleOptions}
              error={!!errors.role}
              success={!!(watchedFields.role && !errors.role)}
            />
          </FormField>

          <FormField
            label="Password"
            required
            error={errors.password?.message}
            success={watchedFields.password && !errors.password ? 'Strong password' : undefined}
          >
            <Input
              type="password"
              placeholder="Create a strong password"
              {...register('password')}
              error={!!errors.password}
              success={!!(watchedFields.password && !errors.password)}
              leftIcon={<LockClosedIcon className="h-5 w-5" />}
            />
          </FormField>

          <FormField
            label="Confirm Password"
            required
            error={errors.confirmPassword?.message}
            success={
              watchedFields.confirmPassword && !errors.confirmPassword
                ? 'Passwords match'
                : undefined
            }
          >
            <Input
              type="password"
              placeholder="Confirm your password"
              {...register('confirmPassword')}
              error={!!errors.confirmPassword}
              success={!!(watchedFields.confirmPassword && !errors.confirmPassword)}
              leftIcon={<LockClosedIcon className="h-5 w-5" />}
            />
          </FormField>

          <FormField
            label="Phone Number"
            error={errors.phone?.message}
            success={watchedFields.phone && !errors.phone ? 'Valid phone number' : undefined}
          >
            <Input
              type="tel"
              placeholder="Phone number (optional)"
              {...register('phone')}
              error={!!errors.phone}
              success={!!(watchedFields.phone && !errors.phone)}
              leftIcon={<PhoneIcon className="h-5 w-5" />}
            />
          </FormField>

          <FormField
            label="Address"
            error={errors.address?.message}
            success={watchedFields.address && !errors.address ? 'Address added' : undefined}
          >
            <Input
              type="text"
              placeholder="Your address (optional)"
              {...register('address')}
              error={!!errors.address}
              success={!!(watchedFields.address && !errors.address)}
              leftIcon={<MapPinIcon className="h-5 w-5" />}
            />
          </FormField>

          <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </motion.form>
      </CardContent>
    </Card>
  )
}
