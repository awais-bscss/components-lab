import React, { useState, useMemo } from 'react'
import { cn } from '@/lib/cn'
import { SearchIcon, ChevronUpIcon, ChevronDownIcon } from '@/icons'

export type SortDir = 'asc' | 'desc' | null

export type ColumnDef<T extends object> = {
  [K in keyof T]: {
    key: K
    header: string
    sortable?: boolean
    width?: string
    render?: (value: T[K], row: T) => React.ReactNode
  }
}[keyof T]

export interface DataTableProps<T extends object> {
  data: T[]
  columns: ColumnDef<T>[]
  getRowId: (row: T) => string | number
  searchable?: boolean
  searchPlaceholder?: string
  emptyMessage?: string
  onRowClick?: (row: T) => void
  className?: string
}

function SortIcon({ dir }: { dir: SortDir }) {
  return (
    <span className="inline-flex flex-col ml-1 shrink-0 -space-y-1" aria-hidden="true">
      <ChevronUpIcon
        className={cn('w-3 h-3', dir === 'asc' ? 'text-primary' : 'text-muted-foreground/40')}
      />
      <ChevronDownIcon
        className={cn('w-3 h-3', dir === 'desc' ? 'text-primary' : 'text-muted-foreground/40')}
      />
    </span>
  )
}

function compareValues(a: unknown, b: unknown, dir: 'asc' | 'desc'): number {
  if (a == null && b == null) return 0
  if (a == null) return dir === 'asc' ? 1 : -1
  if (b == null) return dir === 'asc' ? -1 : 1

  if (typeof a === 'number' && typeof b === 'number') {
    return dir === 'asc' ? a - b : b - a
  }

  if (a instanceof Date && b instanceof Date) {
    return dir === 'asc' ? a.getTime() - b.getTime() : b.getTime() - a.getTime()
  }

  const strA = String(a)
  const strB = String(b)

  const isDateStr = /^\d{4}-\d{2}-\d{2}/.test(strA) && /^\d{4}-\d{2}-\d{2}/.test(strB)
  if (isDateStr) {
    const timeA = Date.parse(strA)
    const timeB = Date.parse(strB)
    if (!isNaN(timeA) && !isNaN(timeB)) {
      return dir === 'asc' ? timeA - timeB : timeB - timeA
    }
  }

  return dir === 'asc' ? strA.localeCompare(strB) : strB.localeCompare(strA)
}

function renderCell<T extends object, K extends keyof T>(
  col: { key: K; render?: (value: T[K], row: T) => React.ReactNode },
  row: T
): React.ReactNode {
  const value = row[col.key]
  if (col.render) {
    return col.render(value, row)
  }
  return String(value ?? '')
}

export function DataTable<T extends object>({
  data,
  columns,
  getRowId,
  searchable = true,
  searchPlaceholder = 'Search...',
  emptyMessage = 'No results found.',
  onRowClick,
  className,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null)
  const [sortDir, setSortDir] = useState<SortDir>(null)
  const [search, setSearch] = useState('')

  const handleSort = (key: keyof T) => {
    if (sortKey !== key) {
      setSortKey(key)
      setSortDir('asc')
      return
    }
    if (sortDir === 'asc') {
      setSortDir('desc')
      return
    }
    setSortKey(null)
    setSortDir(null)
  }

  const rows = useMemo(() => {
    let result = [...data]

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(row =>
        columns.some(col => String(row[col.key] ?? '').toLowerCase().includes(q))
      )
    }

    if (sortKey && sortDir) {
      result.sort((a, b) => compareValues(a[sortKey], b[sortKey], sortDir))
    }

    return result
  }, [data, search, sortKey, sortDir, columns])

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {searchable && (
        <div className="relative">
          <span
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none flex items-center justify-center w-4 h-4"
            aria-hidden="true"
          >
            <SearchIcon className="w-4 h-4" />
          </span>
          <input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            aria-label="Search table"
            className="w-full pl-8 pr-3 h-9 text-sm bg-surface border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background transition-colors"
          />
        </div>
      )}

      <div className="overflow-x-auto rounded-lg border border-border bg-surface shadow-xs">
        <table className="w-full text-sm text-left border-collapse" aria-label="Data table">
          <thead>
            <tr className="bg-surface-muted border-b border-border">
              {columns.map(col => {
                const isSorted = sortKey === col.key
                const ariaSortValue = col.sortable
                  ? isSorted
                    ? sortDir === 'asc'
                      ? 'ascending'
                      : 'descending'
                    : 'none'
                  : undefined

                return (
                  <th
                    key={String(col.key)}
                    scope="col"
                    style={{ width: col.width }}
                    aria-sort={ariaSortValue}
                    className="px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                  >
                    {col.sortable ? (
                      <button
                        type="button"
                        onClick={() => handleSort(col.key)}
                        className="inline-flex items-center gap-1 font-semibold text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground cursor-pointer select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
                      >
                        <span>{col.header}</span>
                        <SortIcon dir={isSorted ? sortDir : null} />
                      </button>
                    ) : (
                      <span>{col.header}</span>
                    )}
                  </th>
                )
              })}
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-8 text-center text-muted-foreground text-sm"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              rows.map(row => {
                const rowId = getRowId(row)
                const isInteractive = !!onRowClick

                return (
                  <tr
                    key={rowId}
                    tabIndex={isInteractive ? 0 : undefined}
                    onClick={isInteractive ? () => onRowClick(row) : undefined}
                    onKeyDown={
                      isInteractive
                        ? e => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              onRowClick(row)
                            }
                          }
                        : undefined
                    }
                    className={cn(
                      'transition-colors',
                      isInteractive
                        ? 'cursor-pointer hover:bg-surface-muted focus:outline-none focus-visible:bg-surface-muted focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring'
                        : 'hover:bg-surface-muted/40'
                    )}
                  >
                    {columns.map(col => (
                      <td
                        key={String(col.key)}
                        className="px-4 py-3 text-sm text-foreground align-middle"
                      >
                        {renderCell(col, row)}
                      </td>
                    ))}
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground text-right" aria-live="polite">
        Showing {rows.length} of {data.length} rows
      </p>
    </div>
  )
}
