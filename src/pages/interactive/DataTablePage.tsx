import { useState } from 'react'
import { DataTable } from '@/components/interactive'
import { Badge } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'

type User = {
  id: number
  name: string
  role: string
  status: string
  joined: string
}

const USERS: User[] = [
  { id: 1, name: 'Alex Johnson', role: 'Lead', status: 'active', joined: '2024-01-15' },
  { id: 2, name: 'Ali Khan', role: 'Intern', status: 'active', joined: '2024-03-01' },
  { id: 3, name: 'Sara Ahmed', role: 'Intern', status: 'inactive', joined: '2024-03-01' },
  { id: 4, name: 'Bilal Raza', role: 'Manager', status: 'active', joined: '2023-11-20' },
  { id: 5, name: 'Zara Malik', role: 'Intern', status: 'pending', joined: '2024-05-10' },
  { id: 6, name: 'Usman Tariq', role: 'Engineer', status: 'active', joined: '2023-08-05' },
  { id: 7, name: 'Fatima Noor', role: 'Intern', status: 'active', joined: '2024-06-01' },
]

export function DataTablePage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  return (
    <>
      <PageHeader
        title="DataTable"
        description="Generic DataTable<T> with keyof T typed columns, search filtering, sortable headers and custom cell renderers. Zero 'any'."
        tags={['interactive', 'TypeScript', 'generics']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Generic DataTable<User>">
          <div className="flex flex-col gap-4">
            {selectedUser && (
              <div className="p-3 rounded-md border border-primary/20 bg-primary-soft text-primary-soft-foreground text-sm flex items-center justify-between">
                <span>Selected: <strong>{selectedUser.name}</strong> ({selectedUser.role} · {selectedUser.status})</span>
                <button
                  type="button"
                  onClick={() => setSelectedUser(null)}
                  className="text-xs font-semibold hover:underline cursor-pointer"
                >
                  Clear
                </button>
              </div>
            )}
            <DataTable<User>
              data={USERS}
              getRowId={row => row.id}
              searchable
              onRowClick={row => setSelectedUser(row)}
              columns={[
                { key: 'id', header: 'ID', sortable: true, width: '60px' },
                {
                  key: 'name',
                  header: 'Name',
                  sortable: true,
                  render: v => <span className="font-medium text-foreground">{String(v)}</span>,
                },
                {
                  key: 'role',
                  header: 'Role',
                  sortable: true,
                  render: v => <Badge variant="primary" size="sm">{String(v)}</Badge>,
                },
                {
                  key: 'status',
                  header: 'Status',
                  sortable: true,
                  render: v => {
                    const statusStr = String(v)
                    const variant = statusStr === 'active' ? 'success' : statusStr === 'inactive' ? 'error' : statusStr === 'pending' ? 'warning' : 'default'
                    return <Badge variant={variant} dot>{statusStr}</Badge>
                  },
                },
                { key: 'joined', header: 'Joined', sortable: true },
              ]}
            />
          </div>
        </Section>
      </div>
    </>
  )
}
