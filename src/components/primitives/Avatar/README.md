# Avatar

A visual representation of a user, supporting photos, auto-generated initials from user names, and optional status indicator dots. Also includes an `AvatarGroup` component for stacked multi-user displays.

## Import

```tsx
import { Avatar, AvatarGroup } from '@/components/primitives/Avatar'
```

## Props

### AvatarProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | `undefined` | URL for the user profile image |
| `name` | `string` | `undefined` | Full name used for initials generation and deterministic background color |
| `alt` | `string` | `name \| 'Avatar'` | Accessible text for screen readers |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Dimension and font size of the avatar |
| `status` | `'online' \| 'offline' \| 'busy' \| 'away'` | `undefined` | Status indicator dot displayed in the corner |
| `className` | `string` | `undefined` | Additional CSS classes merged onto the container |

### AvatarGroupProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `users` | `Array<{ name: string; src?: string }>` | required | List of user objects to render |
| `max` | `number` | `4` | Maximum number of visible avatars before showing count badge |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size applied to all avatars in the group |

## Usage

### Initials Fallback

When no image URL is provided, initials are extracted from the user's name:

```tsx
<Avatar name="Sarah Connor" />
```

### With Image

```tsx
<Avatar
  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  name="Alex Johnson"
/>
```

### Status Indicators

```tsx
<Avatar name="Marcus Vance" status="online" />
<Avatar name="Elena Rostova" status="busy" />
<Avatar name="David Kim" status="away" />
<Avatar name="Rachel Zane" status="offline" />
```

### Avatar Group

```tsx
<AvatarGroup
  users={[
    { name: 'Sarah Connor' },
    { name: 'Alex Johnson' },
    { name: 'Marcus Vance' },
    { name: 'Elena Rostova' },
    { name: 'David Kim' },
  ]}
  max={4}
/>
```

## Accessibility

- When `src` is provided, the image contains an `alt` attribute describing the user.
- If no image is provided, screen readers can identify the user from the name or aria attributes.
- Status dots include `role="img"` and `aria-label` describing the status value (e.g. `Status: online`).
- Generic fallback icons use `aria-hidden="true"` to prevent screen reader noise.
