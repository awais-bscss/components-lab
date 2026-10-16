# Badge

Badge displays a compact label for metadata, status, or category tags.

## Import

```tsx
import { Badge } from '@/components/primitives/Badge'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | No | Color style preset |
| `size` | `'sm' \| 'md'` | `'md'` | No | Padding and font size preset |
| `dot` | `boolean` | `false` | No | Shows a colored circle before the label text |
| `children` | `React.ReactNode` | none | Yes | Content rendered inside the badge |
| `className` | `string` | `undefined` | No | Additional class names applied to the container |

Native HTML attributes do not pass through. `className` applies to the root element. Exported types: `BadgeProps`, `BadgeVariantProps`.

## Usage

```tsx
<Badge>Default</Badge>
```

```tsx
<Badge variant="primary" dot>Production</Badge>
```

```tsx
<Badge variant="success" size="sm">Active</Badge>
```

```tsx
<Badge variant="error" dot>Failed</Badge>
```

## Variants and sizes

| Variant | Class values |
| --- | --- |
| `default` | `bg-surface-muted border-border text-muted-foreground` |
| `primary` | `bg-primary-soft border-primary/20 text-primary-soft-foreground` |
| `success` | `bg-success-soft border-success-soft-border text-success-soft-foreground` |
| `warning` | `bg-warning-soft border-warning-soft-border text-warning-soft-foreground` |
| `error` | `bg-danger-soft border-danger-soft-border text-danger-soft-foreground` |
| `info` | `bg-info-soft border-info-soft-border text-info-soft-foreground` |

| Size | Class values |
| --- | --- |
| `sm` | `px-1.5 py-0.25 text-[11px]` |
| `md` | `px-2 py-0.5 text-xs` |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| None | Badge is non-interactive and does not receive keyboard focus |

- Status dot contains `aria-hidden="true"` to prevent duplicate screen reader output.
- Text content is read directly as plain text.

## Design tokens

- `bg-surface-muted`, `border-border`, `text-muted-foreground`
- `bg-primary-soft`, `text-primary-soft-foreground`
- `bg-success-soft`, `border-success-soft-border`, `text-success-soft-foreground`
- `bg-warning-soft`, `border-warning-soft-border`, `text-warning-soft-foreground`
- `bg-danger-soft`, `border-danger-soft-border`, `text-danger-soft-foreground`
- `bg-info-soft`, `border-info-soft-border`, `text-info-soft-foreground`

## Notes and limitations

- Badge does not support interactive click or dismissal events. Use Chip for interactive tags.

## Related

- [Chip](../Chip/README.md)
- [Alert](../../composites/Alert/README.md)
