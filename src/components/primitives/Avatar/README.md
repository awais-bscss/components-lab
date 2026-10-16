# Avatar

Avatar displays a user image, name initials, or an icon placeholder to represent an identity.

## Import

```tsx
import { Avatar, AvatarGroup } from '@/components/primitives/Avatar'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `src` | `string` | `undefined` | No | Image source URL |
| `alt` | `string` | `undefined` | No | Alternative text for the image |
| `name` | `string` | `undefined` | No | User name used to generate initials and background color |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | No | Avatar dimension preset |
| `status` | `'online' \| 'offline' \| 'busy' \| 'away'` | `undefined` | No | Activity status indicator badge |
| `className` | `string` | `undefined` | No | Additional class names applied to the container |

Native HTML attributes do not pass through. `className` applies to the root element. Exported types: `AvatarProps`, `AvatarGroupProps`, `AvatarVariantProps`, `AvatarStatus`.

## Usage

```tsx
<Avatar name="Sarah Jenkins" />
```

```tsx
<Avatar src="/profile.jpg" alt="Alex Rivera" size="lg" status="online" />
```

```tsx
<Avatar status="busy" />
```

```tsx
<AvatarGroup
  users={[
    { name: 'Sarah Jenkins' },
    { name: 'Alex Rivera' },
    { name: 'Jordan Lee' },
  ]}
  max={2}
/>
```

## Variants and sizes

| Size | Class values | Dimensions |
| --- | --- | --- |
| `xs` | `w-6 h-6 text-[10px]` | 24px by 24px |
| `sm` | `w-8 h-8 text-xs` | 32px by 32px |
| `md` | `w-10 h-10 text-sm` | 40px by 40px |
| `lg` | `w-12 h-12 text-base` | 48px by 48px |
| `xl` | `w-16 h-16 text-xl` | 64px by 64px |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| None | Avatar is a static presentation element and has no keyboard actions |

- The image element includes an `alt` attribute defaulting to name or `Avatar`.
- The status indicator uses `role="img"` with an `aria-label` stating the status value.
- Fallback user icon has no interactive tab stops.

## Design tokens

- `ring-surface`
- `bg-surface-muted`
- `border-surface`
- `border-border`
- `text-muted-foreground`
- `bg-success`, `bg-muted-foreground`, `bg-danger`, `bg-warning`

## Notes and limitations

- Image load failure does not trigger an automatic fallback to initials when `src` is provided.
- Initials generation uses at most two letters derived from the first and last words in `name`.

## Related

- [Badge](../Badge/README.md)
- [Skeleton](../Skeleton/README.md)
