"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Corporate HR Manager",
    company: "TCS",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "Edwin's Dance Company transformed our annual day into an unforgettable experience. The choreography was spectacular, and the costumes were absolutely stunning!",
  },
  {
    name: "Rajesh Kumar",
    role: "School Principal",
    company: "DAV Public School",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "We've been working with Edwin's for over 5 years. Their professionalism, creativity, and dedication to excellence are unmatched. Highly recommended!",
  },
  {
    name: "Ananya Reddy",
    role: "Dance Student",
    company: "Alumni",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "Trained here for 8 years. The instructors are world-class, and the environment fosters creativity and growth. I owe my career to Edwin's!",
  },
  {
    name: "Vikram Malhotra",
    role: "Event Manager",
    company: "Zee Entertainment",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "The CHAIR-CO-CISE wellness program has been a game-changer for our IT team. Reduced stress and improved productivity significantly!",
  },
  {
    name: "Meera Patel",
    role: "Wedding Planner",
    company: "Dream Weddings",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "Edwin's costume design team created magic for our sangeet performances. Every outfit was a masterpiece that perfectly captured the theme!",
  },
  {
    name: "Arun Krishnan",
    role: "Theatre Director",
    company: "Chennai Theatre Arts",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "30 years of excellence speaks for itself. Their attention to detail and artistic vision have elevated every production we've collaborated on.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
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

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Trusted by thousands of clients, students, and partners worldwide
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <Card
            className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                {/* Quote Icon */}
                <Quote className="absolute -top-4 -left-4 h-16 w-16 text-purple-600/20 dark:text-purple-400/20" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 border-2 border-purple-600 dark:border-purple-400">
                      <AvatarImage src={testimonials[currentIndex].image} />
                      <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white text-lg">
                        {testimonials[currentIndex].name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-2 hover:scale-110 transition-transform"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-gradient-to-r from-purple-600 to-blue-600"
                      : "w-3 h-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-2 hover:scale-110 transition-transform"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-4 ring-purple-600 dark:ring-purple-400 scale-110"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <Avatar className="h-full w-full">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
