"use client"

import { useEffect, useRef } from "react"

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

  // Sample client/partner data
  const clients = [
    { name: "Tech Giants Inc.", logo: "TG", color: "from-blue-600 to-cyan-600" },
    { name: "Innovation Labs", logo: "IL", color: "from-purple-600 to-pink-600" },
    { name: "Global Solutions", logo: "GS", color: "from-green-600 to-emerald-600" },
    { name: "Digital Dynamics", logo: "DD", color: "from-orange-600 to-yellow-600" },
    { name: "Future Systems", logo: "FS", color: "from-red-600 to-rose-600" },
    { name: "Smart Enterprises", logo: "SE", color: "from-indigo-600 to-blue-600" },
    { name: "Quantum Corp", logo: "QC", color: "from-teal-600 to-cyan-600" },
    { name: "Alpha Partners", logo: "AP", color: "from-violet-600 to-purple-600" },
    { name: "Beta Industries", logo: "BI", color: "from-amber-600 to-orange-600" },
    { name: "Gamma Tech", logo: "GT", color: "from-lime-600 to-green-600" },
    { name: "Delta Systems", logo: "DS", color: "from-sky-600 to-blue-600" },
    { name: "Epsilon Group", logo: "EG", color: "from-fuchsia-600 to-pink-600" },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 dark:from-purple-400/20 dark:to-cyan-400/20 border border-purple-600/20 dark:border-purple-400/30 rounded-full mb-6">
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Our Partners
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">
              Trusted By
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Proud to collaborate with innovative companies and organizations worldwide
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
            className="flex gap-8 overflow-hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {doubledClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-48 h-32 bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:scale-110 hover:border-purple-600 dark:hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Logo */}
                  <div className="relative z-10 text-center">
                    <div className={`text-4xl font-bold bg-gradient-to-br ${client.color} bg-clip-text text-transparent mb-2 transition-transform duration-300 group-hover:scale-110`}>
                      {client.logo}
                    </div>
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {client.name}
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join <span className="font-bold text-purple-600 dark:text-purple-400">500+</span> companies 
            transforming their workplace culture
          </p>
        </div>
      </div>
    </section>
  )
}
