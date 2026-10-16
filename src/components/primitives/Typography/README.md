# Typography

Typography components for headings and body text that maintain systematic type hierarchy, line heights, font weights, and semantic HTML elements.

## Import

```tsx
import { Heading, Text } from '@/components/primitives/Typography'
```

## Props

### HeadingProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4'` | `'h2'` | Heading HTML tag and corresponding size |
| `color` | `'default' \| 'muted' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | Semantic text color token |
| `children` | `ReactNode` | required | Heading content |
| `className` | `string` | `undefined` | Additional CSS classes |

### TextProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'body' \| 'small' \| 'caption' \| 'code' \| 'label'` | `'body'` | Text style variant |
| `color` | `'default' \| 'muted' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | Semantic text color token |
| `as` | `'p' \| 'span' \| 'div' \| 'label' \| 'strong' \| 'em'` | `'p'` | Underlying HTML rendering tag |
| `children` | `ReactNode` | required | Text content |
| `className` | `string` | `undefined` | Additional CSS classes |

## Usage

### Headings

```tsx
<Heading level="h1">Dashboard Overview</Heading>
<Heading level="h2">Recent Transactions</Heading>
<Heading level="h3" color="primary">Active Sessions</Heading>
```

### Body and Small Text

```tsx
<Text variant="body">
  Standard body paragraph with proportional line-height.
</Text>

<Text variant="small" color="muted">
  Published on October 15, 2026
</Text>
```

### Code and Label

```tsx
<Text variant="code">npm install</Text>
<Text variant="label">User Profile</Text>
```

## Accessibility

- `Heading` dynamically renders semantic `<h1>`, `<h2>`, `<h3>`, or `<h4>` elements, allowing proper heading nesting for screen reader landmark navigation.
- `Text` supports custom rendering tags (`p`, `span`, `strong`, `em`, `label`) using the `as` prop to preserve correct semantic structure.
- High-contrast text color tokens are mapped according to WCAG 2.1 AA contrast requirements.
