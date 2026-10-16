import { type NavSection, type PageId } from '@/navigation'
import { SidebarItem } from './SidebarItem'

interface SidebarSectionProps {
  section: NavSection
  active: PageId
  onItemClick?: () => void
}

export function SidebarSection({ section, active, onItemClick }: SidebarSectionProps) {
  return (
    <div>
      <div className="px-2 mb-2 select-none">
        <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground block">
          {section.label}
        </span>
      </div>
      <ul className="space-y-0.5 pl-3" role="list">
        {section.items.map(item => (
          <li key={item.id}>
            <SidebarItem
              item={item}
              isActive={active === item.id}
              onClick={onItemClick}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
