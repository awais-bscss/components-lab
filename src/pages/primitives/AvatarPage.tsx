import { Avatar, AvatarGroup } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'

export function AvatarPage() {
  const users = [
    { name: 'Alex Johnson' },
    { name: 'Ali Khan' },
    { name: 'Sara Ahmed' },
    { name: 'Bilal Raza' },
    { name: 'Zara Malik' },
    { name: 'Usman Tariq' },
  ]

  return (
    <>
      <PageHeader
        title="Avatar"
        description="User avatar with image, initials fallback and deterministic color. Supports status indicators and AvatarGroup."
        tags={['primitive', 'TypeScript']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Sizes">
          <div className="flex items-end gap-4">
            <Avatar name="Extra Small" size="xs" />
            <Avatar name="Small User" size="sm" />
            <Avatar name="Medium User" size="md" />
            <Avatar name="Large User" size="lg" />
            <Avatar name="Extra Large" size="xl" />
          </div>
        </Section>

        <Section title="Status Indicators">
          <div className="flex items-center gap-4">
            <Avatar name="Ali Khan" size="md" status="online" />
            <Avatar name="Sara Ahmed" size="md" status="away" />
            <Avatar name="Bilal Raza" size="md" status="busy" />
            <Avatar name="Zara Malik" size="md" status="offline" />
          </div>
        </Section>

        <Section title="Unique Colors from Name">
          <div className="flex items-center gap-3">
            {users.slice(0, 5).map(u => (
              <div key={u.name} className="flex flex-col items-center gap-1.5">
                <Avatar name={u.name} size="md" />
                <span className="text-xs text-muted-foreground">{u.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Avatar Group">
          <div className="flex flex-col gap-4">
            <AvatarGroup users={users} max={4} size="md" />
            <AvatarGroup users={users} max={3} size="lg" />
          </div>
        </Section>
      </div>
    </>
  )
}
