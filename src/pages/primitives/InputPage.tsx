import { Input } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'
import { SearchIcon } from '@/icons'

export function InputPage() {
  return (
    <>
      <PageHeader
        title="Input"
        description="Accessible input field with label, error/hint support, icon slots and forwardRef. Uses aria-describedby for screen readers."
        tags={['primitive', 'TypeScript', 'accessible', 'forwardRef']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Basic">
          <div className="flex flex-col gap-4 max-w-sm">
            <Input label="Full Name" placeholder="Enter your name" />
            <Input label="Email" type="email" placeholder="you@example.com" />
          </div>
        </Section>

        <Section title="States">
          <div className="flex flex-col gap-4 max-w-sm">
            <Input label="Username" defaultValue="john_carter" hint="Must be unique across the platform" />
            <Input label="Password" type="password" error="Password must be at least 8 characters" />
            <Input label="Disabled" value="Read only" disabled onChange={() => {}} />
          </div>
        </Section>

        <Section title="With Icons">
          <div className="flex flex-col gap-4 max-w-sm">
            <Input
              label="Search"
              placeholder="Search components..."
              leftIcon={<SearchIcon />}
            />
            <Input
              label="Amount"
              type="number"
              placeholder="0.00"
              leftIcon={<span className="text-xs font-medium">USD</span>}
            />
          </div>
        </Section>

        <Section title="Sizes">
          <div className="flex flex-col gap-3 max-w-sm">
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input (default)" />
            <Input size="lg" placeholder="Large input" />
          </div>
        </Section>
      </div>
    </>
  )
}
