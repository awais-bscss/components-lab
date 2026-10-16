import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from './Tabs'
import { UserIcon, SettingsIcon, CheckIcon } from '@/icons'

const sampleTabs = [
  {
    id: 'account',
    label: 'Account',
    icon: <UserIcon className="w-4 h-4" />,
    content: (
      <div className="p-4 border border-border rounded-lg bg-surface">
        <h3 className="font-semibold text-foreground text-sm">Account Settings</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Update your public profile, display name, and avatar.
        </p>
      </div>
    ),
  },
  {
    id: 'preferences',
    label: 'Preferences',
    icon: <SettingsIcon className="w-4 h-4" />,
    content: (
      <div className="p-4 border border-border rounded-lg bg-surface">
        <h3 className="font-semibold text-foreground text-sm">System Preferences</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Customize notifications, language preferences, and interface appearance.
        </p>
      </div>
    ),
  },
  {
    id: 'security',
    label: 'Security',
    icon: <CheckIcon className="w-4 h-4" />,
    content: (
      <div className="p-4 border border-border rounded-lg bg-surface">
        <h3 className="font-semibold text-foreground text-sm">Security & Access</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Configure two-factor authentication, sessions, and recovery codes.
        </p>
      </div>
    ),
  },
  {
    id: 'billing',
    label: 'Billing (Disabled)',
    disabled: true,
    content: <div>Billing is unavailable for this organization.</div>,
  },
]

const meta: Meta<typeof Tabs> = {
  title: 'Interactive/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['line', 'pill', 'card'],
      description: 'Visual layout style of the tab trigger items.',
      table: { defaultValue: { summary: 'line' } },
    },
    defaultTab: {
      control: 'text',
      description: 'ID of the tab selected on initial render.',
      table: { defaultValue: { summary: 'account' } },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible name describing the tab list navigation purpose.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const LineVariant: Story = {
  args: {
    'aria-label': 'Account sections',
    items: sampleTabs,
    variant: 'line',
  },
}

export const PillVariant: Story = {
  args: {
    'aria-label': 'Account sections',
    items: sampleTabs,
    variant: 'pill',
  },
}

export const CardVariant: Story = {
  args: {
    'aria-label': 'Account sections',
    items: sampleTabs,
    variant: 'card',
  },
}

export const AllVariants: Story = {
  name: 'All Variants Comparison',
  render: () => (
    <div className="flex flex-col gap-8 max-w-lg">
      <div>
        <div className="text-xs uppercase font-semibold text-muted-foreground mb-2">Line Style</div>
        <Tabs aria-label="Line tabs" variant="line" items={sampleTabs.slice(0, 3)} />
      </div>

      <div>
        <div className="text-xs uppercase font-semibold text-muted-foreground mb-2">Pill Style</div>
        <Tabs aria-label="Pill tabs" variant="pill" items={sampleTabs.slice(0, 3)} />
      </div>

      <div>
        <div className="text-xs uppercase font-semibold text-muted-foreground mb-2">Card Style</div>
        <Tabs aria-label="Card tabs" variant="card" items={sampleTabs.slice(0, 3)} />
      </div>
    </div>
  ),
}
