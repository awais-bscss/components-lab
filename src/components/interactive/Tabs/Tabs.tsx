import React, { useState, useRef, useId } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
}

const tabsListVariants = cva('flex items-center', {
  variants: {
    variant: {
      line: 'border-b border-border gap-1',
      pill: 'bg-surface-muted p-1 rounded-lg gap-1 w-fit border border-border',
      card: 'gap-1.5',
    },
  },
  defaultVariants: {
    variant: 'line',
  },
})

const tabTriggerVariants = cva(
  'inline-flex items-center gap-2 cursor-pointer transition-colors duration-150 select-none text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        line: 'px-3.5 py-2 border-b-2 -mb-px',
        pill: 'px-3 py-1.5 rounded-md',
        card: 'px-3.5 py-2 rounded-md border',
      },
      isActive: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'line',
        isActive: true,
        className: 'border-primary text-primary',
      },
      {
        variant: 'line',
        isActive: false,
        className: 'border-transparent text-muted-foreground hover:text-foreground hover:border-border',
      },
      {
        variant: 'pill',
        isActive: true,
        className: 'bg-primary text-primary-foreground shadow-xs',
      },
      {
        variant: 'pill',
        isActive: false,
        className: 'text-muted-foreground hover:text-foreground hover:bg-surface',
      },
      {
        variant: 'card',
        isActive: true,
        className: 'bg-primary-soft border-primary/30 text-primary-soft-foreground shadow-xs',
      },
      {
        variant: 'card',
        isActive: false,
        className: 'bg-surface border-border text-muted-foreground hover:text-foreground hover:bg-surface-muted',
      },
    ],
    defaultVariants: {
      variant: 'line',
      isActive: false,
    },
  }
)

export type TabsVariantProps = VariantProps<typeof tabsListVariants>

export interface TabsProps extends TabsVariantProps {
  'aria-label': string
  items: TabItem[]
  defaultTab?: string
  className?: string
}

export function Tabs({
  'aria-label': ariaLabel,
  items,
  defaultTab,
  variant = 'line',
  className,
}: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTab ?? items[0]?.id)
  const baseId = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const enabled = items
    .map((item, i) => ({ item, i }))
    .filter(({ item }) => !item.disabled)

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    const pos = enabled.findIndex(({ i }) => i === idx)
    let next = -1

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      next = enabled[(pos + 1) % enabled.length]?.i ?? idx
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      next = enabled[(pos - 1 + enabled.length) % enabled.length]?.i ?? idx
    } else if (e.key === 'Home') {
      e.preventDefault()
      next = enabled[0]?.i ?? idx
    } else if (e.key === 'End') {
      e.preventDefault()
      next = enabled[enabled.length - 1]?.i ?? idx
    }

    if (next !== -1) {
      const target = items[next]
      if (target) {
        setActiveId(target.id)
        tabRefs.current[next]?.focus()
      }
    }
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className={cn(tabsListVariants({ variant }))}
      >
        {items.map((tab, idx) => {
          const isActive = activeId === tab.id
          return (
            <button
              key={tab.id}
              id={`${baseId}-tab-${tab.id}`}
              ref={el => {
                tabRefs.current[idx] = el
              }}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${tab.id}`}
              disabled={tab.disabled}
              tabIndex={isActive ? 0 : -1}
              onClick={() => !tab.disabled && setActiveId(tab.id)}
              onKeyDown={e => handleKeyDown(e, idx)}
              className={cn(tabTriggerVariants({ variant, isActive }))}
            >
              {tab.icon && <span aria-hidden="true" className="shrink-0">{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {items.map(tab => (
        <div
          key={tab.id}
          id={`${baseId}-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          className="mt-3.5"
          hidden={activeId !== tab.id}
        >
          {activeId === tab.id && tab.content}
        </div>
      ))}
    </div>
  )
}
