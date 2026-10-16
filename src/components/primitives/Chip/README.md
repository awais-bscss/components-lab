# Chip

Compact interactive pill element for filters, tags, selections, and dismissible items.

## Import

```tsx
import { Chip } from '@/components/primitives/Chip'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | Visual color theme |
| `selected` | `boolean` | `false` | Whether the chip is highlighted as selected |
| `disabled` | `boolean` | `false` | Disables interaction and lowers opacity |
| `leftIcon` | `ReactNode` | `undefined` | Optional icon rendered on the left |
| `onClick` | `() => void` | `undefined` | Callback fired when the chip body is clicked |
| `onRemove` | `() => void` | `undefined` | Callback fired when remove button is clicked |
| `children` | `ReactNode` | required | Content displayed inside the chip |
| `className` | `string` | `undefined` | Additional classes merged onto root element |

## Usage

### Filter / Selection

```tsx
<Chip
  variant="primary"
  selected={isSelected}
  onClick={() => setIsSelected(!isSelected)}
>
  TypeScript
</Chip>
```

### Dismissible Tag

```tsx
<Chip
  variant="default"
  onRemove={() => handleRemove(tagId)}
>
  Frontend
</Chip>
```

### Clickable and Removable

When both `onClick` and `onRemove` are provided, the chip splits into two accessible interactive hit targets:

```tsx
<Chip
  variant="primary"
  onClick={() => handleFilter('Design')}
  onRemove={() => handleRemove('Design')}
>
  Design
</Chip>
```

## Accessibility

- When clickable, renders an accessible native `<button>` element with keyboard focus and activation (`Enter`, `Space`).
- When removable, the remove button has an explicit `aria-label="Remove"`.
- Uses `focus-visible:ring-2` to ensure clear keyboard focus styling.
- Decorative left icons are marked `aria-hidden="true"`.
