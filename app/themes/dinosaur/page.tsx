"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect, useRef } from "react"
import { 
  TreePine, 
  Volume2, 
  Palette, 
  Star, 
  Zap, 
  Eye, 
  Camera, 
  Gamepad2, 
  Calendar, 
  Mail, 
  Phone, 
  User, 
  Send,
  ArrowRight,
  Play,
  Sparkles,
  Leaf,
  Mountain
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DinosaurPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredDino, setHoveredDino] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const dinosaurTypes = [
    {
      id: 'trex',
      name: 'T-Rex Experience',
      description: 'Feel the **thunderous roar** and witness the mighty movements of the king of dinosaurs',
      icon: '🦖',
      color: 'from-red-500/30 to-orange-500/30',
      glowColor: 'shadow-red-500/25'
    },
    {
      id: 'triceratops',
      name: 'Triceratops Adventure',
      description: 'Journey with the **gentle giants** through prehistoric meadows and ancient forests',
      icon: '🦕',
      color: 'from-green-500/30 to-emerald-500/30',
      glowColor: 'shadow-green-500/25'
    },
    {
      id: 'pterodactyl',
      name: 'Flying Pterodactyl',
      description: 'Soar through the skies with **majestic flying reptiles** in our aerial experience',
      icon: '🦅',
      color: 'from-blue-500/30 to-cyan-500/30',
      glowColor: 'shadow-blue-500/25'
    },
    {
      id: 'raptor',
      name: 'Velociraptor Hunt',
      description: 'Experience the **intelligence and agility** of nature\'s most clever predators',
      icon: '🦎',
      color: 'from-purple-500/30 to-pink-500/30',
      glowColor: 'shadow-purple-500/25'
    }
  ]

  const features = [
    {
      icon: Eye,
      title: 'Immersive VR Experiences',
      description: 'Step into prehistoric worlds with **cutting-edge virtual reality** technology and lifelike dinosaur encounters',
      gradient: 'from-cyan-400 to-blue-400'
    },
    {
      icon: Camera,
      title: 'Adventure Photography',
      description: 'Capture **magical moments** with professional prehistoric-themed photoshoots and cinematography',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: Gamepad2,
      title: 'Interactive Gaming',
      description: 'Engage in **thrilling dinosaur simulations** and educational prehistoric adventures',
      gradient: 'from-purple-400 to-pink-400'
    }
  ]

  const renderDescription = (description: string) => {
    const parts = description.split(/(\*\*.*?\*\*)/)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="text-green-300 font-semibold">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Forest Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-green-900/20 to-black"></div>
        
        {/* Floating Mist */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-64 h-32 bg-green-400/10 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-20 w-48 h-24 bg-blue-400/10 rounded-full blur-3xl animate-float-delay opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 h-28 bg-purple-400/10 rounded-full blur-3xl animate-float-slow opacity-50"></div>
        </div>

        {/* Glowing Plants */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-900/30 to-transparent"></div>
        <div className="absolute top-20 left-10 w-8 h-16 bg-green-400/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-32 right-16 w-6 h-12 bg-cyan-400/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-10 h-20 bg-purple-400/20 rounded-full blur-sm animate-pulse"></div>

        {/* Mouse Follower */}
        <div
          className="absolute w-96 h-96 bg-green-500/5 rounded-full blur-3xl transition-all duration-700 pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30 backdrop-blur-sm">
              <TreePine className="h-5 w-5 text-green-400 animate-pulse" />
              <span className="text-green-300 font-medium">Prehistoric Adventure</span>
              <Sparkles className="h-4 w-4 text-green-400" />
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              DINOSAUR
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                ADVENTURE
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Journey into the **mystical prehistoric realm** where ancient giants roam through 
              enchanted forests filled with glowing flora and **cinematic wonder**
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105 group border-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Enter the Adventure
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-400/50 text-green-300 hover:bg-green-400/10 hover:border-green-400 px-8 py-4 rounded-full font-semibold transition-all duration-500 hover:scale-105 backdrop-blur-sm group"
              >
                <Camera className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Watch Preview
              </Button>
            </div>
          </div>

          {/* Animated Dinosaur */}
          <div className="absolute bottom-10 right-10 opacity-20 group">
            <div className="text-8xl md:text-9xl animate-bounce cursor-pointer transform hover:scale-110 transition-all duration-500">
              🦖
            </div>
            <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Parallax Trees */}
        <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none">
          <div 
            className="absolute bottom-0 left-10 text-6xl opacity-30"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            🌲
          </div>
          <div 
            className="absolute bottom-0 right-20 text-5xl opacity-40"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            🌳
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-sm text-purple-300 font-medium">Prehistoric Experiences</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What We <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Provide</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in cutting-edge prehistoric experiences that blend technology with adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className={`group relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer animate-fade-in-up ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {renderDescription(feature.description)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dinosaur Types Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Dinosaurs</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Each creature offers a unique adventure through time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dinosaurTypes.map((dino, index) => (
              <Card 
                key={dino.id}
                className={`group relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 cursor-pointer text-center ${dino.glowColor}`}
                onMouseEnter={() => setHoveredDino(dino.id)}
                onMouseLeave={() => setHoveredDino(null)}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${dino.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-125 ${
                      hoveredDino === dino.id ? 'animate-bounce' : ''
                    }`}>
                      <span className="text-4xl">{dino.icon}</span>
                    </div>
                    
                    {hoveredDino === dino.id && (
                      <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                    {dino.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {renderDescription(dino.description)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Book Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Adventure</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                Ready to embark on your prehistoric journey? Fill out the form below to start your adventure
              </p>
            </div>

            <Card className="relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
              
              <CardContent className="p-8 relative">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <User className="h-4 w-4 text-green-400" />
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-green-500 transition-colors duration-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <Mail className="h-4 w-4 text-green-400" />
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-green-500 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-400" />
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone"
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-green-500 transition-colors duration-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-green-400" />
                        Preferred Date
                      </label>
                      <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="bg-gray-800/50 border-gray-600/50 text-white focus:border-green-500 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-green-400" />
                      Special Requests
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your adventure preferences..."
                      rows={4}
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-green-500 transition-colors duration-300 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 rounded-lg shadow-xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105 group border-0"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Book Adventure Now
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Adventure <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Witness the magic of our prehistoric world
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/children-dancing-in-dinosaur-costumes-colorful-sta.jpg"
                alt="Children dancing in dinosaur costumes"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-semibold mb-1">Dinosaur Dance Adventure</h3>
                <p className="text-sm text-gray-300">Kids exploring prehistoric movements</p>
              </div>
            </div>
            
            <div className="group relative aspect-video bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all duration-500">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce">🦕</div>
                <span className="text-green-300 font-semibold">VR Experience</span>
              </div>
            </div>
            
            <div className="group relative aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce">🦖</div>
                <span className="text-blue-300 font-semibold">Interactive Show</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
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
        
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}</style>
    </div>
  )
}
