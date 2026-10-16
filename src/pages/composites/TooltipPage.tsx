import { Tooltip } from '@/components/composites'
import { Avatar, Button, Badge } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'
import { EditIcon, TrashIcon, InfoIcon } from '@/icons'

export function TooltipPage() {
  return (
    <>
      <PageHeader
        title="Tooltip"
        description="Context-sensitive labels triggered on hover and focus. Uses aria-describedby and role=tooltip."
        tags={['composite', 'accessible', 'ARIA']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Positions">
          <div className="flex items-center justify-center gap-6 py-8">
            <Tooltip content="Top tooltip" position="top">
              <Button variant="outline" size="sm">Top</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" position="bottom">
              <Button variant="outline" size="sm">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" position="left">
              <Button variant="outline" size="sm">Left</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" position="right">
              <Button variant="outline" size="sm">Right</Button>
            </Tooltip>
          </div>
        </Section>

        <Section title="On Different Elements">
          <div className="flex items-center gap-4">
            <Tooltip content="Edit this item">
              <button
                type="button"
                className="p-2.5 rounded-md bg-surface-muted text-muted-foreground hover:text-foreground border border-border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background cursor-pointer"
                aria-label="Edit"
              >
                <EditIcon />
              </button>
            </Tooltip>
            <Tooltip content="Delete permanently" position="top">
              <button
                type="button"
                className="p-2.5 rounded-md bg-surface-muted text-muted-foreground hover:text-danger-soft-foreground border border-border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background cursor-pointer"
                aria-label="Delete"
              >
                <TrashIcon />
              </button>
            </Tooltip>
            <Tooltip content="Accessibility: also works on keyboard focus!" position="right">
              <Badge variant="info">
                <InfoIcon className="w-3.5 h-3.5 inline mr-1" />
                Info
              </Badge>
            </Tooltip>
          </div>
        </Section>

        <Section title="Composite Combinations">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <Tooltip content="Sarah Connor (Online, Core Team Lead)" position="top">
                <div className="inline-block cursor-pointer">
                  <Avatar name="Sarah Connor" status="online" size="lg" />
                </div>
              </Tooltip>
              <Tooltip content="David Kim (Away for 20m)" position="top">
                <div className="inline-block cursor-pointer">
                  <Avatar name="David Kim" status="away" size="lg" />
                </div>
              </Tooltip>
              <Tooltip content="Elena Rostova (Busy in meetings)" position="top">
                <div className="inline-block cursor-pointer">
                  <Avatar name="Elena Rostova" status="busy" size="lg" />
                </div>
              </Tooltip>
            </div>

            <div className="flex items-center gap-3">
              <Tooltip content="Edit component properties" position="top">
                <Button variant="outline" size="sm" aria-label="Edit component">
                  <EditIcon className="w-4 h-4" />
                </Button>
              </Tooltip>
              <Tooltip content="Permanently delete item" position="top">
                <Button variant="danger" size="sm" aria-label="Delete item">
                  <TrashIcon className="w-4 h-4" />
                </Button>
              </Tooltip>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}
