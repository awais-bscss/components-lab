# DataTable

DataTable displays tabular records with column sorting and search filtering.

## Import

```tsx
import { DataTable, type ColumnDef } from '@/components/interactive/DataTable'
```

## Props

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `T[]` | none | Yes | Array of record objects |
| `columns` | `ColumnDef<T>[]` | none | Yes | Column configurations defining key, header, sortable, width, render |
| `getRowId` | `(row: T) => string \| number` | none | Yes | Function returning unique identifier per row |
| `searchable` | `boolean` | `true` | No | Shows search filter input |
| `searchPlaceholder` | `string` | `'Search...'` | No | Search input placeholder text |
| `emptyMessage` | `string` | `'No results found.'` | No | Text displayed when no rows match |
| `onRowClick` | `(row: T) => void` | `undefined` | No | Callback when a row is clicked or activated |
| `className` | `string` | `undefined` | No | Additional class names applied to the container |

Native HTML attributes do not pass through. `className` applies to the root element. Exported types: `DataTableProps`, `ColumnDef`, `SortDir`.

## Usage

```tsx
interface User {
  id: string
  name: string
  role: string
}

const columns: ColumnDef<User>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'role', header: 'Role', sortable: true },
]

const data: User[] = [
  { id: '1', name: 'Sarah Jenkins', role: 'Engineer' },
  { id: '2', name: 'Alex Rivera', role: 'Designer' },
]

<DataTable data={data} columns={columns} getRowId={row => row.id} />
```

```tsx
<DataTable
  data={data}
  columns={columns}
  getRowId={row => row.id}
  onRowClick={user => console.log(user.name)}
  searchable={false}
/>
```

## Accessibility

Keyboard interaction:

| Key | Action |
| --- | --- |
| `Tab` | Moves focus between search input, column sort buttons, and interactive rows |
| `Enter` / `Space` on sort button | Toggles sort direction between ascending, descending, and none |
| `Enter` / `Space` on row | Triggers `onRowClick` when row is interactive |

- Table uses `aria-label="Data table"`.
- Headers have `scope="col"` and dynamic `aria-sort` (`ascending`, `descending`, `none`).
- Search input has `aria-label="Search table"`.
- Row count element has `aria-live="polite"`.

## Design tokens

- `bg-surface`, `bg-surface-muted`, `border-border`
- `text-foreground`, `text-muted-foreground`, `focus:ring-ring`

## Notes and limitations

- Sorting and filtering are performed entirely in client-side memory.
- Server pagination is not built in.

## Related

- [Card](../../composites/Card/README.md)
- [Input](../../primitives/Input/README.md)
