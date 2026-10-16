# Tooltip

Tooltip displays contextual helper text on element hover and focus.

## Import

```tsx
import { Tooltip } from '@/components/composites/Tooltip'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `content` | `string` | none | Yes | Text message displayed in the tooltip |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | No | Placement relative to the trigger element |
| `delay` | `number` | `300` | No | Show delay in milliseconds |
| `children` | `React.ReactElement` | none | Yes | Single interactive child element receiving the tooltip |

Native HTML attributes do not pass through. Tooltip does not accept a `className` prop. Exported types: `TooltipProps`, `TooltipPosition`.

## Usage

```tsx
<Tooltip content="Edit profile">
  <button type="button">Edit</button>
</Tooltip>
```

```tsx
<Tooltip content="Delete permanently" position="bottom">
  <button type="button">Delete</button>
</Tooltip>
```

```tsx
<Tooltip content="More info" position="right" delay={150}>
  <span tabIndex={0}>Notice</span>
</Tooltip>
```

## Variants and sizes

| Position | Placement class values |
| --- | --- |
| `top` | `bottom-full left-1/2 -translate-x-1/2 mb-1.5` |
| `bottom` | `top-full left-1/2 -translate-x-1/2 mt-1.5` |
| `left` | `right-full top-1/2 -translate-y-1/2 mr-1.5` |
| `right` | `left-full top-1/2 -translate-y-1/2 ml-1.5` |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| `Tab` to trigger | Shows tooltip after delay when trigger receives focus |
| `Escape` | Dismisses the tooltip immediately |
| `Shift + Tab` off trigger | Hides tooltip on focus loss |

- Injects `aria-describedby` into child element pointing to the tooltip ID when visible.
- Tooltip popup uses `role="tooltip"`.
- Trigger works with both mouse events and keyboard focus events.

## Design tokens

- `bg-tooltip`
- `text-tooltip-foreground`
- `border-border-strong`

## Notes and limitations

- Tooltip uses CSS absolute positioning relative to its inline wrapper. If a parent container has `overflow: hidden`, the popup can be clipped.
- Children prop must be a single valid React element.

## Related

- [Button](../../primitives/Button/README.md)
