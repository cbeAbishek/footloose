"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Music, Users, Trophy, Building, GraduationCap, CheckCircle, MessageCircle, Star, ArrowRight, Sparkles, Zap, Phone, Globe, Heart, Clock, Award } from "lucide-react"

const choreographyServices = [
  {
    id: 1,
    icon: GraduationCap,
    title: "School Annual Days",
    description: "Memorable performances for **school events** and **celebrations** with **age-appropriate choreography**",
    features: ["Age-appropriate choreography", "Educational themes", "Large group coordination", "Parent involvement", "Safety protocols", "Professional direction"],
    image: "/professional-dance-studio-with-dancers-in-colorful.jpg",
    price: "From $800",
    originalPrice: "$1200",
    duration: "2-3 weeks prep",
    events: "50+",
    rating: 4.9,
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-600/20",
    iconColor: "text-green-400",
    popular: true,
  },
  {
    id: 2,
    icon: Building,
    title: "Corporate Events",
    description: "Professional entertainment for **corporate functions** with **team building focus** and **custom themes**",
    features: ["Team building focus", "Professional presentation", "Custom themes", "Flexible scheduling", "Employee engagement", "Brand integration"],
    image: "/futuristic-ai-dance-performance-with-neon-lights.jpg",
    price: "From $1200",
    originalPrice: "$1800",
    duration: "1-2 weeks prep",
    events: "75+",
    rating: 5.0,
    gradient: "from-blue-600/20 via-cyan-600/20 to-teal-600/20",
    iconColor: "text-blue-400",
    badge: "Most Popular",
    popular: true,
  },
  {
    id: 3,
    icon: Trophy,
    title: "Competition Prep",
    description: "Winning choreography for **dance competitions** with **technical excellence** and **performance coaching**",
    features: ["Competition-level training", "Technical excellence", "Performance coaching", "Music editing", "Costume guidance", "Mental preparation"],
    image: "/elegant-fairy-tale-dance-performance-snow-white.jpg",
    price: "From $1500",
    originalPrice: "$2200",
    duration: "3-4 weeks prep",
    events: "25+",
    rating: 5.0,
    gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20",
    iconColor: "text-purple-400",
    popular: false,
  },
  {
    id: 4,
    icon: Users,
    title: "Special Events",
    description: "Custom choreography for **weddings**, **parties**, and **celebrations** with **personalized themes**",
    features: ["Personalized themes", "Guest participation", "Photo opportunities", "Memorable moments", "Cultural fusion", "Special requests"],
    image: "/dancers-in-superhero-costumes-action-poses.jpg",
    price: "From $600",
    originalPrice: "$900",
    duration: "1-2 weeks prep",
    events: "100+",
    rating: 4.8,
    gradient: "from-orange-600/20 via-amber-600/20 to-yellow-600/20",
    iconColor: "text-orange-400",
    popular: false,
  },
]

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We discuss your **event**, **theme**, **audience**, and **specific requirements** in detail",
    icon: MessageCircle,
    gradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Our choreographers create a **unique concept** tailored to your **vision** and **needs**",
    icon: Sparkles,
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    number: "03",
    title: "Music Selection",
    description: "We select or edit **music** that perfectly complements the **choreography** and **theme**",
    icon: Music,
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    number: "04",
    title: "Rehearsals",
    description: "Structured **rehearsal sessions** to perfect the performance with **professional guidance**",
    icon: Users,
    gradient: "from-pink-600/20 to-orange-600/20",
  },
  {
    number: "05",
    title: "Final Performance",
    description: "Professional **execution** on the day of your event with **complete support** and **coordination**",
    icon: Trophy,
    gradient: "from-orange-600/20 to-yellow-600/20",
  },
]

const achievements = [
  { icon: Trophy, label: "Events Choreographed", value: "250+" },
  { icon: Users, label: "Performers Trained", value: "1000+" },
  { icon: Star, label: "Success Rate", value: "100%" },
  { icon: Heart, label: "Client Satisfaction", value: "99%" },
]

const whyChoosePoints = [
  {
    title: "30 Years of Experience",
    description: "Three decades of creating **memorable performances** across various events and audiences with **proven expertise**",
    icon: Award,
    gradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    title: "Custom Themes",
    description: "Every performance is **uniquely crafted** to match your event's theme and requirements with **creative innovation**",
    icon: Sparkles,
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "Professional Team",
    description: "Expert **choreographers** and **instructors** ensure high-quality performances with **attention to detail**",
    icon: Users,
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    title: "Complete Support",
    description: "From concept to performance day, we provide **comprehensive support** and **guidance** throughout the journey",
    icon: Heart,
    gradient: "from-orange-600/20 to-amber-600/20",
  },
]

export default function ChoreographyPage() {
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float-delay" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-orange-500/10 rounded-full blur-xl animate-float-delay" />
        
        {/* Gradient Lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent transform -skew-y-12" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/5 to-transparent transform skew-y-12" />
      </div>

      {/* Mouse Follower Gradient */}
      {hoveredCard && (
        <div
          className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, ${choreographyServices[hoveredCard - 1]?.gradient.split(' ').map(color => color.replace('/20', '/40')).join(', ')}, transparent)`,
          }}
        />
      )}

      <main className="relative z-20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                  <Music className="h-4 w-4 text-green-400" />
                  <span className="text-green-300 font-medium">Professional Choreography</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                  Create<br />
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Unforgettable</span><br />
                  Performances
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  Our **expert choreographers** create stunning performances tailored to your specific event. From school
                  annual days to corporate functions, we bring **creativity** and **professionalism** to every performance.
                </p>
                
                {/* Key Features */}
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center text-green-400">
                    <Star className="h-4 w-4 mr-2" />
                    Expert Choreographers
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Users className="h-4 w-4 mr-2" />
                    All Group Sizes
                  </div>
                  <div className="flex items-center text-purple-400">
                    <Trophy className="h-4 w-4 mr-2" />
                    Award-Winning
                  </div>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                    >
                      <achievement.icon className="h-6 w-6 text-green-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">{achievement.value}</div>
                      <div className="text-xs text-gray-400">{achievement.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105 group border-0" 
                    asChild
                  >
                    <Link href="https://wa.me/+919842222467?text=Hi! I need choreography for my event." target="_blank">
                      <MessageCircle className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Book Consultation
                      <Sparkles className="h-4 w-4 ml-2 group-hover:rotate-180 transition-transform duration-500" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-gray-900/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/70 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" 
                    asChild
                  >
                    <Link href="#services">
                      <Music className="h-5 w-5 mr-2" />
                      View Services
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className={`relative transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="relative">
                  <Image
                    src="/elegant-fairy-tale-dance-performance-snow-white.jpg"
                    alt="Professional Choreography Services"
                    width={600}
                    height={400}
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-sm text-white rounded-xl p-6 shadow-xl border border-green-500/30">
                    <div className="text-center">
                      <div className="text-3xl font-bold">250+</div>
                      <div className="text-sm opacity-90">Events Choreographed</div>
                      <div className="flex items-center justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm">4.9/5</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full p-4 shadow-xl">
                    <Music className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                <Trophy className="h-4 w-4 text-blue-400" />
                <span className="text-blue-300 font-medium">Our Services</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
                Choreography <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Services</span>
              </h2>
              
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Professional choreography services tailored to your specific event and audience needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {choreographyServices.map((service, index) => (
                <Card
                  key={service.id}
                  className={`group relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 200 + 800}ms`,
                  }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm">
                    
                    {/* Image Container */}
                    <div className="relative h-64 md:h-72 overflow-hidden rounded-t-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Image Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient.replace('/20', '/30')} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                      
                      {/* Floating Icon */}
                      <div className="absolute top-6 left-6">
                        <div className="relative p-4 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 group-hover:scale-110 transition-all duration-300">
                          <service.icon className={`h-8 w-8 ${service.iconColor} group-hover:rotate-12 transition-all duration-300`} />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      
                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute top-6 right-6">
                          <Badge className="bg-gradient-to-r from-orange-500/90 to-amber-500/90 text-white backdrop-blur-sm border-orange-400/30">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            {service.badge}
                          </Badge>
                        </div>
                      )}

                      {/* Stats Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between text-white text-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                              <Clock className="h-3 w-3 mr-1" />
                              {service.duration}
                            </div>
                            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                              <Trophy className="h-3 w-3 mr-1" />
                              {service.events}
                            </div>
                          </div>
                          <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                            {service.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300">
                          {service.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-xl font-bold text-green-400">{service.price}</div>
                          <div className="text-sm text-gray-500 line-through">{service.originalPrice}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                        {renderDescription(service.description)}
                      </p>
                      
                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex} 
                            className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-all duration-300"
                          >
                            <CheckCircle className={`h-4 w-4 mr-3 ${service.iconColor} group-hover:scale-125 transition-all duration-300 flex-shrink-0`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Action Button */}
                      <Button
                        size="lg"
                        className={`w-full bg-gradient-to-r ${service.gradient.replace('/20', '')} hover:scale-105 transition-all duration-300 text-white border-0 shadow-lg group`}
                        asChild
                      >
                        <Link
                          href={`https://wa.me/+919842222467?text=Hi! I'm interested in ${service.title}.`}
                          target="_blank"
                        >
                          <span className="mr-2">Get Quote</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
                Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                From concept to performance, we guide you through every step of creating an amazing show.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className={`text-center p-8 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 200 + 1400}ms` }}
                >
                  <div className={`relative h-20 w-20 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center mx-auto mb-6 border-2 border-gray-600/50 group-hover:scale-110 transition-all duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-sm">
                    {renderDescription(step.description)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 transition-all duration-1000 delay-1600 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
                  Why Choose Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Choreography</span>?
                </h2>
                
                <div className="space-y-6">
                  {whyChoosePoints.map((point, index) => (
                    <Card
                      key={index}
                      className="p-6 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${point.gradient} border border-gray-600/50 group-hover:scale-110 transition-all duration-300`}>
                          <point.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300">
                            {point.title}
                          </h4>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                            {renderDescription(point.description)}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className={`relative transition-all duration-1000 delay-1800 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <Image
                  src="/futuristic-ai-dance-performance-with-neon-lights.jpg"
                  alt="Why Choose Our Choreography"
                  width={600}
                  height={400}
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-4 shadow-xl">
                  <Award className="h-8 w-8 text-white" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 backdrop-blur-sm text-white rounded-xl p-6 shadow-xl border border-emerald-500/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold">30+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Card className={`relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-green-900/20 to-emerald-900/20 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-2000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-teal-600/10 animate-gradient-x" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600" />
              
              <CardContent className="relative p-12 md:p-16 text-center">
                <div className="max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                    <Globe className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-green-300 font-medium">Ready to Perform?</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
                    Create Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Performance</span>
                  </h2>
                  
                  <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
                    Let's discuss your **event** and create a choreography that will leave your audience **amazed**. 
                    Contact us for a **free consultation** and make your vision come to life.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105 group border-0 text-lg" 
                      asChild
                    >
                      <Link href="https://wa.me/+919842222467?text=Hi! I need choreography for my event." target="_blank">
                        <MessageCircle className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                        Book Free Consultation
                        <Zap className="h-5 w-5 ml-3 group-hover:rotate-180 transition-transform duration-500" />
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="bg-gray-900/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/70 backdrop-blur-sm px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg" 
                      asChild
                    >
                      <Link href="/gallery">
                        <Phone className="h-6 w-6 mr-3" />
                        View Our Performances
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 15s ease infinite; background-size: 400% 400%; }
      `}</style>
    </div>
  )
}
