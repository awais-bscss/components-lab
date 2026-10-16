# Modal

An accessible dialog overlay rendered via `ReactDOM.createPortal` directly into `document.body`. Implements full keyboard focus trapping, Escape-to-close, scroll lock, and focus restoration.

## Import

```tsx
import { Modal } from '@/components/composites/Modal'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | required | Controls visibility of the modal |
| `onClose` | `() => void` | required | Called when the user closes the modal (overlay click, Escape, or close button) |
| `title` | `string` | `undefined` | Heading text in the header bar. Omit to render without a header |
| `children` | `ReactNode` | required | Body content of the modal |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Maximum width of the dialog panel |
| `closeOnOverlay` | `boolean` | `true` | Whether clicking the backdrop calls `onClose` |
| `footer` | `ReactNode` | `undefined` | Action buttons rendered in the footer bar |
| `aria-describedby` | `string` | `undefined` | ID of an element that describes the dialog content for screen readers |

## Usage

### Basic controlled modal

```tsx
const [open, setOpen] = useState(false)

<>
  <Button onClick={() => setOpen(true)}>Open</Button>
  <Modal open={open} onClose={() => setOpen(false)} title="Edit profile">
    Modal body content goes here.
  </Modal>
</>
```

### With footer actions

```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm deletion"
  footer={
    <>
      <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
    </>
  }
>
  This action cannot be undone.
</Modal>
```

### Prevent overlay close

```tsx
<Modal open={open} onClose={() => setOpen(false)} closeOnOverlay={false} title="Required">
  You must complete this form before continuing.
</Modal>
```

## Accessibility

- Renders a `role="dialog"` with `aria-modal="true"`.
- `title` prop binds `aria-labelledby` automatically via a generated ID.
- Keyboard focus is trapped within the dialog while open.
- `Escape` key calls `onClose`.
- Focus returns to the previously focused element when the modal closes.
- `document.body` scroll is locked while the modal is open.

## Sizes

| Size | Max Width |
|------|-----------|
| `sm` | `max-w-sm` (384px) |
| `md` | `max-w-md` (448px) |
| `lg` | `max-w-lg` (512px) |
| `xl` | `max-w-xl` (576px) |
