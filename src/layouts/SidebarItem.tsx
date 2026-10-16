import { type NavItem } from '@/navigation'
import { cn } from '@/lib/cn'

interface SidebarItemProps {
  item: NavItem
  isActive: boolean
  onClick?: () => void
}

export function SidebarItem({ item, isActive, onClick }: SidebarItemProps) {
  const Icon = item.icon

  return (
    <a
      href={`#/${item.id}`}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors duration-150 select-none cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        isActive
          ? 'bg-primary-soft text-primary-soft-foreground font-medium'
          : 'text-muted-foreground hover:bg-surface-muted hover:text-foreground'
      )}
    >
      <span className={cn('shrink-0 w-4 h-4 flex items-center justify-center', isActive ? 'text-primary-soft-foreground' : 'text-muted-foreground group-hover:text-foreground')}>
        <Icon className="w-4 h-4" />
      </span>
      <span className="truncate">{item.label}</span>
    </a>
  )
}
