# Skeleton

Skeleton renders placeholder previews of content while data is loading.

## Import

```tsx
import { Skeleton } from '@/components/primitives/Skeleton'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `'text' \| 'circular' \| 'rectangular'` | `'text'` | No | Geometry shape preset |
| `animation` | `'pulse' \| 'wave' \| 'none'` | `'pulse'` | No | Animation style applied to placeholder |
| `width` | `string \| number` | `undefined` | No | Width in pixels or CSS units |
| `height` | `string \| number` | `undefined` | No | Height in pixels or CSS units |
| `className` | `string` | `undefined` | No | Additional class names applied to the container |

Native `<div>` attributes pass through to the element. `className` applies to the root element. Exported types: `SkeletonProps`, `SkeletonVariantProps`.

## Usage

```tsx
<Skeleton />
```

```tsx
<Skeleton variant="circular" width={40} height={40} />
```

```tsx
<Skeleton variant="rectangular" height={120} animation="wave" />
```

```tsx
<div className="space-y-2">
  <Skeleton variant="text" className="w-3/4 h-4" />
  <Skeleton variant="text" className="w-1/2 h-3" />
</div>
```

## Variants and sizes

| Variant | Class values |
| --- | --- |
| `text` | `rounded h-4 w-full` |
| `circular` | `rounded-full` |
| `rectangular` | `rounded-md` |

| Animation | Class values |
| --- | --- |
| `pulse` | `animate-pulse` |
| `wave` | `animate-shimmer` |
| `none` | empty |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| None | Skeleton is a non-interactive loading placeholder |

- Root element has `role="status"` and `aria-busy="true"`.
- Root element has `aria-label="Loading..."`.
- Contains `<span className="sr-only">Loading...</span>` for screen readers.

## Design tokens

- `bg-surface-muted`
- `animate-pulse`
- `animate-shimmer`

## Notes and limitations

- Numeric `width` and `height` values are mapped to inline styles with `px` units.

## Related

- [Spinner](../Spinner/README.md)
- [Card](../../composites/Card/README.md)
