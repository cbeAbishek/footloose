"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Play, Star, Users, Calendar, MessageCircle } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/dance-silhouettes-pattern.jpg')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                <Star className="h-3 w-3 mr-1" />
                30 Years of Excellence
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Where <span className="text-primary">Dance</span> Meets{" "}
                <span className="text-secondary">Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                From themed performances to specialized fitness programs, we bring creativity and professionalism to
                every step. Discover our signature ChaircoCISE program and immersive themed experiences.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">All Ages Welcome</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Flexible Scheduling</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Custom Themes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="https://wa.me/1234567890?text=Hi! I'd like to book a consultation." target="_blank">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Book Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Video/Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-2xl">
              {!isVideoPlaying ? (
                <>
                  <img
                    src="/professional-dance-studio-with-dancers-in-colorful.jpg"
                    alt="Footloose Edwin's Dance Company Studio"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="rounded-full h-16 w-16 shadow-lg animate-dance-bounce"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto animate-pulse">
                      <Play className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Video would play here</p>
                    <Button variant="outline" onClick={() => setIsVideoPlaying(false)}>
                      Back to Image
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card border rounded-lg p-3 shadow-lg animate-float">
              <div className="flex items-center space-x-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="font-medium">Live Classes Available</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-xs opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
