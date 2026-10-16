import { Alert } from '@/components/composites'
import { PageHeader, Section } from '@/components/showcase'

export function AlertPage() {
  return (
    <>
      <PageHeader
        title="Alert"
        description="Feedback messages with role=alert so screen readers announce them immediately. Dismissible with state."
        tags={['composite', 'accessible', 'role=alert']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Variants">
          <div className="flex flex-col gap-3">
            <Alert variant="info" title="Information">TypeScript strict mode is enabled for this project.</Alert>
            <Alert variant="success" title="Success">Component deployed successfully to production.</Alert>
            <Alert variant="warning" title="Warning">Accessibility audit found 3 minor violations.</Alert>
            <Alert variant="error" title="Error">Build failed: check TypeScript errors in DataTable.tsx.</Alert>
          </div>
        </Section>

        <Section title="Dismissible">
          <div className="flex flex-col gap-3">
            <Alert variant="info" dismissible>This alert can be dismissed by clicking the close button.</Alert>
            <Alert variant="success" dismissible title="Build Complete">All 16 components compiled successfully.</Alert>
          </div>
        </Section>

        <Section title="No Title">
          <div className="flex flex-col gap-3">
            <Alert variant="warning">You have unsaved changes. Make sure to commit your work.</Alert>
            <Alert variant="info">System will undergo scheduled maintenance at midnight UTC.</Alert>
          </div>
        </Section>
      </div>
    </>
  )
}
