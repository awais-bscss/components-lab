import { useCallback, useEffect, useState } from 'react'
import { type PageId } from '@/navigation'

const VALID_PAGE_IDS: Set<string> = new Set<string>([
  'button',
  'badge',
  'input',
  'typography',
  'avatar',
  'divider',
  'spinner',
  'skeleton',
  'chip',
  'card',
  'alert',
  'modal',
  'tooltip',
  'progress',
  'datatable',
  'accordion',
  'tabs',
])

function isPageId(val: string): val is PageId {
  return VALID_PAGE_IDS.has(val)
}

function parseHashRoute(): PageId {
  if (typeof window === 'undefined') {
    return 'button'
  }
  const raw = window.location.hash.replace(/^#\/?/, '').toLowerCase()
  if (isPageId(raw)) {
    return raw
  }
  return 'button'
}

export function useHashRoute(): [PageId, (id: PageId) => void] {
  const [route, setRoute] = useState<PageId>(parseHashRoute)

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHashRoute())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const navigate = useCallback((id: PageId) => {
    window.location.hash = `#/${id}`
  }, [])

  return [route, navigate]
}
