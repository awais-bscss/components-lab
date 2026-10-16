# Card

Card groups related information and actions into a structured container.

## Import

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@/components/composites/Card'
```

## Props

### Card Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `'default' \| 'elevated' \| 'outlined' \| 'ghost'` | `'default'` | No | Border and shadow styling |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'none'` | No | Internal padding preset |
| `children` | `React.ReactNode` | none | Yes | Content or compound sub-components |
| `className` | `string` | `undefined` | No | Additional class names |

### Sub-component Props

`CardHeader`, `CardBody`, and `CardFooter` each accept `{ children: React.ReactNode, className?: string }`.

Native HTML attributes do not pass through. `className` applies to the root element. Exported types: `CardProps`, `CardHeaderProps`, `CardBodyProps`, `CardFooterProps`, `CardVariantProps`, `CardVariant`.

## Usage

```tsx
<Card variant="default">
  <Card.Header>Project summary</Card.Header>
  <Card.Body>Active tasks and progress.</Card.Body>
  <Card.Footer>Last updated 2 hours ago</Card.Footer>
</Card>
```

```tsx
<Card variant="elevated" padding="md">
  <h4>Standalone card</h4>
  <p>Uses direct padding without sub-components.</p>
</Card>
```

```tsx
<Card variant="outlined">
  <Card.Body>Outlined container with subtle border.</Card.Body>
</Card>
```

## Variants and sizes

| Variant | Class values |
| --- | --- |
| `default` | `bg-surface border border-border shadow-xs` |
| `elevated` | `bg-surface border border-border shadow-md` |
| `outlined` | `bg-transparent border border-border-strong` |
| `ghost` | `bg-surface-muted border border-transparent` |

| Padding | Class values |
| --- | --- |
| `none` | empty |
| `sm` | `p-3` |
| `md` | `p-5` |
| `lg` | `p-6` |

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| None | Card is a static container element with no built-in keyboard actions |

- Renders semantic `<div>` elements without forced interactive roles.
- Interactive elements placed inside Card retain their native keyboard accessibility.

## Design tokens

- `bg-surface`
- `bg-surface-muted`
- `border-border`
- `border-border-strong`
- `text-foreground`

## Notes and limitations

- Sub-components (`CardHeader`, `CardBody`, `CardFooter`) work best with `padding="none"` to allow edge-to-edge dividing borders.

## Related

- [Skeleton](../../primitives/Skeleton/README.md)
- [Modal](../Modal/README.md)
