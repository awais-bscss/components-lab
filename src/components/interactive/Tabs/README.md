# Tabs

An accessible tabbed navigation interface that partitions content into switchable panels, supporting line, pill, and card style presentations alongside full keyboard arrow navigation.

## Import

```tsx
import { Tabs, type TabItem } from '@/components/interactive/Tabs'
```

## Props

### TabsProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `aria-label` | `string` | required | Accessible description for the `role="tablist"` element |
| `items` | `TabItem[]` | required | Array of tab items containing ids, labels, icons, and contents |
| `variant` | `'line' \| 'pill' \| 'card'` | `'line'` | Visual presentation style of tab headers |
| `defaultTab` | `string` | `items[0]?.id` | ID of the active tab on initial render |
| `className` | `string` | `undefined` | Additional CSS classes for outer container |

### TabItem

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier for the tab |
| `label` | `string` | Text label displayed in the tab trigger |
| `content` | `ReactNode` | Content rendered when this tab is selected |
| `icon` | `ReactNode` | Optional icon element rendered before the label |
| `disabled` | `boolean` | Flag to disable tab selection |

## Usage

### Basic Line Tabs

```tsx
<Tabs
  aria-label="Profile navigation"
  items={[
    { id: 'general', label: 'General', content: <div>General settings</div> },
    { id: 'security', label: 'Security', content: <div>Security settings</div> },
  ]}
/>
```

### Pill Tabs

```tsx
<Tabs
  aria-label="Metrics view"
  variant="pill"
  items={items}
/>
```

### Card Tabs

```tsx
<Tabs
  aria-label="Configuration tabs"
  variant="card"
  items={items}
/>
```

## Keyboard Navigation & Accessibility

- Implements the WAI-ARIA Tabs pattern:
  - Container uses `role="tablist"` with `aria-label`.
  - Triggers use `role="tab"`, `aria-selected`, and `aria-controls`.
  - Panels use `role="tabpanel"` and `aria-labelledby`.
  - Non-active tabs use `tabIndex={-1}`, while the active tab uses `tabIndex={0}` (roving tabindex pattern).
- Keyboard support:
  - `ArrowRight` / `ArrowDown`: Selects and moves focus to the next enabled tab (wraps around).
  - `ArrowLeft` / `ArrowUp`: Selects and moves focus to the previous enabled tab (wraps around).
  - `Home`: Selects and moves focus to the first enabled tab.
  - `End`: Selects and moves focus to the last enabled tab.
