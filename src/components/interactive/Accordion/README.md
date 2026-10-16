# Accordion

Accordion organizes content into collapsible panels with header disclosure triggers.

## Import

```tsx
import { Accordion } from '@/components/interactive/Accordion'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `items` | `AccordionItem[]` | none | Yes | Array of panel items with id, title, content, and disabled |
| `multiple` | `boolean` | `false` | No | Allows multiple panels to be open at the same time |
| `defaultOpen` | `string[]` | `[]` | No | Array of item IDs that are open initially |
| `className` | `string` | `undefined` | No | Additional class names applied to the container |

Native HTML attributes do not pass through. `className` applies to the root element. Exported types: `AccordionProps`, `AccordionItem`.

## Usage

```tsx
<Accordion
  items={[
    { id: '1', title: 'What is Components Lab?', content: 'A design system showcase project.' },
    { id: '2', title: 'Which React version is used?', content: 'React 19 with strict TypeScript.' },
  ]}
/>
```

```tsx
<Accordion
  multiple
  defaultOpen={['1']}
  items={[
    { id: '1', title: 'Section One', content: 'Content for first section.' },
    { id: '2', title: 'Section Two', content: 'Content for second section.' },
  ]}
/>
```

```tsx
<Accordion
  items={[
    { id: '1', title: 'Enabled item', content: 'Active panel.' },
    { id: '2', title: 'Disabled item', content: 'Inactive panel.', disabled: true },
  ]}
/>
```

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggles the active accordion panel |
| `ArrowDown` | Moves focus to the next enabled accordion header |
| `ArrowUp` | Moves focus to the previous enabled accordion header |
| `Home` | Moves focus to the first enabled accordion header |
| `End` | Moves focus to the last enabled accordion header |

- Header buttons include `aria-expanded` and `aria-controls` pointing to panel content.
- Panels use `role="region"` and `aria-labelledby` referencing the trigger button.
- Inactive panels receive the `inert` attribute to prevent hidden child element focus.

## Design tokens

- `bg-surface`
- `bg-surface-muted`
- `border-border`
- `text-foreground`
- `text-muted-foreground`
- `focus-visible:ring-ring`

## Notes and limitations

- Item IDs must be unique strings within the accordion item array.
- Height transitions use CSS grid template row transition.

## Related

- [Tabs](../Tabs/README.md)
