# Chip

Chip displays a compact interactive element for selections, filters, and removable values.

## Import

```tsx
import { Chip } from '@/components/primitives/Chip'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | No | Color theme |
| `selected` | `boolean` | `false` | No | Active toggle state |
| `disabled` | `boolean` | `false` | No | Disables click actions |
| `leftIcon` | `React.ReactNode` | `undefined` | No | Icon rendered before text |
| `onRemove` | `() => void` | `undefined` | No | Callback when close button is clicked |
| `onClick` | `() => void` | `undefined` | No | Callback when chip body is clicked |
| `children` | `React.ReactNode` | none | Yes | Chip label content |
| `className` | `string` | `undefined` | No | Additional class names |

Native HTML attributes do not pass through. `className` applies to the root element. Exported types: `ChipProps`, `ChipVariantProps`.

## Usage

```tsx
<Chip>React</Chip>
```

```tsx
<Chip selected variant="primary" onClick={() => {}}>
  Frontend
</Chip>
```

```tsx
<Chip variant="default" onRemove={() => {}}>
  Removable
</Chip>
```

```tsx
<Chip disabled variant="warning">
  Archived
</Chip>
```

## Variants and sizes

| Variant | Base class values | Selected class values |
| --- | --- | --- |
| `default` | `bg-surface-muted border-border text-muted-foreground` | `bg-border-strong text-foreground border-border-strong` |
| `primary` | `bg-primary-soft border-primary/20 text-primary-soft-foreground` | `bg-primary text-primary-foreground border-primary` |
| `success` | `bg-success-soft border-success-soft-border text-success-soft-foreground` | `bg-success text-white border-success` |
| `warning` | `bg-warning-soft border-warning-soft-border text-warning-soft-foreground` | `bg-warning text-slate-950 font-medium border-warning` |
| `error` | `bg-danger-soft border-danger-soft-border text-danger-soft-foreground` | `bg-danger text-white border-danger` |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| `Enter` / `Space` on chip | Triggers `onClick` callback |
| `Enter` / `Space` on remove button | Triggers `onRemove` callback |

- Clickable and removable chips use sibling `<button>` elements to avoid nested interactive elements.
- The remove button includes `aria-label="Remove"`.
- Disabled state sets `aria-disabled="true"` and `disabled` on underlying buttons.

## Design tokens

- `bg-surface-muted`, `border-border`, `text-muted-foreground`, `border-border-strong`
- `bg-primary-soft`, `text-primary-soft-foreground`, `bg-primary`, `text-primary-foreground`
- `bg-success-soft`, `bg-warning-soft`, `bg-danger-soft`, `ring-ring`

## Notes and limitations

- When both `onClick` and `onRemove` are provided, the root element renders as a `<span>` containing two sibling `<button>` tags.

## Related

- [Badge](../Badge/README.md)
- [Button](../Button/README.md)
