"use client"

import { useEffect, useState } from "react"
import { Sparkles, ChevronDown } from "lucide-react"

export function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-purple-50 dark:from-black dark:via-gray-950 dark:to-purple-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" style={{ transform: `translateY(${scrollY * 0.2}px)` }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-400/20 dark:to-blue-400/20 border border-purple-600/20 dark:border-purple-400/30 rounded-full mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400 animate-pulse" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Est. 1992 • 33 Years of Excellence
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block text-gray-900 dark:text-white mb-3">
              Our Story of
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Passion & Purpose
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            From humble beginnings in 1992 to becoming South India's premier dance and entertainment company,
            discover the journey of <span className="font-bold text-gray-900 dark:text-white">Footloose Edwin's Dance Company</span>
          </p>

          {/* Stats Row */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { value: "33+", label: "Years" },
              { value: "300K+", label: "Students" },
              { value: "8K+", label: "Shows" },
              { value: "3", label: "Divisions" },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-6 hover:border-purple-600 dark:hover:border-purple-400 transition-all hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-800 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-purple-600 dark:text-purple-400" />
        </div>
      </div>
    </section>
  )
}
