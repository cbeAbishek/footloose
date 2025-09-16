"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Heart, Sparkles, Trophy, ThumbsUp, Users, Award, MessageCircle, Zap } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "School Principal",
    company: "Greenwood Elementary",
    content: "Footloose Edwin's transformed our annual day into an **unforgettable experience**. The Dinosaur theme was a huge hit with the kids and parents alike! **Outstanding creativity** and professional execution.",
    rating: 5,
    avatar: "/professional-woman-smiling.png",
    badge: "School Partner",
    badgeIcon: Trophy,
    gradient: "from-blue-500/20 to-purple-500/20",
    hoverGradient: "from-blue-500/30 to-purple-500/30",
    textGradient: "from-blue-400 to-purple-400",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "HR Director", 
    company: "TechCorp Solutions",
    content: "The **ChaircoCISE program** has been a game-changer for our team. Our IT employees love the desk-friendly exercises and **stress relief sessions**. Productivity increased by 40%!",
    rating: 5,
    avatar: "/professional-man-smiling.png",
    badge: "Corporate Client",
    badgeIcon: Users,
    gradient: "from-green-500/20 to-emerald-500/20",
    hoverGradient: "from-green-500/30 to-emerald-500/30",
    textGradient: "from-green-400 to-emerald-400",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Event Coordinator",
    company: "City Cultural Center", 
    content: "Working with Edwin's team for our **Avengers-themed corporate event** was amazing. The choreography was professional and the props were **absolutely stunning**! Perfect execution.",
    rating: 5,
    avatar: "/hispanic-professional-woman.png",
    badge: "Event Partner",
    badgeIcon: Sparkles,
    gradient: "from-purple-500/20 to-pink-500/20",
    hoverGradient: "from-purple-500/30 to-pink-500/30",
    textGradient: "from-purple-400 to-pink-400",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Parent",
    company: "Happy Customer",
    content: "My daughter has been taking classes here for **2 years**. The instructors are patient, skilled, and truly care about each student's progress. **Life-changing experience** for our family!",
    rating: 5,
    avatar: "/middle-aged-man-smiling.png",
    badge: "Parent Review",
    badgeIcon: Heart,
    gradient: "from-orange-500/20 to-red-500/20",
    hoverGradient: "from-orange-500/30 to-red-500/30",
    textGradient: "from-orange-400 to-red-400",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Competition Coach",
    company: "Dance Academy",
    content: "Edwin's **choreography helped our team win** the regional competition. Their creativity and attention to detail is **absolutely unmatched**. Professional excellence at its finest!",
    rating: 5,
    avatar: "/asian-woman-professional.png",
    badge: "Champion Coach",
    badgeIcon: Award,
    gradient: "from-yellow-500/20 to-amber-500/20",
    hoverGradient: "from-yellow-500/30 to-amber-500/30",
    textGradient: "from-yellow-400 to-amber-400",
  },
  {
    id: 6,
    name: "Robert Williams",
    role: "Corporate Manager",
    company: "Global Industries",
    content: "The **team building session** was fantastic. Our employees are still talking about the Snow White themed workshop **weeks later**! Incredible team bonding experience.",
    rating: 5,
    avatar: "/business-man-smiling.jpg",
    badge: "Team Builder",
    badgeIcon: ThumbsUp,
    gradient: "from-teal-500/20 to-cyan-500/20",
    hoverGradient: "from-teal-500/30 to-cyan-500/30",
    textGradient: "from-teal-400 to-cyan-400",
  },
  {
    id: 7,
    name: "Amanda Foster",
    role: "Wedding Planner",
    company: "Elegant Events",
    content: "The **choreography for our couple's first dance** was magical! Edwin's team created something truly special that brought tears to everyone's eyes. **Pure artistry**!",
    rating: 5,
    avatar: "/professional-woman-smiling.png",
    badge: "Wedding Pro",
    badgeIcon: Heart,
    gradient: "from-rose-500/20 to-pink-500/20",
    hoverGradient: "from-rose-500/30 to-pink-500/30",
    textGradient: "from-rose-400 to-pink-400",
  },
  {
    id: 8,
    name: "James Kumar",
    role: "Fitness Enthusiast",
    company: "Personal Training",
    content: "The **fitness classes** are incredibly well-structured. I've improved my flexibility and strength significantly. The instructors are **knowledgeable and motivating**!",
    rating: 5,
    avatar: "/professional-man-smiling.png",
    badge: "Fitness Fan",
    badgeIcon: Zap,
    gradient: "from-indigo-500/20 to-blue-500/20",
    hoverGradient: "from-indigo-500/30 to-blue-500/30",
    textGradient: "from-indigo-400 to-blue-400",
  },
]

export function TestimonialsSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Continuous scroll animation
  useEffect(() => {
    if (!isHovered) {
      const animate = () => {
        setCurrentTranslate((prev) => {
          const newTranslate = prev - 0.5
          const cardWidth = 380 // Approximate card width including gap
          const totalWidth = testimonials.length * cardWidth
          
          if (Math.abs(newTranslate) >= totalWidth) {
            return 0
          }
          return newTranslate
        })
        animationRef.current = requestAnimationFrame(animate)
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovered])

  // Function to render description with bold keywords
  const renderDescription = (description: string) => {
    const parts = description.split(/(\*\*.*?\*\*)/)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-32 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float-delay" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-green-500/10 rounded-full blur-xl animate-float-delay" />
        
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent transform -skew-y-12" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/5 to-transparent transform skew-y-12" />
        
        {/* Moving gradient waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-pulse" />
        </div>
      </div>

      {/* Mouse Follower Gradient */}
      <div
        className="fixed pointer-events-none z-0 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: `radial-gradient(circle, rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.4), transparent)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <MessageCircle className="h-4 w-4 text-blue-400 animate-pulse" />
            <span className="text-sm text-blue-300 font-medium">Client Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what schools, corporates, and individuals say about their 
            transformative experience with our professional dance and fitness programs.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={containerRef}
            className="flex gap-8 transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(${currentTranslate}px)`,
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${index}`}
                className={`h-72 group relative flex-shrink-0 w-80 overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  animationDelay: `${(index % testimonials.length) * 150}ms`,
                }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow`} />
                <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm">
                  
                  <CardContent className="p-6 relative">
                    {/* Quote Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="h-8 w-8 text-gray-600 group-hover:text-gray-400 transition-colors duration-300" />
                      <Badge className={`bg-gradient-to-r ${testimonial.gradient} border-0 text-white font-semibold group-hover:scale-110 transition-all duration-300`}>
                        <testimonial.badgeIcon className="h-3 w-3 mr-1" />
                        {testimonial.badge}
                      </Badge>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:rotate-12 transition-all duration-300"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 text-sm line-clamp-4">
                      "{renderDescription(testimonial.content)}"
                    </p>

                    {/* User Info */}
                    <div className="flex items-center">
                      <div className="relative">
                        <Avatar className="h-12 w-12 mr-4 group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-gray-600">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback className="bg-gray-800 text-white">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        
                        {/* Glowing ring on hover */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className={`font-semibold text-white group-hover:bg-gradient-to-r group-hover:${testimonial.textGradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                          {testimonial.role} • {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 backdrop-blur-sm">
            <div className={`h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 ${isHovered ? 'animate-pulse' : 'animate-bounce'}`} />
            <span className="text-xs text-gray-400">
              {isHovered ? 'Paused - Move mouse away to continue' : 'Auto-scrolling testimonials'}
            </span>
          </div>
        </div>

        
        
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }
        @keyframes border-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
