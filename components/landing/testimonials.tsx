"use client"

import { useEffect, useRef, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Sparkles } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Corporate HR Manager",
    company: "TCS",
    image: "/api/placeholder/100/100",
    text: "Edwin's Dance Company transformed our annual day into an unforgettable experience. The choreography was spectacular, and the costumes were absolutely stunning!",
  },
  {
    name: "Rajesh Kumar",
    role: "School Principal",
    company: "DAV Public School",
    image: "/api/placeholder/100/100",
    text: "We've been working with Edwin's for over 5 years. Their professionalism, creativity, and dedication to excellence are unmatched. Highly recommended!",
  },
  {
    name: "Ananya Reddy",
    role: "Dance Student",
    company: "Alumni",
    image: "/api/placeholder/100/100",
    text: "Trained here for 8 years. The instructors are world-class, and the environment fosters creativity and growth. I owe my career to Edwin's!",
  },
  {
    name: "Vikram Malhotra",
    role: "Event Manager",
    company: "Zee Entertainment",
    image: "/api/placeholder/100/100",
    text: "The CHAIR-CO-CISE wellness program has been a game-changer for our IT team. Reduced stress and improved productivity significantly!",
  },
  {
    name: "Meera Patel",
    role: "Wedding Planner",
    company: "Dream Weddings",
    image: "/api/placeholder/100/100",
    text: "Edwin's costume design team created magic for our sangeet performances. Every outfit was a masterpiece that perfectly captured the theme!",
  },
  {
    name: "Arun Krishnan",
    role: "Theatre Director",
    company: "Chennai Theatre Arts",
    image: "/api/placeholder/100/100",
    text: "30 years of excellence speaks for itself. Their attention to detail and artistic vision have elevated every production we've collaborated on.",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

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

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl" />
        
        {/* Mobile-specific decorative elements */}
        <div className="md:hidden absolute top-1/3 right-0 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="md:hidden absolute bottom-1/3 left-0 w-32 h-32 bg-pink-500/10 dark:bg-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500 dark:text-cyan-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-cyan-700 dark:text-cyan-300">Client Stories</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 transition-all duration-1000 px-2 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent leading-tight block">
              What Our Clients
            </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent leading-tight block mt-1 sm:mt-2">
              Say About Us
            </span>
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 transition-all duration-1000 delay-200 px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Trusted by thousands worldwide
          </p>
        </div>

        {/* Scrolling Cards Container */}
        <div className="relative -mx-3 sm:mx-0">
          <div 
            ref={scrollRef}
            className="overflow-hidden touch-pan-y"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
          >
            <div 
              className={`flex gap-3 sm:gap-4 md:gap-6 pl-3 sm:pl-0 ${isPaused ? '' : 'animate-scroll-mobile sm:animate-scroll'}`}
              style={{
                width: 'max-content',
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[400px] flex-shrink-0"
                >
                  {/* Glassmorphic Card */}
                  <div className="relative h-full p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl active:shadow-2xl transition-all duration-500">
                    {/* Neon Blue Glow Effect */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-transparent dark:from-cyan-500/30 dark:via-blue-500/30 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 blur-xl" />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-cyan-500/20 dark:ring-cyan-400/30 group-hover:ring-cyan-500/50 dark:group-hover:ring-cyan-400/60 group-active:ring-cyan-500/50 transition-all duration-500" />
                    
                    {/* Blurred Light Background */}
                    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-400/20 dark:bg-cyan-500/30 rounded-full blur-3xl opacity-50 group-hover:opacity-70 group-active:opacity-70 transition-opacity duration-500" />
                    
                    {/* Mobile unique gradient accent */}
                    <div className="md:hidden absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full blur-2xl opacity-40 group-active:opacity-60 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-500 dark:text-cyan-400 mb-3 sm:mb-4 opacity-50" />
                      
                      {/* Quote Text */}
                      <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6 min-h-[100px] sm:min-h-[120px] line-clamp-5">
                        "{testimonial.text}"
                      </p>
                      
                      {/* User Info */}
                      <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                        {/* Avatar with Neon Glow */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-cyan-500/50 dark:bg-cyan-400/50 rounded-full blur-md group-hover:blur-lg group-active:blur-lg transition-all duration-500" />
                          <Avatar className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 border-2 border-cyan-500/50 dark:border-cyan-400/50 relative z-10">
                            <AvatarImage src={testimonial.image} />
                            <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white text-xs sm:text-sm">
                              {testimonial.name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        
                        {/* Name and Role */}
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm md:text-base truncate">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm truncate">
                            {testimonial.role}
                          </div>
                          <div className="text-cyan-600 dark:text-cyan-400 text-[10px] sm:text-xs font-medium truncate">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays for Fade Effect - Responsive */}
          <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent dark:from-black dark:via-black/80 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent dark:from-black dark:via-black/80 pointer-events-none" />
        </div>
        
        {/* Hint Text - Adaptive for mobile */}
        <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-6 sm:mt-8">
          <span className="hidden sm:inline">Hover over cards to pause • </span>
          <span className="sm:hidden">Touch cards to pause • </span>
          Swipe to explore
        </p>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
        
        .animate-scroll-mobile {
          animation: scroll-mobile 35s linear infinite;
        }
        
        .animate-scroll:hover,
        .animate-scroll-mobile:active {
          animation-play-state: paused;
        }
        
        @media (max-width: 640px) {
          .line-clamp-5 {
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  )
}
