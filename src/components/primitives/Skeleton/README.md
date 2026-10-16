# Skeleton

A placeholder preview component used to indicate ongoing loading states and minimize perceived latency while content or data loads asynchronously.

## Import

```tsx
import { Skeleton } from '@/components/primitives/Skeleton'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'text' \| 'circular' \| 'rectangular'` | `'text'` | Geometry shape of the placeholder |
| `animation` | `'pulse' \| 'wave' \| 'none'` | `'pulse'` | Animation effect (`wave` creates a subtle shimmer gradient sweep) |
| `width` | `string \| number` | `undefined` | Explicit width (number in px or CSS string e.g. `'100%'`, `'48px'`) |
| `height` | `string \| number` | `undefined` | Explicit height (number in px or CSS string) |
| `className` | `string` | `undefined` | Additional Tailwind CSS classes |

## Usage

### Text Lines

```tsx
<div className="space-y-2">
  <Skeleton variant="text" className="h-4 w-3/4" />
  <Skeleton variant="text" className="h-4 w-1/2" />
</div>
```

### Avatar (Circular)

```tsx
<Skeleton variant="circular" width={48} height={48} />
```

### Media / Banner (Rectangular with Shimmer Wave)

```tsx
<Skeleton variant="rectangular" height={180} animation="wave" className="w-full rounded-lg" />
```

### Complete Card Mockup

```tsx
<div className="p-4 border border-border rounded-xl space-y-4">
  <div className="flex items-center gap-3">
    <Skeleton variant="circular" width={40} height={40} />
    <div className="flex-1 space-y-1.5">
      <Skeleton variant="text" className="h-4 w-2/3" />
      <Skeleton variant="text" className="h-3 w-1/3" />
    </div>
  </div>
  <Skeleton variant="rectangular" height={140} className="w-full rounded-lg" />
</div>
```

## Accessibility

- Includes `role="status"` and `aria-busy="true"` to announce an active loading region to assistive technologies.
- Contains an accessible `<span className="sr-only">Loading...</span>` tag.
