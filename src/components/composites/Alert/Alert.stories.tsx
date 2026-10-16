import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'

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

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-col gap-3 w-[400px]">
      <Alert variant="info" title="Info">Informational message for general awareness.</Alert>
      <Alert variant="success" title="Success">Operation completed without errors.</Alert>
      <Alert variant="warning" title="Warning">Something requires your attention.</Alert>
      <Alert variant="error" title="Error">A critical error has occurred.</Alert>
    </div>
  ),
}
