
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Users, Palette, Music, Dumbbell, ArrowRight, Star, Clock, Award, Sparkles, Zap, CheckCircle, Calendar, MessageCircle, Phone, Globe } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Users,
    title: "Dance Classes",
    description: "Professional dance instruction for all skill levels and ages with **personalized coaching** and **expert guidance**",
    longDescription: "Immerse yourself in the world of dance with our comprehensive classes. From classical ballet to contemporary hip-hop, our expert instructors guide you through every step of your dance journey.",
    features: ["Beginner to Advanced Levels", "Group & Private Sessions", "Multiple Dance Styles", "Certified Instructors", "Performance Opportunities", "Flexible Scheduling"],
    href: "/services/classes",
    image: "/professional-dance-studio-with-dancers-in-colorful.jpg",
    price: "From $25/class",
    duration: "45-60 minutes",
    students: "500+",
    rating: 4.9,
    gradient: "from-blue-600/20 via-purple-600/20 to-cyan-600/20",
    hoverGradient: "from-blue-500/30 via-purple-500/30 to-cyan-500/30",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    buttonGradient: "from-blue-600 to-purple-600",
    popular: false,
  },
  {
    id: 2,
    icon: Palette,
    title: "Props & Design",
    description: "Custom-designed props and costumes with **premium materials** and **creative innovation** for stunning performances",
    longDescription: "Transform your performances with our bespoke props and costume designs. We create magical experiences through innovative design and premium craftsmanship.",
    features: ["Custom Design Solutions", "Rental & Purchase Options", "Theme-Specific Creations", "Professional Quality", "Quick Turnaround", "Creative Consultation"],
    href: "/services/props",
    image: "/dancers-in-superhero-costumes-action-poses.jpg",
    price: "Custom Quote",
    duration: "2-4 weeks delivery",
    students: "200+",
    rating: 4.8,
    gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20",
    hoverGradient: "from-purple-500/30 via-pink-500/30 to-rose-500/30",
    iconColor: "text-purple-400",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    buttonGradient: "from-purple-600 to-pink-600",
    popular: false,
  },
  {
    id: 3,
    icon: Music,
    title: "Choreography",
    description: "Professional choreography services for **corporate events**, **school competitions**, and **special occasions**",
    longDescription: "Create unforgettable moments with our professional choreography services. We specialize in crafting performances that captivate audiences and leave lasting impressions.",
    features: ["School Annual Days", "Corporate Events", "Competition Routines", "Custom Music Editing", "Performance Direction", "Event Coordination"],
    href: "/services/choreography",
    image: "/elegant-fairy-tale-dance-performance-snow-white.jpg",
    price: "From $500/event",
    duration: "1-3 weeks prep",
    students: "1000+",
    rating: 5.0,
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-600/20",
    hoverGradient: "from-green-500/30 via-emerald-500/30 to-teal-500/30",
    iconColor: "text-green-400",
    badge: "Most Popular",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    buttonGradient: "from-green-600 to-emerald-600",
    popular: true,
  },
  {
    id: 4,
    icon: Dumbbell,
    title: "ChaircoCISE",
    description: "Revolutionary **desk-friendly fitness** program designed specifically for **IT professionals** and office workers",
    longDescription: "Combat the challenges of desk work with our innovative ChaircoCISE program. Designed specifically for IT professionals to improve health, reduce stress, and boost productivity.",
    features: ["Desk-Friendly Exercises", "Stress Relief Techniques", "Team Building Activities", "Corporate Packages", "Health Assessments", "Wellness Workshops"],
    href: "/services/chaircoCISE",
    image: "/futuristic-ai-dance-performance-with-neon-lights.jpg",
    price: "From $200/session",
    duration: "30-45 minutes",
    students: "300+",
    rating: 4.9,
    gradient: "from-orange-600/20 via-amber-600/20 to-yellow-600/20",
    hoverGradient: "from-orange-500/30 via-amber-500/30 to-yellow-500/30",
    iconColor: "text-orange-400",
    badge: "Corporate Favorite",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    buttonGradient: "from-orange-600 to-amber-600",
    popular: true,
  },
]

const stats = [
  { label: "Students Trained", value: "2000+", icon: Users },
  { label: "Years Experience", value: "10+", icon: Award },
  { label: "Success Rate", value: "98%", icon: Star },
  { label: "Events Completed", value: "500+", icon: Calendar },
]

export default function ServicesPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
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
          className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, ${services[hoveredCard - 1]?.gradient.split(' ').map(color => color.replace('/20', '/40')).join(', ')}, transparent)`,
          }}
        />
      )}

      <main className="relative z-20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
                <span className="text-purple-300 font-medium">Premium Services</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
              </h1>
              
              <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
                From professional dance classes to specialized fitness programs, we offer comprehensive solutions 
                for all your movement and performance needs with cutting-edge techniques and <strong className="text-white">world-class expertise</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="relative z-10 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 group border-0 text-lg" 
                  asChild
                >
                  <Link href="https://wa.me/+919842222467?text=Hi! I'd like to learn more about your services." target="_blank">
                    <MessageCircle className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Get Free Consultation
                    <Sparkles className="h-5 w-5 ml-3 group-hover:rotate-180 transition-transform duration-500" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-gray-900/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/70 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg" 
                  asChild
                >
                  <Link href="tel:+919842222467">
                    <Phone className="h-6 w-6 mr-3" />
                    Call Now
                  </Link>
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center p-6 rounded-xl bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex items-center justify-center mx-auto mb-3 border border-purple-500/30">
                      <stat.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Explore Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Each service is crafted with precision and delivered with passion to ensure exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  className={`group relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer animate-fade-in-up flex flex-col ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 200 + 600}ms`,
                  }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow`} />
                  <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm flex flex-col">
                    
                    {/* Image Container */}
                    <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-lg flex-shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 group-hover:rotate-1"
                      />
                      
                      {/* Image Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                      
                      {/* Floating Icon */}
                      <div className="absolute top-6 left-6">
                        <div className="relative p-4 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 group-hover:scale-110 transition-all duration-300">
                          <service.icon className={`h-8 w-8 ${service.iconColor} group-hover:rotate-12 transition-all duration-300`} />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      
                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute top-6 right-6">
                          <Badge className={`${service.badgeColor} backdrop-blur-sm hover:scale-110 transition-all duration-300 font-semibold px-3 py-1`}>
                            <Star className="h-4 w-4 mr-2 fill-current" />
                            {service.badge}
                          </Badge>
                        </div>
                      )}

                      {/* Stats Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between text-white text-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                              <Clock className="h-4 w-4 mr-1" />
                              {service.duration}
                            </div>
                            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                              <Users className="h-4 w-4 mr-1" />
                              {service.students}
                            </div>
                          </div>
                          <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                            <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
                            {service.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <CardContent className="p-8 relative flex-grow flex flex-col">
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300">
                            {service.title}
                          </h3>
                          <div className="text-xl font-bold text-purple-400">
                            {service.price}
                          </div>
                        </div>
                        
                        <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 text-lg">
                          {renderDescription(service.description)}
                        </p>

                        <p className="text-gray-500 leading-relaxed mb-6 text-base">
                          {service.longDescription}
                        </p>
                        
                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex} 
                              className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-all duration-300"
                              style={{ animationDelay: `${featureIndex * 100}ms` }}
                            >
                              <CheckCircle className={`h-4 w-4 mr-3 ${service.iconColor} group-hover:scale-125 transition-all duration-300 flex-shrink-0`} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <Button
                        size="lg"
                        className={`w-full group-hover:bg-gradient-to-r group-hover:${service.buttonGradient} group-hover:text-white transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 opacity-70 group-hover:opacity-100 border border-gray-700/50 group-hover:border-transparent group-hover:shadow-lg bg-gray-800/50 text-gray-300`}
                        asChild
                      >
                        <Link href={service.href}>
                          <span className="mr-3">Explore Details</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          <Zap className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`relative transition-all duration-1000 delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-purple-900/20 to-blue-900/20 border-gray-700/50 backdrop-blur-sm">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 animate-gradient-x" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600" />
                
                <CardContent className="relative p-12 md:p-16 text-center">
                  <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                      <Globe className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-purple-300 font-medium">Ready to Transform?</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                      Start Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Journey</span> Today
                    </h2>
                    
                    <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
                      Join thousands of satisfied clients who have transformed their lives through our expert services. 
                      Your <strong className="text-white">success story</strong> starts with a single step.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Button 
                        size="lg" 
                        className="relative z-10 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 group border-0 text-lg" 
                        asChild
                      >
                        <Link href="https://wa.me/+919842222467?text=Hi! I'd like to get started with your services." target="_blank">
                          <MessageCircle className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                          Get Started Now
                          <Sparkles className="h-5 w-5 ml-3 group-hover:rotate-180 transition-transform duration-500" />
                        </Link>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="bg-gray-900/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/70 backdrop-blur-sm px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg" 
                        asChild
                      >
                        <Link href="/contact">
                          <Phone className="h-6 w-6 mr-3" />
                          Contact Us
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

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
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 15s ease infinite; background-size: 400% 400%; }
      `}</style>
    </div>
  )
}
