import { Container } from "@/components/layout/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogPostLoading() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-3xl space-y-6">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-4 w-40" />
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-full" />
          ))}
        </div>
      </div>
    </Container>
  )
}
