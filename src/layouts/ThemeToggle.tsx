import { useTheme } from '@/hooks/useTheme'
import { SunIcon, MoonIcon } from '@/icons'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const nextThemeLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={nextThemeLabel}
      aria-pressed={isDark}
      className="p-2 rounded-md border border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-muted transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
    >
      {isDark ? (
        <SunIcon className="w-4 h-4 text-warning" />
      ) : (
        <MoonIcon className="w-4 h-4 text-primary" />
      )}
    </button>
  )
}
