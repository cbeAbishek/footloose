"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Camera, Music, Palette, X } from "lucide-react"

export function BehindTheStageSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const mediaItems = [
    {
      type: "video",
      title: "Rehearsal Sessions",
      category: "Practice",
      duration: "2:45",
      thumbnail: "🎭",
      icon: Play,
      color: "from-red-600 to-rose-600",
    },
    {
      type: "image",
      title: "Costume Design",
      category: "Creation",
      thumbnail: "👗",
      icon: Palette,
      color: "from-pink-600 to-fuchsia-600",
    },
    {
      type: "video",
      title: "Choreography Planning",
      category: "Creative",
      duration: "3:20",
      thumbnail: "💃",
      icon: Music,
      color: "from-purple-600 to-violet-600",
    },
    {
      type: "image",
      title: "Props Creation",
      category: "Craft",
      thumbnail: "🎨",
      icon: Camera,
      color: "from-blue-600 to-cyan-600",
    },
    {
      type: "video",
      title: "Stage Setup",
      category: "Production",
      duration: "1:55",
      thumbnail: "🎪",
      icon: Play,
      color: "from-teal-600 to-emerald-600",
    },
    {
      type: "image",
      title: "Makeup & Styling",
      category: "Beauty",
      thumbnail: "💄",
      icon: Palette,
      color: "from-orange-600 to-amber-600",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-400/20 dark:to-blue-400/20 border border-purple-600/20 dark:border-purple-400/30 rounded-full mb-6">
            <Camera className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Behind The Scenes
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">
              The Magic
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Behind The Stage
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Witness the creativity, dedication, and artistry that goes into every performance
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mediaItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden cursor-pointer bg-gray-50 dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedMedia(index)}
              >
                {/* Media Thumbnail */}
                <div className={`relative h-64 bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Emoji Icon */}
                  <div className="text-8xl relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {item.thumbnail}
                  </div>

                  {/* Play Button Overlay for Videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="h-8 w-8 text-gray-900 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}

                  {/* Duration Badge for Videos */}
                  {item.type === "video" && item.duration && (
                    <Badge className="absolute top-4 right-4 bg-black/70 text-white border-0">
                      {item.duration}
                    </Badge>
                  )}

                  {/* Category Badge */}
                  <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${item.color} text-white border-0`}>
                    {item.category}
                  </Badge>

                  {/* Animated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Camera className="mr-2 h-5 w-5" />
            View Full Gallery
          </Button>
        </div>
      </div>

      {/* Modal Overlay (Simple version - can be enhanced) */}
      {selectedMedia !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <Card className="bg-gray-900 border-gray-800">
              <div className={`h-96 bg-gradient-to-br ${mediaItems[selectedMedia].color} flex items-center justify-center`}>
                <div className="text-9xl">{mediaItems[selectedMedia].thumbnail}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {mediaItems[selectedMedia].title}
                </h3>
                <p className="text-gray-400">
                  {mediaItems[selectedMedia].category} • {mediaItems[selectedMedia].type === "video" ? "Video" : "Image"}
                </p>
              </div>
            </Card>
          </div>
        </div>
      )}
    </section>
  )
}
