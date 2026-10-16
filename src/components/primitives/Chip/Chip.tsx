import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import { XIcon } from '@/icons'

const chipVariants = cva(
  'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium transition-colors select-none',
  {
    variants: {
      variant: {
        default: 'bg-surface-muted border-border text-muted-foreground hover:border-border-strong',
        primary: 'bg-primary-soft border-primary/20 text-primary-soft-foreground hover:border-primary/40',
        success: 'bg-success-soft border-success-soft-border text-success-soft-foreground hover:border-success',
        warning: 'bg-warning-soft border-warning-soft-border text-warning-soft-foreground hover:border-warning',
        error: 'bg-danger-soft border-danger-soft-border text-danger-soft-foreground hover:border-danger',
      },
      selected: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        selected: true,
        className: 'bg-border-strong text-foreground border-border-strong',
      },
      {
        variant: 'primary',
        selected: true,
        className: 'bg-primary text-primary-foreground border-primary',
      },
      {
        variant: 'success',
        selected: true,
        className: 'bg-success text-white border-success',
      },
      {
        variant: 'warning',
        selected: true,
        className: 'bg-warning text-slate-950 font-medium border-warning',
      },
      {
        variant: 'error',
        selected: true,
        className: 'bg-danger text-white border-danger',
      },
    ],
    defaultVariants: {
      variant: 'default',
      selected: false,
    },
  }
)

export type ChipVariantProps = VariantProps<typeof chipVariants>

export interface ChipProps extends Omit<ChipVariantProps, 'selected'> {
  selected?: boolean
  disabled?: boolean
  leftIcon?: React.ReactNode
  onRemove?: () => void
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export function Chip({
  variant = 'default',
  selected = false,
  disabled = false,
  leftIcon,
  onRemove,
  onClick,
  children,
  className,
}: ChipProps) {
  const isClickable = !!onClick
  const isRemovable = !!onRemove

  const chipClasses = cn(
    chipVariants({ variant, selected }),
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  const innerContent = (
    <>
      {leftIcon && <span aria-hidden="true" className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
    </>
  )

  const removeButton = isRemovable ? (
    <button
      type="button"
      onClick={e => {
        e.stopPropagation()
        onRemove?.()
      }}
      disabled={disabled}
      aria-label="Remove"
      className="p-0.5 -mr-1 rounded-full text-current opacity-70 hover:opacity-100 hover:bg-foreground/15 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background"
    >
      <XIcon className="w-3 h-3" />
    </button>
  ) : null

  if (isClickable && isRemovable) {
    return (
      <span className={cn(chipClasses, 'p-0 overflow-hidden')}>
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          className="inline-flex items-center gap-1.5 pl-2.5 pr-1 py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded-l-full"
        >
          {innerContent}
        </button>
        <span className="pr-1.5 py-1 flex items-center">
          {removeButton}
        </span>
      </span>
    )
  }

  if (isClickable || disabled) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-disabled={disabled ? 'true' : undefined}
        className={cn(
          chipClasses,
          'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background'
        )}
      >
        {innerContent}
      </button>
    )
  }

  return (
    <span className={chipClasses}>
      {innerContent}
      {removeButton}
    </span>
  )
}
