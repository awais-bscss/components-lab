import type React from 'react'
import {
  ButtonClickIcon,
  TagIcon,
  FormInputIcon,
  TypeIcon,
  UserIcon,
  MinusIcon,
  LoaderIcon,
  SkeletonIcon,
  CheckIcon,
  BoardIcon,
  WarningIcon,
  DialogIcon,
  MessageIcon,
  ProgressIcon,
  TableIcon,
  AccordionIcon,
  TabsIcon,
} from '../icons'

export type PageId =
  | 'button' | 'badge' | 'input' | 'typography'
  | 'avatar' | 'divider' | 'spinner' | 'skeleton' | 'chip'
  | 'card' | 'alert' | 'modal' | 'tooltip' | 'progress'
  | 'datatable' | 'accordion' | 'tabs'

export interface NavItem {
  id: PageId
  label: string
  icon: React.ComponentType<{ className?: string }>
}

export interface NavSection {
  label: string
  items: NavItem[]
}

export const NAV: NavSection[] = [
  {
    label: 'Primitives',
    items: [
      { id: 'button',     label: 'Button',     icon: ButtonClickIcon },
      { id: 'badge',      label: 'Badge',      icon: TagIcon },
      { id: 'input',      label: 'Input',      icon: FormInputIcon },
      { id: 'typography', label: 'Typography', icon: TypeIcon },
      { id: 'avatar',     label: 'Avatar',     icon: UserIcon },
      { id: 'divider',    label: 'Divider',    icon: MinusIcon },
      { id: 'spinner',    label: 'Spinner',    icon: LoaderIcon },
      { id: 'skeleton',   label: 'Skeleton',   icon: SkeletonIcon },
      { id: 'chip',       label: 'Chip',       icon: CheckIcon },
    ],
  },
  {
    label: 'Composites',
    items: [
      { id: 'card',     label: 'Card',     icon: BoardIcon },
      { id: 'alert',    label: 'Alert',    icon: WarningIcon },
      { id: 'modal',    label: 'Modal',    icon: DialogIcon },
      { id: 'tooltip',  label: 'Tooltip',  icon: MessageIcon },
      { id: 'progress', label: 'Progress', icon: ProgressIcon },
    ],
  },
  {
    label: 'Interactive',
    items: [
      { id: 'datatable',  label: 'DataTable',  icon: TableIcon },
      { id: 'accordion',  label: 'Accordion',  icon: AccordionIcon },
      { id: 'tabs',       label: 'Tabs',       icon: TabsIcon },
    ],
  },
]
