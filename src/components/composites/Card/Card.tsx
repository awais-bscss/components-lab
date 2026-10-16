import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const cardVariants = cva(
  'rounded-lg overflow-hidden transition-colors text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-surface border border-border',
        elevated: 'bg-surface shadow-md border-0',
        outlined: 'bg-transparent border border-border-strong',
        ghost: 'bg-surface-muted border-0',
      },
      padding: {
        none: '',
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'none',
    },
  }
)

export type CardVariantProps = VariantProps<typeof cardVariants>
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'ghost'

export interface CardProps extends CardVariantProps {
  children: React.ReactNode
  className?: string
}

export interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('px-5 py-3.5 border-b border-border font-semibold text-sm text-foreground', className)}>
      {children}
    </div>
  )
}

export function CardBody({ children, className }: CardBodyProps) {
  return (
    <div className={cn('p-5 text-sm leading-relaxed text-foreground', className)}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('px-5 py-3 border-t border-border flex items-center gap-2.5 text-xs text-muted-foreground', className)}>
      {children}
    </div>
  )
}

export function Card({
  variant = 'default',
  padding = 'none',
  children,
  className,
}: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, padding }), className)}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
