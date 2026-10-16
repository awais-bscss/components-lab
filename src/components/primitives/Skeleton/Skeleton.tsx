import type React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const skeletonVariants = cva(
  'bg-surface-muted block shrink-0',
  {
    variants: {
      variant: {
        text: 'rounded h-4 w-full',
        circular: 'rounded-full',
        rectangular: 'rounded-md',
      },
      animation: {
        pulse: 'animate-pulse',
        wave: 'animate-shimmer',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'text',
      animation: 'pulse',
    },
  }
)

export type SkeletonVariantProps = VariantProps<typeof skeletonVariants>

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SkeletonVariantProps {
  width?: string | number
  height?: string | number
}

export function Skeleton({
  variant = 'text',
  animation = 'pulse',
  width,
  height,
  className,
  style,
  ...props
}: SkeletonProps) {
  const inlineStyles: React.CSSProperties = {
    ...(width !== undefined && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height !== undefined && { height: typeof height === 'number' ? `${height}px` : height }),
    ...style,
  }

  return (
    <div
      role="status"
      aria-label="Loading..."
      aria-busy="true"
      className={cn(skeletonVariants({ variant, animation }), className)}
      style={inlineStyles}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
