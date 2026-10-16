import { Heading } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'

export function TypographyPage() {
  const typeScale = [
    { tag: 'H1', name: 'Heading 1', size: '30px / 1.875rem', weight: '600 SemiBold', cls: 'text-2xl sm:text-3xl font-semibold tracking-tight', sample: 'Modern Design Systems' },
    { tag: 'H2', name: 'Heading 2', size: '24px / 1.5rem', weight: '600 SemiBold', cls: 'text-xl sm:text-2xl font-semibold tracking-tight', sample: 'Reusable UI Component Library' },
    { tag: 'H3', name: 'Heading 3', size: '18px / 1.125rem', weight: '600 SemiBold', cls: 'text-lg font-semibold', sample: 'TypeScript and Tailwind CSS Engineering' },
    { tag: 'H4', name: 'Heading 4', size: '16px / 1rem', weight: '600 SemiBold', cls: 'text-base font-semibold', sample: 'Accessible and Strongly Typed Interfaces' },
    { tag: 'Body', name: 'Body Text', size: '14px / 0.875rem', weight: '400 Regular', cls: 'text-sm leading-relaxed', sample: 'Compact body text designed for high-density reading, table cells, and interface content.' },
    { tag: 'Small', name: 'Helper Text', size: '12px / 0.75rem', weight: '400 Regular', cls: 'text-xs leading-relaxed', sample: 'Secondary text used for supporting descriptions, field hints, and captions.' },
    { tag: 'Label', name: 'Section Label', size: '12px / 0.75rem', weight: '600 SemiBold', cls: 'text-xs font-semibold uppercase tracking-wide text-muted-foreground', sample: 'Navigation headers, badges, and uppercase section category labels.' },
    { tag: 'Code', name: 'Monospace Code', size: '12px / 0.75rem', weight: '500 Medium', cls: 'font-mono text-xs px-1.5 py-0.5 rounded border border-border bg-surface-muted text-primary inline-block', sample: 'const typography = { font: "Inter", base: "14px" }' },
  ]

  return (
    <>
      <PageHeader
        title="Typography"
        description="Compact typography system using Inter with custom feature settings ('cv02', 'cv03', 'cv04', 'cv11') and a compact 14px base font scale."
        tags={['primitive', 'TypeScript', 'Inter Font', '14px Base']}
      />

      <div className="flex flex-col gap-6">
        <div className="border border-border rounded-lg p-5 bg-surface shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Active Font Configuration
            </span>
            <span className="text-xs bg-primary-soft text-primary-soft-foreground border border-primary/20 px-2 py-0.5 rounded font-mono font-medium">
              Web Font
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="p-3.5 rounded-md border border-border bg-surface-muted">
              <p className="text-xs mb-1 text-muted-foreground">font-family</p>
              <p className="font-semibold font-mono text-xs text-foreground">Inter, system-ui</p>
            </div>
            <div className="p-3.5 rounded-md border border-border bg-surface-muted">
              <p className="text-xs mb-1 text-muted-foreground">base font-size</p>
              <p className="font-semibold text-sm text-foreground">14px (0.875rem)</p>
            </div>
            <div className="p-3.5 rounded-md border border-border bg-surface-muted">
              <p className="text-xs mb-1 text-muted-foreground">font-feature-settings</p>
              <p className="font-medium text-primary font-mono text-xs">&quot;cv02&quot;, &quot;cv03&quot;, &quot;cv04&quot;, &quot;cv11&quot;</p>
            </div>
            <div className="p-3.5 rounded-md border border-border bg-surface-muted">
              <p className="text-xs mb-1 text-muted-foreground">line-height</p>
              <p className="font-semibold text-sm text-foreground">1.5 (21px)</p>
            </div>
          </div>
        </div>

        <Section title="Type Scale and Visual Font Sizes">
          <div className="flex flex-col divide-y divide-border">
            {typeScale.map(item => (
              <div key={item.tag} className="py-4 first:pt-0 last:pb-0 flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-medium bg-primary-soft border border-primary/20 text-primary-soft-foreground px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {item.name}
                  </span>
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded ml-auto border border-border bg-surface-muted text-muted-foreground">
                    {item.size}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.weight}
                  </span>
                </div>
                <div className={`${item.cls} text-foreground`}>
                  {item.sample}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Semantic Text Colors">
          <div className="flex flex-col gap-2.5">
            <Heading level="h4" color="default">Default Color: High contrast text</Heading>
            <Heading level="h4" color="muted">Muted Color: Secondary text</Heading>
            <Heading level="h4" color="primary">Primary Color: Indigo brand text</Heading>
            <Heading level="h4" color="success">Success Color: Green affirmative text</Heading>
            <Heading level="h4" color="warning">Warning Color: Amber alert text</Heading>
            <Heading level="h4" color="error">Error Color: Red critical text</Heading>
          </div>
        </Section>
      </div>
    </>
  )
}
