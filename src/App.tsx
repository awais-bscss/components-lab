import { ThemeProvider } from '@/context/ThemeProvider'
import { AppLayout } from '@/layouts/AppLayout'
import { PAGE_COMPONENTS } from '@/pages'
import { useHashRoute } from '@/hooks/useHashRoute'

export default function App() {
  const [active] = useHashRoute()
  const ActivePage = PAGE_COMPONENTS[active] ?? PAGE_COMPONENTS.button

  return (
    <ThemeProvider>
      <AppLayout active={active}>
        <ActivePage />
      </AppLayout>
    </ThemeProvider>
  )
}