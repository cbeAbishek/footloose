"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote, Heart, Briefcase, GraduationCap, Users } from "lucide-react"

export function FounderSection() {
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

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-950 dark:via-purple-950/30 dark:to-blue-950/30 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <Card
            className={`relative overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-2 border-purple-200 dark:border-purple-800 shadow-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Gradient Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600" />

            <CardContent className="p-6 sm:p-8 md:p-12">
              {/* Header with Avatar */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8">
                {/* Avatar */}
                <div className="relative group flex-shrink-0">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
                  <Avatar className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 border-4 border-white dark:border-gray-900 shadow-xl">
                    <AvatarFallback className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                      ME
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Name & Title */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    Mr. M. Edwin
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-3">
                    Founder & Creative Director
                  </p>
                  
                  {/* Quick Facts */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                      <GraduationCap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400">
                        Engineer by Profession
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <Heart className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                        Dancer by Passion
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600/20 dark:text-purple-400/20" />
              </div>

              {/* Message Content */}
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p
                  className={`transition-all duration-1000 delay-300 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                >
                  In 1992, I transformed my passion for dance and choreography into a life's mission — to make dance accessible, 
                  exciting, and transformative for everyone. What started as a small studio in Coimbatore has grown into a{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    cultural institution
                  </span>{" "}
                  that has touched over 300,000 lives.
                </p>

                <p
                  className={`transition-all duration-1000 delay-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                >
                  As an engineer, I brought systematic thinking to dance education. As an artist, I brought creativity and passion. 
                  This unique combination allowed us to pioneer innovative programs like{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">CHAIR-CO-CISE</span>,
                  create immersive themed experiences, and establish{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">House of Costume</span>.
                </p>

                <p
                  className={`transition-all duration-1000 delay-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                >
                  My vision has always been simple: to inspire creativity and lifelong learning through dance. Every student who 
                  walks through our doors, every performance we stage, every costume we create — they all serve this mission. 
                  Dance is not just movement; it's{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    storytelling, connection, and transformation
                  </span>.
                </p>

                <p
                  className={`transition-all duration-1000 delay-900 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                >
                  As we celebrate 33 years, I'm filled with gratitude for our incredible team, dedicated students, and supportive 
                  community. Together, we've proven that when passion meets purpose, extraordinary things happen.
                </p>
              </div>

              {/* Signature */}
              <div
                className={`mt-8 sm:mt-12 transition-all duration-1000 delay-1100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative inline-block">
                  <div className="text-4xl sm:text-5xl font-bold italic bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    M. Edwin
                  </div>
                  <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                </div>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Founder, Footloose Edwin's Dance & Costume Company
                </p>
              </div>

              {/* Decorative Quote End */}
              <div className="mt-6 flex justify-end">
                <Quote className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600/20 dark:text-purple-400/20 rotate-180" />
              </div>
            </CardContent>

            {/* Bottom Gradient Bar */}
            <div className="h-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600" />
          </Card>

          {/* Legacy Stats */}
          <div
            className={`mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-1300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { icon: Briefcase, value: "33+", label: "Years Leading" },
              { icon: Users, value: "300K+", label: "Lives Touched" },
              { icon: Heart, value: "8K+", label: "Shows Created" },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border-2 border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform"
                >
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
