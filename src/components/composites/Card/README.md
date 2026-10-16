# Card

A flexible surface container with optional composable sub-parts: `Card.Header`, `Card.Body`, and `Card.Footer`. Supports four visual variants and a padding shorthand for flat usage.

## Import

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@/components/composites/Card'
```

`Card.Header`, `Card.Body`, and `Card.Footer` are also available as static properties on `Card`:

```tsx
import { Card } from '@/components/composites/Card'

<Card>
  <Card.Header>...</Card.Header>
  <Card.Body>...</Card.Body>
  <Card.Footer>...</Card.Footer>
</Card>
```

## Props

### Card

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'outlined' \| 'ghost'` | `'default'` | Surface treatment |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'none'` | Uniform internal padding. Use `none` when composing with sub-parts |
| `children` | `ReactNode` | required | Card content |
| `className` | `string` | `undefined` | Additional CSS classes merged onto the root element |

### CardHeader

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Header content -- typically a title string |
| `className` | `string` | Additional CSS classes |

### CardBody

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Main content area |
| `className` | `string` | Additional CSS classes |

### CardFooter

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Footer content -- typically actions or metadata |
| `className` | `string` | Additional CSS classes |

## Usage

### With sub-parts

```tsx
<Card>
  <Card.Header>Project Overview</Card.Header>
  <Card.Body>
    A reusable card component for grouping related content.
  </Card.Body>
  <Card.Footer>Last updated 2 hours ago</Card.Footer>
</Card>
```

### Flat with padding

```tsx
<Card padding="md">
  Simple padded card without sub-parts.
</Card>
```

### With footer actions

```tsx
<Card>
  <Card.Header>Confirm deletion</Card.Header>
  <Card.Body>This action cannot be undone.</Card.Body>
  <Card.Footer>
    <span className="flex-1" />
    <Button variant="secondary" size="sm">Cancel</Button>
    <Button variant="danger" size="sm">Delete</Button>
  </Card.Footer>
</Card>
```

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Standard surface with `shadow-xs` |
| `elevated` | Stronger `shadow-md` for depth |
| `outlined` | Transparent background, stronger border |
| `ghost` | Muted background, no visible border |
