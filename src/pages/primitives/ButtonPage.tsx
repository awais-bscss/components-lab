import { useState } from 'react'
import { Button } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'
import { ArrowLeftIcon, ArrowRightIcon, SettingsIcon, PlusIcon } from '@/icons'

export function ButtonPage() {
  const [loading, setLoading] = useState(false)

  const handleLoad = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <>
      <PageHeader
        title="Button"
        description="Accessible, polymorphic button component. Extends native HTMLButtonElement attributes with typed variants, sizes and icon slots."
        tags={['primitive', 'TypeScript', 'accessible']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Variants">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </Section>

        <Section title="Sizes">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Section>

        <Section title="States">
          <div className="flex flex-wrap gap-3">
            <Button isLoading={loading} onClick={handleLoad} variant="primary">
              {loading ? 'Loading...' : 'Click to Load'}
            </Button>
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
          </div>
        </Section>

        <Section title="With Icons">
          <div className="flex flex-wrap gap-3">
            <Button leftIcon={<ArrowLeftIcon />} variant="secondary">Back</Button>
            <Button rightIcon={<ArrowRightIcon />} variant="primary">Next</Button>
            <Button leftIcon={<SettingsIcon />} variant="ghost">Settings</Button>
            <Button leftIcon={<PlusIcon />} variant="primary">New Item</Button>
          </div>
        </Section>
      </div>
    </>
  )
}
