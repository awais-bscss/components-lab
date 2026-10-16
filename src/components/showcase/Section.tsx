import type React from 'react'

interface SectionProps {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 select-none">
        {title}
      </p>
      <div className="border border-border rounded-lg p-5 bg-surface text-foreground shadow-xs">
        {children}
      </div>
    </div>
  )
}
