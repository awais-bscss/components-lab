import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const emptyStateVariants = cva(
  'flex flex-col items-center justify-center text-center select-none transition-colors w-full',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        card: 'bg-surface border border-border rounded-lg shadow-xs',
        dashed: 'bg-surface-muted/40 border border-dashed border-border rounded-lg',
        ghost: 'bg-surface-muted/60 rounded-lg',
      },
      size: {
        sm: 'p-6 max-w-sm',
        md: 'p-8 max-w-md',
        lg: 'p-12 max-w-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export type EmptyStateVariantProps = VariantProps<typeof emptyStateVariants>

export interface EmptyStateProps extends EmptyStateVariantProps {
  icon?: React.ReactNode
  title: string
  description?: React.ReactNode
  action?: React.ReactNode
  secondaryAction?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
  children,
  variant = 'default',
  size = 'md',
  className,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(emptyStateVariants({ variant, size }), className)}
    >
      {icon && (
        <div
          className="w-12 h-12 rounded-full bg-surface-muted border border-border flex items-center justify-center text-muted-foreground mb-3.5 shadow-xs shrink-0"
          aria-hidden="true"
        >
          {icon}
        </div>
      )}

      <h3 className="text-base font-semibold text-foreground tracking-tight mb-1">
        {title}
      </h3>

      {description && (
        <div className="text-xs text-muted-foreground leading-relaxed max-w-sm mb-4">
          {description}
        </div>
      )}

      {(action || secondaryAction) && (
        <div className="flex items-center gap-2.5 flex-wrap justify-center mt-1">
          {action}
          {secondaryAction}
        </div>
      )}

      {children && (
        <div className="mt-4 w-full flex flex-col items-center">
          {children}
        </div>
      )}
    </div>
  )
}
