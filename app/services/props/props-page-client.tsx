
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Palette, Package, Clock, Star, CheckCircle, MessageCircle, Sparkles, Zap, ArrowRight, Phone, Paintbrush, Scissors, Globe, Trophy, Users, Heart } from "lucide-react"

const propCategories = [
  {
    id: 1,
    title: "Themed Costumes",
    description: "Complete costume sets for **themed performances** with **premium materials** and **attention to detail**",
    items: ["Dinosaur costumes", "Superhero outfits", "Fairy tale dresses", "Cultural attire", "Period costumes", "Fantasy characters"],
    image: "/dancers-in-superhero-costumes-action-poses.jpg",
    price: "From $50",
    originalPrice: "$75",
    gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20",
    iconColor: "text-purple-400",
    popular: true,
  },
  {
    id: 2,
    title: "Dance Props",
    description: "Essential props to **enhance performances** with **professional quality** and **durability**",
    items: ["Ribbons & scarves", "Pom-poms", "Fans", "Musical instruments", "LED accessories", "Interactive props"],
    image: "/elegant-fairy-tale-dance-performance-snow-white.jpg",
    price: "From $15",
    originalPrice: "$25",
    gradient: "from-blue-600/20 via-cyan-600/20 to-teal-600/20",
    iconColor: "text-blue-400",
    popular: false,
  },
  {
    id: 3,
    title: "Stage Backdrops",
    description: "Professional backdrops for **stunning stage presence** with **custom designs** and **easy setup**",
    items: ["Themed backdrops", "LED panels", "Fabric drapes", "Custom designs", "3D elements", "Interactive displays"],
    image: "/futuristic-ai-dance-performance-with-neon-lights.jpg",
    price: "From $200",
    originalPrice: "$300",
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-600/20",
    iconColor: "text-green-400",
    popular: false,
  },
  {
    id: 4,
    title: "Accessories",
    description: "Complete your look with **matching accessories** and **professional makeup** solutions",
    items: ["Headpieces", "Jewelry", "Shoes", "Makeup kits", "Hair extensions", "Special effects"],
    image: "/professional-dance-studio-with-dancers-in-colorful.jpg",
    price: "From $10",
    originalPrice: "$20",
    gradient: "from-orange-600/20 via-amber-600/20 to-yellow-600/20",
    iconColor: "text-orange-400",
    popular: false,
  },
]

const services = [
  {
    id: 1,
    title: "Custom Design",
    description: "Unique designs created specifically for your **performance vision** with **3D visualization**",
    features: ["Concept development", "3D visualization", "Material selection", "Fitting sessions", "Unlimited revisions", "Professional consultation"],
    timeline: "2-4 weeks",
    price: "Custom quote",
    gradient: "from-purple-600/20 to-pink-600/20",
    iconColor: "text-purple-400",
    icon: Paintbrush,
  },
  {
    id: 2,
    title: "Rental Service",
    description: "High-quality props and costumes **available for rent** with **flexible duration** options",
    features: ["Wide selection", "Flexible duration", "Cleaning included", "Damage protection", "Same-day pickup", "Bulk discounts"],
    timeline: "Same day pickup",
    price: "30% of purchase price",
    gradient: "from-blue-600/20 to-cyan-600/20",
    iconColor: "text-blue-400",
    icon: Package,
  },
  {
    id: 3,
    title: "Purchase Options",
    description: "Own your props and costumes for **repeated use** with **warranty included** and **maintenance guide**",
    features: ["Bulk discounts", "Maintenance guide", "Storage solutions", "Warranty included", "Free alterations", "Replacement parts"],
    timeline: "1-2 weeks delivery",
    price: "Full retail price",
    gradient: "from-green-600/20 to-emerald-600/20",
    iconColor: "text-green-400",
    icon: Star,
  },
]

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We discuss your **vision**, **theme**, and **requirements** in detail to understand your needs",
    icon: MessageCircle,
    gradient: "from-blue-600/20 to-purple-600/20",
  },
  {
    number: "02", 
    title: "Design",
    description: "Our designers create **detailed concepts** and **3D visualizations** for your approval",
    icon: Paintbrush,
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    number: "03",
    title: "Creation",
    description: "Skilled craftspeople bring designs to life with **quality materials** and **expert craftsmanship**",
    icon: Scissors,
    gradient: "from-pink-600/20 to-orange-600/20",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Final **fitting**, **adjustments**, and **delivery** to ensure perfect results for your performance",
    icon: Trophy,
    gradient: "from-orange-600/20 to-green-600/20",
  },
]

const achievements = [
  { icon: Trophy, label: "Props Created", value: "1000+" },
  { icon: Users, label: "Happy Clients", value: "200+" },
  { icon: Star, label: "Client Satisfaction", value: "99%" },
  { icon: Heart, label: "Custom Designs", value: "500+" },
]

export default function PropsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState("custom")

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
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-float-delay" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-orange-500/10 rounded-full blur-xl animate-float-delay" />
        
        {/* Gradient Lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent transform -skew-y-12" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/5 to-transparent transform skew-y-12" />
      </div>

      {/* Mouse Follower Gradient */}
      {hoveredCard && (
        <div
          className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, ${propCategories[hoveredCard - 1]?.gradient.split(' ').map(color => color.replace('/20', '/40')).join(', ')}, transparent)`,
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
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  <Palette className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-300 font-medium">Props & Design</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                  Bring Your Vision<br />
                  to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Life</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  Transform your performances with our **custom-designed props** and **premium costumes**. From concept to creation, we
                  bring your artistic vision to life with **professional quality** and attention to detail.
                </p>
                
                {/* Key Features */}
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center text-purple-400">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Custom Design
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Package className="h-4 w-4 mr-2" />
                    Rental Available
                  </div>
                  <div className="flex items-center text-green-400">
                    <Clock className="h-4 w-4 mr-2" />
                    Fast Delivery
                  </div>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                    >
                      <achievement.icon className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">{achievement.value}</div>
                      <div className="text-xs text-gray-400">{achievement.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 group border-0" 
                    asChild
                  >
                    <Link href="https://wa.me/+919842222467?text=Hi! I need custom props and costumes." target="_blank">
                      <MessageCircle className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Get Custom Quote
                      <Sparkles className="h-4 w-4 ml-2 group-hover:rotate-180 transition-transform duration-500" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-gray-900/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/70 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" 
                    asChild
                  >
                    <Link href="#categories">
                      <Palette className="h-5 w-5 mr-2" />
                      Browse Catalog
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className={`relative transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="relative">
                  <Image
                    src="/dancers-in-superhero-costumes-action-poses.jpg"
                    alt="Custom Props and Costumes"
                    width={600}
                    height={400}
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm text-white rounded-xl p-6 shadow-xl border border-purple-500/30">
                    <div className="text-center">
                      <div className="text-3xl font-bold">1000+</div>
                      <div className="text-sm opacity-90">Props Created</div>
                      <div className="flex items-center justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm">4.9/5</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-full p-4 shadow-xl">
                    <Sparkles className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                <Package className="h-4 w-4 text-blue-400" />
                <span className="text-blue-300 font-medium">Our Services</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Service</span>
              </h2>
              
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Select from custom design, rental, or purchase options to fit your needs and budget perfectly.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                <TabsTrigger value="custom" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Custom Design</TabsTrigger>
                <TabsTrigger value="rental" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Rental Service</TabsTrigger>
                <TabsTrigger value="purchase" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">Purchase</TabsTrigger>
              </TabsList>

              {services.map((service, index) => (
                <TabsContent key={service.id} value={index === 0 ? "custom" : index === 1 ? "rental" : "purchase"}>
                  <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm overflow-hidden">
                    {/* Animated Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`} />
                    <div className="relative">
                      <CardContent className="p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                          <div className="space-y-6">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} border border-gray-600/50`}>
                                <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                              </div>
                              <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                                <p className="text-lg text-gray-400 mt-2">
                                  {renderDescription(service.description)}
                                </p>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <h4 className="font-semibold text-white text-lg">What's Included:</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {service.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                                    <CheckCircle className={`h-4 w-4 ${service.iconColor} mr-3 flex-shrink-0`} />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                              <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                  <span className="font-semibold text-gray-300">Timeline:</span>
                                  <span className="text-white font-semibold">{service.timeline}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="font-semibold text-gray-300">Pricing:</span>
                                  <span className={`${service.iconColor} font-bold text-xl`}>{service.price}</span>
                                </div>
                              </div>
                            </div>
                            
                            <Button 
                              size="lg" 
                              className={`w-full bg-gradient-to-r ${service.gradient.replace('/20', '')} hover:scale-105 transition-all duration-300 text-white border-0 shadow-lg group`} 
                              asChild
                            >
                              <Link
                                href={`https://wa.me/+919842222467?text=Hi! I'm interested in ${service.title}.`}
                                target="_blank"
                              >
                                <span className="mr-2">Get Started</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Explore our extensive collection of props and costumes across various categories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {propCategories.map((category, index) => (
                <Card
                  key={category.id}
                  className={`group relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 200 + 1200}ms`,
                  }}
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm">
                    
                    {/* Image Container */}
                    <div className="relative h-64 md:h-72 overflow-hidden rounded-t-lg">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold border border-purple-500/30">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{category.price}</span>
                          <span className="text-sm line-through opacity-60">{category.originalPrice}</span>
                        </div>
                      </div>
                      
                      {/* Popular Badge */}
                      {category.popular && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-orange-500/90 to-amber-500/90 text-white backdrop-blur-sm border-orange-400/30">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            Popular
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    {/* Card Content */}
                    <CardContent className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                        {category.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                        {renderDescription(category.description)}
                      </p>
                      
                      {/* Items Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-all duration-300">
                            <Star className={`h-3 w-3 ${category.iconColor} mr-2 flex-shrink-0`} />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Action Button */}
                      <Button
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg transition-all duration-300 hover:scale-105 group"
                        asChild
                      >
                        <Link
                          href={`https://wa.me/+919842222467?text=Hi! I'm interested in ${category.title}.`}
                          target="_blank"
                        >
                          <span className="mr-2">View Collection</span>
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

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Our Design <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                From initial consultation to final delivery, we ensure every step exceeds your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className={`text-center p-8 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 200 + 1800}ms` }}
                >
                  <div className={`relative h-20 w-20 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center mx-auto mb-6 border-2 border-gray-600/50 group-hover:scale-110 transition-all duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {renderDescription(step.description)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Card className={`relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-purple-900/20 to-pink-900/20 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-2000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-600/10 animate-gradient-x" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600" />
              
              <CardContent className="relative p-12 md:p-16 text-center">
                <div className="max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                    <Globe className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-purple-300 font-medium">Ready to Create?</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    Create Something <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Amazing</span>
                  </h2>
                  
                  <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
                    Let's bring your **creative vision** to life with custom props and costumes that will make your
                    performance **unforgettable** and leave lasting impressions.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 group border-0 text-lg" 
                      asChild
                    >
                      <Link href="https://wa.me/+919842222467?text=Hi! I need custom props and costumes." target="_blank">
                        <MessageCircle className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                        Start Your Project
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
