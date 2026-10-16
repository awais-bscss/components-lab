# Accordion

A vertically stacked list of interactive headers that each expand to reveal associated section content, supporting single or multiple panel expansion and full keyboard navigation.

## Import

```tsx
import { Accordion } from '@/components/interactive/Accordion'
```

## Props

### AccordionProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItem[]` | required | Array of item definitions to render |
| `multiple` | `boolean` | `false` | Whether multiple panels can be expanded simultaneously |
| `defaultOpen` | `string[]` | `[]` | Array of item IDs to expand initially on mount |
| `className` | `string` | `undefined` | Additional CSS classes merged onto outer container |

### AccordionItem

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier for the item |
| `title` | `string` | Header text displayed in the clickable trigger |
| `content` | `ReactNode` | Content rendered inside the expandable panel |
| `disabled` | `boolean` | Optional flag to prevent user expansion |

## Usage

### Basic

```tsx
<Accordion
  items={[
    {
      id: 'section-1',
      title: 'What is Components Lab?',
      content: 'A clean, accessible component library showcase.',
    },
    {
      id: 'section-2',
      title: 'How do I install dependencies?',
      content: 'Run npm install in your terminal.',
    },
  ]}
/>
```

### Allowing Multiple Panels Open

```tsx
<Accordion
  multiple
  defaultOpen={['section-1']}
  items={items}
/>
```

## Keyboard Navigation & Accessibility

- Follows the WAI-ARIA Accordion Pattern:
  - Each header trigger is a `<button>` with `aria-expanded` and `aria-controls` referencing its panel ID.
  - Each panel is given `role="region"` and `aria-labelledby` referencing its trigger ID.
  - Hidden panels receive `inert` so their interactive descendants cannot be focused while collapsed.
- Keyboard support:
  - `ArrowDown`: Moves focus to the next enabled accordion trigger (wraps around).
  - `ArrowUp`: Moves focus to the previous enabled accordion trigger (wraps around).
  - `Home`: Moves focus to the first enabled accordion trigger.
  - `End`: Moves focus to the last enabled accordion trigger.
  - `Enter` or `Space`: Toggles the expanded state of the focused trigger.
