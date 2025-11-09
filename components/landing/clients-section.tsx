"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll = scrollRef.current
    if (!scroll) return

    let animationId: number
    let scrollPosition = 0

    const animate = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scroll.scrollWidth / 2) {
        scrollPosition = 0
      }
      scroll.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  // Real client/partner data with brand folder logos
  const clients = [
    { 
      name: "Adithya Institutions", 
      logo: "/brand/Adithiya_is.jpeg",
      fallback: "AI"
    },
    { 
      name: "Peepal", 
      logo: "/brand/Peepal.png",
      fallback: "PP"
    },
    { 
      name: "Adithya Global School", 
      logo: "/brand/adithya_gs.png",
      fallback: "AG"
    },
    { 
      name: "Le Meridian", 
      logo: "/brand/le-merdian.png",
      fallback: "LM"
    },
    { 
      name: "Radisson Blu", 
      logo: "/brand/radisun_blu.png",
      fallback: "RB"
    },
    { 
      name: "SSVM", 
      logo: "/brand/ssvm.png",
      fallback: "SV"
    },
  ]

  // Double the array for seamless loop
  const doubledClients = [...clients, ...clients]

  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 dark:from-cyan-400/20 dark:to-blue-400/20 border border-cyan-600/20 dark:border-cyan-400/30 rounded-full mb-6">
            <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
              Our Partners
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">
              Trusted By
            </span>
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Proud to collaborate with prestigious institutions and organizations
          </p>
        </div>

        {/* Scrolling Marquee */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 overflow-hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {doubledClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-40 h-28 sm:w-48 sm:h-32 md:w-52 md:h-36 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 active:scale-95">
                  
                  {/* Neon Blue Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-transparent dark:from-cyan-500/30 dark:via-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-cyan-500/0 dark:ring-cyan-400/0 group-hover:ring-cyan-500/40 dark:group-hover:ring-cyan-400/50 transition-all duration-500" />
                  
                  {/* Glassmorphic Background Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-cyan-400/10 dark:bg-cyan-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {/* Logo Image Container */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain transition-all duration-500 group-hover:scale-110 filter dark:brightness-110 group-hover:brightness-110"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 208px"
                        quality={90}
                        onError={(e) => {
                          // Fallback to text if image fails
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Name Tooltip on Hover */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/90 dark:bg-white/90 text-white dark:text-gray-900 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-20 sm:mt-24">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Trusted by <span className="font-bold text-cyan-600 dark:text-cyan-400">leading institutions</span> and 
            <span className="font-bold text-cyan-600 dark:text-cyan-400"> organizations</span> worldwide
          </p>
        </div>
      </div>
    </section>
  )
}
