# Divider

Divider visually separates content sections horizontally or vertically.

## Import

```tsx
import { Divider } from '@/components/primitives/Divider'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | No | Direction of the divider line |
| `label` | `string` | `undefined` | No | Center label rendered between divider segments |
| `className` | `string` | `undefined` | No | Additional class names applied to the container |

Native HTML attributes do not pass through. `className` applies to the root element. Exported types: `DividerProps`.

## Usage

```tsx
<Divider />
```

```tsx
<Divider label="OR" />
```

```tsx
<div className="flex items-center h-6">
  <span>Left</span>
  <Divider orientation="vertical" />
  <span>Right</span>
</div>
```

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| None | Divider is a non-interactive separator element |

- Root element uses `role="separator"`.
- Vertical divider sets `aria-orientation="vertical"`.
- Segment lines around a text label use `aria-hidden="true"`.

## Design tokens

- `bg-border`
- `text-muted-foreground`

## Notes and limitations

- Center text labels are supported on `orientation="horizontal"` only.

## Related

- [Typography](../Typography/README.md)
