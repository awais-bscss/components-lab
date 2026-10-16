import type { Meta, StoryObj } from '@storybook/react-vite'
import { EmptyState } from './EmptyState'
import { Button, Badge, Chip } from '@/components/primitives'
import { Card, CardHeader, CardBody } from '../Card/Card'
import { InboxIcon, SearchIcon, PlusIcon } from '@/icons'

const meta: Meta<typeof EmptyState> = {
  title: 'Composites/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'card', 'dashed', 'ghost'],
      description: 'Container style and border treatment.',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Padding and maximum width of the empty state.',
      table: { defaultValue: { summary: 'md' } },
    },
    title: {
      control: 'text',
      description: 'Primary heading explaining the empty state.',
    },
    description: {
      control: 'text',
      description: 'Supporting text with guidance on next steps.',
    },
  },
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {
    title: 'No components found',
    description: 'Get started by creating your first reusable primitive or composite component.',
  },
}

export const WithIcon: Story = {
  args: {
    icon: <InboxIcon className="w-5 h-5 text-muted-foreground" />,
    title: 'Inbox is clear',
    description: 'You have resolved all design feedback tasks and pull request reviews.',
  },
}

export const WithActions: Story = {
  render: () => (
    <EmptyState
      icon={<PlusIcon className="w-5 h-5 text-primary" />}
      title="Create new design token"
      description="Define custom colors, elevation scales, or typography tokens for your workspace."
      action={<Button variant="primary" size="sm">Create token</Button>}
      secondaryAction={<Button variant="outline" size="sm">Import tokens</Button>}
    />
  ),
}

export const DashedVariant: Story = {
  name: 'Variant: Dashed Border',
  render: () => (
    <EmptyState
      variant="dashed"
      icon={<InboxIcon className="w-5 h-5 text-muted-foreground" />}
      title="Drop files to upload"
      description="Drag and drop component assets, SVGs, or documentation markdown files here."
      action={<Button variant="outline" size="sm">Browse files</Button>}
    />
  ),
}

export const CardVariant: Story = {
  name: 'Variant: Surface Card',
  render: () => (
    <EmptyState
      variant="card"
      icon={<InboxIcon className="w-5 h-5 text-primary" />}
      title="No active deployments"
      description="Connect your GitHub repository to trigger automated Storybook previews on push."
      action={<Button variant="primary" size="sm">Configure CI/CD</Button>}
    />
  ),
}

export const NoSearchResultsCombination: Story = {
  name: 'Combination: Search Filter Empty State',
  render: () => (
    <EmptyState
      variant="dashed"
      icon={<SearchIcon className="w-5 h-5 text-muted-foreground" />}
      title="No results matching query"
      description="We could not find any components matching your search filter. Try clearing your filters or check your spelling."
      action={<Button variant="outline" size="sm">Clear all filters</Button>}
    >
      <div className="flex items-center gap-1.5 pt-2">
        <span className="text-xs text-muted-foreground">Suggestions:</span>
        <Chip variant="default">Button</Chip>
        <Chip variant="default">Modal</Chip>
        <Chip variant="default">Alert</Chip>
      </div>
    </EmptyState>
  ),
}

export const InCardCombination: Story = {
  name: 'Combination: Inside Card Container',
  render: () => (
    <Card variant="default" className="w-[420px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Project Milestones</span>
          <Badge variant="default" size="sm">0 Active</Badge>
        </div>
      </CardHeader>
      <CardBody>
        <EmptyState
          icon={<InboxIcon className="w-5 h-5 text-muted-foreground" />}
          title="No milestones yet"
          description="Create your first sprint milestone to track progress across primitive and composite components."
          action={<Button variant="primary" size="sm">Add milestone</Button>}
        />
      </CardBody>
    </Card>
  ),
}
