import React from 'react'
import { type PageId } from '@/navigation'

import { ButtonPage } from './primitives/ButtonPage'
import { BadgePage } from './primitives/BadgePage'
import { InputPage } from './primitives/InputPage'
import { TypographyPage } from './primitives/TypographyPage'
import { AvatarPage } from './primitives/AvatarPage'
import { DividerPage } from './primitives/DividerPage'
import { SpinnerPage } from './primitives/SpinnerPage'
import { SkeletonPage } from './primitives/SkeletonPage'
import { ChipPage } from './primitives/ChipPage'

import { CardPage } from './composites/CardPage'
import { AlertPage } from './composites/AlertPage'
import { ModalPage } from './composites/ModalPage'
import { TooltipPage } from './composites/TooltipPage'
import { ProgressPage } from './composites/ProgressPage'

import { DataTablePage } from './interactive/DataTablePage'
import { AccordionPage } from './interactive/AccordionPage'
import { TabsPage } from './interactive/TabsPage'

export const PAGE_COMPONENTS: Record<PageId, React.ComponentType> = {
  button: ButtonPage,
  badge: BadgePage,
  input: InputPage,
  typography: TypographyPage,
  avatar: AvatarPage,
  divider: DividerPage,
  spinner: SpinnerPage,
  skeleton: SkeletonPage,
  chip: ChipPage,
  card: CardPage,
  alert: AlertPage,
  modal: ModalPage,
  tooltip: TooltipPage,
  progress: ProgressPage,
  datatable: DataTablePage,
  accordion: AccordionPage,
  tabs: TabsPage,
}

export {
  ButtonPage,
  BadgePage,
  InputPage,
  TypographyPage,
  AvatarPage,
  DividerPage,
  SpinnerPage,
  SkeletonPage,
  ChipPage,
  CardPage,
  AlertPage,
  ModalPage,
  TooltipPage,
  ProgressPage,
  DataTablePage,
  AccordionPage,
  TabsPage,
}
