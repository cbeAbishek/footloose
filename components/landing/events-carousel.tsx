"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, Ticket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Event {
  id: number
  name: string
  description: string
  image: string
  endDate: Date
  price: string
  link: string
}

const events: Event[] = [
  {
    id: 1,
    name: "The Nutcracker Ballet",
    description: "A magical holiday classic performance featuring talented dancers",
    image: "/api/placeholder/400/300",
    endDate: new Date("2025-12-20T19:00:00"),
    price: "$45-$85",
    link: "/contact",
  },
  {
    id: 2,
    name: "Contemporary Dance Workshop",
    description: "Learn contemporary techniques from professional choreographers",
    image: "/api/placeholder/400/300",
    endDate: new Date("2025-11-25T18:00:00"),
    price: "$35",
    link: "/contact",
  },
  {
    id: 3,
    name: "Broadway Spectacular",
    description: "An evening of show-stopping performances from Broadway hits",
    image: "/api/placeholder/400/300",
    endDate: new Date("2026-01-25T19:30:00"),
    price: "$50-$100",
    link: "/contact",
  },
  {
    id: 4,
    name: "Spring Dance Recital",
    description: "Celebrate spring with our annual student showcase performance",
    image: "/api/placeholder/400/300",
    endDate: new Date("2026-03-10T18:00:00"),
    price: "$20-$40",
    link: "/contact",
  },
  {
    id: 5,
    name: "Hip Hop Championship",
    description: "Experience high-energy performances from top hip hop crews",
    image: "/api/placeholder/400/300",
    endDate: new Date("2025-12-15T20:00:00"),
    price: "$30-$60",
    link: "/contact",
  },
]

function CountdownTimer({ endDate }: { endDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className="flex items-center gap-2 text-sm">
      <Clock className="w-4 h-4 text-purple-500 dark:text-purple-400" />
      <div className="flex gap-1 font-mono font-semibold text-gray-900 dark:text-white">
        <span className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
          {String(timeLeft.days).padStart(2, '0')}d
        </span>
        <span className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
          {String(timeLeft.hours).padStart(2, '0')}h
        </span>
        <span className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
          {String(timeLeft.minutes).padStart(2, '0')}m
        </span>
        <span className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
          {String(timeLeft.seconds).padStart(2, '0')}s
        </span>
      </div>
    </div>
  )
}

export function EventsCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Duplicate events for seamless infinite scroll
  const duplicatedEvents = [...events, ...events, ...events]

  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">
              Upcoming
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Don't miss out on these exciting upcoming performances and workshops
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div 
          ref={scrollRef}
          className="overflow-hidden touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
        >
          <div 
            className={`flex gap-6 ${isPaused ? '' : 'animate-scroll-events'}`}
            style={{
              width: 'max-content',
            }}
          >
            {duplicatedEvents.map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                className="group relative w-[340px] md:w-[380px] flex-shrink-0"
              >
                <Link href={event.link} className="block">
                  <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-800">
                    {/* Event Image */}
                    <div className="relative h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
                      
                      {/* Overlay Badge */}
                      <div className="absolute top-4 right-4 z-20 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Limited Seats
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Event Name */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {event.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 min-h-[2.5rem]">
                        {event.description}
                      </p>

                      {/* Countdown Timer */}
                      <div className="mb-4">
                        <CountdownTimer endDate={event.endDate} />
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">
                              Tickets from
                            </div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {event.price}
                            </div>
                          </div>
                        </div>

                        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm font-semibold rounded-full transition-all group-hover:scale-105 shadow-md">
                          Get Tickets
                        </button>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-gray-950 dark:via-gray-950/80 pointer-events-none transition-colors duration-300" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-gray-950 dark:via-gray-950/80 pointer-events-none transition-colors duration-300" />
      </div>

      {/* Hint Text */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8">
        <span className="hidden sm:inline">Hover to pause • </span>
        <span className="sm:hidden">Touch to pause • </span>
        Swipe to explore
      </p>

      <style jsx>{`
        @keyframes scroll-events {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-events {
          animation: scroll-events 45s linear infinite;
        }
        
        .animate-scroll-events:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
