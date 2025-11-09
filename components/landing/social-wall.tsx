"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Youtube, Play, Heart, MessageCircle, ExternalLink } from "lucide-react"
import Image from "next/image"

const socialPosts = [
  {
    platform: "instagram",
    type: "reel",
    thumbnail: "/api/placeholder/400/600",
    likes: "2.4K",
    comments: "156",
    caption: "Behind the scenes of our latest Bharatanatyam production! 🎭✨",
    author: "@edwinsdance",
  },
  {
    platform: "youtube",
    type: "video",
    thumbnail: "/api/placeholder/400/300",
    views: "15K",
    title: "Classical Fusion Choreography Workshop Highlights",
    duration: "3:45",
  },
  {
    platform: "instagram",
    type: "post",
    thumbnail: "/api/placeholder/400/400",
    likes: "3.8K",
    comments: "248",
    caption: "Stunning costume reveal for upcoming Ramayana production 👑",
    author: "@edwinsdance",
  },
  {
    platform: "youtube",
    type: "video",
    thumbnail: "/api/placeholder/400/300",
    views: "22K",
    title: "30 Years of Dance Excellence - Anniversary Special",
    duration: "8:12",
  },
  {
    platform: "instagram",
    type: "reel",
    thumbnail: "/api/placeholder/400/600",
    likes: "5.2K",
    comments: "312",
    caption: "Contemporary dance meets traditional artistry 💫",
    author: "@edwinsdance",
  },
  {
    platform: "youtube",
    type: "video",
    thumbnail: "/api/placeholder/400/300",
    views: "18K",
    title: "CHAIR-CO-CISE: Corporate Wellness Revolution",
    duration: "5:30",
  },
]

export function SocialWall() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!scrollRef.current) return

    let scrollAmount = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      if (scrollRef.current) {
        scrollAmount += scrollSpeed
        if (scrollAmount >= scrollRef.current.scrollWidth / 2) {
          scrollAmount = 0
        }
        scrollRef.current.scrollLeft = scrollAmount
      }
      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Live From Our
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Social Stage
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Follow our journey on Instagram and YouTube for daily inspiration
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://instagram.com/edwinsdance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <Instagram className="h-5 w-5" />
              Follow on Instagram
            </a>
            <a
              href="https://youtube.com/@edwinsdance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <Youtube className="h-5 w-5" />
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling Feed */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Duplicate posts for seamless loop */}
          {[...socialPosts, ...socialPosts].map((post, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="group relative overflow-hidden bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="relative">
                  {/* Thumbnail */}
                  <div className="relative h-96 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
                    
                    {/* Platform Icon */}
                    <div className="absolute top-4 right-4 z-20">
                      {post.platform === "instagram" ? (
                        <Badge className="bg-gradient-to-r from-pink-600 to-purple-600 text-white border-0">
                          <Instagram className="h-4 w-4 mr-1" />
                          Instagram
                        </Badge>
                      ) : (
                        <Badge className="bg-gradient-to-r from-red-600 to-pink-600 text-white border-0">
                          <Youtube className="h-4 w-4 mr-1" />
                          YouTube
                        </Badge>
                      )}
                    </div>

                    {/* Play Button Overlay */}
                    {(post.type === "reel" || post.type === "video") && (
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-gray-900/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                          <Play className="h-8 w-8 text-purple-600 dark:text-purple-400 fill-current" />
                        </div>
                      </div>
                    )}

                    {/* Duration Badge for Videos */}
                    {post.type === "video" && "duration" in post && (
                      <Badge className="absolute bottom-4 right-4 z-20 bg-black/80 text-white border-0">
                        {post.duration}
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <CardContent className="p-4">
                    {post.platform === "instagram" && "caption" in post ? (
                      <>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                          {post.caption}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              {post.comments}
                            </span>
                          </div>
                          <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold">
                            {post.author}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                          {"title" in post && post.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span>{"views" in post && `${post.views} views`}</span>
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </>
                    )}
                  </CardContent>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-white text-center p-6">
                    <Play className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-semibold">Click to View</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
