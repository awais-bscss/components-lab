# Badge

A compact label used to emphasize status, categories, counts, or visual metadata for an item.

## Import

```tsx
import { Badge } from '@/components/primitives/Badge'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Visual intent and color scheme |
| `size` | `'sm' \| 'md'` | `'md'` | Badge padding and typography size |
| `dot` | `boolean` | `false` | When true, renders a colored status dot before children |
| `children` | `ReactNode` | required | Content rendered inside the badge |
| `className` | `string` | `undefined` | Additional CSS classes merged onto root element |

## Usage

### Basic

```tsx
<Badge>Draft</Badge>
<Badge variant="primary">New Feature</Badge>
<Badge variant="success">Active</Badge>
```

### With Status Dot

```tsx
<Badge variant="success" dot>Live</Badge>
<Badge variant="warning" dot>Pending</Badge>
<Badge variant="error" dot>Failed</Badge>
```

### Sizes

```tsx
<Badge size="sm" variant="info">Small</Badge>
<Badge size="md" variant="info">Medium</Badge>
```

## Accessibility

- Status dots include `aria-hidden="true"` so screen readers read only the badge text.
- Badges use high-contrast foreground text matching their background tints across both light and dark themes.
- If used for critical status notifications, place inside an element with an appropriate ARIA live region.
