import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Composites/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls the open/closed state. Use `onClose` to toggle.',
      table: { defaultValue: { summary: 'false' } },
    },
    title: {
      control: 'text',
      description: 'Heading rendered in the modal header bar.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Maximum width of the modal dialog.',
      table: { defaultValue: { summary: 'md' } },
    },
    closeOnOverlay: {
      control: 'boolean',
      description: 'Close the modal when clicking the backdrop overlay.',
      table: { defaultValue: { summary: 'true' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

interface ModalDemoProps extends Omit<Partial<React.ComponentProps<typeof Modal>>, 'children'> {
  children?: React.ReactNode
}

function ModalDemo({ children = 'Modal body content goes here.', ...props }: ModalDemoProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors cursor-pointer"
      >
        Open Modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)} {...props}>
        {children}
      </Modal>
    </>
  )
}

export const Default: Story = {
  render: () => (
    <ModalDemo title="Modal title">
      This is the modal body. Add any content here -- forms, messages, or confirmations.
    </ModalDemo>
  ),
}

export const WithFooter: Story = {
  name: 'With Footer Actions',
  render: () => (
    <ModalDemo
      title="Delete workspace"
      footer={
        <>
          <button className="px-3 py-1.5 text-xs rounded border border-border hover:bg-surface-muted transition-colors cursor-pointer">
            Cancel
          </button>
          <button className="px-3 py-1.5 text-xs rounded bg-danger text-primary-foreground hover:bg-danger/90 transition-colors cursor-pointer">
            Confirm delete
          </button>
        </>
      }
    >
      This will permanently delete the workspace and all its data. This action cannot be undone.
    </ModalDemo>
  ),
}

export const SmallSize: Story = {
  name: 'Size: sm',
  render: () => (
    <ModalDemo title="Quick note" size="sm">
      A compact modal for brief messages or confirmations.
    </ModalDemo>
  ),
}

export const LargeSize: Story = {
  name: 'Size: lg',
  render: () => (
    <ModalDemo title="Edit profile" size="lg">
      <div className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">Update your display name and contact information.</p>
        <input
          className="h-9 w-full border border-border rounded-md px-3 text-sm bg-surface text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Display name"
        />
        <input
          className="h-9 w-full border border-border rounded-md px-3 text-sm bg-surface text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Email address"
        />
      </div>
    </ModalDemo>
  ),
}

export const NoOverlayClose: Story = {
  name: 'No Overlay Close',
  render: () => (
    <ModalDemo title="Required action" closeOnOverlay={false}>
      Clicking the backdrop will not close this modal. Use the X button or Escape key.
    </ModalDemo>
  ),
}
