import React from 'react'
import { cn } from '@/lib/cn'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'
type TextVariant = 'body' | 'small' | 'caption' | 'code' | 'label'
type TextColor = 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'error'

export interface HeadingProps {
  level?: HeadingLevel
  color?: TextColor
  children: React.ReactNode
  className?: string
}

const headingCls: Record<HeadingLevel, string> = {
  h1: 'text-2xl sm:text-3xl font-semibold tracking-tight',
  h2: 'text-xl sm:text-2xl font-semibold tracking-tight',
  h3: 'text-lg font-semibold',
  h4: 'text-base font-semibold',
}

const colorCls: Record<TextColor, string> = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  success: 'text-success-soft-foreground',
  warning: 'text-warning-soft-foreground',
  error: 'text-danger-soft-foreground',
}

export function Heading({ level = 'h2', color = 'default', children, className = '' }: HeadingProps) {
  const Tag = level
  return (
    <Tag className={cn(headingCls[level], colorCls[color], className)}>
      {children}
    </Tag>
  )
}

export interface TextProps {
  variant?: TextVariant
  color?: TextColor
  as?: 'p' | 'span' | 'div' | 'label' | 'strong' | 'em'
  children: React.ReactNode
  className?: string
}

const textVariantCls: Record<TextVariant, string> = {
  body: 'text-sm leading-relaxed text-foreground',
  small: 'text-xs leading-relaxed text-muted-foreground',
  caption: 'text-xs text-muted-foreground font-medium',
  code: 'font-mono text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-medium border border-border',
  label: 'text-xs font-semibold uppercase tracking-wide text-muted-foreground',
}

export function Text({ variant = 'body', color = 'default', as: Tag = 'p', children, className = '' }: TextProps) {
  const isCode = variant === 'code'
  return (
    <Tag className={cn(textVariantCls[variant], !isCode && colorCls[color], className)}>
      {children}
    </Tag>
  )
}
