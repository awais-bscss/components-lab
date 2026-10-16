import { useState } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { type PageId } from '@/navigation'

interface AppLayoutProps {
  active: PageId
  children: React.ReactNode
}

export function AppLayout({ active, children }: AppLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="h-screen flex flex-col font-sans antialiased bg-background text-foreground overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>

      <Header onMenuClick={() => setDrawerOpen(true)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          active={active}
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 min-w-0 bg-background overflow-y-auto"
        >
          <div className="max-w-6xl mx-auto px-4 py-6 lg:px-6 lg:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
