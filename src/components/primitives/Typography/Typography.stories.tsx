import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading, Text } from './Typography'

const meta: Meta<typeof Heading> = {
  title: 'Primitives/Typography',
  component: Heading,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4'],
      description: 'Semantic heading element and styling level.',
      table: { defaultValue: { summary: 'h2' } },
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'success', 'warning', 'error'],
      description: 'Text color theme.',
      table: { defaultValue: { summary: 'default' } },
    },
    children: {
      control: 'text',
      description: 'Heading text content.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const HeadingDefault: Story = {
  name: 'Default Heading',
  args: {
    level: 'h1',
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export const AllHeadingLevels: Story = {
  name: 'All Heading Levels',
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading level="h1">Heading Level 1 (h1)</Heading>
      <Heading level="h2">Heading Level 2 (h2)</Heading>
      <Heading level="h3">Heading Level 3 (h3)</Heading>
      <Heading level="h4">Heading Level 4 (h4)</Heading>
    </div>
  ),
}

export const AllTextVariants: Story = {
  name: 'All Text Variants',
  render: () => (
    <div className="flex flex-col gap-3">
      <div>
        <Text variant="label">Body text</Text>
        <Text variant="body">Regular body text used for primary paragraphs and content reading.</Text>
      </div>
      <div>
        <Text variant="label">Small text</Text>
        <Text variant="small">Secondary smaller text for hints, timestamps, and secondary descriptions.</Text>
      </div>
      <div>
        <Text variant="label">Caption text</Text>
        <Text variant="caption">Caption text for figures, images, and fine print.</Text>
      </div>
      <div>
        <Text variant="label">Inline code</Text>
        <Text variant="code">const count = useCounter()</Text>
      </div>
      <div>
        <Text variant="label">Label variant</Text>
        <Text variant="label">Uppercase field label</Text>
      </div>
    </div>
  ),
}

export const AllColors: Story = {
  name: 'Text Colors',
  render: () => (
    <div className="flex flex-col gap-2">
      <Text color="default">Default text color</Text>
      <Text color="muted">Muted secondary text color</Text>
      <Text color="primary">Primary accent color</Text>
      <Text color="success">Success state color</Text>
      <Text color="warning">Warning state color</Text>
      <Text color="error">Error state color</Text>
    </div>
  ),
}

export const ArticleSample: Story = {
  name: 'Typography Composition',
  render: () => (
    <article className="flex flex-col gap-3 max-w-xl">
      <Text variant="label" color="primary">Architecture Guide</Text>
      <Heading level="h1">Building Modular Design Systems</Heading>
      <Text variant="body">
        Design systems provide consistency, speed up development, and bridge the gap between design and engineering.
      </Text>
      <Heading level="h2">Component Primitives</Heading>
      <Text variant="body">
        Primitives form the base building blocks. For instance, you can use the <Text as="span" variant="code">Button</Text> component across modals, alerts, and navigation bars.
      </Text>
      <Text variant="small" color="muted">Last updated: October 2026</Text>
    </article>
  ),
}
