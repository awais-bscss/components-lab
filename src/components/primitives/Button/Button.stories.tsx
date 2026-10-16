import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { PlusIcon, ArrowRightIcon, TrashIcon } from '@/icons'

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Visual appearance variant of the button.',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size preset specifying height, padding, and font size.',
      table: { defaultValue: { summary: 'md' } },
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows an animated loading spinner and disables interactions.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables user interactions and applies muted styling.',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Button text or content.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Save changes' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Cancel' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'View details' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Dismiss' },
}

export const Danger: Story = {
  args: { variant: 'danger', children: 'Delete account' },
}

export const Loading: Story = {
  args: { variant: 'primary', children: 'Saving...', isLoading: true },
}

export const Disabled: Story = {
  args: { variant: 'primary', children: 'Unavailable', disabled: true },
}

export const WithLeftIcon: Story = {
  name: 'With Left Icon',
  render: () => (
    <Button leftIcon={<PlusIcon className="w-4 h-4" />}>
      Add item
    </Button>
  ),
}

export const WithRightIcon: Story = {
  name: 'With Right Icon',
  render: () => (
    <Button rightIcon={<ArrowRightIcon className="w-4 h-4" />}>
      Continue
    </Button>
  ),
}

export const DangerWithIcon: Story = {
  name: 'Danger With Icon',
  render: () => (
    <Button variant="danger" leftIcon={<TrashIcon className="w-4 h-4" />}>
      Delete permanently
    </Button>
  ),
}

export const Sizes: Story = {
  name: 'Sizes Comparison',
  render: () => (
    <div className="flex items-center gap-3 flex-wrap">
      <Button size="sm">Small (sm)</Button>
      <Button size="md">Medium (md)</Button>
      <Button size="lg">Large (lg)</Button>
    </div>
  ),
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex items-center gap-3 flex-wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
}
