import React, { forwardRef, useId } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const inputVariants = cva(
  'w-full bg-surface border rounded-md text-foreground placeholder:text-muted-foreground transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        sm: 'h-8 text-xs px-2.5',
        md: 'h-9 text-sm px-3',
        lg: 'h-10 text-sm px-3.5',
      },
      hasError: {
        true: 'border-danger focus:border-danger focus:ring-danger',
        false: 'border-border hover:border-border-strong focus:border-primary',
      },
    },
    defaultVariants: {
      size: 'md',
      hasError: false,
    },
  }
)

export type InputVariantProps = VariantProps<typeof inputVariants>

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  hint?: string
  size?: InputVariantProps['size']
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    error,
    hint,
    size = 'md',
    leftIcon,
    rightIcon,
    id: externalId,
    className,
    ...props
  },
  ref
) {
  const autoId = useId()
  const inputId = externalId || autoId
  const errorId = `${inputId}-error`
  const hintId = `${inputId}-hint`

  const describedBy = [
    error ? errorId : '',
    hint && !error ? hintId : '',
  ]
    .filter(Boolean)
    .join(' ') || undefined

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold text-foreground select-none">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <span
            className="absolute left-2.5 text-muted-foreground pointer-events-none flex items-center justify-center w-4 h-4"
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(
            inputVariants({ size, hasError: !!error }),
            leftIcon && 'pl-8',
            rightIcon && 'pr-8',
            className
          )}
          {...props}
        />

        {rightIcon && (
          <span
            className="absolute right-2.5 text-muted-foreground pointer-events-none flex items-center justify-center w-4 h-4"
            aria-hidden="true"
          >
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <p id={errorId} className="text-xs text-danger-soft-foreground font-medium" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={hintId} className="text-xs text-muted-foreground" role="status">
          {hint}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'
