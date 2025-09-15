"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "School Principal",
    company: "Greenwood Elementary",
    content:
      "Footloose Edwin's transformed our annual day into an unforgettable experience. The Dinosaur theme was a huge hit with the kids and parents alike!",
    rating: 5,
    avatar: "/professional-woman-smiling.png",
  },
  {
    name: "Michael Chen",
    role: "HR Director",
    company: "TechCorp Solutions",
    content:
      "The ChaircoCISE program has been a game-changer for our team. Our IT employees love the desk-friendly exercises and stress relief sessions.",
    rating: 5,
    avatar: "/professional-man-smiling.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Event Coordinator",
    company: "City Cultural Center",
    content:
      "Working with Edwin's team for our Avengers-themed corporate event was amazing. The choreography was professional and the props were stunning!",
    rating: 5,
    avatar: "/hispanic-professional-woman.png",
  },
  {
    name: "David Thompson",
    role: "Parent",
    company: "Happy Customer",
    content:
      "My daughter has been taking classes here for 2 years. The instructors are patient, skilled, and truly care about each student's progress.",
    rating: 5,
    avatar: "/middle-aged-man-smiling.png",
  },
  {
    name: "Lisa Park",
    role: "Competition Coach",
    company: "Dance Academy",
    content:
      "Edwin's choreography helped our team win the regional competition. Their creativity and attention to detail is unmatched.",
    rating: 5,
    avatar: "/asian-woman-professional.png",
  },
  {
    name: "Robert Williams",
    role: "Corporate Manager",
    company: "Global Industries",
    content:
      "The team building session was fantastic. Our employees are still talking about the Snow White themed workshop weeks later!",
    rating: 5,
    avatar: "/business-man-smiling.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * 3
    return testimonials.slice(startIndex, startIndex + 3)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what schools, corporates, and individuals say about their experience
            with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <Card key={`${currentIndex}-${index}`} className="relative hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
