import React, { useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import { InfoIcon, CheckCircleIcon, WarningIcon, AlertCircleIcon, XIcon } from '@/icons'

const alertVariants = cva(
  'flex gap-3 rounded-lg border p-3.5 text-xs transition-colors',
  {
    variants: {
      variant: {
        info: 'bg-info-soft border-info-soft-border text-info-soft-foreground',
        success: 'bg-success-soft border-success-soft-border text-success-soft-foreground',
        warning: 'bg-warning-soft border-warning-soft-border text-warning-soft-foreground',
        error: 'bg-danger-soft border-danger-soft-border text-danger-soft-foreground',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
)

export type AlertVariantProps = VariantProps<typeof alertVariants>

export interface AlertProps extends AlertVariantProps {
  title?: string
  children: React.ReactNode
  dismissible?: boolean
  className?: string
}

function getAlertIcon(variant: AlertVariantProps['variant']) {
  switch (variant) {
    case 'success':
      return <CheckCircleIcon className="w-4 h-4 shrink-0 text-success" />
    case 'warning':
      return <WarningIcon className="w-4 h-4 shrink-0 text-warning" />
    case 'error':
      return <AlertCircleIcon className="w-4 h-4 shrink-0 text-danger" />
    case 'info':
    default:
      return <InfoIcon className="w-4 h-4 shrink-0 text-info" />
  }
}

export function Alert({
  variant = 'info',
  title,
  children,
  dismissible = false,
  className,
}: AlertProps) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  const isUrgent = variant === 'error' || variant === 'warning'
  const role = isUrgent ? 'alert' : 'status'

  return (
    <div role={role} className={cn(alertVariants({ variant }), className)}>
      <span className="shrink-0 mt-0.5" aria-hidden="true">
        {getAlertIcon(variant)}
      </span>

      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold text-sm mb-0.5 text-foreground">{title}</p>}
        <div className="text-xs leading-relaxed opacity-95">{children}</div>
      </div>

      {dismissible && (
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss alert"
          className="shrink-0 p-0.5 rounded opacity-60 hover:opacity-100 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <XIcon className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  )
}
