import { Divider } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'

export function DividerPage() {
  return (
    <>
      <PageHeader
        title="Divider"
        description="Horizontal and vertical separators with optional label. Uses role=separator for accessibility."
        tags={['primitive', 'accessible']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Horizontal">
          <div className="flex flex-col gap-4">
            <div className="text-sm text-muted-foreground">Content above</div>
            <Divider />
            <div className="text-sm text-muted-foreground">Content below</div>
          </div>
        </Section>

        <Section title="With Label">
          <div className="flex flex-col gap-4">
            <Divider label="OR" />
            <Divider label="Continue with" />
            <Divider label="Component Styling" />
          </div>
        </Section>

        <Section title="Vertical">
          <div className="flex items-center gap-4 h-8">
            <span className="text-sm text-muted-foreground">Left</span>
            <Divider orientation="vertical" />
            <span className="text-sm text-muted-foreground">Middle</span>
            <Divider orientation="vertical" />
            <span className="text-sm text-muted-foreground">Right</span>
          </div>
        </Section>
      </div>
    </>
  )
}
