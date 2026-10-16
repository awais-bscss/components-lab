# Alert

Alert displays feedback banners for system status, warnings, and error messages.

## Import

```tsx
import { Alert } from '@/components/composites/Alert'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | No | Visual theme and semantic status |
| `title` | `string` | `undefined` | No | Heading line displayed above the message |
| `dismissible` | `boolean` | `false` | No | Renders a button to close the alert |
| `children` | `React.ReactNode` | none | Yes | Alert message content |
| `className` | `string` | `undefined` | No | Additional class names applied to the container |

Native HTML attributes do not pass through. `className` applies to the root element. Exported types: `AlertProps`, `AlertVariantProps`.

## Usage

```tsx
<Alert>System maintenance starts at midnight.</Alert>
```

```tsx
<Alert variant="success" title="Success">
  Changes saved to database.
</Alert>
```

```tsx
<Alert variant="warning" dismissible>
  Storage limit reached 90 percent.
</Alert>
```

```tsx
<Alert variant="error" title="Build failed">
  Failed to compile TypeScript sources.
</Alert>
```

## Variants and sizes

| Variant | Class values |
| --- | --- |
| `info` | `bg-info-soft border-info-soft-border text-info-soft-foreground` |
| `success` | `bg-success-soft border-success-soft-border text-success-soft-foreground` |
| `warning` | `bg-warning-soft border-warning-soft-border text-warning-soft-foreground` |
| `error` | `bg-danger-soft border-danger-soft-border text-danger-soft-foreground` |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| `Enter` / `Space` on dismiss button | Dismisses the alert |

- Sets `role="alert"` for `error` and `warning` variants to announce messages immediately.
- Sets `role="status"` for `info` and `success` variants.
- Dismiss button includes `aria-label="Dismiss alert"`.
- Status icons have `aria-hidden="true"`.

## Design tokens

- `bg-info-soft`, `border-info-soft-border`, `text-info-soft-foreground`
- `bg-success-soft`, `border-success-soft-border`, `text-success-soft-foreground`
- `bg-warning-soft`, `border-warning-soft-border`, `text-warning-soft-foreground`
- `bg-danger-soft`, `border-danger-soft-border`, `text-danger-soft-foreground`

## Notes and limitations

- Dismiss state is stored in local component state. Dismissed alerts remain hidden until the component remounts.

## Related

- [Badge](../../primitives/Badge/README.md)
- [Modal](../Modal/README.md)
