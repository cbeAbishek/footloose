"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[Blog Error]", error)
  }, [error])

  return (
    <div className="min-h-screen bg-white py-16 dark:bg-black">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="space-y-8 text-center">
          {/* Error Icon */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
            <AlertCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
          </div>

          {/* Error Message */}
          <div className="space-y-3">
            <h1 className="text-4xl font-black text-black dark:text-white">
              Oops! Something went wrong
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We encountered an error while loading the blog articles.
            </p>
          </div>

          {/* Error Details */}
          <Alert className="border-2 border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/10">
            <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-black dark:text-white">Error Details</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              {error.message || "An unexpected error occurred"}
            </AlertDescription>
          </Alert>

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
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Support */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            If the problem persists, please{" "}
            <Link href="/contact" className="font-bold underline">
              contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
