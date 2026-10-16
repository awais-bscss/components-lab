# Input

Input captures user text input with label, error, hint, and icon slots.

## Import

```tsx
import { Input } from '@/components/primitives/Input'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `label` | `string` | `undefined` | No | Label text rendered above input |
| `error` | `string` | `undefined` | No | Validation message rendered below input |
| `hint` | `string` | `undefined` | No | Informational helper text rendered below input |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | No | Field height and font size |
| `leftIcon` | `React.ReactNode` | `undefined` | No | Icon slot inside the left edge of the input |
| `rightIcon` | `React.ReactNode` | `undefined` | No | Icon slot inside the right edge of the input |
| `className` | `string` | `undefined` | No | Additional class names applied to the input element |

Native input attributes (`value`, `onChange`, `placeholder`, `disabled`, etc.) pass through via `forwardRef`. `className` applies to the `<input>` element. Exported types: `InputProps`, `InputVariantProps`.

## Usage

```tsx
<Input placeholder="Enter username" />
```

```tsx
<Input label="Email address" placeholder="user@example.com" hint="We will not share your email." />
```

```tsx
<Input label="Password" type="password" error="Password must be at least 8 characters." />
```

```tsx
<Input size="sm" placeholder="Search items..." />
```

## Variants and sizes

| Size | Class values |
| --- | --- |
| `sm` | `h-8 text-xs px-2.5` |
| `md` | `h-9 text-sm px-3` |
| `lg` | `h-10 text-sm px-3.5` |

| hasError | Class values |
| --- | --- |
| `true` | `border-danger focus:border-danger focus:ring-danger` |
| `false` | `border-border hover:border-border-strong focus:border-primary` |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| `Tab` | Moves focus to the input field |
| Typing keys | Enters text into the field |

- Form label links to input using `htmlFor` and generated `id`.
- Sets `aria-invalid="true"` when `error` is present.
- Links `error` and `hint` through `aria-describedby`.
- Error message has `role="alert"` and hint has `role="status"`.
- Icons include `aria-hidden="true"`.

## Design tokens

- `bg-surface`, `border-border`, `border-border-strong`, `text-foreground`
- `placeholder:text-muted-foreground`, `focus:ring-ring`, `border-danger`
- `text-danger-soft-foreground`

## Notes and limitations

- Icon slots have `pointer-events-none` and do not receive click events directly.

## Related

- [Button](../Button/README.md)
