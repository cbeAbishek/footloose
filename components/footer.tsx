"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Zap, 
  Star, 
  Clock, 
  Globe,
  Send,
  ChevronRight
} from "lucide-react"
import Image from "next/image"

export function Footer() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
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

  const quickLinks = [
    { href: "/services/classes", label: "Dance Classes", icon: Star },
    { href: "/services/props", label: "Props & Design", icon: Sparkles },
    { href: "/services/choreography", label: "Choreography", icon: Zap },
    { href: "/services/chaircoCISE", label: "ChaircoCISE Fitness", icon: Heart },
    { href: "/gallery", label: "Gallery", icon: Globe },
    { href: "/about", label: "About Us", icon: Clock },
  ]

  const themes = [
    { href: "/themes/edwins-ai", label: "Edwin's AI", color: "from-cyan-400 to-blue-400" },
    { href: "/themes/dinosaur", label: "Dinosaur Adventure", color: "from-green-400 to-emerald-400" },
    { href: "/themes/avengers", label: "Avengers", color: "from-red-400 to-orange-400" },
    { href: "/themes/snow-white", label: "Snow White", color: "from-purple-400 to-pink-400" },
  ]

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook", color: "hover:text-blue-400" },
    { href: "#", icon: Instagram, label: "Instagram", color: "hover:text-pink-400" },
    { href: "#", icon: Youtube, label: "YouTube", color: "hover:text-red-400" },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float-delay" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-green-500/10 rounded-full blur-xl animate-float-delay" />
        
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent transform -skew-y-12" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/5 to-transparent transform skew-y-12" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Mouse Follower Gradient */}
      {hoveredSection && (
        <div
          className="fixed pointer-events-none z-0 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.4), transparent)`,
          }}
        />
      )}

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div 
            className={`space-y-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onMouseEnter={() => setHoveredSection('company')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Image 
                    src="/logo.svg" 
                    alt="Footloose Edwin's Logo" 
                    width={50} 
                    height={50} 
                    className="rounded-full object-cover" 
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </div>
                <div>
                  <span className="font-bold text-xl text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Footloose Edwin's
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 text-xs">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      30 Years
                    </Badge>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                **30 years of dance excellence**. Professional choreography, themed performances, and specialized fitness
                programs transforming lives through movement and creativity.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={social.label}
                    variant="ghost" 
                    size="sm" 
                    asChild
                    className={`bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link href={social.href} aria-label={social.label}>
                      <social.icon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onMouseEnter={() => setHoveredSection('links')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-purple-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.href} style={{ animationDelay: `${index * 50}ms` }}>
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group text-sm hover:translate-x-2"
                  >
                    <link.icon className="h-4 w-4 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" />
                    <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text">
                      {link.label}
                    </span>
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Themes */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onMouseEnter={() => setHoveredSection('themes')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-pink-400" />
              Popular Themes
            </h3>
            <ul className="space-y-3">
              {themes.map((theme, index) => (
                <li key={theme.href} style={{ animationDelay: `${index * 50}ms` }}>
                  <Link 
                    href={theme.href} 
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group text-sm hover:translate-x-2"
                  >
                    <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${theme.color} group-hover:scale-125 transition-all duration-300`} />
                    <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text">
                      {theme.label}
                    </span>
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onMouseEnter={() => setHoveredSection('contact')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-green-400" />
              Get In Touch
            </h3>
            
            <div className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors duration-300 group">
                  <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 group-hover:bg-gray-700/50 transition-colors duration-300">
                    <Phone className="h-4 w-4 text-green-400" />
                  </div>
                  <span className="text-sm">+91 98422 22467</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors duration-300 group">
                  <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 group-hover:bg-gray-700/50 transition-colors duration-300">
                    <Mail className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-sm">eddy.footloose@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors duration-300 group">
                  <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 group-hover:bg-gray-700/50 transition-colors duration-300">
                    <MapPin className="h-4 w-4 text-purple-400" />
                  </div>
                  <span className="text-sm">RS Puram, Coimbatore, Tamilnadu</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="relative">
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-500 hover:scale-105 group border-0" 
                  asChild
                >
                  <Link href="https://wa.me/+919842222467" target="_blank">
                    <MessageCircle className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    WhatsApp Us Now
                    <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className={`mb-12 transition-all duration-1000 delay-800 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
                <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
                <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
              </div>
              <p className="text-gray-400 mb-6">
                Get the latest updates on our classes, events, and special offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group">
                  Subscribe
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className={`border-t border-gray-700/50 pt-8 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <p>&copy; 2024 Footloose Edwin's Dance Company. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <div className="flex items-center gap-2 text-gray-400">
                <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                <span>Made with love in Coimbatore</span>
              </div>
            </div>
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
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
      `}</style>
    </footer>
  )
}
