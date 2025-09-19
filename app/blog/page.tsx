"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight, BookOpen, Mail, Send, Star, TrendingUp, Filter, Search, Sparkles, Heart, Eye, MessageCircle, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function BlogPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)
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

  const blogPosts = [
    {
      id: 1,
      title: "The Magic Behind Our Themed Performances",
      excerpt: "Discover how we create **immersive themed experiences** that transport audiences to **different worlds** through **dance**, **costumes**, and **storytelling**.",
      author: "Edwin Rodriguez",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Behind the Scenes",
      image: "/professional-dance-studio-with-dancers-in-colorful.jpg",
      featured: true,
      views: "2.5K",
      likes: "245",
      comments: "32",
      gradient: "from-emerald-600/20 to-teal-600/20",
      iconColor: "text-emerald-400",
    },
    {
      id: 2,
      title: "Why Dance Classes Benefit Children's Development",
      excerpt: "Learn about the **physical**, **mental**, and **social benefits** that **dance education** provides for **children** of all ages.",
      author: "Sarah Martinez",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Education",
      image: "/children-dancing-in-dinosaur-costumes-colorful-sta.jpg",
      featured: false,
      views: "1.8K",
      likes: "189",
      comments: "24",
      gradient: "from-purple-600/20 to-pink-600/20",
      iconColor: "text-purple-400",
    },
    {
      id: 3,
      title: "Creating Custom Choreography for Special Events",
      excerpt: "Our process for developing **unique dance routines** tailored to your **event's theme**, **venue**, and **audience**.",
      author: "Edwin Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Choreography",
      image: "/dancers-in-superhero-costumes-action-poses.jpg",
      featured: false,
      views: "1.2K",
      likes: "156",
      comments: "18",
      gradient: "from-blue-600/20 to-cyan-600/20",
      iconColor: "text-blue-400",
    },
    {
      id: 4,
      title: "The Evolution of Dance: From Classical to Contemporary",
      excerpt: "Explore how **dance has evolved** over the decades and how we incorporate both **traditional** and **modern elements** in our performances.",
      author: "Maria Santos",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Dance History",
      image: "/elegant-fairy-tale-dance-performance-snow-white.jpg",
      featured: false,
      views: "2.1K",
      likes: "203",
      comments: "28",
      gradient: "from-rose-600/20 to-pink-600/20",
      iconColor: "text-rose-400",
    },
    {
      id: 5,
      title: "Technology in Dance: AI and Future Performances",
      excerpt: "How we're using **technology** and **AI** to create **innovative performances** like our **Edwin's AI theme**.",
      author: "Tech Team",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Innovation",
      image: "/futuristic-ai-dance-performance-with-neon-lights.jpg",
      featured: false,
      views: "3.2K",
      likes: "312",
      comments: "45",
      gradient: "from-indigo-600/20 to-purple-600/20",
      iconColor: "text-indigo-400",
    },
    {
      id: 6,
      title: "Planning the Perfect Birthday Party Performance",
      excerpt: "Tips and ideas for incorporating **dance performances** into **children's birthday parties** for **maximum fun** and **engagement**.",
      author: "Event Team",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Event Planning",
      image: "/professional-dance-studio-with-dancers-in-colorful.jpg",
      featured: false,
      views: "1.9K",
      likes: "167",
      comments: "22",
      gradient: "from-orange-600/20 to-amber-600/20",
      iconColor: "text-orange-400",
    }
  ]

  const categories = [
    { name: "All", icon: Star, color: "text-emerald-400" },
    { name: "Behind the Scenes", icon: Eye, color: "text-purple-400" },
    { name: "Education", icon: BookOpen, color: "text-blue-400" },
    { name: "Choreography", icon: Sparkles, color: "text-rose-400" },
    { name: "Dance History", icon: Clock, color: "text-amber-400" },
    { name: "Innovation", icon: TrendingUp, color: "text-indigo-400" },
    { name: "Event Planning", icon: Calendar, color: "text-orange-400" }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts.filter(post => !post.featured)
    : blogPosts.filter(post => !post.featured && post.category === selectedCategory)

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
      {hoveredPost && (
        <div
          className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, ${blogPosts.find(p => p.id === hoveredPost)?.gradient.split(' ').map(color => color.replace('/20', '/40')).join(', ')}, transparent)`,
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
                <BookOpen className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Dance Blog</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent leading-tight">
                Dance Stories &<br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Creative Insights</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-400 leading-relaxed">
                {renderDescription("Discover the **magical world of dance** through our stories, **expert tips**, and **behind-the-scenes insights** from the **Footloose Edwin's** team.")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 group border-0" 
                  asChild
                >
                  <Link href="#featured">
                    <TrendingUp className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Featured Stories
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
                    <Filter className="h-5 w-5 mr-2" />
                    Browse Categories
                  </Link>
                </Button>
              </div>

              {/* Blog Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                {[
                  { label: "Articles", value: "50+", icon: BookOpen, color: "text-emerald-400" },
                  { label: "Readers", value: "25K+", icon: Eye, color: "text-purple-400" },
                  { label: "Topics", value: "15+", icon: Star, color: "text-orange-400" },
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

        {/* Featured Post */}
        {featuredPost && (
          <section id="featured" className="py-20 px-4">
            <div className="container mx-auto">
              <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  <Star className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-300 font-medium">Featured Story</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                  Editor's <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Pick</span>
                </h2>
                
                <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                  Our most popular and engaging blog post
                </p>
              </div>
              
              <Card 
                className={`relative overflow-hidden max-w-6xl mx-auto bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl group ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: '1000ms' }}
                onMouseEnter={() => setHoveredPost(featuredPost.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${featuredPost.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm">
                  
                  <div className="lg:flex">
                    <div className="lg:w-1/2 relative aspect-video lg:aspect-auto overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Floating Elements */}
                      <div className="absolute top-6 left-6">
                        <Badge className={`bg-gradient-to-r ${featuredPost.gradient} border-0 text-white font-medium px-3 py-1`}>
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      
                      <div className="absolute bottom-6 right-6 flex gap-2">
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {featuredPost.views}
                        </div>
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm flex items-center gap-1">
                          <Heart className="h-3 w-3 text-red-400" />
                          {featuredPost.likes}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 p-8 lg:p-12">
                      <div className="mb-6">
                        <Badge className={`bg-gradient-to-r ${featuredPost.gradient} border-0 text-white px-3 py-1`}>
                          {featuredPost.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-8 text-lg leading-relaxed">
                        {renderDescription(featuredPost.excerpt)}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-full shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 group border-0" 
                        >
                          <BookOpen className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                          Read Full Story
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="bg-gray-800/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-700/70 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300" 
                        >
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Categories Filter */}
        <section id="categories" className="py-16 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-12 transition-all duration-1000 delay-1200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Browse by <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Category</span>
              </h3>
            </div>
            
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-1400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {categories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    size="lg"
                    className={`group px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category.name
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 shadow-xl hover:shadow-emerald-500/25'
                        : 'bg-gray-900/50 border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/70 backdrop-blur-sm'
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <IconComponent className={`h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300 ${
                      selectedCategory === category.name ? 'text-white' : category.color
                    }`} />
                    {category.name}
                  </Button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                Latest <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Stories</span>
              </h2>
              
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                {selectedCategory === "All" 
                  ? "Insights, tips, and stories from the world of dance"
                  : `Latest articles in ${selectedCategory}`
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className={`group relative overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 200 + 1800}ms`,
                  }}
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-sm">
                    
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`bg-gradient-to-r ${post.gradient} border-0 text-white font-medium px-2 py-1 text-xs`}>
                          {post.category}
                        </Badge>
                      </div>
                      
                      {/* Stats Overlay */}
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.views}
                        </div>
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs flex items-center gap-1">
                          <Heart className="h-3 w-3 text-red-400" />
                          {post.likes}
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      
                      <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3 leading-relaxed">
                        {renderDescription(post.excerpt)}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <MessageCircle className="h-3 w-3" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-emerald-600/80 to-teal-600/80 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 group border-0" 
                      >
                        <BookOpen className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Card className={`relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-purple-900/20 to-pink-900/20 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-2000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-rose-600/10 animate-gradient-x" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600" />
              
              <CardContent className="relative p-12 md:p-16 text-center">
                <div className="max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                    <Mail className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-purple-300 font-medium">Newsletter</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    Stay <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Updated</span>
                  </h2>
                  
                  <p className="text-gray-400 text-xl mb-12 leading-relaxed">
                    {renderDescription("Subscribe to our newsletter for the latest **dance tips**, **performance updates**, and **behind-the-scenes content** delivered to your inbox.")}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 rounded-full border border-gray-600/50 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 backdrop-blur-sm transition-all duration-300"
                    />
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group border-0"
                    >
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Subscribe
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    No spam, unsubscribe at any time. Join 1,000+ dancers and dance enthusiasts.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Card className={`relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-emerald-900/20 to-teal-900/20 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-2200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 animate-gradient-x" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600" />
              
              <CardContent className="relative p-12 md:p-16 text-center">
                <div className="max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-emerald-300 font-medium">Share Your Story</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                    Have a Dance <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Story</span>?
                  </h2>
                  
                  <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
                    {renderDescription("We'd love to feature your **dance journey** or **event experience** on our blog. Share your story with our **community** of **dance enthusiasts**.")}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 group border-0 text-lg" 
                      asChild
                    >
                      <Link href="/contact">
                        <Heart className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                        Share Your Story
                        <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
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
                        Book Performance
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
