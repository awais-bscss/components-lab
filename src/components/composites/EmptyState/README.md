# EmptyState

EmptyState displays a clear visual placeholder when there is no data, search results, or user content to present.

## Import

```tsx
import { EmptyState } from '@/components/composites/EmptyState'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `title` | `string` | none | Yes | Primary heading explaining the empty state |
| `description` | `React.ReactNode` | `undefined` | No | Supporting descriptive text or guidance |
| `icon` | `React.ReactNode` | `undefined` | No | Icon or visual illustration centered above title |
| `action` | `React.ReactNode` | `undefined` | No | Primary action button |
| `secondaryAction` | `React.ReactNode` | `undefined` | No | Optional secondary action button |
| `variant` | `'default' \| 'card' \| 'dashed' \| 'ghost'` | `'default'` | No | Container background and border treatment |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | No | Internal padding and maximum container width |
| `children` | `React.ReactNode` | `undefined` | No | Additional custom controls or suggestion chips |
| `className` | `string` | `undefined` | No | Additional class names |

## Usage

```tsx
<EmptyState
  title="No items found"
  description="Try modifying your filters or search terms."
/>
```

```tsx
<EmptyState
  variant="card"
  icon={<InboxIcon className="w-5 h-5 text-primary" />}
  title="No active deployments"
  description="Connect your GitHub repository to trigger automated Storybook previews on push."
  action={<Button variant="primary" size="sm">Configure CI/CD</Button>}
/>
```

## Accessibility

- Sets `role="status"` to inform assistive technology when an empty state replaces content.
- Uses semantic `h3` heading tag for the title to preserve heading hierarchy.
- Contrast compliant across light and dark modes with `var(--foreground)` and `var(--muted-foreground)`.
