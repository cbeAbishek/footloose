"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react";

function pseudoRandom01(seed: number): number {
  // Deterministic 0..1 value so SSR + client render match (avoids hydration errors).
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const QUOTE_DECORATIONS = Array.from({ length: 12 }, (_, index) => {
  const top = pseudoRandom01(index * 4 + 1) * 100;
  const left = pseudoRandom01(index * 4 + 2) * 100;
  const size = 40 + pseudoRandom01(index * 4 + 3) * 40;
  const rotation = pseudoRandom01(index * 4 + 4) * 360;

  return {
    key: index,
    style: {
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      transform: `rotate(${rotation}deg)`,
    } as const,
  };
});

export function FounderMessageSection() {
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
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-950 dark:via-purple-950/30 dark:to-blue-950/30 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />

      {/* Quote Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        {QUOTE_DECORATIONS.map((decoration) => (
          <Quote
            key={decoration.key}
            className="absolute text-purple-600 dark:text-purple-400"
            style={decoration.style}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          {/* <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-400/20 dark:to-blue-400/20 border border-purple-600/20 dark:border-purple-400/30 rounded-full">
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                A Message from Our Founder
              </span>
            </div>
          </div> */}

          {/* Main Card */}
          <Card
            className={`relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-purple-200 dark:border-purple-800 shadow-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Gradient Overlay */}

            <CardContent className="p-8 md:p-12">
              {/* Header with Avatar */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-800 shadow-xl">
                    <img
                      src="/founder_edwin.png"
                      alt="Edwin - Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Status Badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg whitespace-nowrap">
                    Founder & Director
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Edwin .M
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                    Founder & Creative Director
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    30+ Years of Dance Excellence
                  </p>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-12 w-12 text-purple-600/20 dark:text-purple-400/20" />
              </div>

              {/* Message Content */}
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p
                  className={`transition-all duration-1000 delay-300 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  Dance is not just about movement—it's about{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    storytelling, passion, and connection
                  </span>
                  . For over three decades, we've been privileged to share this
                  art form with thousands of students, performers, and corporate
                  partners.
                </p>

                <p
                  className={`transition-all duration-1000 delay-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  At Edwin's Dance & Costume Company, we believe that{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    every body can dance, every story deserves to be told
                  </span>
                  , and every performance should leave a lasting impact. Our
                  commitment to excellence, innovation, and inclusivity drives
                  everything we do.
                </p>

                <p
                  className={`transition-all duration-1000 delay-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  Whether you're taking your first dance class, preparing for a
                  major production, or bringing wellness to your workplace
                  through CHAIR-CO-CISE, we're here to{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    empower you to move with confidence and joy
                  </span>
                  .
                </p>
              </div>

              {/* Signature */}
              <div
                className={`mt-12 transition-all duration-1000 delay-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative inline-block">
                  {/* Handwritten-style signature */}
                  <div className="text-4xl font-bold italic bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    Edwin
                  </div>
                  {/* Underline */}
                  <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                </div>
              </div>

              {/* Decorative Quote End */}
              <div className="mt-8 flex justify-end">
                <Quote className="h-12 w-12 text-purple-600/20 dark:text-purple-400/20 rotate-180" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
