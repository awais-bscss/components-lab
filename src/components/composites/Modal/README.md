# Modal

Modal renders a dialog window over the page using a React portal with focus trapping.

## Import

```tsx
import { Modal } from '@/components/composites/Modal'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `open` | `boolean` | none | Yes | Controls dialog visibility |
| `onClose` | `() => void` | none | Yes | Callback function when closing the modal |
| `title` | `string` | `undefined` | No | Title text in header and aria-labelledby source |
| `children` | `React.ReactNode` | none | Yes | Main dialog content |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | No | Dialog maximum width preset |
| `closeOnOverlay` | `boolean` | `true` | No | Calls onClose when backdrop is clicked |
| `footer` | `React.ReactNode` | `undefined` | No | Action buttons rendered in modal footer |
| `aria-describedby` | `string` | `undefined` | No | Element ID providing additional accessible description |

Native HTML attributes do not pass through. Modal does not accept a `className` prop. Exported types: `ModalProps`, `ModalSize`.

## Usage

```tsx
<Modal open={isOpen} onClose={() => setIsOpen(false)} title="Edit profile">
  <p>Update your account details below.</p>
</Modal>
```

```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Delete confirmation"
  size="sm"
  footer={
    <>
      <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button variant="danger">Delete</Button>
    </>
  }
>
  <p>This action cannot be undone.</p>
</Modal>
```

## Variants and sizes

| Size | Maximum width class |
| --- | --- |
| `sm` | `max-w-sm` |
| `md` | `max-w-md` |
| `lg` | `max-w-lg` |
| `xl` | `max-w-xl` |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| `Escape` | Closes the modal and triggers `onClose` |
| `Tab` | Moves focus forward through interactive elements inside the modal |
| `Shift + Tab` | Moves focus backward through interactive elements inside the modal |

- Sets `role="dialog"` and `aria-modal="true"` on the dialog container.
- Connects dialog title to `aria-labelledby` with an internal unique ID.
- Traps focus inside the modal dialog while open.
- Locks document body scroll while the modal is open.
- Restores focus to the element that triggered the modal upon closing.

## Design tokens

- `bg-overlay`
- `bg-surface`
- `border-border`
- `text-foreground`
- `text-muted-foreground`
- `bg-surface-muted/30`

## Notes and limitations

- Renders into `document.body` using `createPortal`.
- Modal title is required to populate the accessible dialog label automatically.

## Related

- [Alert](../Alert/README.md)
- [Card](../Card/README.md)
