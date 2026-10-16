import { Badge } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'

export function BadgePage() {
  return (
    <>
      <PageHeader
        title="Badge"
        description="Small status labels for tagging content. Supports semantic colors and optional status dots."
        tags={['primitive', 'TypeScript']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Variants">
          <div className="flex flex-wrap gap-2.5">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </Section>

        <Section title="With Status Dot">
          <div className="flex flex-wrap gap-2.5">
            <Badge variant="success" dot>Online</Badge>
            <Badge variant="warning" dot>Away</Badge>
            <Badge variant="error" dot>Offline</Badge>
            <Badge variant="primary" dot>Active</Badge>
          </div>
        </Section>

        <Section title="Sizes">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="primary" size="sm">Small</Badge>
            <Badge variant="primary" size="md">Medium</Badge>
          </div>
        </Section>

        <Section title="In Context">
          <div className="flex items-center gap-3">
            <span className="text-sm text-foreground">New Features</span>
            <Badge variant="primary" dot>v3.0</Badge>
            <Badge variant="success">Stable</Badge>
            <Badge variant="warning">Beta</Badge>
          </div>
        </Section>
      </div>
    </>
  )
}
