import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from './Modal'
import { Avatar, Badge, Button, Chip, Divider, Input, Spinner, Text } from '@/components/primitives'
import { Alert } from '../Alert/Alert'
import { Progress } from '../Progress/Progress'

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
  triggerLabel?: string
  triggerVariant?: React.ComponentProps<typeof Button>['variant']
}

function ModalDemo({
  children = 'Modal body content goes here.',
  triggerLabel = 'Open Modal',
  triggerVariant = 'primary',
  ...props
}: ModalDemoProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant={triggerVariant}
      >
        {triggerLabel}
      </Button>
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
      triggerVariant="danger"
      triggerLabel="Delete workspace"
      footer={
        <div className="flex justify-end gap-2 w-full">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button variant="danger" size="sm">Confirm delete</Button>
        </div>
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
        <Text variant="small" color="muted">Update your display name and contact information.</Text>
        <Input label="Display name" placeholder="Display name" />
        <Input label="Email address" placeholder="Email address" />
      </div>
    </ModalDemo>
  ),
}

export const ExtraLargeSize: Story = {
  name: 'Size: xl',
  render: () => (
    <ModalDemo title="System Architecture Overview" size="xl">
      <div className="space-y-4">
        <Text variant="small" color="muted">
          Detailed specification and dependency graph for production component bundles.
        </Text>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-surface-muted border border-border space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Primitives</span>
            <p className="text-sm text-foreground">9 base building blocks with zero external UI dependencies.</p>
          </div>
          <div className="p-4 rounded-lg bg-surface-muted border border-border space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Composites</span>
            <p className="text-sm text-foreground">5 compound components orchestrating accessible behaviors and states.</p>
          </div>
        </div>
      </div>
    </ModalDemo>
  ),
}

export const ProfileFormCombination: Story = {
  name: 'Combination: User Edit Form',
  render: () => (
    <ModalDemo
      title="Member Settings"
      size="md"
      triggerLabel="Edit Member"
      footer={
        <div className="flex justify-end gap-2 w-full">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save changes</Button>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-surface-muted rounded-lg border border-border">
          <Avatar name="Sarah Connor" status="online" size="lg" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">Sarah Connor</span>
              <Badge variant="primary" size="sm">Team Lead</Badge>
            </div>
            <Text variant="small" color="muted">sarah.connor@example.com</Text>
          </div>
        </div>
        <Input label="Full Name" defaultValue="Sarah Connor" />
        <Input label="Role Title" defaultValue="Design Systems Engineer" />
        <Divider label="Access permissions" />
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">Assigned Teams</label>
          <div className="flex gap-1.5 flex-wrap">
            <Chip variant="primary" selected>Design</Chip>
            <Chip variant="default" selected>Engineering</Chip>
            <Chip variant="default">Product</Chip>
          </div>
        </div>
      </div>
    </ModalDemo>
  ),
}

export const DataExportCombination: Story = {
  name: 'Combination: Data Export Progress',
  render: () => (
    <ModalDemo
      title="Export Component Library"
      size="md"
      triggerLabel="Export Data"
      triggerVariant="outline"
      footer={
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <Spinner size="xs" variant="primary" />
            <span className="text-xs text-muted-foreground">Generating archive...</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Pause</Button>
            <Button variant="primary" size="sm">Download</Button>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <Text variant="small" color="muted">
          Compiling production tokens, TypeScript definitions, and story artifacts.
        </Text>
        <Progress value={82} label="Packaging assets" showValue size="md" variant="primary" />
        <div className="flex items-center justify-between p-3 rounded-lg bg-surface-muted border border-border text-xs">
          <span className="text-muted-foreground">Files bundled:</span>
          <Badge variant="success" size="sm">95 / 95 compiled</Badge>
        </div>
      </div>
    </ModalDemo>
  ),
}

export const DestructiveConfirmCombination: Story = {
  name: 'Combination: Destructive Confirmation',
  render: () => (
    <ModalDemo
      title="Revoke Access Token"
      size="md"
      triggerLabel="Revoke Token"
      triggerVariant="danger"
      footer={
        <div className="flex justify-end gap-2 w-full">
          <Button variant="outline" size="sm">Keep Token</Button>
          <Button variant="danger" size="sm">Revoke Immediately</Button>
        </div>
      }
    >
      <div className="space-y-3">
        <Alert variant="warning" title="Security Warning">
          Any production integrations using this token will stop functioning immediately.
        </Alert>
        <Text variant="small" color="muted">
          Token ID: <code className="px-1.5 py-0.5 rounded bg-surface-muted border border-border font-mono text-foreground">cl_tok_84920412</code>
        </Text>
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

