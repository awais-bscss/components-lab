# DataTable

A type-safe tabular data component supporting client-side filtering, multi-directional column sorting, custom cell render templates, clickable rows, and responsive horizontal scrolling.

## Import

```tsx
import { DataTable, type ColumnDef } from '@/components/interactive/DataTable'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | required | Array of record objects to render |
| `columns` | `ColumnDef<T>[]` | required | Column specifications and cell renderers |
| `getRowId` | `(row: T) => string \| number` | required | Function returning a unique key for each row |
| `searchable` | `boolean` | `true` | Whether to display the search query input |
| `searchPlaceholder` | `string` | `'Search...'` | Placeholder text for the search input |
| `emptyMessage` | `string` | `'No results found.'` | Text shown when no rows match the filter |
| `onRowClick` | `(row: T) => void` | `undefined` | Callback fired when a table row is clicked or activated |
| `className` | `string` | `undefined` | Additional CSS classes for outer container |

### ColumnDef<T>

| Property | Type | Description |
|----------|------|-------------|
| `key` | `keyof T` | Object property key for the column |
| `header` | `string` | Text rendered in the table header cell |
| `sortable` | `boolean` | When true, header becomes a sortable button |
| `width` | `string` | Optional CSS width style (e.g. `'200px'`) |
| `render` | `(value: T[K], row: T) => ReactNode` | Optional custom cell renderer function |

## Usage

```tsx
interface User {
  id: string
  name: string
  email: string
  role: string
}

const columns: ColumnDef<User>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'role', header: 'Role', sortable: true },
]

<DataTable
  data={users}
  columns={columns}
  getRowId={user => user.id}
  searchable
  onRowClick={user => navigate(`/users/${user.id}`)}
/>
```

## Accessibility

- Table headers include `aria-sort="ascending"`, `aria-sort="descending"`, or `aria-sort="none"` when column sorting is enabled.
- Sort buttons are focusable with visible focus rings.
- The search input includes an explicit `aria-label="Search table"`.
- Row count updates are communicated via an `aria-live="polite"` region.
- Interactive rows support keyboard navigation (`Tab`, `Enter`, and `Space`) and have appropriate `tabIndex={0}`.
