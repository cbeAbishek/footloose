"use client"

import { useEffect, useState } from "react"

export function ScrollProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Circular Progress Indicator (Side) */}
      <div className="fixed bottom-8 left-8 z-40 hidden lg:block">
        <div className="relative w-16 h-16 group cursor-pointer">
          {/* Background Circle */}
          <svg className="w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-gray-200 dark:text-gray-800"
            />
            {/* Progress Circle */}
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-150 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(147 51 234)" />
                <stop offset="50%" stopColor="rgb(37 99 235)" />
                <stop offset="100%" stopColor="rgb(6 182 212)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-2 border-purple-600 dark:border-purple-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </div>

          {/* Hover Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-1 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Scroll Progress
            <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 dark:bg-gray-100 transform rotate-45 -mt-1" />
          </div>
        </div>

        {/* Scroll to Top Button (appears when scrolled down) */}
        {scrollProgress > 20 && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group animate-in fade-in slide-in-from-bottom-4 duration-300"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Progress Indicator (Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50 lg:hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  )
}
