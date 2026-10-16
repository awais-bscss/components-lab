import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion } from './Accordion'

const defaultItems = [
  {
    id: 'item-1',
    title: 'What is a design system?',
    content:
      'A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.',
  },
  {
    id: 'item-2',
    title: 'Why use Tailwind CSS v4?',
    content:
      'Tailwind CSS provides high-performance CSS theme variables and utility-first styling with zero runtime overhead, pairing perfectly with component architectures.',
  },
  {
    id: 'item-3',
    title: 'How is theme switching handled?',
    content:
      'Theme switching operates seamlessly via CSS custom properties scoped under the .dark class on the root element. Components never require inline theme condition checks.',
  },
  {
    id: 'item-4',
    title: 'Can items be disabled?',
    content: 'This panel cannot be opened because its parent trigger is disabled.',
    disabled: true,
  },
]

const meta: Meta<typeof Accordion> = {
  title: 'Interactive/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allows multiple accordion panels to be expanded simultaneously.',
      table: { defaultValue: { summary: 'false' } },
    },
    defaultOpen: {
      control: 'object',
      description: 'Array of item IDs that are expanded on initial render.',
      table: { defaultValue: { summary: '[]' } },
    },
    items: {
      control: 'object',
      description: 'Array of accordion item objects with id, title, content, and optional disabled state.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: { items: defaultItems },
}

export const DefaultOpen: Story = {
  args: {
    items: defaultItems,
    defaultOpen: ['item-1'],
  },
}

export const MultipleOpen: Story = {
  name: 'Multiple Panels Open',
  args: {
    items: defaultItems,
    multiple: true,
    defaultOpen: ['item-1', 'item-2'],
  },
}
