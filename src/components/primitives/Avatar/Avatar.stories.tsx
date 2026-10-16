import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarGroup } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Primitives/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Physical dimension and font size of the avatar.',
      table: { defaultValue: { summary: 'md' } },
    },
    src: {
      control: 'text',
      description: 'URL of the user profile picture.',
    },
    name: {
      control: 'text',
      description: 'Full name used to generate initials and deterministic background color.',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for screen readers when an image is loaded.',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'busy', 'away'],
      description: 'Status indicator badge shown on the bottom right.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Initials: Story = {
  args: {
    name: 'Sarah Connor',
    size: 'md',
  },
}

export const WithImage: Story = {
  args: {
    name: 'Alex Johnson',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    size: 'lg',
  },
}

export const Online: Story = {
  args: {
    name: 'Marcus Vance',
    status: 'online',
    size: 'md',
  },
}

export const Busy: Story = {
  args: {
    name: 'Elena Rostova',
    status: 'busy',
    size: 'md',
  },
}

export const Away: Story = {
  args: {
    name: 'David Kim',
    status: 'away',
    size: 'md',
  },
}

export const Offline: Story = {
  args: {
    name: 'Rachel Zane',
    status: 'offline',
    size: 'md',
  },
}

export const FallbackIcon: Story = {
  args: {
    size: 'md',
  },
}

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" name="John Doe" />
      <Avatar size="sm" name="John Doe" />
      <Avatar size="md" name="John Doe" />
      <Avatar size="lg" name="John Doe" />
      <Avatar size="xl" name="John Doe" />
    </div>
  ),
}

export const AllStatuses: Story = {
  name: 'All Statuses',
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Online User" status="online" />
      <Avatar name="Busy User" status="busy" />
      <Avatar name="Away User" status="away" />
      <Avatar name="Offline User" status="offline" />
    </div>
  ),
}

export const Group: Story = {
  name: 'Avatar Group',
  render: () => (
    <AvatarGroup
      users={[
        { name: 'Sarah Connor' },
        { name: 'Alex Johnson' },
        { name: 'Marcus Vance' },
        { name: 'Elena Rostova' },
        { name: 'David Kim' },
        { name: 'Rachel Zane' },
      ]}
      max={4}
      size="md"
    />
  ),
}
