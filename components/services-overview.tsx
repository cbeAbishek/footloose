"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Users, Palette, Music, Dumbbell, ArrowRight, Star, Sparkles, Zap } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Users,
    title: "Dance Classes",
    description: "Professional dance instruction for all skill levels and ages with **personalized coaching** and **expert guidance**",
    features: ["Beginner to Advanced", "Group & Private Sessions", "Multiple Dance Styles", "Certified Instructors"],
    href: "/services/classes",
    image: "/professional-dance-studio-with-dancers-in-colorful.jpg",
    gradient: "from-blue-600/20 via-purple-600/20 to-cyan-600/20",
    hoverGradient: "from-blue-500/30 via-purple-500/30 to-cyan-500/30",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    buttonGradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    icon: Palette,
    title: "Props & Design",
    description: "Custom-designed props and costumes with **premium materials** and **creative innovation** for stunning performances",
    features: ["Custom Design Solutions", "Rental Options Available", "Theme-Specific Creations", "Professional Quality"],
    href: "/services/props",
    image: "/dancers-in-superhero-costumes-action-poses.jpg",
    gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20",
    hoverGradient: "from-purple-500/30 via-pink-500/30 to-rose-500/30",
    iconColor: "text-purple-400",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    buttonGradient: "from-purple-600 to-pink-600",
  },
  {
    id: 3,
    icon: Music,
    title: "Choreography",
    description: "Professional choreography services for **corporate events**, **school competitions**, and **special occasions**",
    features: ["School Events", "Corporate Shows", "Competition Routines", "Custom Music Editing"],
    href: "/services/choreography",
    image: "/elegant-fairy-tale-dance-performance-snow-white.jpg",
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-600/20",
    hoverGradient: "from-green-500/30 via-emerald-500/30 to-teal-500/30",
    iconColor: "text-green-400",
    badgeColor: "bg-green-500/20 text-green-300 border-green-400/30",
    buttonGradient: "from-green-600 to-emerald-600",
  },
  {
    id: 4,
    icon: Dumbbell,
    title: "ChaircoCISE",
    description: "Revolutionary **desk-friendly fitness** program designed specifically for **IT professionals** and office workers",
    features: ["Desk-Friendly Exercises", "Stress Relief Techniques", "Team Building Activities", "Flexible Scheduling"],
    href: "/services/chaircoCISE",
    image: "/futuristic-ai-dance-performance-with-neon-lights.jpg",
    gradient: "from-orange-600/20 via-amber-600/20 to-yellow-600/20",
    hoverGradient: "from-orange-500/30 via-amber-500/30 to-yellow-500/30",
    iconColor: "text-orange-400",
    badge: "Most Popular",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
    buttonGradient: "from-orange-600 to-amber-600",
  },
]

export function ServicesOverview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

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
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float-delay" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-green-500/10 rounded-full blur-xl animate-float-delay" />
        
        {/* Gradient Lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent transform -skew-y-12" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/5 to-transparent transform skew-y-12" />
      </div>

      {/* Mouse Follower Gradient */}
      {hoveredCard && (
        <div
          className="fixed pointer-events-none z-0 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, ${services[hoveredCard - 1]?.gradient.split(' ').map(color => color.replace('/20', '/40')).join(', ')}, transparent)`,
          }}
        />
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
            <span className="text-sm text-purple-300 font-medium">Premium Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From professional dance classes to specialized fitness programs, we offer comprehensive solutions 
            for all your movement and performance needs with cutting-edge techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`group relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer animate-fade-in-up flex flex-col min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] xl:min-h-[550px] ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow`} />
              <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm flex flex-col min-h-full">
                
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 xl:h-52 overflow-hidden rounded-t-lg flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 group-hover:rotate-1"
                  />
                  
                  {/* Image Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className={`relative p-2 sm:p-3 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 group-hover:scale-110 transition-all duration-300`}>
                      <service.icon className={`h-4 w-4 sm:h-6 sm:w-6 ${service.iconColor} group-hover:rotate-12 transition-all duration-300`} />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <Badge className={`${service.badgeColor} backdrop-blur-sm hover:scale-110 transition-all duration-300 font-semibold text-xs`}>
                        <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-1 fill-current" />
                        {service.badge}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Hover Overlay with Arrow */}
                  {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                      <Button 
                        size="lg" 
                        className={`rounded-full w-14 h-14 p-0 bg-gradient-to-r ${service.buttonGradient} hover:scale-110 transition-all duration-300 relative z-10 shadow-lg`}
                      >
                        <ArrowRight className="h-6 w-6" />
                      </Button>
                    </div>
                  </div> */}
                </div>
                
                {/* Card Content */}
                <CardContent className="p-4 sm:p-5 lg:p-6 relative flex-grow flex flex-col justify-between">
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {renderDescription(service.description)}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-start text-xs text-gray-500 group-hover:text-gray-400 transition-all duration-300"
                          style={{ animationDelay: `${featureIndex * 100}ms` }}
                        >
                          <div className={`h-1.5 w-1.5 rounded-full mr-2 sm:mr-3 mt-1.5 ${service.iconColor.replace('text-', 'bg-')} group-hover:scale-125 transition-all duration-300 flex-shrink-0`} />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  
                  {/* Action Button */}
                  <div className="mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`w-full group-hover:bg-gradient-to-r group-hover:${service.buttonGradient} group-hover:text-white transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 opacity-70 group-hover:opacity-100 border border-gray-700/50 group-hover:border-transparent group-hover:shadow-lg text-sm py-2.5 sm:py-3`}
                      asChild
                    >
                      <Link href={service.href}>
                        <span className="mr-2">Explore</span>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        <Zap className="h-2 w-2 sm:h-3 sm:w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative inline-block">
            <Button 
              size="lg" 
              className="relative z-10 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 group border-0" 
              asChild
            >
              <Link href="/services">
                <Sparkles className="h-5 w-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                View All Services
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes border-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
