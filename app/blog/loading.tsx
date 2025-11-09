import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-white py-16 dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Featured Post Skeleton */}
        <div className="mb-16">
          <Skeleton className="mb-6 h-8 w-48 bg-gray-200 dark:bg-gray-800" />
          <Card className="border-2 border-gray-200 dark:border-gray-800">
            <CardContent className="p-0">
              <div className="grid gap-0 md:grid-cols-2">
                <Skeleton className="h-64 bg-gray-200 dark:bg-gray-800 md:h-auto" />
                <div className="flex flex-col justify-center p-8 md:p-12 space-y-4">
                  <Skeleton className="h-4 w-32 bg-gray-200 dark:bg-gray-800" />
                  <Skeleton className="h-10 w-full bg-gray-200 dark:bg-gray-800" />
                  <Skeleton className="h-10 w-full bg-gray-200 dark:bg-gray-800" />
                  <Skeleton className="h-20 w-full bg-gray-200 dark:bg-gray-800" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20 bg-gray-200 dark:bg-gray-800" />
                    <Skeleton className="h-6 w-20 bg-gray-200 dark:bg-gray-800" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters Skeleton */}
        <div className="mb-12 space-y-6">
          <Skeleton className="h-12 w-full bg-gray-200 dark:bg-gray-800" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-10 w-24 bg-gray-200 dark:bg-gray-800" />
            ))}
          </div>
        </div>

        {/* Posts Grid Skeleton */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="border-2 border-gray-200 dark:border-gray-800">
              <Skeleton className="h-48 w-full bg-gray-200 dark:bg-gray-800" />
              <CardHeader className="pb-3 space-y-2">
                <Skeleton className="h-6 w-full bg-gray-200 dark:bg-gray-800" />
                <Skeleton className="h-4 w-32 bg-gray-200 dark:bg-gray-800" />
              </CardHeader>
              <CardContent className="pb-4 space-y-4">
                <Skeleton className="h-16 w-full bg-gray-200 dark:bg-gray-800" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16 bg-gray-200 dark:bg-gray-800" />
                  <Skeleton className="h-6 w-16 bg-gray-200 dark:bg-gray-800" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-100 pt-4 dark:border-gray-800">
                <Skeleton className="h-8 w-full bg-gray-200 dark:bg-gray-800" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
