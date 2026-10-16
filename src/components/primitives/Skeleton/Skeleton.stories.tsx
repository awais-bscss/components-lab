import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Primitives/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
      description: 'Shape geometry of the placeholder skeleton.',
      table: { defaultValue: { summary: 'text' } },
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
      description: 'Animation mode applied to indicate ongoing background activity.',
      table: { defaultValue: { summary: 'pulse' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: { variant: 'text', animation: 'pulse' },
}

export const Circular: Story = {
  args: {
    variant: 'circular',
    animation: 'pulse',
    width: 48,
    height: 48,
  },
}

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    animation: 'pulse',
    height: 120,
    className: 'w-full max-w-md',
  },
}

export const WaveAnimation: Story = {
  name: 'Wave (Shimmer)',
  args: {
    variant: 'rectangular',
    animation: 'wave',
    height: 100,
    className: 'w-full max-w-md',
  },
}

export const ProfileSkeleton: Story = {
  name: 'Profile Skeleton',
  render: () => (
    <div className="flex items-center gap-4 p-4 border border-border rounded-lg max-w-sm">
      <Skeleton variant="circular" width={48} height={48} />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" className="w-3/4 h-4" />
        <Skeleton variant="text" className="w-1/2 h-3" />
      </div>
    </div>
  ),
}

export const CardSkeleton: Story = {
  name: 'Card Skeleton',
  render: () => (
    <div className="border border-border rounded-xl p-5 max-w-sm space-y-4">
      <Skeleton variant="rectangular" height={160} animation="wave" className="w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton variant="text" className="w-5/6 h-5" />
        <Skeleton variant="text" className="w-full h-3" />
        <Skeleton variant="text" className="w-4/6 h-3" />
      </div>
      <div className="flex justify-between items-center pt-2">
        <Skeleton variant="rectangular" width={80} height={32} className="rounded-md" />
        <Skeleton variant="circular" width={32} height={32} />
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-col gap-6 max-w-md">
      <div>
        <span className="text-xs text-muted-foreground block mb-2 font-mono">variant="text"</span>
        <div className="space-y-2">
          <Skeleton variant="text" className="h-4" />
          <Skeleton variant="text" className="h-4 w-4/5" />
          <Skeleton variant="text" className="h-4 w-2/3" />
        </div>
      </div>
      <div>
        <span className="text-xs text-muted-foreground block mb-2 font-mono">variant="circular"</span>
        <div className="flex items-center gap-3">
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="circular" width={44} height={44} />
          <Skeleton variant="circular" width={56} height={56} />
        </div>
      </div>
      <div>
        <span className="text-xs text-muted-foreground block mb-2 font-mono">variant="rectangular"</span>
        <Skeleton variant="rectangular" height={80} className="w-full" />
      </div>
    </div>
  ),
}
