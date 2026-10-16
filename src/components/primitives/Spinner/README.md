# Spinner

An animated circular loader used to indicate indeterminate progress or asynchronous background operations.

## Import

```tsx
import { Spinner } from '@/components/primitives/Spinner'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Outer dimensions and stroke thickness |
| `variant` | `'primary' \| 'default' \| 'white'` | `'primary'` | Track and arc color variant |
| `label` | `string` | `undefined` | Optional visual label rendered below spinner |
| `className` | `string` | `undefined` | Additional CSS classes |

## Usage

### Basic

```tsx
<Spinner />
```

### With Label

```tsx
<Spinner size="lg" label="Saving data..." />
```

### Inside Dark / Colored Surfaces

```tsx
<div className="bg-primary p-4 rounded-md">
  <Spinner variant="white" size="sm" />
</div>
```

## Accessibility

- The root element includes `role="status"` which creates a live region for screen readers.
- An accessible fallback `<span className="sr-only">Loading...</span>` (or custom label) is always present for screen readers.
- The visual rotating border element has `aria-hidden="true"` to prevent redundant screen reader announcements.
