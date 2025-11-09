"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Armchair, Heart, Brain, Zap, Users, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ChaircoCiseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const benefits = [
    "Reduces workplace stress and anxiety",
    "Improves posture and reduces back pain",
    "Boosts energy and productivity",
    "Enhances team bonding",
    "No special equipment needed",
    "Sessions from 15-45 minutes",
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Corporate Clients" },
    { icon: Heart, value: "95%", label: "Satisfaction Rate" },
    { icon: TrendingUp, value: "40%", label: "Productivity Boost" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600/10 to-yellow-600/10 dark:from-orange-400/20 dark:to-yellow-400/20 border border-orange-600/20 dark:border-orange-400/30 rounded-full mb-6">
              <Armchair className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                Corporate Wellness Innovation
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white mb-2">
                CHAIR-CO-CISE
              </span>
              <span className="block bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 dark:from-orange-400 dark:via-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
                Wellness at Your Desk
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Revolutionary workplace wellness program designed specifically for{" "}
              <span className="font-semibold text-gray-900 dark:text-white">IT professionals</span> and 
              desk-bound workers. Combat sedentary lifestyle challenges with our innovative chair-based exercises.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                asChild
              >
                <Link href="/services/chaircoCISE">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-600 hover:text-white dark:hover:bg-orange-400 rounded-full transition-all hover:scale-105"
                asChild
              >
                <Link href="/contact">Book a Demo Session</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Video Card */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 border-2 border-orange-200 dark:border-orange-800 shadow-2xl">
              <CardContent className="p-0">
                {/* Video Container */}
                <div className="relative w-full aspect-[9/16] sm:aspect-video bg-gray-900">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/chair-co-cise.mp4" type="video/mp4" />
                    {/* Fallback content */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-yellow-500/20">
                      <div className="text-center p-6">
                        <Armchair className="h-16 w-16 sm:h-24 sm:w-24 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                          Video not supported
                        </p>
                      </div>
                    </div>
                  </video>
                  
                  {/* Overlay gradient for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Video Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <p className="text-white text-sm sm:text-base font-medium drop-shadow-lg">
                      Watch how Chair-Co-Cise transforms your workspace wellness
                    </p>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6 bg-white dark:bg-gray-900">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={index}
                        className="text-center"
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 dark:text-orange-400 mx-auto mb-1 sm:mb-2" />
                        <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
