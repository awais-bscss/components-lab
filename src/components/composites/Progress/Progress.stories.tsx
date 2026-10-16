import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './Progress'
import { Card, CardHeader, CardBody, CardFooter } from '../Card/Card'
import { AvatarGroup, Badge, Button, Chip, Spinner, Text } from '@/components/primitives'

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

export const DownloadQueueCombination: Story = {
  name: 'Combination: File Download Queue',
  render: () => (
    <div className="w-96 p-4 rounded-lg bg-surface border border-border space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">Active Downloads</span>
          <Badge variant="primary" size="sm">2 Active</Badge>
        </div>
        <Button variant="ghost" size="sm">Pause All</Button>
      </div>

      <div className="space-y-3">
        <div className="p-3 rounded-md bg-surface-muted border border-border space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-foreground">components-bundle.esm.js</span>
            <Badge variant="success" size="sm">Complete</Badge>
          </div>
          <Progress value={100} variant="success" size="xs" />
        </div>

        <div className="p-3 rounded-md bg-surface-muted border border-border space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-foreground">storybook-static.tar.gz</span>
            <span className="text-muted-foreground font-mono">68%</span>
          </div>
          <Progress value={68} variant="primary" size="xs" />
        </div>

        <div className="p-3 rounded-md bg-surface-muted border border-border space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <Spinner size="xs" variant="primary" />
              <span className="font-medium text-foreground">types-definition.d.ts</span>
            </div>
            <span className="text-muted-foreground">Queued</span>
          </div>
          <Progress variant="primary" size="xs" />
        </div>
      </div>
    </div>
  ),
}

export const MilestoneProgressCombination: Story = {
  name: 'Combination: Sprint Milestone Tracker',
  render: () => (
    <div className="w-96 p-4 rounded-lg bg-surface border border-border space-y-3.5">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-foreground">Sprint 14: Primitives & Composites</h4>
          <Text variant="small" color="muted">3 of 4 milestones reached</Text>
        </div>
        <Badge variant="success" size="sm" dot>On Track</Badge>
      </div>
      <Progress value={75} variant="success" size="sm" showValue label="Overall Sprint Progress" />
      <div className="flex items-center justify-between pt-2 border-t border-border/60">
        <div className="flex gap-1.5">
          <Chip variant="primary" selected>Storybook</Chip>
          <Chip variant="default" selected>Vite 8</Chip>
        </div>
        <AvatarGroup
          size="xs"
          max={3}
          users={[
            { name: 'Awais' },
            { name: 'Sarah' },
            { name: 'David' },
          ]}
        />
      </div>
    </div>
  ),
}

