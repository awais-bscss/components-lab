import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'
import { Badge, Button, Text } from '@/components/primitives'
import { Progress } from '../Progress/Progress'

const meta: Meta<typeof Alert> = {
  title: 'Composites/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visual intent of the alert.',
      table: { defaultValue: { summary: 'info' } },
    },
    title: {
      control: 'text',
      description: 'Bold heading rendered above the message body.',
    },
    dismissible: {
      control: 'boolean',
      description: 'Renders a close button that unmounts the alert.',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Alert message content.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Heads up',
    children: 'Your session will expire in 15 minutes. Save your work.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Changes saved',
    children: 'Your profile has been updated successfully.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Low storage',
    children: 'You are using 90% of your storage quota. Consider cleaning up old files.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Upload failed',
    children: 'The file could not be uploaded. Check your network and try again.',
  },
}

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'New feature available',
    dismissible: true,
    children: 'Try the redesigned dashboard layout in Settings.',
  },
}

export const WithoutTitle: Story = {
  args: {
    variant: 'warning',
    children: 'Two-factor authentication is not enabled on your account.',
  },
}

export const ActionWithBadgeCombination: Story = {
  name: 'Combination: Action and Badge',
  render: () => (
    <div className="w-[480px]">
      <Alert variant="warning" title="Security policy update" dismissible>
        <div className="space-y-2 mt-1">
          <div className="flex items-center gap-2">
            <Text variant="small" color="muted">
              Your API key will expire in 48 hours. Generate a new key to avoid service downtime.
            </Text>
            <Badge variant="warning" size="sm">Urgent</Badge>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <Button size="sm" variant="outline">Learn more</Button>
            <Button size="sm" variant="primary">Rotate key now</Button>
          </div>
        </div>
      </Alert>
    </div>
  ),
}

export const ProgressAlertCombination: Story = {
  name: 'Combination: Upload Progress',
  render: () => (
    <div className="w-[480px]">
      <Alert variant="info" title="Syncing workspace assets">
        <div className="space-y-3 mt-1.5">
          <Text variant="small" color="muted">
            Uploading components and icon assets to the cloud repository.
          </Text>
          <Progress value={68} label="Upload progress" showValue size="sm" variant="primary" />
          <div className="flex justify-end gap-2 pt-1">
            <Button size="sm" variant="ghost">Cancel</Button>
            <Button size="sm" variant="outline">View live log</Button>
          </div>
        </div>
      </Alert>
    </div>
  ),
}
