import { Spinner } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'

export function SpinnerPage() {
  return (
    <>
      <PageHeader
        title="Spinner"
        description="Loading indicator with role=status and sr-only text for screen readers. No visual-only loading states."
        tags={['primitive', 'accessible']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Sizes">
          <div className="flex items-end gap-6">
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </div>
        </Section>

        <Section title="Variants">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="primary" size="md" />
              <span className="text-xs text-muted-foreground">Primary</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="default" size="md" />
              <span className="text-xs text-muted-foreground">Default</span>
            </div>
            <div className="bg-primary p-4 rounded-md flex flex-col items-center gap-2">
              <Spinner variant="white" size="md" />
              <span className="text-xs text-primary-foreground font-medium">White</span>
            </div>
          </div>
        </Section>

        <Section title="With Label">
          <div className="flex items-center gap-8">
            <Spinner size="md" label="Loading data..." />
            <Spinner size="lg" label="Please wait..." />
          </div>
        </Section>
      </div>
    </>
  )
}
