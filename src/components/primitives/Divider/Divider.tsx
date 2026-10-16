import { cn } from '@/lib/cn'

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  label?: string
  className?: string
}

export function Divider({ orientation = 'horizontal', label, className }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn('w-px self-stretch bg-border', className)}
      />
    )
  }

  if (label) {
    return (
      <div role="separator" className={cn('flex items-center gap-3 w-full', className)}>
        <div className="flex-1 h-px bg-border" aria-hidden="true" />
        <span className="text-xs text-muted-foreground font-medium shrink-0">{label}</span>
        <div className="flex-1 h-px bg-border" aria-hidden="true" />
      </div>
    )
  }

  return <div role="separator" className={cn('h-px w-full bg-border', className)} />
}
