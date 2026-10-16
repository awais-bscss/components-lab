# Divider

A visual or semantic separator that groups or partitions content within layouts.

## Import

```tsx
import { Divider } from '@/components/primitives/Divider'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction of the dividing line |
| `label` | `string` | `undefined` | Optional text rendered centered across a horizontal divider |
| `className` | `string` | `undefined` | Additional CSS classes |

## Usage

### Horizontal Divider

```tsx
<Divider />
```

### With Centered Label

```tsx
<Divider label="OR CONTINUE WITH" />
```

### Vertical Divider

```tsx
<div className="flex items-center h-8 gap-3">
  <span>Link 1</span>
  <Divider orientation="vertical" />
  <span>Link 2</span>
</div>
```

## Accessibility

- Renders an element with `role="separator"`.
- When orientation is `'vertical'`, sets `aria-orientation="vertical"`.
- Divider line tracks in label dividers use `aria-hidden="true"` so only the textual label is read.
