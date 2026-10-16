# Typography

Typography formats titles and body text with predefined type scale tokens.

## Import

```tsx
import { Heading, Text } from '@/components/primitives/Typography'
```

## Props

### Heading Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4'` | `'h2'` | No | Semantic heading element and scale size |
| `color` | `'default' \| 'muted' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | No | Text color token |
| `children` | `React.ReactNode` | none | Yes | Heading content |
| `className` | `string` | `''` | No | Additional class names |

### Text Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `'body' \| 'small' \| 'caption' \| 'code' \| 'label'` | `'body'` | No | Typography style preset |
| `color` | `'default' \| 'muted' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | No | Text color token |
| `as` | `'p' \| 'span' \| 'div' \| 'label' \| 'strong' \| 'em'` | `'p'` | No | Underlying HTML element |
| `children` | `React.ReactNode` | none | Yes | Text content |
| `className` | `string` | `''` | No | Additional class names |

Native HTML attributes do not pass through. `className` applies to the rendered element. Exported types: `HeadingProps`, `TextProps`.

## Usage

```tsx
<Heading level="h1">Dashboard overview</Heading>
```

```tsx
<Heading level="h3" color="primary">Active projects</Heading>
```

```tsx
<Text variant="body">Body copy rendered in 14px size.</Text>
```

```tsx
<Text variant="code">npm run dev</Text>
```

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| None | Typography components are non-interactive presentation elements |

- Renders semantic heading tags `<h1>`, `<h2>`, `<h3>`, and `<h4>`.
- Renders semantic text tags `<p>`, `<span>`, `<code>`, and `<label>`.

## Design tokens

- `text-foreground`
- `text-muted-foreground`
- `text-primary`
- `text-success-soft-foreground`
- `text-warning-soft-foreground`
- `text-danger-soft-foreground`
- `bg-surface-muted`, `border-border`

## Notes and limitations

- `color` prop is ignored when `variant="code"` to preserve code token contrast.

## Related

- [Divider](../Divider/README.md)
