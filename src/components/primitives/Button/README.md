# Button

Button triggers actions, submits forms, or links to destinations.

## Import

```tsx
import { Button } from '@/components/primitives/Button'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | No | Visual style preset |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | No | Dimensions and spacing |
| `isLoading` | `boolean` | `false` | No | Replaces left icon with a spinner and disables clicks |
| `leftIcon` | `React.ReactNode` | `undefined` | No | Icon slot rendered before label |
| `rightIcon` | `React.ReactNode` | `undefined` | No | Icon slot rendered after label |
| `disabled` | `boolean` | `false` | No | Disables click events and reduces opacity |
| `children` | `React.ReactNode` | `undefined` | No | Button content |
| `className` | `string` | `undefined` | No | Additional class names applied to the button |

Native button attributes (`onClick`, `type`, `form`, etc.) pass through via `forwardRef`. `className` merges with the variant styles. Exported types: `ButtonProps`, `ButtonVariantProps`.

## Usage

```tsx
<Button variant="primary">Save changes</Button>
```

```tsx
<Button variant="secondary" size="sm">Cancel</Button>
```

```tsx
<Button isLoading variant="primary">Submitting</Button>
```

```tsx
<Button variant="danger" disabled>Delete project</Button>
```

## Variants and sizes

| Variant | Class values |
| --- | --- |
| `primary` | `bg-primary text-primary-foreground hover:bg-primary-hover shadow-xs` |
| `secondary` | `bg-surface-muted text-foreground hover:bg-border border border-border` |
| `outline` | `bg-transparent text-foreground border border-border hover:bg-surface-muted` |
| `ghost` | `bg-transparent text-muted-foreground hover:text-foreground hover:bg-surface-muted` |
| `danger` | `bg-danger text-white hover:bg-danger/90 shadow-xs` |

| Size | Class values |
| --- | --- |
| `sm` | `h-8 px-3 text-xs gap-1.5` |
| `md` | `h-9 px-4 text-sm gap-2` |
| `lg` | `h-10 px-5 text-sm gap-2.5` |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| `Enter` | Activates the button |
| `Space` | Activates the button |

- Uses native `<button>` element with focus handling.
- Focus indicator uses `focus-visible:ring-2 focus-visible:ring-ring`.
- Sets `aria-busy="true"` when `isLoading` is true.
- Disabled buttons receive native `disabled` attribute, removing them from tab sequence.

## Design tokens

- `bg-primary`, `text-primary-foreground`, `bg-primary-hover`
- `bg-surface-muted`, `text-foreground`, `border-border`
- `text-muted-foreground`, `bg-danger`, `ring-ring`

## Notes and limitations

- Loading state replaces `leftIcon` with `SpinnerIcon` and preserves `rightIcon` only when not loading.
- Does not support polymorphic `asChild` slot rendering.

## Related

- [Chip](../Chip/README.md)
- [Spinner](../Spinner/README.md)
