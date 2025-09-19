"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Users, Star, Send, Heart, Sparkles, ArrowRight, Globe, Zap, Shield, Award, CheckCircle, HelpCircle } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Call us for **immediate assistance**",
      gradient: "from-green-600/20 to-emerald-600/20",
      iconColor: "text-green-400",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@footlooseedwins.com", "bookings@footlooseedwins.com"],
      description: "Send us an **email anytime**",
      gradient: "from-blue-600/20 to-cyan-600/20",
      iconColor: "text-blue-400",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Dance Street", "Performance City, PC 12345"],
      description: "Visit our **studio**",
      gradient: "from-purple-600/20 to-pink-600/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"],
      description: "Our **operating hours**",
      gradient: "from-orange-600/20 to-amber-600/20",
      iconColor: "text-orange-400",
    }
  ]

  const services = [
    "Themed Performances",
    "Dance Classes",
    "Choreography Services",
    "ChaircoCISE Fitness",
    "Props & Design",
    "Custom Theme Development",
    "Event Planning Consultation"
  ]

  const eventTypes = [
    "Birthday Party",
    "Wedding",
    "Corporate Event",
    "School Performance",
    "Community Event",
    "Private Lesson",
    "Other"
  ]

  const quickActions = [
    {
      icon: Phone,
      title: "Call Now",
      description: "Speak directly with our team for **immediate booking** and questions",
      action: "Call (555) 123-4567",
      href: "tel:+15551234567",
      gradient: "from-green-600/20 to-emerald-600/20",
      iconColor: "text-green-400",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick messaging for **fast responses** and easy communication",
      action: "Message on WhatsApp",
      href: "https://wa.me/15551234567",
      gradient: "from-green-600/20 to-teal-600/20",
      iconColor: "text-green-400",
    },
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book a **free 15-minute consultation** to discuss your event",
      action: "Schedule Meeting",
      href: "#",
      gradient: "from-blue-600/20 to-indigo-600/20",
      iconColor: "text-blue-400",
    },
  ]

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking **2-4 weeks in advance**, especially for weekends and popular themes. However, we can often accommodate **last-minute requests**.",
      icon: Calendar,
      gradient: "from-blue-600/20 to-cyan-600/20",
    },
    {
      question: "Do you perform at any location?",
      answer: "Yes! We perform at your chosen venue - **homes**, **schools**, **community centers**, or **outdoor spaces**. We bring all necessary equipment.",
      icon: MapPin,
      gradient: "from-purple-600/20 to-pink-600/20",
    },
    {
      question: "Can you create custom themes?",
      answer: "Absolutely! We love creating **custom themes** tailored to your specific event. Just let us know your **vision** and we'll make it happen.",
      icon: Sparkles,
      gradient: "from-orange-600/20 to-amber-600/20",
    },
    {
      question: "What's included in a performance?",
      answer: "Our performances include **choreographed dances**, **authentic costumes**, **props**, **music**, and **interactive audience participation** when appropriate.",
      icon: Star,
      gradient: "from-rose-600/20 to-pink-600/20",
    },
  ]

  // Function to render description with bold keywords
  const renderDescription = (description: string) => {
    const parts = description.split(/(\*\*.*?\*\*)/)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="text-gray-200 font-semibold">
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
      {hoveredCard && (
        <div
          className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, rgba(16, 185, 129, 0.4), rgba(20, 184, 166, 0.4), transparent)`,
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
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Get in Touch</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent leading-tight">
                Let's Create<br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Magic Together</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-400 leading-relaxed">
                {renderDescription("Ready to bring **magic** to your event? Contact us today to discuss your **vision** and let us create an **unforgettable experience** that will leave your guests amazed.")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 group border-0" 
                  asChild
                >
                  <Link href="tel:+15551234567">
                    <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Call Now
                    <Sparkles className="h-4 w-4 ml-2 group-hover:rotate-180 transition-transform duration-500" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-gray-900/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/70 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" 
                  asChild
                >
                  <Link href="https://wa.me/15551234567" target="_blank">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                {[
                  { label: "Response Time", value: "< 24hrs", icon: Clock, color: "text-emerald-400" },
                  { label: "Happy Clients", value: "10K+", icon: Users, color: "text-purple-400" },
                  { label: "Star Rating", value: "5.0 ⭐", icon: Star, color: "text-orange-400" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className={`group text-center p-6 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ animationDelay: `${index * 200 + 400}ms` }}
                  >
                    <div className={`h-12 w-12 rounded-full bg-gray-800/50 border border-gray-600/50 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <div className={`text-xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                Contact <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Information</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Multiple ways to reach us for your convenience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden text-center bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 200 + 1000}ms`,
                  }}
                  onMouseEnter={() => setHoveredCard(index + 1)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm">
                    
                    <CardHeader className="p-8">
                      <div className={`h-16 w-16 rounded-full bg-gradient-to-r ${info.gradient} border-2 border-gray-600/50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}>
                        <info.icon className={`h-8 w-8 ${info.iconColor}`} />
                      </div>
                      
                      <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300">
                        {info.title}
                      </CardTitle>
                      
                      <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6 leading-relaxed">
                        {renderDescription(info.description)}
                      </CardDescription>
                      
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className={`text-center mb-16 transition-all duration-1000 delay-1200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  <Send className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-300 font-medium">Send Message</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                  Tell Us About <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Your Event</span>
                </h2>
                
                <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                  {renderDescription("Share your **vision** with us and we'll get back to you within **24 hours** with a personalized proposal")}
                </p>
              </div>
              
              <Card className={`relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-1400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-rose-600/5 animate-gradient-x" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600" />
                
                <CardContent className="relative p-8 md:p-12">
                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-white font-medium">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Your first name" 
                          required 
                          className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-emerald-500/50 focus:ring-emerald-500/50 rounded-lg transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-white font-medium">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Your last name" 
                          required 
                          className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-emerald-500/50 focus:ring-emerald-500/50 rounded-lg transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-white font-medium">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          required 
                          className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-emerald-500/50 focus:ring-emerald-500/50 rounded-lg transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-white font-medium">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="(555) 123-4567" 
                          required 
                          className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-emerald-500/50 focus:ring-emerald-500/50 rounded-lg transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="eventType" className="text-white font-medium">Event Type *</Label>
                        <Select>
                          <SelectTrigger className="bg-gray-800/50 border-gray-600/50 text-white focus:border-emerald-500/50 focus:ring-emerald-500/50 rounded-lg">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-600">
                            {eventTypes.map((type) => (
                              <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')} className="text-white hover:bg-gray-700">
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="eventDate" className="text-white font-medium">Preferred Event Date</Label>
                        <Input 
                          id="eventDate" 
                          type="date" 
                          className="bg-gray-800/50 border-gray-600/50 text-white focus:border-emerald-500/50 focus:ring-emerald-500/50 rounded-lg transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="guests" className="text-white font-medium">Number of Guests</Label>
                        <Input 
                          id="guests" 
                          type="number" 
                          placeholder="e.g. 25" 
                          className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-emerald-500/50 focus:ring-emerald-500/50 rounded-lg transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="budget" className="text-white font-medium">Budget Range</Label>
                        <Select>
                          <SelectTrigger className="bg-gray-800/50 border-gray-600/50 text-white focus:border-emerald-500/50 focus:ring-emerald-500/50 rounded-lg">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-600">
                            <SelectItem value="under-500" className="text-white hover:bg-gray-700">Under $500</SelectItem>
                            <SelectItem value="500-1000" className="text-white hover:bg-gray-700">$500 - $1,000</SelectItem>
                            <SelectItem value="1000-2000" className="text-white hover:bg-gray-700">$1,000 - $2,000</SelectItem>
                            <SelectItem value="2000-5000" className="text-white hover:bg-gray-700">$2,000 - $5,000</SelectItem>
                            <SelectItem value="over-5000" className="text-white hover:bg-gray-700">Over $5,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label className="text-white font-medium">Services Interested In</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {services.map((service) => (
                          <div key={service} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300">
                            <Checkbox 
                              id={service.toLowerCase().replace(/ /g, '-')} 
                              className="border-gray-500 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                            />
                            <Label 
                              htmlFor={service.toLowerCase().replace(/ /g, '-')} 
                              className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors duration-300"
                            >
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-white font-medium">Tell Us About Your Event *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your event, preferred themes, special requirements, or any questions you have..."
                        className="min-h-[150px] bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-emerald-500/50 focus:ring-emerald-500/50 rounded-lg resize-none transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800/30 border border-gray-600/30">
                      <Checkbox 
                        id="newsletter" 
                        className="border-gray-500 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                      />
                      <Label htmlFor="newsletter" className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors duration-300">
                        I'd like to receive updates about new themes and special offers
                      </Label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 rounded-full shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 group border-0 text-lg"
                    >
                      <Send className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      Send Message
                      <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                Need Immediate <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Assistance</span>?
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Choose the fastest way to connect with us
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {quickActions.map((action, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden text-center bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 200 + 1800}ms`,
                  }}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm">
                    
                    <CardHeader className="p-8">
                      <div className={`h-20 w-20 rounded-full bg-gradient-to-r ${action.gradient} border-2 border-gray-600/50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}>
                        <action.icon className={`h-10 w-10 ${action.iconColor}`} />
                      </div>
                      
                      <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 mb-4">
                        {action.title}
                      </CardTitle>
                      
                      <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-8 leading-relaxed">
                        {renderDescription(action.description)}
                      </CardDescription>
                      
                      <Button 
                        className="bg-gradient-to-r from-emerald-600/80 to-teal-600/80 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 group border-0" 
                        asChild
                      >
                        <Link href={action.href} target={action.href.startsWith('http') ? '_blank' : undefined}>
                          {action.action}
                        </Link>
                      </Button>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-2000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-full border border-amber-500/30 backdrop-blur-sm">
                <HelpCircle className="h-4 w-4 text-amber-400" />
                <span className="text-amber-300 font-medium">FAQ</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                Frequently Asked <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Quick answers to common questions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 200 + 2200}ms`,
                  }}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${faq.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm">
                    
                    <CardHeader className="p-8">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${faq.gradient} border border-gray-600/50 group-hover:scale-110 transition-all duration-300`}>
                          <faq.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 mb-4">
                            {faq.question}
                          </CardTitle>
                          <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                            {renderDescription(faq.answer)}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Card className={`relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-emerald-900/20 to-teal-900/20 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-2400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 animate-gradient-x" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600" />
              
              <CardContent className="relative p-12 md:p-16 text-center">
                <div className="max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                    <Globe className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-emerald-300 font-medium">Let's Create Magic</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                    Your Perfect Event is <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">One Call Away</span>
                  </h2>
                  
                  <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
                    {renderDescription("Contact us today and let's start planning something **extraordinary** that will create **lasting memories** for you and your guests.")}
                  </p>
                  
                  {/* Trust Indicators */}
                  <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400 mb-8">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300">**5-Star Service**</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-300">**10,000+ Happy Clients**</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-emerald-400" />
                      <span className="text-gray-300">**24-Hour Response**</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">**Insured & Professional**</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 group border-0 text-lg" 
                      asChild
                    >
                      <Link href="tel:+15551234567">
                        <Phone className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                        Call Now
                        <Zap className="h-5 w-5 ml-3 group-hover:rotate-180 transition-transform duration-500" />
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="bg-gray-900/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/70 backdrop-blur-sm px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg" 
                      asChild
                    >
                      <Link href="/services">
                        <Star className="h-6 w-6 mr-3" />
                        View Services
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
