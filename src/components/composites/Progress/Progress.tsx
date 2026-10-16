import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const progressVariants = cva(
  'w-full bg-surface-muted rounded-full overflow-hidden border border-border/50',
  {
    variants: {
      size: {
        xs: 'h-1',
        sm: 'h-1.5',
        md: 'h-2',
        lg: 'h-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const progressFillVariants = cva(
  'h-full rounded-full transition-all duration-500 ease-out',
  {
    variants: {
      variant: {
        default: 'bg-muted-foreground',
        primary: 'bg-primary',
        success: 'bg-success',
        warning: 'bg-warning',
        error: 'bg-danger',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export type ProgressVariantProps = VariantProps<typeof progressVariants>
export type ProgressFillVariantProps = VariantProps<typeof progressFillVariants>

export interface ProgressProps extends ProgressVariantProps {
  value?: number
  variant?: ProgressFillVariantProps['variant']
  label?: string
  showValue?: boolean
  className?: string
}

export function Progress({
  value,
  variant = 'primary',
  size = 'md',
  label,
  showValue = false,
  className,
}: ProgressProps) {
  const indeterminate = value === undefined
  const clamped = Math.min(100, Math.max(0, value ?? 0))

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-xs font-medium text-foreground">{label}</span>}
          {showValue && !indeterminate && (
            <span className="text-xs font-mono text-muted-foreground">{clamped}%</span>
          )}
        </div>
      )}

      <div
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? 'Progress'}
        className={cn(progressVariants({ size }))}
      >
        <div
          className={cn(
            progressFillVariants({ variant }),
            indeterminate && 'animate-indeterminate'
          )}
          style={!indeterminate ? { width: `${clamped}%` } : undefined}
        />
      </div>
    </div>
  )
}
