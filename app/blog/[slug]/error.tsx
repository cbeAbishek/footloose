"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FileQuestion, RefreshCw, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[Blog Post Error]", error)
  }, [error])

  return (
    <div className="min-h-screen bg-white py-16 dark:bg-black">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="space-y-8 text-center">
          {/* Error Icon */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/20">
            <FileQuestion className="h-12 w-12 text-orange-600 dark:text-orange-400" />
          </div>

          {/* Error Message */}
          <div className="space-y-3">
            <h1 className="text-4xl font-black text-black dark:text-white">
              Article Not Available
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We couldn't load this article. It may have been moved or deleted.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={reset}
              size="lg"
              className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
