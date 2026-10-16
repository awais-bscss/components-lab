import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './Progress'
import { Card, CardHeader, CardBody, CardFooter } from '../Card/Card'
import { Badge, Button, Text } from '@/components/primitives'

const meta: Meta<typeof Progress> = {
  title: 'Composites/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value 0-100. Omit for indeterminate animation.',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Fill color intent.',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Height of the progress track.',
      table: { defaultValue: { summary: 'md' } },
    },
    label: { control: 'text', description: 'Text label shown above the track.' },
    showValue: {
      control: 'boolean',
      description: 'Show the numeric percentage value next to the label.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: { value: 65 },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
}

export const WithLabel: Story = {
  args: { value: 45, label: 'Uploading files' },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
}

export const WithLabelAndValue: Story = {
  name: 'Label + Percentage',
  args: { value: 78, label: 'Storage used', showValue: true },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
}

export const Indeterminate: Story = {
  args: { label: 'Processing...' },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Progress value={60} variant="primary" label="Primary" showValue />
      <Progress value={80} variant="success" label="Success" showValue />
      <Progress value={45} variant="warning" label="Warning" showValue />
      <Progress value={30} variant="error" label="Error" showValue />
      <Progress value={70} variant="default" label="Default" showValue />
    </div>
  ),
}

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Progress value={60} size="xs" label="xs" />
      <Progress value={60} size="sm" label="sm" />
      <Progress value={60} size="md" label="md" />
      <Progress value={60} size="lg" label="lg" />
    </div>
  ),
}

export const InCardCombination: Story = {
  name: 'Combination: Storage & Sync Card',
  render: () => (
    <div className="w-80">
      <Card variant="default">
        <CardHeader>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground">Cloud Storage</span>
            <Badge variant="warning" size="sm" dot>84% Full</Badge>
          </div>
        </CardHeader>
        <CardBody className="space-y-3">
          <Text variant="small" color="muted">
            16.8 GB of 20 GB used across your component assets and builds.
          </Text>
          <Progress value={84} variant="warning" size="md" />
        </CardBody>
        <CardFooter className="justify-between">
          <Button variant="ghost" size="sm">Manage files</Button>
          <Button variant="primary" size="sm">Upgrade plan</Button>
        </CardFooter>
      </Card>
    </div>
  ),
}
