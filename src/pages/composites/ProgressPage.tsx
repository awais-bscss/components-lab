import { Progress } from '@/components/composites'
import { PageHeader, Section } from '@/components/showcase'

export function ProgressPage() {
  return (
    <>
      <PageHeader
        title="Progress"
        description="ARIA progressbar with determinate and indeterminate modes. 5 variants and 4 sizes."
        tags={['composite', 'accessible', 'ARIA']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Variants">
          <div className="flex flex-col gap-4">
            <Progress value={70} variant="primary" label="Primary" showValue />
            <Progress value={85} variant="success" label="Success" showValue />
            <Progress value={45} variant="warning" label="Warning" showValue />
            <Progress value={30} variant="error" label="Error" showValue />
            <Progress value={60} variant="default" label="Default" showValue />
          </div>
        </Section>

        <Section title="Sizes">
          <div className="flex flex-col gap-3">
            <Progress value={60} size="xs" variant="primary" />
            <Progress value={60} size="sm" variant="primary" />
            <Progress value={60} size="md" variant="primary" />
            <Progress value={60} size="lg" variant="primary" />
          </div>
        </Section>

        <Section title="Indeterminate">
          <div className="flex flex-col gap-3">
            <Progress variant="primary" label="Loading components..." />
            <Progress variant="success" size="sm" />
          </div>
        </Section>
      </div>
    </>
  )
}
