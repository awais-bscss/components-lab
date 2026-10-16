import type { Meta, StoryObj } from '@storybook/react-vite'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Primitives/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of the separator line.',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    label: {
      control: 'text',
      description: 'Optional centered text displayed across a horizontal divider.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
}

export const WithLabel: Story = {
  args: {
    orientation: 'horizontal',
    label: 'OR CONTINUE WITH',
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center h-10 gap-4 text-sm text-foreground">
      <span>Dashboard</span>
      <Divider orientation="vertical" />
      <span>Analytics</span>
      <Divider orientation="vertical" />
      <span>Settings</span>
    </div>
  ),
}

export const InCardLayout: Story = {
  name: 'In Content Layout',
  render: () => (
    <div className="flex flex-col gap-4 p-5 max-w-sm border border-border rounded-lg bg-surface">
      <div className="font-semibold text-foreground">Section Header</div>
      <p className="text-sm text-muted-foreground">Top section content or description paragraph.</p>
      <Divider />
      <div className="font-semibold text-foreground">Next Section</div>
      <p className="text-sm text-muted-foreground">Bottom section content details.</p>
    </div>
  ),
}
