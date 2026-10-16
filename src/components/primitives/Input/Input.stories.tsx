import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'
import { SearchIcon, CheckIcon } from '@/icons'

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Physical size and height of the input control.',
      table: { defaultValue: { summary: 'md' } },
    },
    label: {
      control: 'text',
      description: 'Text label associated with the input.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder guidance text shown when empty.',
    },
    error: {
      control: 'text',
      description: 'Error message text that triggers danger styling and an alert region.',
    },
    hint: {
      control: 'text',
      description: 'Helpful descriptive text displayed below the input.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input field is disabled.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: 'Enter a value...' },
}

export const WithLabel: Story = {
  args: { label: 'Email address', placeholder: 'you@example.com' },
}

export const WithHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'john_doe',
    hint: 'Only letters, numbers, and underscores are allowed.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    value: 'invalid-email',
    error: 'Please enter a valid email address.',
    readOnly: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'API Key',
    value: 'sk_live_9837492837498234',
    disabled: true,
  },
}

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input
        label="Search components"
        placeholder="Search..."
        leftIcon={<SearchIcon className="w-4 h-4" />}
      />
      <Input
        label="Verified Username"
        defaultValue="john_smith"
        rightIcon={<CheckIcon className="w-4 h-4 text-success" />}
      />
    </div>
  ),
}

export const Sizes: Story = {
  name: 'Sizes Comparison',
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input size="sm" label="Small (sm)" placeholder="Small input field" />
      <Input size="md" label="Medium (md)" placeholder="Medium input field" />
      <Input size="lg" label="Large (lg)" placeholder="Large input field" />
    </div>
  ),
}
