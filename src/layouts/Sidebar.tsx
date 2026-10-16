import { useEffect, useId, useMemo, useRef } from 'react'
import { NAV, type PageId } from '@/navigation'
import { SidebarSection } from './SidebarSection'
import { XIcon } from '@/icons'

interface SidebarProps {
  active: PageId
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ active, isOpen = false, onClose }: SidebarProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const titleId = useId()

  const totalItems = useMemo(
    () => NAV.reduce((acc, section) => acc + section.items.length, 0),
    []
  )

  useEffect(() => {
    if (!isOpen) return

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    if (focusable && focusable.length > 0) {
      focusable[0]?.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose?.()
        return
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const elements = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (elements.length === 0) return
        const first = elements[0]
        const last = elements[elements.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
      if (previousFocusRef.current) {
        previousFocusRef.current.focus()
      }
    }
  }, [isOpen, onClose])

  const content = (
    <div className="flex flex-col h-full bg-surface text-foreground select-none">
      <div className="h-14 px-4 flex items-center justify-between border-b border-border lg:hidden">
        <span id={titleId} className="font-semibold text-sm text-foreground">
          Navigation
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>

      <nav
        className="flex-1 px-3 py-4 space-y-6 overflow-y-auto"
        aria-label="Component navigation"
      >
        {NAV.map(section => (
          <SidebarSection
            key={section.label}
            section={section}
            active={active}
            onItemClick={onClose}
          />
        ))}
      </nav>

      <div className="px-4 py-3 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
        <span className="font-medium text-foreground">Components Lab</span>
        <span className="font-mono text-muted-foreground">{totalItems} items</span>
      </div>
    </div>
  )

  return (
    <>
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-surface h-full">
        {content}
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div
            className="fixed inset-0 bg-overlay backdrop-blur-xs transition-opacity"
            onClick={onClose}
            aria-hidden="true"
          />
          <div
            ref={drawerRef}
            className="relative w-64 max-w-[80vw] h-full shadow-2xl z-10 flex flex-col"
          >
            {content}
          </div>
        </div>
      )}
    </>
  )
}
