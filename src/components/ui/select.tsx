import * as React from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { cn } from '../../lib/utils'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string
  error?: boolean
  success?: boolean
  options?: { value: string; label: string }[]
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, placeholder, error, success, options, children, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)

    return (
      <motion.div className="relative" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <select
          className={cn(
            'flex h-11 w-full rounded-lg border bg-white px-3 py-2 text-sm shadow-sm transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-950 appearance-none cursor-pointer pr-10',

            // Base border and focus styles
            'border-slate-200 dark:border-slate-800',
            'focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-green-500/20',

            // Error state
            error &&
              'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20 bg-red-50 dark:bg-red-950/50',

            // Success state
            success &&
              'border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500/20 bg-green-50 dark:bg-green-950/50',

            // Placeholder styling
            !props.value && 'text-slate-500 dark:text-slate-400',

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
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options
            ? options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            : children}
        </select>

        {/* Dropdown Arrow */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ChevronDownIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" />
        </div>

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
Select.displayName = 'Select'

export { Select }
