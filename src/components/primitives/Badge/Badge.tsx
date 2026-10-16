import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-medium border rounded-md transition-colors select-none',
  {
    variants: {
      variant: {
        default: 'bg-surface-muted border-border text-muted-foreground',
        primary: 'bg-primary-soft border-primary/20 text-primary-soft-foreground',
        success: 'bg-success-soft border-success-soft-border text-success-soft-foreground',
        warning: 'bg-warning-soft border-warning-soft-border text-warning-soft-foreground',
        error: 'bg-danger-soft border-danger-soft-border text-danger-soft-foreground',
        info: 'bg-info-soft border-info-soft-border text-info-soft-foreground',
      },
      size: {
        sm: 'px-1.5 py-0.25 text-[11px]',
        md: 'px-2 py-0.5 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export type BadgeVariantProps = VariantProps<typeof badgeVariants>

export interface BadgeProps extends BadgeVariantProps {
  dot?: boolean
  children: React.ReactNode
  className?: string
}

const dotColors: Record<NonNullable<BadgeVariantProps['variant']>, string> = {
  default: 'bg-muted-foreground',
  primary: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-danger',
  info: 'bg-info',
}

export function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  className,
}: BadgeProps) {
  const activeVariant = variant ?? 'default'
  return (
    <span className={cn(badgeVariants({ variant: activeVariant, size }), className)}>
      {dot && (
        <span
          className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[activeVariant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  )
}
