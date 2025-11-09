"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, MapPin, ArrowRight, Filter } from "lucide-react"
import Link from "next/link"

type EventCategory = "class" | "show" | "event" | "all"

interface EventItem {
  id: number
  title: string
  category: EventCategory
  date: string
  time: string
  location: string
  spots?: number
  price?: string
  level?: string
  image: string
  color: string
}

export function ClassesShowsEventsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState<EventCategory>("all")
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

  const events: EventItem[] = [
    {
      id: 1,
      title: "Contemporary Dance Basics",
      category: "class",
      date: "Every Monday",
      time: "6:00 PM - 7:30 PM",
      location: "Studio A",
      spots: 12,
      price: "$25/class",
      level: "Beginner",
      image: "💃",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 2,
      title: "The Nutcracker Ballet",
      category: "show",
      date: "Dec 15-20, 2025",
      time: "7:00 PM",
      location: "Grand Theater",
      price: "$45-$85",
      image: "🎭",
      color: "from-purple-600 to-pink-600",
    },
    {
      id: 3,
      title: "Corporate Wellness Workshop",
      category: "event",
      date: "Nov 25, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Conference Hall",
      spots: 50,
      price: "Contact for pricing",
      image: "🧘",
      color: "from-orange-600 to-yellow-600",
    },
    {
      id: 4,
      title: "Hip Hop Intermediate",
      category: "class",
      date: "Every Wed & Fri",
      time: "7:00 PM - 8:30 PM",
      location: "Studio B",
      spots: 15,
      price: "$30/class",
      level: "Intermediate",
      image: "🕺",
      color: "from-red-600 to-rose-600",
    },
    {
      id: 5,
      title: "Spring Dance Recital",
      category: "show",
      date: "Mar 10, 2026",
      time: "6:00 PM",
      location: "City Auditorium",
      price: "$20-$40",
      image: "🌸",
      color: "from-green-600 to-emerald-600",
    },
    {
      id: 6,
      title: "Dance Competition Prep",
      category: "event",
      date: "Dec 1-5, 2025",
      time: "Various",
      location: "Main Studio",
      spots: 25,
      price: "$150 (5 days)",
      image: "🏆",
      color: "from-yellow-600 to-amber-600",
    },
    {
      id: 7,
      title: "Bollywood Dance Fusion",
      category: "class",
      date: "Every Saturday",
      time: "10:00 AM - 11:30 AM",
      location: "Studio C",
      spots: 20,
      price: "$28/class",
      level: "All Levels",
      image: "🪷",
      color: "from-pink-600 to-purple-600",
    },
    {
      id: 8,
      title: "Broadway Spectacular",
      category: "show",
      date: "Jan 20-25, 2026",
      time: "7:30 PM",
      location: "Performing Arts Center",
      price: "$50-$100",
      image: "🎵",
      color: "from-indigo-600 to-blue-600",
    },
    {
      id: 9,
      title: "Kids Dance Party",
      category: "event",
      date: "Dec 10, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Main Hall",
      spots: 60,
      price: "$15/child",
      image: "🎈",
      color: "from-cyan-600 to-teal-600",
    },
  ]

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => event.category === activeFilter)

  const filters: { value: EventCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "class", label: "Classes" },
    { value: "show", label: "Shows" },
    { value: "event", label: "Events" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 dark:from-purple-400/20 dark:to-cyan-400/20 border border-purple-600/20 dark:border-purple-400/30 rounded-full mb-6">
            <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              What's Happening
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">
              Classes, Shows
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              & Events
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Join us for dance classes, spectacular shows, and exciting events
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                className={`rounded-full transition-all ${
                  activeFilter === filter.value
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105"
                    : "border-2 border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400"
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                <Filter className="mr-2 h-4 w-4" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredEvents.map((event, index) => (
            <Card
              key={event.id}
              className={`group relative overflow-hidden bg-gray-900/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-800 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Header */}
              <div className={`relative h-48 bg-gradient-to-br ${event.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="text-7xl relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {event.image}
                </div>

                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border-0 capitalize">
                  {event.category}
                </Badge>

                {/* Level Badge (for classes) */}
                {event.level && (
                  <Badge className={`absolute top-4 right-4 bg-gradient-to-r ${event.color} text-white border-0`}>
                    {event.level}
                  </Badge>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-6 line-clamp-2 min-h-[3.5rem]">
                  {event.title}
                </h3>

                {/* Info - Essential details only, no icons */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 flex-shrink-0 text-purple-400" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4 flex-shrink-0 text-purple-400" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-purple-400" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Price Section */}
                <div className="mb-6">
                  <div className="text-xs text-gray-500 mb-1">
                    Price
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {event.price}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full bg-gradient-to-r ${event.color} hover:opacity-90 text-white rounded-full shadow-md group-hover:shadow-lg transition-all font-semibold`}
                  asChild
                >
                  <Link href="/contact">
                    {event.category === "class" ? "Enroll Now" : event.category === "show" ? "Get Tickets" : "Register"}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            asChild
          >
            <Link href="/contact">
              View Full Schedule
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
