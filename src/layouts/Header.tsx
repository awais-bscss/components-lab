import { MenuIcon } from '@/icons'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  onMenuClick?: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 h-14 shrink-0 border-b border-border bg-surface text-foreground flex items-center justify-between px-6 select-none">
      <div className="flex items-center gap-3">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open navigation menu"
            className="lg:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        )}
        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs tracking-wide select-none shadow-xs">
          CL
        </div>
        <span className="text-base font-semibold tracking-tight text-foreground select-none">
          Components Lab
        </span>
      </div>
      <ThemeToggle />
    </header>
  )
}
