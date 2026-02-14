"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Palette, Trophy, Target, Heart } from "lucide-react"

const stats = [
  {
    icon: Award,
    label: "Years of Excellence",
    value: 30,
    suffix: "+",
  },
  {
    icon: Users,
    label: "Students Trained",
    value: 10000,
    suffix: "+",
  },
  {
    icon: Trophy,
    label: "Productions Staged",
    value: 500,
    suffix: "+",
  },
  {
    icon: Palette,
    label: "Costumes Designed",
    value: 2000,
    suffix: "+",
  },
  {
    icon: Target,
    label: "Awards Won",
    value: 50,
    suffix: "+",
  },
  {
    icon: Heart,
    label: "Client Satisfaction",
    value: 98,
    suffix: "%",
  },
];

export function StatisticsBoard() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block text-gray-900 dark:text-white mb-2">
              Our Impact in
            </span>
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Three decades of transforming dreams into reality through dance,
            artistry, and dedication
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: typeof stats[0]
  index: number
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null

    // Guard so animation only runs once per page load
    if (isVisible && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true

      const duration = 2000
      const steps = 60
      const increment = stat.value / steps
      let current = 0

      // Ensure interval delay is an integer >= 1ms
      const delay = Math.max(1, Math.floor(duration / steps))

      timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          setCount(stat.value)
          if (timer) {
            clearInterval(timer)
            timer = null
          }
        } else {
          setCount(Math.floor(current))
        }
      }, delay)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isVisible, stat.value])

  const Icon = stat.icon

  return (
    <div
      className={`group relative bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Subtle Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 dark:from-purple-500/10 dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-purple-500/30">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
        </div>

        {/* Counter */}
        <div className="mb-2 sm:mb-3 md:mb-4">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="inline-block mr-1 bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {count.toLocaleString()}
            </span>
            <span className="inline-block text-sm sm:text-base md:text-lg align-top bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {stat.suffix}
            </span>
          </div>
        </div>

        {/* Label */}
        <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300 leading-tight">
          {stat.label}
        </div>

        {/* Progress Bar */}
        {/* <div className="mt-3 sm:mt-4 md:mt-5 h-1 sm:h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 transition-all duration-2000 ease-out rounded-full shadow-sm shadow-purple-500/50"
            style={{
              width: isVisible ? "100%" : "0%",
              transitionDelay: `${index * 100}ms`,
            }}
          />
        </div> */}
      </div>
    </div>
  );
}
