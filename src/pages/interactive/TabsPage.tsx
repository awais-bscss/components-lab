import { Tabs } from '@/components/interactive'
import { Text } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'
import { EyeIcon, CodeIcon, ListIcon, AccessibilityIcon, LockIcon } from '@/icons'

export function TabsPage() {
  const overview = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <EyeIcon className="w-3.5 h-3.5" />,
      content: <p className="text-muted-foreground text-sm">Overview content. This tab panel is accessible via keyboard: use Arrow keys to switch tabs.</p>,
    },
    {
      id: 'code',
      label: 'Code',
      icon: <CodeIcon className="w-3.5 h-3.5" />,
      content: <Text variant="code" as="span">{'<Tabs aria-label="Demo Tabs" variant="line" items={items} />'}</Text>,
    },
    {
      id: 'props',
      label: 'Props',
      icon: <ListIcon className="w-3.5 h-3.5" />,
      content: <p className="text-muted-foreground text-sm">items, defaultTab, variant (line | pill | card), aria-label, className.</p>,
    },
    {
      id: 'a11y',
      label: 'A11y',
      icon: <AccessibilityIcon className="w-3.5 h-3.5" />,
      content: <p className="text-muted-foreground text-sm">Uses roving tabindex, role=tablist/tab/tabpanel, aria-selected and aria-controls.</p>,
    },
    {
      id: 'disabled',
      label: 'Disabled',
      icon: <LockIcon className="w-3.5 h-3.5" />,
      disabled: true,
      content: null,
    },
  ]

  return (
    <>
      <PageHeader
        title="Tabs"
        description="Accessible tabs: roving tabindex, Arrow key navigation, role=tablist/tab/tabpanel. 3 visual variants."
        tags={['interactive', 'accessible', 'roving-tabindex']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Line Variant (default)">
          <Tabs aria-label="Documentation sections" items={overview} variant="line" />
        </Section>

        <Section title="Pill Variant">
          <Tabs aria-label="Pill navigation" items={overview.slice(0, 4)} variant="pill" />
        </Section>

        <Section title="Card Variant">
          <Tabs aria-label="Card navigation" items={overview.slice(0, 4)} variant="card" />
        </Section>
      </div>
    </>
  )
}
