import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  success?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, leftIcon, rightIcon, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)

    return (
      <motion.div className="relative" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500">
            {leftIcon}
          </div>
        )}

        <input
          type={type}
          className={cn(
            'flex h-11 w-full rounded-lg border bg-white px-3 py-2 text-sm shadow-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-950 dark:placeholder:text-slate-400',

            // Base border and focus styles
            'border-slate-200 dark:border-slate-800',
            'focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-green-500/20',

            // Error state
            error &&
              'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20 bg-red-50 dark:bg-red-950/50',

            // Success state
            success &&
              'border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500/20 bg-green-50 dark:bg-green-950/50',

            // Icon padding
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',

            className
          )}
          ref={ref}
          onFocus={e => {
            setIsFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={e => {
            setIsFocused(false)
            props.onBlur?.(e)
          }}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500">
            {rightIcon}
          </div>
        )}

        {/* Focus ring animation */}
        {isFocused && (
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-green-500/50 pointer-events-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
