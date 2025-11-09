"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, Shirt, Armchair, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function Divisions() {
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

  const divisions = [
    {
      icon: Music,
      title: "Dance School",
      subtitle: "Footloose Edwin's Dance Company",
      description: "Comprehensive dance education for all ages and skill levels. From Western to Bollywood, Contemporary to Classical — we offer diverse programs taught by certified professionals.",
      features: [
        "Ages 3-70+ programs",
        "10+ dance styles",
        "300,000+ students trained",
        "Multiple centers in TN",
      ],
      color: "from-purple-600 to-purple-400",
      link: "/services/classes",
    },
    {
      icon: Shirt,
      title: "House of Costume",
      subtitle: "Complete Costume Solutions",
      description: "Extensive costume rental and custom design services for schools, colleges, corporate events, and theatrical productions. From superheroes to traditional outfits.",
      features: [
        "Themed costume rentals",
        "Custom design services",
        "Props & accessories",
        "Event styling solutions",
      ],
      color: "from-blue-600 to-cyan-400",
      link: "/services/props",
    },
    {
      icon: Armchair,
      title: "CHAIR-CO-CISE",
      subtitle: "Inclusive Fitness Program",
      description: "Revolutionary chair-based exercise dance program combining fitness with fun. Designed for seniors, limited mobility individuals, and corporate wellness.",
      features: [
        "Chair-based fitness",
        "Senior-friendly routines",
        "Corporate wellness",
        "Improved mobility",
      ],
      color: "from-pink-600 to-rose-400",
      link: "/services/chaircoCISE",
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
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-400/20 dark:to-blue-400/20 border border-purple-600/20 dark:border-purple-400/30 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Three Unique Divisions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">
              Our
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Service Divisions
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
            A complete creative ecosystem serving diverse needs
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {divisions.map((division, index) => {
            const Icon = division.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border-2 border-gray-200 dark:border-gray-800 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${division.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <CardContent className="p-6 sm:p-8 relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${division.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <Icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-br ${division.color} bg-clip-text text-transparent`}>
                    {division.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-semibold mb-4">
                    {division.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {division.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {division.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${division.color}`} />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${division.color} hover:opacity-90 text-white rounded-full shadow-md transition-all hover:scale-105`}
                    asChild
                  >
                    <Link href={division.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${division.color} opacity-5 blur-3xl`} />
                </CardContent>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
