'use client'

import { useEffect } from 'react'

import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

export default function BlogError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container className="py-16">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-foreground">Unable to load articles</h1>
        <p className="text-sm text-foreground/70">Reload this page or return to the home screen while we fix the issue.</p>
        <div className="flex items-center justify-center gap-3">
          <Button onClick={() => reset()} className="rounded-full">
            Refresh
          </Button>
          <Button asChild variant="outline" className="rounded-full border-border/80">
            <a href="/">Home</a>
          </Button>
        </div>
      </div>
    </Container>
  )
}
