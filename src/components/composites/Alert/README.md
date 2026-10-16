# Alert

A contextual feedback component for displaying informational, success, warning, or error messages inline within a page layout.

## Import

```tsx
import { Alert } from '@/components/composites/Alert'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Visual intent that controls color and icon |
| `title` | `string` | `undefined` | Bold heading rendered above the message body |
| `children` | `ReactNode` | required | Alert message content |
| `dismissible` | `boolean` | `false` | Renders a close button that unmounts the alert |
| `className` | `string` | `undefined` | Additional CSS classes merged onto the root element |

## Usage

### Basic

```tsx
<Alert variant="info">Your session will expire in 15 minutes.</Alert>
```

### With title

```tsx
<Alert variant="success" title="Changes saved">
  Your profile has been updated successfully.
</Alert>
```

### Dismissible

```tsx
<Alert variant="warning" title="Low storage" dismissible>
  You are using 90% of your storage quota.
</Alert>
```

## Accessibility

- `variant="error"` and `variant="warning"` render with `role="alert"` (assertive live region), causing screen readers to announce the message immediately.
- `variant="info"` and `variant="success"` render with `role="status"` (polite live region), announcing when the user is idle.
- The dismiss button has an `aria-label="Dismiss alert"` for screen reader clarity.
- The icon is `aria-hidden="true"` to avoid redundant announcements.
