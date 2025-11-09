"use client"

import Link from "next/link"
import { Search, Home, ArrowLeft, Map, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NotFoundScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black px-4 py-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-200/10 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-200/10 dark:bg-purple-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 md:p-12 space-y-8">
          {/* 404 Number with Animation */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-900/10 dark:bg-white/10 rounded-3xl blur-2xl animate-pulse" />
              <h1 className="relative text-8xl sm:text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white animate-gradient">
                404
              </h1>
            </div>
          </div>

          {/* Lost Icon */}
          <div className="flex justify-center -mt-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-900/20 dark:bg-white/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-gray-50 dark:bg-gray-900/50 rounded-full p-4 border-2 border-gray-200 dark:border-gray-800">
                <Compass className="h-12 w-12 text-gray-900 dark:text-white animate-spin" style={{ animationDuration: "4s" }} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Page Not Found
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Looks like you've stumbled into uncharted territory. The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for a page..."
                className="pl-12 pr-4 py-6 text-base rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:border-gray-900 dark:focus:border-white transition-colors duration-200"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const query = (e.target as HTMLInputElement).value
                    window.location.href = `/?search=${encodeURIComponent(query)}`
                  }
                }}
              />
            </div>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-500 text-center">
              Press Enter to search
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
            <Button
              asChild
              className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 font-semibold px-8 py-6 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Link href="/services">
                <Map className="mr-2 h-5 w-5" />
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
              Popular Pages
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Go Back Option */}
          <div className="flex justify-center">
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Go back to previous page</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
