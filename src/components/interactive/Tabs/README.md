# Tabs

Tabs organize related content into layered panels within a single view.

## Import

```tsx
import { Tabs, type TabItem } from '@/components/interactive/Tabs'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `aria-label` | `string` | none | Yes | Accessible description for the tablist container |
| `items` | `TabItem[]` | none | Yes | Array of tab items with id, label, content, and optional icon |
| `defaultTab` | `string` | `items[0]?.id` | No | ID of initially active tab |
| `variant` | `'line' \| 'pill' \| 'card'` | `'line'` | No | Visual style preset for the tab triggers |
| `className` | `string` | `undefined` | No | Additional class names applied to the container |

Native HTML attributes do not pass through. `className` applies to the root element. Exported types: `TabsProps`, `TabItem`, `TabsVariantProps`.

## Usage

```tsx
<Tabs
  aria-label="Account sections"
  items={[
    { id: 'profile', label: 'Profile', content: <p>Profile settings</p> },
    { id: 'security', label: 'Security', content: <p>Security options</p> },
  ]}
/>
```

```tsx
<Tabs
  aria-label="View mode"
  variant="pill"
  defaultTab="list"
  items={[
    { id: 'grid', label: 'Grid', content: <p>Grid view</p> },
    { id: 'list', label: 'List', content: <p>List view</p> },
  ]}
/>
```

```tsx
<Tabs
  aria-label="Project details"
  variant="card"
  items={[
    { id: 'overview', label: 'Overview', content: <p>Project summary</p> },
    { id: 'billing', label: 'Billing', content: <p>Billing history</p>, disabled: true },
  ]}
/>
```

## Variants and sizes

| Variant | List class values | Trigger active class values |
| --- | --- | --- |
| `line` | `border-b border-border gap-1` | `border-primary text-primary border-b-2` |
| `pill` | `bg-surface-muted p-1 rounded-lg gap-1 border border-border` | `bg-primary text-primary-foreground shadow-xs` |
| `card` | `gap-1.5` | `bg-primary-soft border-primary/30 text-primary-soft-foreground shadow-xs` |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| `ArrowRight` / `ArrowDown` | Activates the next enabled tab and moves focus |
| `ArrowLeft` / `ArrowUp` | Activates the previous enabled tab and moves focus |
| `Home` | Activates the first enabled tab and moves focus |
| `End` | Activates the last enabled tab and moves focus |

- Container uses `role="tablist"` with `aria-label`.
- Buttons use `role="tab"`, `aria-selected`, `aria-controls`, and roving `tabIndex`.
- Active tab has `tabIndex={0}`; inactive tabs have `tabIndex={-1}`.
- Panels use `role="tabpanel"`, `aria-labelledby`, and `hidden` attribute when inactive.

## Design tokens

- `bg-surface`, `bg-surface-muted`, `border-border`
- `border-primary`, `text-primary`, `bg-primary`, `text-primary-foreground`
- `text-muted-foreground`, `focus-visible:ring-ring`

## Notes and limitations

- Arrow key navigation uses automatic tab activation immediately upon receiving focus.

## Related

- [Accordion](../Accordion/README.md)
