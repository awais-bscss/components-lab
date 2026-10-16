import React, { useState, useRef, useId } from 'react'
import { cn } from '@/lib/cn'
import { ChevronDownIcon } from '@/icons'

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
  disabled?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
  multiple?: boolean
  defaultOpen?: string[]
  className?: string
}

export function Accordion({
  items,
  multiple = false,
  defaultOpen = [],
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpen)
  const baseId = useId()
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])

  const toggle = (id: string) => {
    setOpenIds(prev => {
      if (prev.includes(id)) return prev.filter(i => i !== id)
      return multiple ? [...prev, id] : [id]
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    const active = items
      .map((item, i) => ({ item, i }))
      .filter(({ item }) => !item.disabled)
    const pos = active.findIndex(({ i }) => i === idx)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      btnRefs.current[active[(pos + 1) % active.length]?.i ?? idx]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      btnRefs.current[active[(pos - 1 + active.length) % active.length]?.i ?? idx]?.focus()
    } else if (e.key === 'Home') {
      e.preventDefault()
      btnRefs.current[active[0]?.i ?? 0]?.focus()
    } else if (e.key === 'End') {
      e.preventDefault()
      btnRefs.current[active[active.length - 1]?.i ?? 0]?.focus()
    }
  }

  return (
    <div
      className={cn(
        'border border-border rounded-lg overflow-hidden divide-y divide-border bg-surface shadow-xs',
        className
      )}
    >
      {items.map((item, idx) => {
        const isOpen = openIds.includes(item.id)
        const triggerId = `${baseId}-trigger-${item.id}`
        const panelId = `${baseId}-panel-${item.id}`

        return (
          <div key={item.id}>
            <button
              id={triggerId}
              ref={el => {
                btnRefs.current[idx] = el
              }}
              type="button"
              disabled={item.disabled}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              onKeyDown={e => handleKeyDown(e, idx)}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold text-foreground bg-surface hover:bg-surface-muted transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed select-none"
            >
              <span>{item.title}</span>
              <ChevronDownIcon
                className={cn(
                  'w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200',
                  isOpen && 'rotate-180 text-foreground'
                )}
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              inert={!isOpen ? true : undefined}
              className={cn(
                'grid transition-all duration-200 ease-in-out',
                isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="px-4 py-3 text-sm leading-relaxed text-muted-foreground bg-surface-muted/30 border-t border-border">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
