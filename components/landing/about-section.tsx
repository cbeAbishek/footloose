"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { History, Heart, Award, Target, ArrowRight, Sparkles, Users, Trophy } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
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
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 md:w-96 md:h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 md:w-96 md:h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Floating Logo at Top Right */}
      <div
        className={`absolute top-8 right-8 md:top-12 md:right-12 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 -translate-y-10 rotate-12"
        }`}
      >
        <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600  blur-lg opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" />
            <div className="relative p-0 w-16 h-12 md:w-50 md:h-30 flex items-center justify-center shadow-2xl bg-white/10 dark:bg-black/20 overflow-hidden">
              <img
                src="./FL.png"
                alt="Edwin's Dance Company logo"
                className="w-100% h-80% object-cover"
                style={{ objectPosition: "50% 50%", clipPath: "inset(24% 0 24% 0)" }}
              />
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-400/20 dark:to-blue-400/20 border border-purple-600/20 dark:border-purple-400/30 rounded-full mb-6">
              <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white mb-2">
                About
              </span>
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Edwin's Dance Company
              </span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p
                className={`transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                Founded in <span className="font-bold text-purple-600 dark:text-purple-400">1992</span>, 
                Edwin's Dance & Costume Company has been at the forefront of transforming artistic visions 
                into breathtaking performances. What began as a small dance studio in Chennai has evolved 
                into a comprehensive creative powerhouse.
              </p>
              
              <p
                className={`transition-all duration-1000 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                Our journey is defined by an unwavering commitment to{" "}
                <span className="font-semibold text-gray-900 dark:text-white">excellence</span>,{" "}
                <span className="font-semibold text-gray-900 dark:text-white">innovation</span>, and{" "}
                <span className="font-semibold text-gray-900 dark:text-white">artistic integrity</span>. 
                We blend classical techniques with contemporary creativity, nurturing talent while pushing 
                the boundaries of performance art.
              </p>

              <p
                className={`transition-all duration-1000 delay-600 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                Today, we're proud to serve as a complete creative ecosystem — from world-class{" "}
                <span className="font-semibold text-gray-900 dark:text-white">dance training</span> and{" "}
                <span className="font-semibold text-gray-900 dark:text-white">choreography services</span> to 
                bespoke <span className="font-semibold text-gray-900 dark:text-white">costume design</span> and 
                corporate <span className="font-semibold text-gray-900 dark:text-white">wellness programs</span>.
              </p>
            </div>

            <div
              className={`mt-8 transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                asChild
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
