import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Primitives/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Physical dimension and stroke width of the spinner.',
      table: { defaultValue: { summary: 'md' } },
    },
    variant: {
      control: 'select',
      options: ['primary', 'default', 'white'],
      description: 'Color styling of the animated spinner arc.',
      table: { defaultValue: { summary: 'primary' } },
    },
    label: {
      control: 'text',
      description: 'Optional visual label rendered beneath the spinner.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
  args: { variant: 'primary', size: 'md' },
}

export const Default: Story = {
  args: { variant: 'default', size: 'md' },
}

export const WithLabel: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    label: 'Loading workspace...',
  },
}

export const OnDarkSurface: Story = {
  render: () => (
    <div className="bg-primary p-6 rounded-lg flex items-center justify-center">
      <Spinner variant="white" size="md" />
    </div>
  ),
}

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner variant="primary" size="lg" label="Primary" />
      <Spinner variant="default" size="lg" label="Default" />
    </div>
  ),
}
