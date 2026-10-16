# Tooltip

A lightweight hover/focus tooltip that wraps any single React element and displays a short text label at a configurable position. Appears after a configurable delay and dismisses on `Escape`.

## Import

```tsx
import { Tooltip } from '@/components/composites/Tooltip'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | required | Text displayed inside the tooltip bubble |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Placement relative to the trigger element |
| `delay` | `number` | `300` | Milliseconds before the tooltip appears after hover/focus |
| `children` | `ReactElement` | required | The trigger element. Must accept `aria-describedby` |

## Usage

### Basic

```tsx
<Tooltip content="Copy to clipboard">
  <button>Copy</button>
</Tooltip>
```

### Custom position

```tsx
<Tooltip content="Opens in a new tab" position="right">
  <a href="https://example.com" target="_blank">Link</a>
</Tooltip>
```

### No delay

```tsx
<Tooltip content="Instant" delay={0}>
  <button>Hover me</button>
</Tooltip>
```

## Accessibility

- Renders a `role="tooltip"` element with a generated ID.
- `aria-describedby` is set on the trigger while the tooltip is visible and removed when hidden.
- The tooltip dismisses on `Escape` keydown.
- Responds to both `mouseenter`/`mouseleave` and `focus`/`blur` so keyboard users receive tooltip content.

## Notes

- `children` must be a single React element that forwards `aria-describedby` (all HTML elements do this by default).
- The tooltip uses CSS `position: absolute` relative to its inline wrapper. If the trigger is in a container with `overflow: hidden`, the tooltip may clip. In that case, consider a portal-based alternative.
- Long strings in `content` are rendered with `whitespace-nowrap`. Keep tooltip text concise.
