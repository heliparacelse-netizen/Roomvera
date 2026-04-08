import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

export function Button({ children, variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, fullWidth = false, className, disabled, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white shadow-glow hover:shadow-glow-lg',
    secondary: 'bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 text-dark-900 dark:text-dark-100 border border-dark-200 dark:border-dark-700',
    ghost: 'hover:bg-dark-100 dark:hover:bg-dark-800 text-dark-600 dark:text-dark-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/20',
  }
  
  const sizes = { sm: 'text-sm px-3 py-1.5 gap-1.5', md: 'text-sm px-4 py-2.5 gap-2', lg: 'text-base px-6 py-3 gap-2.5', icon: 'p-2' }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className)} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <><svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>Chargement...</>
      ) : (<>{leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}{children}{rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}</>)}
    </button>
  )
}
