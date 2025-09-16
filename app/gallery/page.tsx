"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, Play, Eye, Heart, Share2, Filter, Star, ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'videos' | 'images' | 'featured'>('all')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const galleryItems = [
    {
      id: 1,
      title: "Dinosaur Adventure Performance",
      description: "An exciting **prehistoric journey** that brings children face-to-face with life-sized dinosaurs through **interactive storytelling** and dynamic dance choreography.",
      image: "/assets/1.jpg",
      isVideo: false,
      important: true
    },
    {
      id: 2,
      title: "Avengers Superhero Show",
      description: "**Marvel heroes come alive** in this action-packed performance featuring **custom choreography** and authentic costumes that inspire courage and teamwork.",
      image: "/assets/2.jpg",
      isVideo: false,
      important: true
    },
    {
      id: 3,
      title: "Snow White Fairy Tale",
      description: "A **magical fairy tale experience** with enchanting dance sequences, beautiful costumes, and **immersive storytelling** that captivates audiences of all ages.",
      image: "/assets/3.jpg",
      isVideo: false,
      important: false
    },
    {
      id: 4,
      title: "Professional Dance Class",
      description: "**Structured learning environment** offering comprehensive dance training with **professional techniques** and personalized attention for skill development.",
      image: "/assets/4.jpg",
      isVideo: false,
      important: false
    },
    {
      id: 5,
      title: "Edwin's AI Futuristic Show",
      description: "A **cutting-edge performance** blending technology with dance, featuring **LED costumes** and futuristic choreography that pushes creative boundaries.",
      image: "/assets/5.jpg",
      isVideo: true,
      important: true
    },
    {
      id: 6,
      title: "Dance Silhouettes",
      description: "**Artistic photography session** capturing the **grace and elegance** of dance through dramatic lighting and professional composition techniques.",
      image: "/assets/6.jpg",
      isVideo: false,
      important: false
    },
    {
      id: 7,
      title: "ChaircoCISE Fitness Session",
      description: "Our signature **fitness program** combining dance movements with **chair-based exercises** for a unique and accessible workout experience.",
      image: "/assets/7.jpg",
      isVideo: true,
      important: true
    },
    {
      id: 8,
      title: "Cultural Dance Workshop",
      description: "**Traditional dance forms** taught through **interactive workshops** that celebrate cultural heritage and promote artistic expression.",
      image: "/assets/8.jpg",
      isVideo: false,
      important: false
    },
    {
      id: 9,
      title: "Kids Birthday Party Magic",
      description: "**Customized entertainment** featuring beloved characters and **interactive games** that create unforgettable birthday memories.",
      image: "/assets/9.jpg",
      isVideo: false,
      important: false
    },
    {
      id: 10,
      title: "Corporate Team Building",
      description: "**Professional workshops** designed to enhance **team collaboration** through creative movement and synchronized choreography.",
      image: "/assets/10.jpg",
      isVideo: true,
      important: false
    },
    {
      id: 11,
      title: "Wedding Dance Choreography",
      description: "**Romantic dance sequences** crafted for special occasions with **personalized choreography** that tells your unique love story.",
      image: "/assets/11.jpg",
      isVideo: false,
      important: true
    },
    {
      id: 12,
      title: "Theatre Performance",
      description: "**Full-scale productions** featuring **dramatic storytelling** through dance, music, and theatrical elements for immersive experiences.",
      image: "/assets/12.jpg",
      isVideo: true,
      important: false
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => {
        switch(activeFilter) {
          case 'videos': return item.isVideo
          case 'images': return !item.isVideo
          case 'featured': return item.important
          default: return true
        }
      })

  // Function to render description with bold keywords
  const renderDescription = (description: string) => {
    const parts = description.split(/(\*\*.*?\*\*)/)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="text-purple-300 font-semibold">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-teal-900/30 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-yellow-900/20 animate-gradient-shift-reverse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),transparent_70%)] animate-pulse-slow"></div>
        
        {/* Interactive gradient blob */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl transition-all duration-500 ease-out animate-float"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-xl animate-float-orb"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 12}%`,
              background: `radial-gradient(circle, ${
                ['rgba(139, 92, 246, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(16, 185, 129, 0.3)', 
                 'rgba(245, 101, 101, 0.3)', 'rgba(251, 191, 36, 0.3)', 'rgba(217, 70, 239, 0.3)'][i]
              }, transparent)`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-30 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300 animate-glow">
                <Eye className="h-3 w-3 mr-1 animate-pulse" />
                Visual Portfolio
              </Badge>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-gradient-text">
                Our Gallery
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
                Dive into our collection of{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                  magical performances
                </span>
                {", "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  dance masterclasses
                </span>
                {", and "}
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent font-semibold">
                  unforgettable moments
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group hover:scale-105"
                >
                  <Play className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Watch Highlights
                </Button>
                {/* <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 group"
                >
                  <Filter className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                  Filter Gallery
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        {/* <section className="py-8 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                onClick={() => setActiveFilter('all')}
                variant={activeFilter === 'all' ? "default" : "outline"}
                className={`rounded-full transition-all duration-300 hover:scale-105 ${
                  activeFilter === 'all'
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-purple-500/25"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500"
                }`}
              >
                All Gallery
              </Button>
              <Button
                onClick={() => setActiveFilter('videos')}
                variant={activeFilter === 'videos' ? "default" : "outline"}
                className={`rounded-full transition-all duration-300 hover:scale-105 ${
                  activeFilter === 'videos'
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-purple-500/25"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500"
                }`}
              >
                <Play className="h-4 w-4 mr-2" />
                Videos
              </Button>
              <Button
                onClick={() => setActiveFilter('images')}
                variant={activeFilter === 'images' ? "default" : "outline"}
                className={`rounded-full transition-all duration-300 hover:scale-105 ${
                  activeFilter === 'images'
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-purple-500/25"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500"
                }`}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Images
              </Button>
              <Button
                onClick={() => setActiveFilter('featured')}
                variant={activeFilter === 'featured' ? "default" : "outline"}
                className={`rounded-full transition-all duration-300 hover:scale-105 ${
                  activeFilter === 'featured'
                    ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg hover:shadow-yellow-500/25"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500"
                }`}
              >
                <Star className="h-4 w-4 mr-2 fill-current" />
                Featured
              </Button>
            </div>
          </div>
        </section> */}

        {/* Gallery Grid */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className={`group overflow-hidden bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer animate-fade-in-up break-inside-avoid mb-6 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${
                    item.important ? 'aspect-[4/5]' : 'aspect-[4/3]'
                  }`}>
                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow" />
                    <div className="absolute inset-[2px] rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 group-hover:rotate-1"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Video play button */}
                      {/* {item.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                            <Button 
                              size="lg" 
                              className="rounded-full w-16 h-16 p-0 bg-white/90 hover:bg-white text-black hover:scale-110 transition-all duration-300 relative z-10"
                            >
                              <Play className="h-6 w-6 ml-1" />
                            </Button>
                          </div>
                        </div>
                      )} */}
                      
                      {/* Important badge */}
                      {item.important && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-500/90 text-black border-yellow-400/50 backdrop-blur-sm hover:bg-yellow-500 transition-colors duration-300 font-semibold">
                            ⭐ Featured
                          </Badge>
                        </div>
                      )}
                      
                      {/* ID badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gray-900/80 text-white border-gray-600/50 backdrop-blur-sm font-mono text-xs">
                          #{item.id.toString().padStart(2, '0')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <CardContent className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-4">
                      {renderDescription(item.description)}
                    </p>

                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Our Impact in{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Numbers
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Creating magical memories one performance at a time
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Performances", icon: "🎭" },
                { value: "10,000+", label: "Happy Audience", icon: "👥" },
                { value: "50+", label: "Different Themes", icon: "🎨" },
                { value: "30+", label: "Years Experience", icon: "⭐" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="group hover:scale-105 transition-all duration-500 cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Showcase */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Featured{" "}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Videos
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Watch our most captivating performances in action
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
              {
                youtubeId: "qifHoEf-j0I", // replace with real YouTube ID
                title: "Avengers Performance Highlights",
                duration: "3:45",
                views: "15.2k"
              },
              {
                youtubeId: "YmXCwqw4Zt8", // replace with real YouTube ID
                title: "Dinosaur Adventure Best Moments",
                duration: "2:30",
                views: "12.8k"
              }
              ].map((video) => (
              <div
                key={video.youtubeId}
                className="aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl relative"
              >
                {/* Responsive YouTube iframe */}
                <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                />

                {/* Overlay info */}
                <div className="absolute bottom-4 left-4 z-10 text-white">
                <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <span>{video.duration}</span>
                  <span>•</span>
                  <span>{video.views} views</span>
                </div>
                </div>

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Want to Be{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Featured?
              </span>
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Book your magical performance today and become part of our amazing gallery of unforgettable moments that touch hearts and create lasting memories
            </p>
            
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-shift-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        @keyframes float-orb {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        @keyframes border-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.8); }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
          background-size: 200% 200%;
        }
        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 10s ease infinite;
          background-size: 200% 200%;
        }
        .animate-float-orb {
          animation: float-orb 12s ease-in-out infinite;
        }
        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-gradient-text {
          animation: gradient-text 4s ease infinite;
          background-size: 200% auto;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
