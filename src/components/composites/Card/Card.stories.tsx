import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardHeader, CardBody, CardFooter } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Composites/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'ghost'],
      description: 'Surface treatment of the card.',
      table: { defaultValue: { summary: 'default' } },
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding shorthand. Use `none` when composing with Card.Header / Card.Body / Card.Footer.',
      table: { defaultValue: { summary: 'none' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>Project Overview</CardHeader>
      <CardBody>
        A reusable card component with composable sub-parts for header, body, and footer sections.
      </CardBody>
      <CardFooter>Last updated 2 hours ago</CardFooter>
    </Card>
  ),
}

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" className="w-80">
      <CardHeader>Elevated Card</CardHeader>
      <CardBody>
        Uses a stronger box shadow to lift the card above the surface visually.
      </CardBody>
    </Card>
  ),
}

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined" className="w-80">
      <CardHeader>Outlined Card</CardHeader>
      <CardBody>
        Transparent background with a stronger border. Useful on colored backgrounds.
      </CardBody>
    </Card>
  ),
}

export const Ghost: Story = {
  render: () => (
    <Card variant="ghost" className="w-80">
      <CardHeader>Ghost Card</CardHeader>
      <CardBody>
        Muted background with no visible border. Blends into the page surface.
      </CardBody>
    </Card>
  ),
}

export const WithFooterActions: Story = {
  name: 'With Footer Actions',
  render: () => (
    <Card className="w-80">
      <CardHeader>Confirm deletion</CardHeader>
      <CardBody>
        This action is permanent and cannot be undone. All associated data will be removed.
      </CardBody>
      <CardFooter>
        <span className="flex-1" />
        <button className="text-xs px-3 py-1.5 rounded border border-border hover:bg-surface-muted transition-colors">Cancel</button>
        <button className="text-xs px-3 py-1.5 rounded bg-danger text-primary-foreground hover:bg-danger/90 transition-colors">Delete</button>
      </CardFooter>
    </Card>
  ),
}

export const WithPadding: Story = {
  name: 'Flat Padded (no sub-parts)',
  args: {
    variant: 'default',
    padding: 'md',
    children: 'A simple card with uniform padding applied directly via the padding prop, without using CardHeader or CardBody.',
  },
  render: (args) => (
    <Card {...args} className="w-80 text-sm text-foreground" />
  ),
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[680px]">
      {(['default', 'elevated', 'outlined', 'ghost'] as const).map((v) => (
        <Card key={v} variant={v}>
          <CardHeader className="capitalize">{v}</CardHeader>
          <CardBody>Card variant: {v}</CardBody>
        </Card>
      ))}
    </div>
  ),
}
