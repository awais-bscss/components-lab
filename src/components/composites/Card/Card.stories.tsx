import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardHeader, CardBody, CardFooter } from './Card'
import { Avatar, AvatarGroup, Badge, Button, Chip, Heading, Text } from '@/components/primitives'
import { Progress } from '../Progress/Progress'

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
      <CardFooter className="justify-end gap-2">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button variant="danger" size="sm">Delete</Button>
      </CardFooter>
    </Card>
  ),
}

export const UserProfileCombination: Story = {
  name: 'Combination: Profile Card',
  render: () => (
    <Card variant="elevated" className="w-80">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar name="Sarah Connor" status="online" size="lg" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <Heading level="h4" className="text-sm font-semibold truncate">Sarah Connor</Heading>
              <Badge variant="primary" size="sm">Lead</Badge>
            </div>
            <Text variant="small" color="muted" className="truncate">Design Systems Engineer</Text>
          </div>
        </div>
      </CardHeader>
      <CardBody className="space-y-3">
        <Text variant="small" color="muted">
          Leading accessibility and component token architecture across web and mobile.
        </Text>
        <div className="flex gap-1.5 flex-wrap">
          <Chip variant="primary">React</Chip>
          <Chip variant="default">TypeScript</Chip>
          <Chip variant="default">Tailwind</Chip>
        </div>
      </CardBody>
      <CardFooter className="justify-between">
        <Button variant="outline" size="sm">Message</Button>
        <Button variant="primary" size="sm">View profile</Button>
      </CardFooter>
    </Card>
  ),
}

export const TaskProgressCombination: Story = {
  name: 'Combination: Task Progress Card',
  render: () => (
    <Card variant="default" className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Heading level="h4" className="text-sm font-semibold">Q4 Release</Heading>
          <Badge variant="warning" size="sm" dot>In Progress</Badge>
        </div>
      </CardHeader>
      <CardBody className="space-y-4">
        <Text variant="small" color="muted">
          Finalizing component migrations and accessibility compliance checklists.
        </Text>
        <Progress value={72} label="Completion rate" showValue variant="primary" size="sm" />
        <div className="flex items-center justify-between pt-1">
          <Text variant="small" color="muted">Contributors</Text>
          <AvatarGroup
            size="xs"
            max={3}
            users={[
              { name: 'Alex Johnson' },
              { name: 'David Kim' },
              { name: 'Elena Rostova' },
              { name: 'Rachel Zane' },
            ]}
          />
        </div>
      </CardBody>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline" size="sm">History</Button>
        <Button variant="primary" size="sm">Deploy</Button>
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
