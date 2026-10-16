# Progress

Progress displays task completion status or an ongoing indeterminate state.

## Import

```tsx
import { Progress } from '@/components/composites/Progress'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `number` | `undefined` | No | Completion percentage between 0 and 100; undefined activates indeterminate mode |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | No | Color theme of the progress bar fill |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | No | Track height preset |
| `label` | `string` | `undefined` | No | Text label and accessible name |
| `showValue` | `boolean` | `false` | No | Displays numeric percentage text above the track |
| `className` | `string` | `undefined` | No | Additional class names applied to the container |

Native HTML attributes do not pass through. `className` applies to the root element. Exported types: `ProgressProps`, `ProgressVariantProps`, `ProgressFillVariantProps`.

## Usage

```tsx
<Progress value={65} />
```

```tsx
<Progress value={80} variant="success" label="Upload progress" showValue />
```

```tsx
<Progress value={25} variant="warning" size="lg" />
```

```tsx
<Progress label="Processing..." />
```

## Variants and sizes

| Size | Track class values |
| --- | --- |
| `xs` | `h-1` |
| `sm` | `h-1.5` |
| `md` | `h-2` |
| `lg` | `h-3` |

| Variant | Fill class values |
| --- | --- |
| `default` | `bg-muted-foreground` |
| `primary` | `bg-primary` |
| `success` | `bg-success` |
| `warning` | `bg-warning` |
| `error` | `bg-danger` |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| None | Progress is a non-interactive status indicator |

- Progress container uses `role="progressbar"`.
- Sets `aria-valuemin="0"` and `aria-valuemax="100"`.
- Sets `aria-valuenow` to the clamped value when determinate, and removes `aria-valuenow` when indeterminate.
- Includes `aria-label` matching `label` or defaulting to `Progress`.

## Design tokens

- `bg-surface-muted`, `border-border/50`
- `bg-primary`, `bg-success`, `bg-warning`, `bg-danger`, `bg-muted-foreground`
- `text-foreground`, `text-muted-foreground`

## Notes and limitations

- Values are clamped to the 0 through 100 range.
- Indeterminate state uses CSS keyframes animation (`animate-indeterminate`).

## Related

- [Spinner](../../primitives/Spinner/README.md)
- [Skeleton](../../primitives/Skeleton/README.md)
