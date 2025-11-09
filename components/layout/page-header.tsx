import type { ReactNode } from "react"

import { Container } from "./container"

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
}

export function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <section className="border-b border-border/70 bg-background">
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">{eyebrow}</p>
          ) : null}
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-base text-foreground/70">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex-shrink-0">{actions}</div> : null}
      </Container>
    </section>
  )
}
