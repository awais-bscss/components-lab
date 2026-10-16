import { useState } from 'react'
import { EmptyState, Card } from '@/components/composites'
import { Button, Badge, Chip } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'
import { InboxIcon, SearchIcon, PlusIcon } from '@/icons'

export function EmptyStatePage() {
  const [createdCount, setCreatedCount] = useState(0)

  return (
    <>
      <PageHeader
        title="EmptyState"
        description="A visual placeholder for zero-data views, cleared filters, or onboarding empty states. Provides clear guidance and actionable next steps."
        tags={['composite', 'accessible', 'zero-state']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Basic Empty State">
          <div className="flex justify-center p-6 bg-surface border border-border rounded-lg">
            <EmptyState
              icon={<InboxIcon className="w-5 h-5 text-muted-foreground" />}
              title="No items in inbox"
              description="When teammates mention you in reviews or request changes, tasks will appear here."
            />
          </div>
        </Section>

        <Section title="Variants">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EmptyState
              variant="card"
              icon={<PlusIcon className="w-5 h-5 text-primary" />}
              title="Create new design token"
              description="Define custom colors, elevation scales, or typography tokens for your workspace."
              action={
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setCreatedCount((c) => c + 1)}
                >
                  Create token {createdCount > 0 ? `(${createdCount})` : ''}
                </Button>
              }
              secondaryAction={<Button variant="outline" size="sm">Import tokens</Button>}
            />

            <EmptyState
              variant="dashed"
              icon={<InboxIcon className="w-5 h-5 text-muted-foreground" />}
              title="Drop assets to upload"
              description="Drag and drop SVG icons, typography files, or documentation markdown here."
              action={<Button variant="outline" size="sm">Browse files</Button>}
            />
          </div>
        </Section>

        <Section title="Search and Filter Zero-State">
          <EmptyState
            variant="dashed"
            icon={<SearchIcon className="w-5 h-5 text-muted-foreground" />}
            title="No matching components found"
            description="We could not find any components matching your search filter. Try clearing your search query or check for typos."
            action={<Button variant="outline" size="sm">Clear search filters</Button>}
          >
            <div className="flex items-center gap-1.5 pt-2">
              <span className="text-xs text-muted-foreground">Suggestions:</span>
              <Chip variant="default">Button</Chip>
              <Chip variant="default">Modal</Chip>
              <Chip variant="default">Card</Chip>
              <Chip variant="default">Alert</Chip>
            </div>
          </EmptyState>
        </Section>

        <Section title="Inside Card Container">
          <div className="max-w-md">
            <Card variant="default">
              <Card.Header>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Active Pull Requests</span>
                  <Badge variant="default" size="sm">0 open</Badge>
                </div>
              </Card.Header>
              <Card.Body>
                <EmptyState
                  icon={<InboxIcon className="w-5 h-5 text-muted-foreground" />}
                  title="All caught up"
                  description="There are no pending pull requests requiring your review at this time."
                  action={<Button variant="ghost" size="sm">View closed requests</Button>}
                />
              </Card.Body>
            </Card>
          </div>
        </Section>
      </div>
    </>
  )
}
