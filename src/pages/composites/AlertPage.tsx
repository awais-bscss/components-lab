import { Alert, Progress } from '@/components/composites'
import { Badge, Button, Text } from '@/components/primitives'
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

        <Section title="Composite Combinations">
          <div className="flex flex-col gap-4">
            <Alert variant="warning" title="Security policy update" dismissible>
              <div className="space-y-2 mt-1">
                <div className="flex items-center gap-2">
                  <Text variant="small" color="muted">
                    Your API key will expire in 48 hours. Generate a new key to avoid service downtime.
                  </Text>
                  <Badge variant="warning" size="sm">Urgent</Badge>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Button size="sm" variant="outline">Learn more</Button>
                  <Button size="sm" variant="primary">Rotate key now</Button>
                </div>
              </div>
            </Alert>

            <Alert variant="info" title="Syncing workspace assets">
              <div className="space-y-3 mt-1.5">
                <Text variant="small" color="muted">
                  Uploading components and icon assets to the cloud repository.
                </Text>
                <Progress value={68} label="Upload progress" showValue size="sm" variant="primary" />
                <div className="flex justify-end gap-2 pt-1">
                  <Button size="sm" variant="ghost">Cancel</Button>
                  <Button size="sm" variant="outline">View live log</Button>
                </div>
              </div>
            </Alert>
          </div>
        </Section>

        <Section title="Dismissible">
          <div className="flex flex-col gap-3">
            <Alert variant="info" dismissible>This alert can be dismissed by clicking the close button.</Alert>
            <Alert variant="success" dismissible title="Build Complete">All 17 components compiled successfully.</Alert>
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
