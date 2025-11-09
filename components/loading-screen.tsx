"use client"

import { useEffect, useState } from "react"
import { Loader2, Music, Sparkles } from "lucide-react"

export function LoadingScreen() {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-gray-200/20 to-transparent dark:from-gray-800/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-gray-200/20 to-transparent dark:from-gray-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
        {/* Logo/Icon Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-gray-900 dark:bg-white rounded-full blur-2xl opacity-20 animate-pulse" />
          <div className="relative bg-white dark:bg-gray-900 rounded-full p-6 shadow-2xl border-2 border-gray-200 dark:border-gray-800">
            <Music className="h-12 w-12 text-gray-900 dark:text-white animate-bounce" />
          </div>
          
          {/* Orbiting sparkles */}
          <div className="absolute -top-2 -right-2 animate-spin" style={{ animationDuration: "3s" }}>
            <Sparkles className="h-6 w-6 text-gray-900 dark:text-white" />
          </div>
          <div className="absolute -bottom-2 -left-2 animate-spin" style={{ animationDuration: "4s", animationDirection: "reverse" }}>
            <Sparkles className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </div>
        </div>

        {/* Loading indicator */}
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-gray-900 dark:text-white" />
          
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Loading{dots}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Preparing your dance experience
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 sm:w-80 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white rounded-full"
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 2s infinite linear"
            }} 
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  )
}
