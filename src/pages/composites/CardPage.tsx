import { Card, Progress, type CardVariant } from '@/components/composites'
import { Avatar, AvatarGroup, Badge, Button, Chip, Heading, Text } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'

export function CardPage() {
  const cardVariants: CardVariant[] = ['default', 'elevated', 'outlined', 'ghost']

  return (
    <>
      <PageHeader
        title="Card"
        description="Compound component with Card.Header, Card.Body, Card.Footer sub-components. 4 visual variants."
        tags={['composite', 'TypeScript', 'compound-component']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Variants">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cardVariants.map(v => (
              <Card key={v} variant={v}>
                <Card.Header>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground capitalize">{v}</h3>
                    <Badge variant="primary" size="sm">{v}</Badge>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="text-sm text-muted-foreground">Card body content. Use Card.Header, Card.Body and Card.Footer as sub-components.</p>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm" variant="outline">Cancel</Button>
                  <Button size="sm" variant="primary">Action</Button>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Simple with Padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card padding="md">
              <Heading level="h4" className="mb-1">TypeScript</Heading>
              <Text variant="small" color="muted">Types and Generics</Text>
            </Card>
            <Card padding="md">
              <Heading level="h4" className="mb-1">Tailwind CSS</Heading>
              <Text variant="small" color="muted">CSS and Tailwind</Text>
            </Card>
            <Card padding="md">
              <Heading level="h4" className="mb-1">Accessibility</Heading>
              <Text variant="small" color="muted">WCAG AA Standard</Text>
            </Card>
          </div>
        </Section>

        <Section title="Composite Combinations">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <Card.Header>
                <div className="flex items-center gap-3">
                  <Avatar name="Sarah Connor" status="online" size="lg" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <Heading level="h4" className="text-sm font-semibold truncate">Sarah Connor</Heading>
                      <Badge variant="primary" size="sm">Lead</Badge>
                    </div>
                    <Text variant="small" color="muted" className="truncate">Design Systems Engineer</Text>
                  </div>
                </div>
              </Card.Header>
              <Card.Body className="space-y-3">
                <Text variant="small" color="muted">
                  Composes Card with Avatar, Badge, Chip tags, Heading, and Button actions.
                </Text>
                <div className="flex gap-1.5 flex-wrap">
                  <Chip variant="primary">React</Chip>
                  <Chip variant="default">TypeScript</Chip>
                  <Chip variant="default">Tailwind</Chip>
                </div>
              </Card.Body>
              <Card.Footer className="justify-between">
                <Button variant="outline" size="sm">Message</Button>
                <Button variant="primary" size="sm">View profile</Button>
              </Card.Footer>
            </Card>

            <Card variant="default">
              <Card.Header>
                <div className="flex items-center justify-between">
                  <Heading level="h4" className="text-sm font-semibold">Q4 Architecture Release</Heading>
                  <Badge variant="warning" size="sm" dot>In Progress</Badge>
                </div>
              </Card.Header>
              <Card.Body className="space-y-4">
                <Text variant="small" color="muted">
                  Composes Card with Badge, Progress indicator, and AvatarGroup team avatars.
                </Text>
                <Progress value={72} label="Completion rate" showValue variant="primary" size="sm" />
                <div className="flex items-center justify-between pt-1">
                  <Text variant="small" color="muted">Contributors</Text>
                  <AvatarGroup
                    size="xs"
                    max={3}
                    users={[
                      { name: 'Alex Johnson' },
                      { name: 'David Kim' },
                      { name: 'Elena Rostova' },
                      { name: 'Rachel Zane' },
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer className="justify-end gap-2">
                <Button variant="outline" size="sm">History</Button>
                <Button variant="primary" size="sm">Deploy</Button>
              </Card.Footer>
            </Card>
          </div>
        </Section>
      </div>
    </>
  )
}
