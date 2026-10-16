# Progress

A progress bar component supporting determinate (0-100) and indeterminate states, multiple color variants, and track sizes. Includes an optional text label and percentage display.

## Import

```tsx
import { Progress } from '@/components/composites/Progress'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `undefined` | Current value 0-100. Omit for indeterminate animation |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Fill color intent |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Height of the progress track |
| `label` | `string` | `undefined` | Text label displayed above the track |
| `showValue` | `boolean` | `false` | Show the numeric percentage next to the label |
| `className` | `string` | `undefined` | Additional CSS classes on the wrapper element |

## Usage

### Determinate

```tsx
<Progress value={65} />
```

### With label and value

```tsx
<Progress value={78} label="Storage used" showValue />
```

### Indeterminate

```tsx
<Progress label="Processing..." />
```

### Color variants

```tsx
<Progress value={80} variant="success" label="Completed" showValue />
<Progress value={40} variant="warning" label="Degraded" showValue />
<Progress value={20} variant="error" label="Critical" showValue />
```

## Track Sizes

| Size | Height |
|------|--------|
| `xs` | 4px (`h-1`) |
| `sm` | 6px (`h-1.5`) |
| `md` | 8px (`h-2`) |
| `lg` | 12px (`h-3`) |

## Accessibility

- Renders a `role="progressbar"` element.
- `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` are set for determinate state.
- `aria-label` uses the `label` prop value or defaults to `'Progress'`.
- Indeterminate state omits `aria-valuenow` per ARIA specification.
