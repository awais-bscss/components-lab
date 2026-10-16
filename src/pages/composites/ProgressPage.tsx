import { Progress, Card } from '@/components/composites'
import { Badge, Button, Text } from '@/components/primitives'
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

        <Section title="Composite Combinations">
          <div className="max-w-md">
            <Card variant="default">
              <Card.Header>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Cloud Storage Usage</span>
                  <Badge variant="warning" size="sm" dot>84% Full</Badge>
                </div>
              </Card.Header>
              <Card.Body className="space-y-3">
                <Text variant="small" color="muted">
                  16.8 GB of 20 GB used across your component assets and production builds.
                </Text>
                <Progress value={84} variant="warning" size="md" />
              </Card.Body>
              <Card.Footer className="justify-between">
                <Button variant="ghost" size="sm">Manage files</Button>
                <Button variant="primary" size="sm">Upgrade plan</Button>
              </Card.Footer>
            </Card>
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
