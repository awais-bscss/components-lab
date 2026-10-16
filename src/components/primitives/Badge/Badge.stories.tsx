import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Color scheme and visual importance of the badge.',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the badge padding and typography.',
      table: { defaultValue: { summary: 'md' } },
    },
    dot: {
      control: 'boolean',
      description: 'Renders a circular status dot before the badge text.',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Text or node displayed inside the badge.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: { variant: 'default', children: 'Draft' },
}

export const Primary: Story = {
  args: { variant: 'primary', children: 'New Feature' },
}

export const Success: Story = {
  args: { variant: 'success', children: 'Completed' },
}

export const Warning: Story = {
  args: { variant: 'warning', children: 'In Progress' },
}

export const Error: Story = {
  args: { variant: 'error', children: 'Failed' },
}

export const Info: Story = {
  args: { variant: 'info', children: 'Under Review' },
}

export const WithDot: Story = {
  args: { variant: 'success', dot: true, children: 'Live' },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
}

export const WithDots: Story = {
  name: 'All Variants with Dot',
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Badge variant="default" dot>Draft</Badge>
      <Badge variant="primary" dot>Published</Badge>
      <Badge variant="success" dot>Healthy</Badge>
      <Badge variant="warning" dot>Degraded</Badge>
      <Badge variant="error" dot>Outage</Badge>
      <Badge variant="info" dot>Maintenance</Badge>
    </div>
  ),
}

export const Sizes: Story = {
  name: 'Sizes Comparison',
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="sm" variant="primary">Small (sm)</Badge>
      <Badge size="md" variant="primary">Medium (md)</Badge>
    </div>
  ),
}
