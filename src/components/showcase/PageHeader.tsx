interface PageHeaderProps {
  title: string
  description: string
  tags: string[]
}

export function PageHeader({ title, description, tags }: PageHeaderProps) {
  return (
    <div className="mb-6 pb-6 border-b border-border">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
        <span>Component Library</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">{title}</span>
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-2">
        {title}
      </h1>
      <p className="text-sm leading-relaxed text-muted-foreground max-w-3xl mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map(t => (
          <span
            key={t}
            className="text-xs font-medium px-2 py-0.5 rounded-md border border-border bg-surface-muted text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
