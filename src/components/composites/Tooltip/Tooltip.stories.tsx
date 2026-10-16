import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip } from './Tooltip'

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

export const AllPositions: Story = {
  name: 'All Positions',
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-16">
      {(['top', 'bottom', 'left', 'right'] as const).map((pos) => (
        <Tooltip key={pos} content={`Position: ${pos}`} position={pos}>
          <TriggerButton label={pos} />
        </Tooltip>
      ))}
    </div>
  ),
}
