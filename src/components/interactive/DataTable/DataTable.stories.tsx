import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataTable, type ColumnDef } from './DataTable'
import { Badge } from '@/components/primitives/Badge'

interface TeamMember {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'pending' | 'inactive'
  joinedDate: string
}

const sampleData: TeamMember[] = [
  { id: '1', name: 'Sarah Connor', email: 'sarah@example.com', role: 'Engineering Lead', status: 'active', joinedDate: '2023-01-15' },
  { id: '2', name: 'Alex Johnson', email: 'alex@example.com', role: 'Product Designer', status: 'active', joinedDate: '2023-03-22' },
  { id: '3', name: 'Marcus Vance', email: 'marcus@example.com', role: 'Security Architect', status: 'pending', joinedDate: '2023-05-10' },
  { id: '4', name: 'Elena Rostova', email: 'elena@example.com', role: 'Frontend Engineer', status: 'active', joinedDate: '2023-08-01' },
  { id: '5', name: 'David Kim', email: 'david@example.com', role: 'DevOps Specialist', status: 'inactive', joinedDate: '2022-11-19' },
]

const sampleColumns: ColumnDef<TeamMember>[] = [
  {
    key: 'name',
    header: 'Member',
    sortable: true,
  },
  {
    key: 'email',
    header: 'Email',
    sortable: true,
  },
  {
    key: 'role',
    header: 'Role',
    sortable: true,
  },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: value => {
      const variantMap: Record<TeamMember['status'], 'success' | 'warning' | 'default'> = {
        active: 'success',
        pending: 'warning',
        inactive: 'default',
      }
      return (
        <Badge variant={variantMap[value]} dot>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Badge>
      )
    },
  },
  {
    key: 'joinedDate',
    header: 'Joined',
    sortable: true,
  },
]

const meta: Meta<typeof DataTable<TeamMember>> = {
  title: 'Interactive/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    searchable: {
      control: 'boolean',
      description: 'Enables client-side filtering input above table.',
      table: { defaultValue: { summary: 'true' } },
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder string for the search filter input.',
      table: { defaultValue: { summary: 'Search...' } },
    },
    emptyMessage: {
      control: 'text',
      description: 'Text displayed when data contains zero rows matching the criteria.',
      table: { defaultValue: { summary: 'No results found.' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof DataTable<TeamMember>>

export const Default: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    getRowId: (row: TeamMember) => row.id,
    searchable: true,
  },
}

export const WithoutSearch: Story = {
  name: 'Without Search Input',
  args: {
    data: sampleData,
    columns: sampleColumns,
    getRowId: (row: TeamMember) => row.id,
    searchable: false,
  },
}

export const InteractiveRows: Story = {
  name: 'Clickable Rows',
  args: {
    data: sampleData,
    columns: sampleColumns,
    getRowId: (row: TeamMember) => row.id,
    onRowClick: (row: TeamMember) => alert(`Selected ${row.name}`),
  },
}

export const EmptyState: Story = {
  name: 'Empty State',
  args: {
    data: [],
    columns: sampleColumns,
    getRowId: (row: TeamMember) => row.id,
    emptyMessage: 'No team members found in this workspace.',
  },
}
