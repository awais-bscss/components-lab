import React, { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/cn'
import { XIcon } from '@/icons'

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: ModalSize
  closeOnOverlay?: boolean
  footer?: React.ReactNode
  'aria-describedby'?: string
}

const sizeCls: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

const FOCUSABLE_SELECTOR =
  'button:not([disabled]):not([aria-hidden="true"]), [href]:not([aria-hidden="true"]), input:not([disabled]):not([type="hidden"]):not([aria-hidden="true"]), select:not([disabled]):not([aria-hidden="true"]), textarea:not([disabled]):not([aria-hidden="true"]), [tabindex]:not([tabindex="-1"]):not([aria-hidden="true"])'

export function Modal({
  open,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlay = true,
  footer,
  'aria-describedby': ariaDescribedBy,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const prevFocusRef = useRef<HTMLElement | null>(null)
  const titleId = useId()

  useEffect(() => {
    if (open) {
      prevFocusRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null

      requestAnimationFrame(() => {
        const focusable =
          dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        if (focusable && focusable.length > 0) {
          focusable[0]?.focus()
        } else {
          dialogRef.current?.focus()
        }
      })
    } else {
      prevFocusRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (open) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-overlay backdrop-blur-xs transition-opacity"
        onClick={closeOnOverlay ? onClose : undefined}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={ariaDescribedBy}
        tabIndex={-1}
        className={cn(
          'relative z-10 w-full bg-surface border border-border rounded-lg shadow-2xl focus:outline-none overflow-hidden',
          sizeCls[size]
        )}
      >
        {title && (
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-border">
            <h2 id={titleId} className="text-base font-semibold text-foreground">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="text-muted-foreground hover:text-foreground hover:bg-surface-muted transition-colors rounded-md p-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="p-5 text-sm leading-relaxed text-foreground">
          {children}
        </div>

        {footer && (
          <div className="px-5 py-3.5 border-t border-border flex items-center justify-end gap-2.5 bg-surface-muted/30">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}
