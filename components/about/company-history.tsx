"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Users, Trophy } from "lucide-react"

export function CompanyHistory() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const milestones = [
    {
      year: "1992",
      title: "The Beginning",
      description: "Mr. M. Edwin establishes Coimbatore's first Western dance school, driven by passion to make dance accessible and exciting for everyone.",
      icon: Calendar,
      color: "from-purple-600 to-purple-400",
    },
    {
      year: "1995-2000",
      title: "Building Community",
      description: "Growing from small birthday performances to grand annual day celebrations, creating immersive themed experiences.",
      icon: Users,
      color: "from-blue-600 to-cyan-400",
    },
    {
      year: "2005-2015",
      title: "Expansion Era",
      description: "Opening multiple training centers across Coimbatore (R.S. Puram, Ramanathapuram, Tirupur), reaching thousands of students.",
      icon: MapPin,
      color: "from-cyan-600 to-teal-400",
    },
    {
      year: "2015-2020",
      title: "Innovation & Growth",
      description: "Launching House of Costume division and pioneering CHAIR-CO-CISE program for inclusive fitness.",
      icon: Trophy,
      color: "from-pink-600 to-rose-400",
    },
    {
      year: "2022-Present",
      title: "Cultural Institution",
      description: "300,000+ students trained, 8,000+ shows performed. Celebrating 33 years as South India's leading dance company.",
      icon: Trophy,
      color: "from-orange-600 to-amber-400",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">
              Our Journey
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Through Time
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
            33 years of dedication, innovation, and artistic excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${isLeft ? "" : "md:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className={`${isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                      <div className="inline-block mb-3">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${milestone.color} bg-opacity-10 border-2 rounded-full`}>
                          <span className={`text-sm md:text-base font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                            {milestone.year}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Icon Circle */}
                    <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 ${isLeft ? "" : ""}`}>
                      <div className="relative group">
                        <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse`} />
                        <div className={`relative w-20 h-20 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-black`}>
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <div
          className={`mt-16 md:mt-24 text-center max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white italic">
            "What started as a dream has evolved into a cultural institution, touching over 300,000 lives through the transformative power of dance."
          </blockquote>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            — Mr. M. Edwin, Founder
          </p>
        </div>
      </div>
    </section>
  )
}
