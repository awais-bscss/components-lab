import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip } from './Tooltip'
import { Avatar, Badge, Button, Chip } from '@/components/primitives'
import { EditIcon, TrashIcon, CodeIcon, SettingsIcon, InfoIcon } from '@/icons'

const meta: Meta<typeof Tooltip> = {
  title: 'Composites/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    content: {
      control: 'text',
      description: 'Text displayed inside the tooltip bubble.',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Placement of the tooltip relative to the trigger.',
      table: { defaultValue: { summary: 'top' } },
    },
    delay: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
      description: 'Delay in milliseconds before the tooltip appears.',
      table: { defaultValue: { summary: '300' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

const TriggerButton = ({ label }: { label?: string }) => (
  <button className="px-4 py-2 text-sm font-medium bg-surface border border-border rounded-md text-foreground hover:bg-surface-muted transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
    {label ?? 'Hover me'}
  </button>
)

export const Default: Story = {
  args: { content: 'This is a tooltip' },
  render: (args) => (
    <Tooltip {...args}>
      <TriggerButton />
    </Tooltip>
  ),
}

export const Top: Story = {
  args: { content: 'Tooltip on top', position: 'top' },
  render: (args) => (
    <Tooltip {...args}>
      <TriggerButton label="Top" />
    </Tooltip>
  ),
}

export const Bottom: Story = {
  args: { content: 'Tooltip on bottom', position: 'bottom' },
  render: (args) => (
    <Tooltip {...args}>
      <TriggerButton label="Bottom" />
    </Tooltip>
  ),
}

export const Left: Story = {
  args: { content: 'Tooltip on left', position: 'left' },
  render: (args) => (
    <Tooltip {...args}>
      <TriggerButton label="Left" />
    </Tooltip>
  ),
}

export const Right: Story = {
  args: { content: 'Tooltip on right', position: 'right' },
  render: (args) => (
    <Tooltip {...args}>
      <TriggerButton label="Right" />
    </Tooltip>
  ),
}

export const NoDelay: Story = {
  name: 'No Delay',
  args: { content: 'Appears instantly', delay: 0 },
  render: (args) => (
    <Tooltip {...args}>
      <TriggerButton label="No delay" />
    </Tooltip>
  ),
}

export const AvatarTooltipCombination: Story = {
  name: 'Combination: Avatar with Status Tooltip',
  render: () => (
    <div className="flex items-center gap-6 p-8">
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
  ),
}

export const BadgeTooltipCombination: Story = {
  name: 'Combination: Badge with Explanatory Tooltip',
  render: () => (
    <div className="flex items-center gap-4 p-8">
      <Tooltip content="Complies with strict WCAG 2.1 AA accessibility guidelines" position="top">
        <span className="cursor-help">
          <Badge variant="success" dot>WCAG AA</Badge>
        </span>
      </Tooltip>
      <Tooltip content="Feature flag active for 10% canary traffic" position="top">
        <span className="cursor-help">
          <Badge variant="warning">Canary</Badge>
        </span>
      </Tooltip>
      <Tooltip content="Strict TypeScript with zero any annotations" position="top">
        <span className="cursor-help">
          <Badge variant="primary">Type-safe</Badge>
        </span>
      </Tooltip>
    </div>
  ),
}

export const IconButtonTooltipCombination: Story = {
  name: 'Combination: Action Button Tooltip',
  render: () => (
    <div className="flex items-center gap-3 p-8">
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
  ),
}

export const ActionToolbarCombination: Story = {
  name: 'Combination: Interactive Editor Toolbar',
  render: () => (
    <div className="flex items-center gap-2 p-3 bg-surface border border-border rounded-lg shadow-sm">
      <Tooltip content="Edit component source" position="top">
        <Button variant="ghost" size="sm" aria-label="Edit source">
          <EditIcon className="w-4 h-4" />
        </Button>
      </Tooltip>
      <Tooltip content="View generated JSX code" position="top">
        <Button variant="ghost" size="sm" aria-label="View code">
          <CodeIcon className="w-4 h-4" />
        </Button>
      </Tooltip>
      <Tooltip content="Configure component props" position="top">
        <Button variant="ghost" size="sm" aria-label="Settings">
          <SettingsIcon className="w-4 h-4" />
        </Button>
      </Tooltip>
      <div className="w-px h-5 bg-border mx-1" />
      <Tooltip content="Filter by TypeScript definition" position="top">
        <span className="cursor-pointer">
          <Chip variant="primary" selected>TS 6.0</Chip>
        </span>
      </Tooltip>
      <Tooltip content="Active branch: main" position="top">
        <span className="cursor-help">
          <Badge variant="primary" size="sm">production</Badge>
        </span>
      </Tooltip>
    </div>
  ),
}

export const StatusMetricsCombination: Story = {
  name: 'Combination: Live Status Metrics Bar',
  render: () => (
    <div className="flex items-center gap-4 p-4 bg-surface-muted rounded-lg border border-border">
      <Tooltip content="System health: All services operating nominally" position="top">
        <span className="cursor-help">
          <Badge variant="success" dot>Healthy</Badge>
        </span>
      </Tooltip>
      <Tooltip content="Storybook documentation synced with 0ms lag" position="top">
        <span className="cursor-help">
          <Badge variant="info">Docs: Instant Sync</Badge>
        </span>
      </Tooltip>
      <Tooltip content="Current release coordinator" position="top">
        <div className="inline-block cursor-pointer">
          <Avatar name="Muhammad Awais" status="online" size="sm" />
        </div>
      </Tooltip>
      <Tooltip content="Automated deployment triggered by GitHub Actions" position="top">
        <span className="cursor-pointer inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          <InfoIcon className="w-3.5 h-3.5" />
          <span>CI/CD</span>
        </span>
      </Tooltip>
    </div>
  ),
}

