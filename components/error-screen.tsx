"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, Home, RefreshCw, ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ErrorScreenProps {
  error: Error & { digest?: string }
  reset: () => void
}

export function ErrorScreen({ error, reset }: ErrorScreenProps) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Error boundary caught:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black px-4 py-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-200/10 dark:bg-red-900/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/10 dark:bg-orange-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 md:p-12 space-y-8">
          {/* Error Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-red-50 dark:bg-red-950/50 rounded-full p-6 border-2 border-red-200 dark:border-red-900">
                <AlertCircle className="h-16 w-16 text-red-600 dark:text-red-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Error Content */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Oops! Something went wrong
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              We encountered an unexpected error. Don't worry, our team has been notified.
            </p>
          </div>

          {/* Error Details */}
          {process.env.NODE_ENV === "development" && (
            <Alert variant="destructive" className="bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-900">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error Details</AlertTitle>
              <AlertDescription className="mt-2 font-mono text-xs break-all">
                {error.message}
                {error.digest && (
                  <div className="mt-2 text-gray-600 dark:text-gray-400">
                    Error ID: {error.digest}
                  </div>
                )}
              </AlertDescription>
            </Alert>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              onClick={reset}
              className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-6 py-6 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 font-semibold px-6 py-6 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
          </div>

          {/* Additional Help */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <Link 
                href="/contact"
                className="flex items-center space-x-2 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Support</span>
              </Link>
              <span className="hidden sm:inline text-gray-400 dark:text-gray-600">•</span>
              <button
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
