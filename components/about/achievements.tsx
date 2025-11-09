"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Users, Star, Globe, Award, TrendingUp } from "lucide-react"

export function Achievements() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    shows: 0,
    students: 0,
    years: 0,
  })
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true

      const targets = { shows: 8000, students: 300000, years: 33 }
      const duration = 2000
      const steps = 60

      const increments = {
        shows: targets.shows / steps,
        students: targets.students / steps,
        years: targets.years / steps,
      }

      let current = { shows: 0, students: 0, years: 0 }

      const timer = setInterval(() => {
        current.shows += increments.shows
        current.students += increments.students
        current.years += increments.years

        if (current.shows >= targets.shows) {
          setCounts(targets)
          clearInterval(timer)
        } else {
          setCounts({
            shows: Math.floor(current.shows),
            students: Math.floor(current.students),
            years: Math.floor(current.years),
          })
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const majorStats = [
    {
      icon: Trophy,
      value: counts.shows,
      suffix: "+",
      label: "Shows Performed",
      sublabel: "India & International",
      color: "from-purple-600 to-purple-400",
    },
    {
      icon: Users,
      value: counts.students,
      suffix: "+",
      label: "Students Trained",
      sublabel: "Since 1992",
      color: "from-blue-600 to-cyan-400",
    },
    {
      icon: Award,
      value: counts.years,
      suffix: "+",
      label: "Years Excellence",
      sublabel: "1992 - 2025",
      color: "from-pink-600 to-rose-400",
    },
  ]

  const achievements = [
    {
      icon: Star,
      title: "First Western Dance School",
      description: "Pioneered Western dance education in Coimbatore (1992)",
    },
    {
      icon: TrendingUp,
      title: "Customer Excellence",
      description: "4.2/5 rating based on 238+ reviews",
    },
    {
      icon: Globe,
      title: "International Recognition",
      description: "Featured in Times of India & national media",
    },
    {
      icon: Trophy,
      title: "ESP Showcase",
      description: '30th Anniversary "One Show, Infinite Experiences"',
    },
    {
      icon: Award,
      title: "Innovation Leader",
      description: "LED costumes, themed productions, CHAIR-CO-CISE",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Free workshops, special needs programs, cultural events",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-blue-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">
              Major
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Milestones that define our journey of excellence
          </p>
        </div>

        {/* Major Stats */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 max-w-6xl mx-auto">
          {majorStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 hover:border-purple-600 dark:hover:border-purple-400 transition-all hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                    <Icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  
                  <div className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className={`group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <Icon className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
