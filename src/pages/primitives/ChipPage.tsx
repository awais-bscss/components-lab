import { useState } from 'react'
import { Chip } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'
import { CheckIcon, WarningIcon, StarIcon } from '@/icons'

export function ChipPage() {
  const [selected, setSelected] = useState<string[]>(['react'])
  const [chips, setChips] = useState(['TypeScript', 'React', 'Tailwind', 'Storybook'])

  const toggleSelect = (id: string) =>
    setSelected(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]))

  return (
    <>
      <PageHeader
        title="Chip"
        description="Compact interactive tags for filtering, multi-select and removable labels. Fully keyboard accessible."
        tags={['primitive', 'TypeScript', 'interactive']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Variants">
          <div className="flex flex-wrap gap-2.5">
            <Chip variant="default">Default</Chip>
            <Chip variant="primary">Primary</Chip>
            <Chip variant="success">Success</Chip>
            <Chip variant="warning">Warning</Chip>
            <Chip variant="error">Error</Chip>
          </div>
        </Section>

        <Section title="Filter / Selectable">
          <div className="flex flex-wrap gap-2.5">
            {['react', 'vue', 'angular', 'svelte', 'solid'].map(id => (
              <Chip
                key={id}
                variant="primary"
                selected={selected.includes(id)}
                onClick={() => toggleSelect(id)}
              >
                {id}
              </Chip>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">Selected: {selected.join(', ') || 'none'}</p>
        </Section>

        <Section title="Removable">
          <div className="flex flex-wrap gap-2.5">
            {chips.map(c => (
              <Chip key={c} onRemove={() => setChips(prev => prev.filter(x => x !== c))}>
                {c}
              </Chip>
            ))}
          </div>
        </Section>

        <Section title="With Icon">
          <div className="flex flex-wrap gap-2.5">
            <Chip variant="success" leftIcon={<CheckIcon />}>Verified</Chip>
            <Chip variant="warning" leftIcon={<WarningIcon />}>Beta</Chip>
            <Chip variant="primary" leftIcon={<StarIcon />}>Featured</Chip>
          </div>
        </Section>
      </div>
    </>
  )
}
