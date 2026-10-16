import type React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { type Theme, ThemeContext } from './ThemeContext'

interface ThemeProviderProps {
  children: React.ReactNode
}

function getStoredTheme(): Theme | null {
  try {
    const saved = localStorage.getItem('cl_theme')
    return saved === 'dark' || saved === 'light' ? saved : null
  } catch {
    return null
  }
}

function setStoredTheme(theme: Theme) {
  try {
    localStorage.setItem('cl_theme', theme)
  } catch {
    // Ignore storage errors
  }
}

function getInitialTheme(): Theme {
  const saved = getStoredTheme()
  if (saved) return saved
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = theme
  }, [theme])

  useEffect(() => {
    if (getStoredTheme()) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setThemeState(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      setStoredTheme(next)
      return next
    })
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setStoredTheme(next)
    setThemeState(next)
  }, [])

  const contextValue = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
