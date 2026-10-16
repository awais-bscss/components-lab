import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import { UserIcon } from '@/icons'

const avatarVariants = cva(
  'rounded-full overflow-hidden ring-2 ring-surface flex items-center justify-center select-none',
  {
    variants: {
      size: {
        xs: 'w-6 h-6 text-[10px]',
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-12 h-12 text-base',
        xl: 'w-16 h-16 text-xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export type AvatarVariantProps = VariantProps<typeof avatarVariants>

export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away'

export interface AvatarProps extends AvatarVariantProps {
  src?: string
  alt?: string
  name?: string
  status?: AvatarStatus
  className?: string
}

const statusColors: Record<AvatarStatus, string> = {
  online: 'bg-success',
  offline: 'bg-muted-foreground',
  busy: 'bg-danger',
  away: 'bg-warning',
}

const statusDotSizes: Record<NonNullable<AvatarVariantProps['size']>, string> = {
  xs: 'w-1.5 h-1.5',
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
  xl: 'w-3.5 h-3.5',
}

const BACKGROUND_COLORS = [
  'bg-indigo-600',
  'bg-violet-600',
  'bg-blue-600',
  'bg-emerald-600',
  'bg-amber-600',
  'bg-rose-600',
  'bg-cyan-600',
  'bg-teal-600',
]

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const second = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? '' : ''
  return (first + second).toUpperCase() || '?'
}

function nameColor(name: string): string {
  const index = hashString(name) % BACKGROUND_COLORS.length
  return BACKGROUND_COLORS[index] ?? 'bg-indigo-600'
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  status,
  className,
}: AvatarProps) {
  const activeSize = size ?? 'md'

  return (
    <div className={cn('relative inline-flex shrink-0', className)}>
      <div className={cn(avatarVariants({ size: activeSize }))}>
        {src ? (
          <img
            src={src}
            alt={alt ?? name ?? 'Avatar'}
            className="w-full h-full object-cover"
          />
        ) : name ? (
          <span
            className={cn(
              'w-full h-full flex items-center justify-center font-medium text-white',
              nameColor(name)
            )}
          >
            {getInitials(name)}
          </span>
        ) : (
          <span className="w-full h-full bg-surface-muted flex items-center justify-center text-muted-foreground">
            <UserIcon className="w-1/2 h-1/2" />
          </span>
        )}
      </div>
      {status && (
        <span
          role="img"
          aria-label={`Status: ${status}`}
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-surface',
            statusDotSizes[activeSize],
            statusColors[status]
          )}
        />
      )}
    </div>
  )
}

export interface AvatarGroupProps {
  users: Array<{ name: string; src?: string }>
  max?: number
  size?: AvatarVariantProps['size']
}

export function AvatarGroup({ users, max = 4, size = 'md' }: AvatarGroupProps) {
  const visible = users.slice(0, max)
  const remaining = users.length - max
  const activeSize = size ?? 'md'

  return (
    <div className="flex -space-x-2">
      {visible.map((u, i) => (
        <Avatar
          key={`${u.name}-${i}`}
          name={u.name}
          src={u.src}
          size={activeSize}
        />
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            avatarVariants({ size: activeSize }),
            'bg-surface-muted border border-border text-muted-foreground font-medium'
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  )
}
