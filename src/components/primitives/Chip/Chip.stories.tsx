import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from './Chip'
import { CheckIcon, TagIcon } from '@/icons'

const meta: Meta<typeof Chip> = {
  title: 'Primitives/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Color theme of the chip.',
      table: { defaultValue: { summary: 'default' } },
    },
    selected: {
      control: 'boolean',
      description: 'Whether the chip is in an active/selected state.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables user interactions.',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Content of the chip.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: { variant: 'default', children: 'React' },
}

export const Selected: Story = {
  args: { variant: 'primary', selected: true, children: 'TypeScript' },
}

export const Removable: Story = {
  args: {
    variant: 'default',
    children: 'Dismissible tag',
    onRemove: () => alert('Removed chip'),
  },
}

export const ClickableAndRemovable: Story = {
  name: 'Clickable & Removable',
  args: {
    variant: 'primary',
    children: 'Filter tag',
    onClick: () => alert('Clicked chip'),
    onRemove: () => alert('Removed chip'),
  },
}

export const Disabled: Story = {
  args: { variant: 'default', disabled: true, children: 'Disabled tag' },
}

export const WithIcon: Story = {
  name: 'With Icon',
  render: () => (
    <div className="flex items-center gap-2">
      <Chip leftIcon={<TagIcon className="w-3 h-3" />}>Category</Chip>
      <Chip variant="primary" selected leftIcon={<CheckIcon className="w-3 h-3" />}>Applied</Chip>
    </div>
  ),
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Chip variant="default">Default</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="error">Error</Chip>
    </div>
  ),
}

export const SelectedVariants: Story = {
  name: 'All Selected Variants',
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Chip variant="default" selected>Default</Chip>
      <Chip variant="primary" selected>Primary</Chip>
      <Chip variant="success" selected>Success</Chip>
      <Chip variant="warning" selected>Warning</Chip>
      <Chip variant="error" selected>Error</Chip>
    </div>
  ),
}

function FilterGroupDemo() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['React'])
  const tags = ['React', 'TypeScript', 'Tailwind', 'Vite', 'Next.js']

  const toggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {tags.map(tag => {
        const isSelected = selectedTags.includes(tag)
        return (
          <Chip
            key={tag}
            variant="primary"
            selected={isSelected}
            onClick={() => toggle(tag)}
          >
            {tag}
          </Chip>
        )
      })}
    </div>
  )
}

export const InteractiveFilterGroup: Story = {
  name: 'Interactive Filter Group',
  render: () => <FilterGroupDemo />,
}
