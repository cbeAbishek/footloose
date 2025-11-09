import { Skeleton } from "@/components/ui/skeleton"

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-white py-12 dark:bg-black">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <Skeleton className="mb-8 h-10 w-32 bg-gray-200 dark:bg-gray-800" />

        {/* Header */}
        <div className="mb-12 space-y-6">
          <Skeleton className="h-6 w-24 bg-gray-200 dark:bg-gray-800" />
          <Skeleton className="h-16 w-full bg-gray-200 dark:bg-gray-800" />
          <Skeleton className="h-20 w-full bg-gray-200 dark:bg-gray-800" />
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-y border-gray-200 py-6 dark:border-gray-800">
            <div className="flex items-center gap-4">
              <Skeleton className="h-14 w-14 rounded-full bg-gray-200 dark:bg-gray-800" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32 bg-gray-200 dark:bg-gray-800" />
                <Skeleton className="h-3 w-24 bg-gray-200 dark:bg-gray-800" />
              </div>
            </div>
            <Skeleton className="h-10 w-24 bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Cover Image */}
          <Skeleton className="h-96 w-full rounded-2xl bg-gray-200 dark:bg-gray-800 md:h-[500px]" />

          {/* Tags */}
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-6 w-20 bg-gray-200 dark:bg-gray-800" />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-full bg-gray-200 dark:bg-gray-800" />
          ))}
        </div>
      </div>
    </div>
  )
}
