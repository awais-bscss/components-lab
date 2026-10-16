# Spinner

Spinner displays an animated circular indicator for loading operations.

## Import

```tsx
import { Spinner } from '@/components/primitives/Spinner'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | No | Diameter and stroke width preset |
| `variant` | `'primary' \| 'default' \| 'white'` | `'primary'` | No | Track and arc color theme |
| `label` | `string` | `undefined` | No | Visible label displayed beneath spinner |
| `className` | `string` | `undefined` | No | Additional class names applied to the container |

Native HTML attributes do not pass through. `className` applies to the root wrapper. Exported types: `SpinnerProps`, `SpinnerVariantProps`.

## Usage

```tsx
<Spinner />
```

```tsx
<Spinner size="sm" variant="default" />
```

```tsx
<Spinner size="lg" label="Saving data..." />
```

```tsx
<div className="bg-primary p-4 rounded-md">
  <Spinner variant="white" size="sm" />
</div>
```

## Variants and sizes

| Size | Class values |
| --- | --- |
| `xs` | `w-3 h-3 border` |
| `sm` | `w-4 h-4 border-2` |
| `md` | `w-5 h-5 border-2` |
| `lg` | `w-7 h-7 border-[2.5px]` |
| `xl` | `w-10 h-10 border-3` |

| Variant | Class values |
| --- | --- |
| `primary` | `border-primary/25 border-t-primary` |
| `default` | `border-border-strong border-t-foreground` |
| `white` | `border-white/30 border-t-white` |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| None | Spinner is a non-interactive status indicator |

- Root element has `role="status"`.
- Hidden `<span className="sr-only">Loading...</span>` announces loading state.
- Rotating border element has `aria-hidden="true"`.

## Design tokens

- `border-primary/25`, `border-t-primary`
- `border-border-strong`, `border-t-foreground`
- `text-muted-foreground`

## Notes and limitations

- Animation runs continuously using CSS keyframes (`animate-spin`).

## Related

- [Skeleton](../Skeleton/README.md)
- [Button](../Button/README.md)
