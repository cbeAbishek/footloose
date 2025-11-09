import { Container } from "@/components/layout/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogLoading() {
  return (
    <Container className="space-y-10 py-16">
      <div className="space-y-4">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-12 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </Container>
  )
}
