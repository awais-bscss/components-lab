import { Card, type CardVariant } from '@/components/composites'
import { Badge, Button, Heading, Text } from '@/components/primitives'
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
      </div>
    </>
  )
}
