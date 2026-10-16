# Button

An interactive element that triggers actions, submits forms, or links to navigation targets. Supports multiple variants, sizes, loading states, and icon slots.

## Import

```tsx
import { Button } from '@/components/primitives/Button'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button height and padding |
| `isLoading` | `boolean` | `false` | When true, renders a spinning indicator and disables interactions |
| `leftIcon` | `ReactNode` | `undefined` | Icon element rendered before button content |
| `rightIcon` | `ReactNode` | `undefined` | Icon element rendered after button content |
| `disabled` | `boolean` | `false` | Standard HTML button disabled state |
| `children` | `ReactNode` | `undefined` | Button content |
| `className` | `string` | `undefined` | Additional CSS classes |

In addition to the above, all standard HTML `<button>` attributes (`onClick`, `type`, `name`, `form`, etc.) are supported via `forwardRef`.

## Usage

### Basic Variants

```tsx
<Button variant="primary">Save changes</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="outline">View details</Button>
<Button variant="ghost">Dismiss</Button>
<Button variant="danger">Delete</Button>
```

### With Icons

```tsx
import { PlusIcon, ArrowRightIcon } from '@/icons'

<Button leftIcon={<PlusIcon className="w-4 h-4" />}>
  Create project
</Button>

<Button rightIcon={<ArrowRightIcon className="w-4 h-4" />}>
  Continue
</Button>
```

### Loading State

```tsx
<Button isLoading>Saving...</Button>
```

## Accessibility

- Renders a semantic native `<button>` element with keyboard focus and activation (`Enter`, `Space`) built in.
- Applies `aria-busy="true"` when `isLoading` is active.
- Uses `focus-visible:ring-2` with `focus-visible:ring-offset-2` for accessible keyboard focus outlines across light and dark modes.
- Disabled buttons have `disabled` attribute set, preventing pointer and keyboard activation.
