import { Accordion } from '@/components/interactive'
import { PageHeader, Section } from '@/components/showcase'

export function AccordionPage() {
  const items = [
    { id: 't1', title: 'TypeScript for Frontend Engineers', content: 'Types, interfaces, unions, generics, keyof/typeof, utility types, discriminated unions and React typed props.' },
    { id: 't2', title: 'CSS, Tailwind CSS and Design Tokens', content: 'Cascade, specificity, box model, Flexbox, Grid, responsive design, CSS variables, Tailwind utilities and theme providers.' },
    { id: 't3', title: 'Accessibility Engineering', content: 'WCAG, POUR, semantic HTML, ARIA, keyboard navigation, focus management, screen readers, contrast and live regions.' },
    { id: 't4', title: 'Design Systems and Component Architecture', content: 'Design tokens, primitives, composites, component APIs, composition, headless components, Storybook and AI UX patterns.' },
    { id: 'dis', title: 'Disabled Item (Example)', content: 'This item cannot be opened.', disabled: true },
  ]

  return (
    <>
      <PageHeader
        title="Accordion"
        description="Keyboard navigable accordion: Arrow keys, Home/End. Supports single and multiple open panels. Full WAI-ARIA pattern."
        tags={['interactive', 'accessible', 'keyboard-nav']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Single Open (default)">
          <Accordion items={items} defaultOpen={['t1']} />
        </Section>

        <Section title="Multiple Open">
          <Accordion items={items.slice(0, 4)} multiple defaultOpen={['t1', 't2']} />
        </Section>
      </div>
    </>
  )
}
