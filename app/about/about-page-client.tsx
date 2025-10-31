"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Star, Award, Calendar, MapPin, CheckCircle, ArrowRight, Sparkles, Zap, Globe, Trophy, Target, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  const teamMembers = [
    {
      id: 1,
      name: "Edwin Rodriguez",
      role: "Founder & Lead Choreographer",
      bio: "With over **10 years of experience** in dance and entertainment, Edwin founded **Footloose Edwin's** to bring **joy and creativity** to every event.",
      image: "/professional-man-smiling.png",
      specialties: ["Choreography", "Event Planning", "Theme Development"],
      gradient: "from-emerald-600/20 via-teal-600/20 to-cyan-600/20",
      iconColor: "text-emerald-400",
      achievements: "500+ Events",
    },
    {
      id: 2,
      name: "Sarah Martinez", 
      role: "Dance Instructor & Coordinator",
      bio: "A **passionate educator** with a background in **ballet and contemporary dance**, Sarah leads our **dance classes** and **educational programs**.",
      image: "/professional-woman-smiling.png",
      specialties: ["Dance Education", "Ballet", "Contemporary"],
      gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20",
      iconColor: "text-purple-400",
      achievements: "1000+ Students",
    },
    {
      id: 3,
      name: "Maria Santos",
      role: "Costume Designer & Props Manager",
      bio: "Maria's **creative vision** brings our themed performances to life with **stunning costumes** and **authentic props**.",
      image: "/hispanic-professional-woman.png",
      specialties: ["Costume Design", "Props", "Theme Creation"],
      gradient: "from-orange-600/20 via-amber-600/20 to-yellow-600/20",
      iconColor: "text-orange-400",
      achievements: "200+ Designs",
    },
    {
      id: 4,
      name: "Carlos Johnson",
      role: "Technical Director",
      bio: "Carlos handles all the **technical aspects** of our performances, from **lighting** to **sound systems** and **special effects**.",
      image: "/middle-aged-man-smiling.png",
      specialties: ["Lighting", "Sound", "Special Effects"],
      gradient: "from-blue-600/20 via-indigo-600/20 to-purple-600/20",
      iconColor: "text-blue-400",
      achievements: "300+ Shows",
    }
  ]

  const achievements = [
    {
      title: "500+ Successful Events",
      description: "We've brought **joy** to over **500 events** across the region",
      icon: Calendar,
      value: "500+",
      gradient: "from-green-600/20 to-emerald-600/20",
      iconColor: "text-green-400",
    },
    {
      title: "10,000+ Happy Customers",
      description: "Thousands of **satisfied clients** and their guests",
      icon: Users,
      value: "10K+",
      gradient: "from-blue-600/20 to-cyan-600/20",
      iconColor: "text-blue-400",
    },
    {
      title: "Award-Winning Performances",
      description: "Recognized for **excellence** in entertainment",
      icon: Award,
      value: "15+",
      gradient: "from-purple-600/20 to-pink-600/20",
      iconColor: "text-purple-400",
    },
    {
      title: "8+ Years Experience",
      description: "Nearly a decade of creating **magical moments**",
      icon: Star,
      value: "8+",
      gradient: "from-orange-600/20 to-amber-600/20",
      iconColor: "text-orange-400",
    }
  ]

  const values = [
    {
      title: "Creativity",
      description: "We believe in **pushing boundaries** and creating **unique, memorable experiences** that inspire and delight",
      icon: Sparkles,
      gradient: "from-purple-600/20 to-pink-600/20",
      iconColor: "text-purple-400",
    },
    {
      title: "Excellence",
      description: "Every performance is crafted with **attention to detail** and **professional quality** that exceeds expectations",
      icon: Trophy,
      gradient: "from-blue-600/20 to-cyan-600/20",
      iconColor: "text-blue-400",
    },
    {
      title: "Joy",
      description: "Our mission is to bring **happiness and wonder** to every audience through the **power of dance**",
      icon: Heart,
      gradient: "from-rose-600/20 to-pink-600/20",
      iconColor: "text-rose-400",
    },
    {
      title: "Community",
      description: "We're committed to **serving our community** and building **lasting relationships** with every client",
      icon: Users,
      gradient: "from-green-600/20 to-emerald-600/20",
      iconColor: "text-green-400",
    }
  ]

  const whyChoosePoints = [
    {
      title: "Passionate Performers",
      description: "Every member of our team is **passionate about dance** and dedicated to creating **magical experiences** for our audiences",
      icon: Heart,
      gradient: "from-red-600/20 to-rose-600/20",
    },
    {
      title: "Personalized Service",
      description: "We work closely with each client to understand their **vision** and create **customized performances** that exceed expectations",
      icon: Target,
      gradient: "from-blue-600/20 to-cyan-600/20",
    },
    {
      title: "Proven Excellence",
      description: "With **hundreds of successful events** and **thousands of happy clients**, we have a proven track record of delivering excellence",
      icon: Shield,
      gradient: "from-green-600/20 to-emerald-600/20",
    },
  ]

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
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float-delay" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-orange-500/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-blue-500/10 rounded-full blur-xl animate-float-delay" />
        
        {/* Gradient Lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent transform -skew-y-12" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/5 to-transparent transform skew-y-12" />
      </div>

      {/* Mouse Follower Gradient */}
      {hoveredMember && (
        <div
          className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, ${teamMembers[hoveredMember - 1]?.gradient.split(' ').map(color => color.replace('/20', '/40')).join(', ')}, transparent)`,
          }}
        />
      )}

      <main className="relative z-20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <div className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                <Heart className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-300 font-medium">About Footloose Edwin's</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent leading-tight">
                Creating Magical<br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Dance Experiences</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-400 leading-relaxed">
                {renderDescription("**Inspiring**, **entertaining**, and bringing **communities together** through the power of **movement** and **storytelling** for over **8 years** of magical performances.")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 group border-0" 
                  asChild
                >
                  <Link href="#story">
                    <Heart className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Our Story
                    <Sparkles className="h-4 w-4 ml-2 group-hover:rotate-180 transition-transform duration-500" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-gray-900/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/70 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" 
                  asChild
                >
                  <Link href="#team">
                    <Users className="h-5 w-5 mr-2" />
                    Meet Our Team
                  </Link>
                </Button>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className={`group text-center p-6 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ animationDelay: `${index * 200 + 400}ms` }}
                  >
                    <div className={`h-16 w-16 rounded-full bg-gradient-to-r ${achievement.gradient} border-2 border-gray-600/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <achievement.icon className={`h-6 w-6 ${achievement.iconColor}`} />
                    </div>
                    <div className={`text-2xl font-bold mb-2 ${achievement.iconColor}`}>{achievement.value}</div>
                    <div className="text-xs text-gray-400">{achievement.title.split(' ')[0]} {achievement.title.split(' ')[1]}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section id="story" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                  Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Story</span>
                </h2>
                <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                  How we started and where we're going
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-8 transition-all duration-1000 delay-1000 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}>
                  <Card className="p-8 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
                    <p className="text-lg leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">
                      {renderDescription("Founded in **2016** by **Edwin Rodriguez**, Footloose Edwin's began as a dream to make **dance accessible** and **exciting** for everyone. What started as small **birthday party performances** has grown into a **comprehensive dance entertainment company** serving the entire region.")}
                    </p>
                    <p className="text-lg leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">
                      {renderDescription("Our passion lies in creating **immersive themed experiences** that transport audiences to **different worlds**. From **superhero adventures** to **fairy tale fantasies**, we believe that dance has the power to **tell stories** and create **lasting memories**.")}
                    </p>
                    <p className="text-lg leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {renderDescription("Today, we're proud to offer a **full range of services** including **themed performances**, **dance classes**, **choreography services**, and **fitness programs**. Our team of talented professionals is dedicated to bringing **joy and creativity** to every event we touch.")}
                    </p>
                  </Card>
                </div>
                
                <div className={`relative transition-all duration-1000 delay-1200 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                  <div className="relative">
                    <Image
                      src="/professional-dance-studio-with-dancers-in-colorful.jpg"
                      alt="Dance studio with colorful performers"
                      width={600}
                      height={600}
                      className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
                    />
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full p-4 shadow-xl">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 backdrop-blur-sm text-white rounded-xl p-6 shadow-xl border border-emerald-500/30">
                      <div className="text-center">
                        <div className="text-2xl font-bold">Since 2016</div>
                        <div className="text-sm opacity-90">Creating Magic</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className={`group text-center p-8 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 200 + 1600}ms` }}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
                  <div className="relative">
                    <div className={`h-20 w-20 rounded-full bg-gradient-to-r ${value.gradient} border-2 border-gray-600/50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <value.icon className={`h-8 w-8 ${value.iconColor}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {renderDescription(value.description)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section id="team" className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1800 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Users className="h-4 w-4 text-purple-400" />
                <span className="text-purple-300 font-medium">Our Team</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                Meet Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Team</span>
              </h2>
              
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                The talented professionals who bring our performances to life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={member.id}
                  className={`group relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 200 + 2000}ms`,
                  }}
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm">
                    
                    <CardContent className="p-8 text-center">
                      {/* Profile Image */}
                      <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-600/50 group-hover:border-emerald-500/50 transition-all duration-300">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Floating Badge */}
                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full p-2 shadow-xl group-hover:scale-110 transition-all duration-300">
                          <Star className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300">
                        {member.name}
                      </h3>
                      
                      <p className={`font-medium mb-4 ${member.iconColor}`}>
                        {member.role}
                      </p>
                      
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6 leading-relaxed">
                        {renderDescription(member.bio)}
                      </p>
                      
                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {member.specialties.map((specialty, idx) => (
                          <Badge 
                            key={idx} 
                            className={`text-xs bg-gradient-to-r ${member.gradient} border-gray-600/50 text-white group-hover:scale-110 transition-all duration-300`}
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Achievement */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${member.gradient} rounded-full text-white text-xs font-medium`}>
                        <Trophy className="h-3 w-3" />
                        {member.achievements}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-2200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                Why Choose <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Footloose Edwin's</span>?
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                What sets us apart in the world of dance entertainment
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {whyChoosePoints.map((point, index) => (
                <Card
                  key={index}
                  className={`group p-8 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 200 + 2400}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${point.gradient} border border-gray-600/50 group-hover:scale-110 transition-all duration-300`}>
                      <point.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300">
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
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Card className={`relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-emerald-900/20 to-teal-900/20 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-2600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 animate-gradient-x" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600" />
              
              <CardContent className="relative p-12 md:p-16 text-center">
                <div className="max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                    <Globe className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-emerald-300 font-medium">Ready to Dance?</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                    Ready to Dance <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">with Us</span>?
                  </h2>
                  
                  <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
                    {renderDescription("Let's create something **magical together**. Contact us today to discuss your **event** and how we can make it **unforgettable**.")}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 group border-0 text-lg" 
                      asChild
                    >
                      <Link href="/contact">
                        <Heart className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                        Get in Touch
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
                        <Star className="h-6 w-6 mr-3" />
                        View Our Work
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
