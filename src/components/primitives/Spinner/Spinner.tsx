import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const spinnerVariants = cva(
  'rounded-full animate-spin',
  {
    variants: {
      size: {
        xs: 'w-3 h-3 border',
        sm: 'w-4 h-4 border-2',
        md: 'w-5 h-5 border-2',
        lg: 'w-7 h-7 border-[2.5px]',
        xl: 'w-10 h-10 border-3',
      },
      variant: {
        default: 'border-border-strong border-t-foreground',
        primary: 'border-primary/25 border-t-primary',
        white: 'border-primary-foreground/30 border-t-primary-foreground',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  }
)

export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>

export interface SpinnerProps extends SpinnerVariantProps {
  label?: string
  className?: string
}

export function Spinner({
  size = 'md',
  variant = 'primary',
  label,
  className,
}: SpinnerProps) {
  return (
    <div role="status" className={cn('inline-flex flex-col items-center gap-1.5', className)}>
      <div
        aria-hidden="true"
        className={cn(spinnerVariants({ size, variant }))}
      />
      {label && <span className="text-xs text-muted-foreground">{label}</span>}
      <span className="sr-only">{label ?? 'Loading...'}</span>
    </div>
  )
}
