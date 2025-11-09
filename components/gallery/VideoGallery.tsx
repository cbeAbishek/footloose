"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Play, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { videosData, categoryLabels } from "./data"
import type { GalleryCategory } from "./types"

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [category, setCategory] = useState<GalleryCategory | "all">("all")

  const filteredVideos =
    category === "all" ? videosData : videosData.filter((v) => v.category === category)

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-black text-black dark:text-white sm:text-4xl">
            Video Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Watch our performances come alive through cinematic highlights and reels
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs value={category} onValueChange={(v) => setCategory(v as any)}>
            <TabsList className="grid w-full grid-cols-2 gap-2 bg-transparent sm:grid-cols-4 lg:grid-cols-7">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-full border-2 border-gray-200 data-[state=active]:border-black data-[state=active]:bg-black data-[state=active]:text-white dark:border-gray-800 dark:data-[state=active]:border-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Video Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedVideo(video.url)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur transition-transform group-hover:scale-110">
                    <Play className="h-8 w-8 fill-black text-black" />
                  </div>
                </div>

                {/* Duration Badge */}
                {video.duration && (
                  <div className="absolute bottom-3 right-3">
                    <Badge className="bg-black/80 text-white backdrop-blur">
                      <Clock className="mr-1 h-3 w-3" />
                      {video.duration}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <Badge className="mb-3 capitalize">
                  {categoryLabels[video.category as keyof typeof categoryLabels]}
                </Badge>
                <h3 className="mb-2 text-lg font-black text-black dark:text-white">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl border-none bg-black p-0">
            <div className="relative aspect-video w-full">
              {selectedVideo && (
                <iframe
                  src={selectedVideo}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
