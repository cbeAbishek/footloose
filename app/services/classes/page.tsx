
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Users, Clock, Star, Calendar, MessageCircle, CheckCircle, ArrowRight, Sparkles, Zap, Phone, Music, Trophy, Heart, Globe } from "lucide-react"

const classTypes = [
  {
    id: 1,
    title: "Beginner Classes",
    description: "Perfect for those just starting their dance journey with **foundational techniques** and **confidence building**",
    duration: "45 minutes",
    price: "$25",
    originalPrice: "$35",
    features: ["Basic techniques", "Confidence building", "Fun atmosphere", "Patient instruction", "Group support", "Progress tracking"],
    schedule: ["Mon/Wed 6:00 PM", "Sat 10:00 AM", "Sun 9:00 AM"],
    image: "/professional-dance-studio-with-dancers-in-colorful.jpg",
    students: "200+",
    rating: 4.8,
    gradient: "from-blue-600/20 via-purple-600/20 to-cyan-600/20",
    iconColor: "text-blue-400",
    popular: false,
  },
  {
    id: 2,
    title: "Intermediate Classes",
    description: "Build on your foundation with **complex choreography** and **advanced techniques** for skill development",
    duration: "60 minutes",
    price: "$30",
    originalPrice: "$40",
    features: ["Advanced techniques", "Choreography focus", "Performance prep", "Style variety", "Partner work", "Creative expression"],
    schedule: ["Tue/Thu 7:00 PM", "Sun 2:00 PM", "Sat 3:00 PM"],
    image: "/elegant-fairy-tale-dance-performance-snow-white.jpg",
    students: "150+",
    rating: 4.9,
    gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20",
    iconColor: "text-purple-400",
    popular: true,
  },
  {
    id: 3,
    title: "Advanced Classes",
    description: "Master level training for **experienced dancers** with **professional techniques** and **competition prep**",
    duration: "75 minutes",
    price: "$40",
    originalPrice: "$55",
    features: ["Complex choreography", "Competition prep", "Professional techniques", "Individual attention", "Performance opportunities", "Masterclass sessions"],
    schedule: ["Mon/Wed/Fri 8:00 PM", "Sat 5:00 PM"],
    image: "/futuristic-ai-dance-performance-with-neon-lights.jpg",
    students: "100+",
    rating: 5.0,
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-600/20",
    iconColor: "text-green-400",
    badge: "Pro Level",
    popular: false,
  },
  {
    id: 4,
    title: "Private Lessons",
    description: "One-on-one instruction tailored to your **personal goals** with **customized curriculum** and **flexible scheduling**",
    duration: "60 minutes",
    price: "$80",
    originalPrice: "$100",
    features: ["Personalized curriculum", "Flexible scheduling", "Rapid progress", "Individual attention", "Goal-oriented training", "Performance coaching"],
    schedule: ["By appointment", "7 days a week", "Morning & Evening slots"],
    image: "/dancers-in-superhero-costumes-action-poses.jpg",
    students: "50+",
    rating: 5.0,
    gradient: "from-orange-600/20 via-amber-600/20 to-yellow-600/20",
    iconColor: "text-orange-400",
    badge: "Most Popular",
    popular: true,
  },
]

const danceStyles = [
  { name: "Contemporary", icon: "🎭", description: "Expressive and fluid movements" },
  { name: "Hip Hop", icon: "🎤", description: "Urban street dance culture" },
  { name: "Jazz", icon: "🎷", description: "Energetic and dynamic style" },
  { name: "Ballet", icon: "🩰", description: "Classical dance foundation" },
  { name: "Bollywood", icon: "🇮🇳", description: "Vibrant Indian cinema dance" },
  { name: "Latin", icon: "💃", description: "Passionate partner dancing" },
  { name: "Folk Dance", icon: "🌍", description: "Traditional cultural dances" },
  { name: "Freestyle", icon: "⚡", description: "Creative self-expression" },
]

const achievements = [
  { icon: Trophy, label: "Awards Won", value: "25+" },
  { icon: Users, label: "Students Trained", value: "500+" },
  { icon: Star, label: "Success Rate", value: "98%" },
  { icon: Heart, label: "Student Satisfaction", value: "99%" },
]

export default function DanceClassesPage() {
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
            background: `radial-gradient(circle, ${classTypes[hoveredCard - 1]?.gradient.split(' ').map(color => color.replace('/20', '/40')).join(', ')}, transparent)`,
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
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-300 font-medium">Dance Classes</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                  Learn to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Dance</span><br />
                  with the Best
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  Join our comprehensive dance classes designed for **all skill levels**. From complete beginners to
                  advanced dancers, we have the perfect program to help you achieve your **dance goals** and express your creativity.
                </p>
                
                {/* Achievement Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                    >
                      <achievement.icon className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">{achievement.value}</div>
                      <div className="text-xs text-gray-400">{achievement.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 group border-0" 
                    asChild
                  >
                    <Link href="https://wa.me/+919842222467?text=Hi! I'd like to join dance classes." target="_blank">
                      <MessageCircle className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Book Trial Class
                      <Sparkles className="h-4 w-4 ml-2 group-hover:rotate-180 transition-transform duration-500" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-gray-900/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/70 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" 
                    asChild
                  >
                    <Link href="#class-types">
                      <Music className="h-5 w-5 mr-2" />
                      View Classes
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className={`relative transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="relative">
                  <Image
                    src="/professional-dance-studio-with-dancers-in-colorful.jpg"
                    alt="Dance Classes at Footloose Edwin's"
                    width={600}
                    height={400}
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm text-white rounded-xl p-6 shadow-xl border border-blue-500/30">
                    <div className="text-center">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-sm opacity-90">Students Trained</div>
                      <div className="flex items-center justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm">4.9/5</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-4 shadow-xl">
                    <Trophy className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Class Types */}
        <section id="class-types" className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Calendar className="h-4 w-4 text-purple-400" />
                <span className="text-purple-300 font-medium">Choose Your Level</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Find Your Perfect <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Class</span>
              </h2>
              
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                We offer classes for every skill level, from absolute beginners to professional dancers. 
                Each class is designed to challenge and inspire you while building confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {classTypes.map((classType, index) => (
                <Card
                  key={classType.id}
                  className={`group relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer animate-fade-in-up flex flex-col ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 200 + 800}ms`,
                  }}
                  onMouseEnter={() => setHoveredCard(classType.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${classType.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm flex flex-col">
                    
                    {/* Image Container */}
                    <div className="relative h-56 md:h-64 overflow-hidden rounded-t-lg flex-shrink-0">
                      <Image
                        src={classType.image}
                        alt={classType.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold border border-blue-500/30">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{classType.price}</span>
                          <span className="text-sm line-through opacity-60">{classType.originalPrice}</span>
                        </div>
                      </div>
                      
                      {/* Badge */}
                      {classType.badge && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-orange-500/90 to-amber-500/90 text-white backdrop-blur-sm border-orange-400/30">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            {classType.badge}
                          </Badge>
                        </div>
                      )}

                      {/* Stats Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white text-sm">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                              <Clock className="h-3 w-3 mr-1" />
                              {classType.duration}
                            </div>
                            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                              <Users className="h-3 w-3 mr-1" />
                              {classType.students}
                            </div>
                          </div>
                          <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                            {classType.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300">
                          {classType.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                          {renderDescription(classType.description)}
                        </p>
                        
                        {/* Features */}
                        <div className="grid grid-cols-1 gap-2 mb-6">
                          {classType.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex} 
                              className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-all duration-300"
                            >
                              <CheckCircle className={`h-4 w-4 mr-3 ${classType.iconColor} group-hover:scale-125 transition-all duration-300 flex-shrink-0`} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Schedule */}
                        <div className="space-y-2 mb-6">
                          <div className="text-sm font-semibold text-gray-300">Available Schedules:</div>
                          {classType.schedule.map((time, timeIndex) => (
                            <div key={timeIndex} className="text-sm text-gray-500 flex items-center">
                              <Calendar className="h-3 w-3 mr-2 text-blue-400" />
                              {time}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg transition-all duration-300 hover:scale-105 group"
                        asChild
                      >
                        <Link
                          href={`https://wa.me/+919842222467?text=Hi! I'm interested in ${classType.title}.`}
                          target="_blank"
                        >
                          <span className="mr-2">Book This Class</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dance Styles */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Dance <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Styles</span> We Teach
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Explore various dance styles and find the one that resonates with your soul and artistic expression.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {danceStyles.map((style, index) => (
                <Card
                  key={index}
                  className={`text-center p-6 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 hover:shadow-xl transition-all duration-500 hover:scale-105 group cursor-pointer ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 100 + 1400}ms` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {style.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300">
                    {style.name}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {style.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Card className={`relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-blue-900/20 to-purple-900/20 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-1600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-gradient-x" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600" />
              
              <CardContent className="relative p-12 md:p-16 text-center">
                <div className="max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                    <Globe className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-blue-300 font-medium">Start Your Journey</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                    Begin Your Dance Journey <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Today</span>
                  </h2>
                  
                  <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
                    Book a **trial class** and experience the joy of dance with our expert instructors. 
                    No experience necessary - just bring your **enthusiasm** and passion!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 group border-0 text-lg" 
                      asChild
                    >
                      <Link href="https://wa.me/+919842222467?text=Hi! I'd like to book a trial class." target="_blank">
                        <MessageCircle className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                        Book Free Trial
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
                        Ask Questions
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
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-gradient-x { animation: gradient-x 15s ease infinite; background-size: 400% 400%; }
      `}</style>
    </div>
  )
}
