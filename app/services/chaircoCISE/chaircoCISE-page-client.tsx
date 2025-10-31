
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Dumbbell, Users, Clock, Target, Heart, Brain, CheckCircle, MessageCircle, Star, ArrowRight, Sparkles, Zap, Phone, Globe, Monitor, Coffee, Activity, TrendingUp, Shield, Award, Laptop } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Cardiovascular Health",
    description: "Improve **heart health** with **low-impact exercises** designed specifically for **office workers**",
    gradient: "from-red-600/20 via-pink-600/20 to-rose-600/20",
    iconColor: "text-red-400",
  },
  {
    icon: Brain,
    title: "Stress Relief",
    description: "Reduce **workplace stress** through **mindful movement** and **breathing techniques**",
    gradient: "from-purple-600/20 via-indigo-600/20 to-blue-600/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Target,
    title: "Posture Improvement",
    description: "Combat the effects of **prolonged sitting** with **targeted posture exercises**",
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-600/20",
    iconColor: "text-green-400",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Foster **team spirit** and **collaboration** through **group fitness activities**",
    gradient: "from-orange-600/20 via-amber-600/20 to-yellow-600/20",
    iconColor: "text-orange-400",
  },
]

const programs = [
  {
    id: 1,
    title: "Individual Sessions",
    description: "**Personalized ChaircoCISE training** for individual employees with **customized routines**",
    duration: "30 minutes",
    price: "$50",
    originalPrice: "$75",
    participants: "1-on-1",
    rating: 4.9,
    features: ["One-on-one instruction", "Customized routine", "Progress tracking", "Flexible scheduling", "Personal assessment", "Goal setting"],
    image: "/professional-man-smiling.png",
    gradient: "from-blue-600/20 via-cyan-600/20 to-teal-600/20",
    iconColor: "text-blue-400",
    popular: false,
  },
  {
    id: 2,
    title: "Team Sessions",
    description: "**Group ChaircoCISE sessions** for teams and departments with **team building focus**",
    duration: "45 minutes",
    price: "$200",
    originalPrice: "$300",
    participants: "Up to 15",
    rating: 5.0,
    features: ["Up to 15 participants", "Team building focus", "Interactive exercises", "Regular scheduling", "Group dynamics", "Motivation techniques"],
    image: "/professional-dance-studio-with-dancers-in-colorful.jpg",
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-600/20",
    iconColor: "text-green-400",
    badge: "Most Popular",
    popular: true,
  },
  {
    id: 3,
    title: "Corporate Package",
    description: "**Comprehensive wellness program** for entire organizations with **progress reports**",
    duration: "Custom",
    price: "Custom",
    originalPrice: "Contact",
    participants: "Unlimited",
    rating: 5.0,
    features: ["Company-wide program", "Multiple sessions", "Progress reports", "Wellness workshops", "Health assessments", "Executive sessions"],
    image: "/futuristic-ai-dance-performance-with-neon-lights.jpg",
    gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20",
    iconColor: "text-purple-400",
    popular: true,
  },
]

const processSteps = [
  {
    number: "01",
    title: "Health Assessment",
    description: "We assess your team's **specific needs**, **workspace constraints**, and **health goals** to customize the program",
    icon: Target,
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    number: "02",
    title: "Program Design",
    description: "Our experts design a **customized ChaircoCISE program** tailored to your **office environment** and **team requirements**",
    icon: Brain,
    gradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Our **certified instructors** conduct regular sessions at your **office** or **virtually** with professional guidance",
    icon: Users,
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    number: "04",
    title: "Progress Tracking",
    description: "We **monitor progress** and adjust the program to ensure **maximum benefit** for your team's wellness",
    icon: TrendingUp,
    gradient: "from-orange-600/20 to-amber-600/20",
  },
]

const achievements = [
  { icon: Users, label: "Companies Served", value: "150+" },
  { icon: Heart, label: "Employees Trained", value: "5000+" },
  { icon: Star, label: "Satisfaction Rate", value: "98%" },
  { icon: TrendingUp, label: "Health Improvement", value: "85%" },
]

const whyChoosePoints = [
  {
    title: "IT-Specific Design",
    description: "Specially created for **IT professionals** and **desk workers** addressing unique **health challenges** and **workplace constraints**",
    icon: Laptop,
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "Minimal Equipment",
    description: "Requires only an **office chair** and **small space**, making it perfect for **any workplace environment**",
    icon: Monitor,
    gradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    title: "Proven Results",
    description: "**98% satisfaction rate** with measurable improvements in **posture**, **energy levels**, and **workplace productivity**",
    icon: Award,
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    title: "Flexible Scheduling",
    description: "Sessions can be conducted **during work hours** or **break times** without disrupting **productivity** and **workflow**",
    icon: Clock,
    gradient: "from-orange-600/20 to-amber-600/20",
  },
]

const healthImpacts = [
  {
    title: "Reduced Back Pain",
    description: "87% reduction in chronic back pain",
    icon: Shield,
    value: "87%",
    color: "text-green-400",
  },
  {
    title: "Better Posture",
    description: "92% improvement in sitting posture",
    icon: Target,
    value: "92%",
    color: "text-blue-400",
  },
  {
    title: "Increased Energy",
    description: "78% increase in daily energy levels",
    icon: Activity,
    value: "78%",
    color: "text-purple-400",
  },
  {
    title: "Stress Reduction",
    description: "65% decrease in workplace stress",
    icon: Heart,
    value: "65%",
    color: "text-orange-400",
  },
]

export default function ChaircoCISEPage() {
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float-delay" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-green-500/10 rounded-full blur-xl animate-float-delay" />
        
        {/* Gradient Lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent transform -skew-y-12" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/5 to-transparent transform skew-y-12" />
      </div>

      {/* Mouse Follower Gradient */}
      {hoveredCard && (
        <div
          className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, ${programs[hoveredCard - 1]?.gradient.split(' ').map(color => color.replace('/20', '/40')).join(', ')}, transparent)`,
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
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-full border border-orange-500/30 backdrop-blur-sm">
                  <Dumbbell className="h-4 w-4 text-orange-400" />
                  <span className="text-orange-300 font-medium">ChaircoCISE Program</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent leading-tight">
                  Fitness for<br />
                  <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">IT Professionals</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  Our signature **ChaircoCISE program** is specifically designed for **IT employees** and **desk workers**. 
                  Combat the effects of prolonged sitting with our innovative **chair-based exercises** and **wellness routines**.
                </p>
                
                {/* Key Features */}
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center text-orange-400">
                    <Clock className="h-4 w-4 mr-2" />
                    30-45 minutes
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Users className="h-4 w-4 mr-2" />
                    Individual & Group
                  </div>
                  <div className="flex items-center text-purple-400">
                    <Target className="h-4 w-4 mr-2" />
                    Desk-friendly
                  </div>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                    >
                      <achievement.icon className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">{achievement.value}</div>
                      <div className="text-xs text-gray-400">{achievement.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 group border-0" 
                    asChild
                  >
                    <Link href="https://wa.me/+919842222467?text=Hi! I'm interested in ChaircoCISE program." target="_blank">
                      <MessageCircle className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Book Demo Session
                      <Sparkles className="h-4 w-4 ml-2 group-hover:rotate-180 transition-transform duration-500" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-gray-900/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/70 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" 
                    asChild
                  >
                    <Link href="#programs">
                      <Dumbbell className="h-5 w-5 mr-2" />
                      View Programs
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className={`relative transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="relative">
                  <Image
                    src="/professional-man-smiling.png"
                    alt="ChaircoCISE Program"
                    width={600}
                    height={400}
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-600/90 to-amber-600/90 backdrop-blur-sm text-white rounded-xl p-6 shadow-xl border border-orange-500/30">
                    <div className="text-center">
                      <div className="text-3xl font-bold">98%</div>
                      <div className="text-sm opacity-90">Satisfaction Rate</div>
                      <div className="flex items-center justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm">4.9/5</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full p-4 shadow-xl">
                    <Dumbbell className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Impact Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="text-green-300 font-medium">Health Impact</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
                Proven <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Results</span>
              </h2>
              
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Measurable improvements in health and workplace productivity for IT professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthImpacts.map((impact, index) => (
                <Card
                  key={index}
                  className={`group text-center p-8 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 200 + 800}ms` }}
                >
                  <div className="relative h-20 w-20 rounded-full bg-gray-800/50 border-2 border-gray-600/50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <impact.icon className={`h-8 w-8 ${impact.color}`} />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className={`text-4xl font-bold mb-4 ${impact.color} group-hover:scale-110 transition-all duration-300`}>
                    {impact.value}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300">
                    {impact.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                    {impact.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
                Why <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">ChaircoCISE</span>?
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Specifically designed to address the unique health challenges faced by IT professionals and desk workers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className={`group text-center p-8 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 200 + 1200}ms` }}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
                  <div className="relative">
                    <div className={`h-20 w-20 rounded-full bg-gradient-to-r ${benefit.gradient} border-2 border-gray-600/50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <benefit.icon className={`h-8 w-8 ${benefit.iconColor}`} />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {renderDescription(benefit.description)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-orange-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                <Users className="h-4 w-4 text-blue-400" />
                <span className="text-blue-300 font-medium">Our Programs</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
                Choose Your <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Program</span>
              </h2>
              
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Flexible programs designed to fit your organization's needs and schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card
                  key={program.id}
                  className={`group relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 200 + 1600}ms`,
                  }}
                  onMouseEnter={() => setHoveredCard(program.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm">
                    
                    {/* Image Container */}
                    <div className="relative h-64 md:h-72 overflow-hidden rounded-t-lg">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Image Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient.replace('/20', '/30')} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                      
                      {/* Floating Icon */}
                      <div className="absolute top-6 left-6">
                        <div className="relative p-4 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 group-hover:scale-110 transition-all duration-300">
                          <Dumbbell className={`h-8 w-8 ${program.iconColor} group-hover:rotate-12 transition-all duration-300`} />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      
                      {/* Badge */}
                      {program.badge && (
                        <div className="absolute top-6 right-6">
                          <Badge className="bg-gradient-to-r from-orange-500/90 to-amber-500/90 text-white backdrop-blur-sm border-orange-400/30">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            {program.badge}
                          </Badge>
                        </div>
                      )}

                      {/* Stats Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between text-white text-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                              <Clock className="h-3 w-3 mr-1" />
                              {program.duration}
                            </div>
                            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                              <Users className="h-3 w-3 mr-1" />
                              {program.participants}
                            </div>
                          </div>
                          <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                            {program.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300">
                          {program.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-xl font-bold text-orange-400">{program.price}</div>
                          {program.originalPrice !== "Contact" && (
                            <div className="text-sm text-gray-500 line-through">{program.originalPrice}</div>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                        {renderDescription(program.description)}
                      </p>
                      
                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {program.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex} 
                            className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-all duration-300"
                          >
                            <CheckCircle className={`h-4 w-4 mr-3 ${program.iconColor} group-hover:scale-125 transition-all duration-300 flex-shrink-0`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Action Button */}
                      <Button
                        size="lg"
                        className={`w-full bg-gradient-to-r ${program.gradient.replace('/20', '')} hover:scale-105 transition-all duration-300 text-white border-0 shadow-lg group`}
                        asChild
                      >
                        <Link
                          href={`https://wa.me/+919842222467?text=Hi! I'm interested in ${program.title}.`}
                          target="_blank"
                        >
                          <span className="mr-2">Get Started</span>
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
            <div className={`text-center mb-16 transition-all duration-1000 delay-1800 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
                How <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">ChaircoCISE</span> Works
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                A systematic approach to improving workplace wellness for IT professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className={`text-center p-8 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 200 + 2000}ms` }}
                >
                  <div className={`relative h-20 w-20 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center mx-auto mb-6 border-2 border-gray-600/50 group-hover:scale-110 transition-all duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300">
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
              <div className={`space-y-8 transition-all duration-1000 delay-2200 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
                  Why Choose Our <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">ChaircoCISE</span>?
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
                          <h4 className="font-bold text-lg text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300">
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
              
              <div className={`relative transition-all duration-1000 delay-2400 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <Image
                  src="/professional-woman-smiling.png"
                  alt="Why Choose Our ChaircoCISE"
                  width={600}
                  height={400}
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full p-4 shadow-xl">
                  <Award className="h-8 w-8 text-white" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-600/90 to-amber-600/90 backdrop-blur-sm text-white rounded-xl p-6 shadow-xl border border-orange-500/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5000+</div>
                    <div className="text-sm opacity-90">Employees Trained</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Card className={`relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-orange-900/20 to-amber-900/20 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-2600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-amber-600/10 to-yellow-600/10 animate-gradient-x" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600" />
              
              <CardContent className="relative p-12 md:p-16 text-center">
                <div className="max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-full border border-orange-500/30 backdrop-blur-sm">
                    <Globe className="h-4 w-4 text-orange-400" />
                    <span className="text-sm text-orange-300 font-medium">Transform Your Workplace</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
                    Transform Your Workplace <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Wellness</span>
                  </h2>
                  
                  <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
                    Join hundreds of companies that have improved their **employee wellness** with **ChaircoCISE**. 
                    Book a **free demo session** today and see the difference for your team.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 group border-0 text-lg" 
                      asChild
                    >
                      <Link href="https://wa.me/+919842222467?text=Hi! I'd like to book a ChaircoCISE demo." target="_blank">
                        <MessageCircle className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                        Book Free Demo
                        <Zap className="h-5 w-5 ml-3 group-hover:rotate-180 transition-transform duration-500" />
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
                        Get Custom Quote
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
