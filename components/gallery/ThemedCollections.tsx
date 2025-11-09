"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { PerformanceStyle } from "./types"
import { performanceAlbumsData } from "./data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Music, Sparkles, Baby, Zap, GraduationCap } from "lucide-react"

const styleIcons: Record<PerformanceStyle, React.ElementType> = {
  western: Music,
  bollywood: Sparkles,
  "chair-co-cise": GraduationCap,
  kids: Baby,
  led: Zap,
  classical: Music,
}

export function ThemedCollections() {
  const [selectedStyle, setSelectedStyle] = useState<PerformanceStyle | "all">("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Filter albums by style
  const filteredAlbums = performanceAlbumsData.filter(
    (album) => selectedStyle === "all" || album.style === selectedStyle
  )

  // Get all images from filtered albums
  const images = filteredAlbums.flatMap((album) => 
    album.images.map((image) => ({
      ...image,
      style: album.style,
    }))
  )

  const styles: Array<{ value: PerformanceStyle | "all"; label: string; icon: React.ElementType }> = [
    { value: "all", label: "All Styles", icon: Sparkles },
    { value: "western", label: "Western", icon: Music },
    { value: "bollywood", label: "Bollywood", icon: Sparkles },
    { value: "chair-co-cise", label: "Chair-Co-Cise", icon: GraduationCap },
    { value: "kids", label: "Kids", icon: Baby },
    { value: "led", label: "LED", icon: Zap },
  ]

  return (
    <section className="bg-white py-16 dark:bg-black sm:py-24">
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
            Themed Collections
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Explore our performances organized by dance styles and themes
          </p>
        </motion.div>

        {/* Style Tabs */}
        <Tabs
          value={selectedStyle}
          onValueChange={(value) => setSelectedStyle(value as PerformanceStyle | "all")}
          className="w-full"
        >
          <TabsList className="mb-8 flex h-auto flex-wrap justify-center gap-2 bg-transparent">
            {styles.map(({ value, label, icon: Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="flex items-center gap-2 rounded-full border-2 border-black bg-white px-6 py-3 text-sm font-bold text-black transition-all data-[state=active]:bg-black data-[state=active]:text-white dark:border-white dark:bg-black dark:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                <Icon className="h-4 w-4" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedStyle} className="mt-0">
            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-6 text-center"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing <span className="font-bold">{images.length}</span> images
              </p>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
            >
              {images.map((image, index) => {
                const StyleIcon = image.style ? styleIcons[image.style] : Sparkles
                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card
                      className="group cursor-pointer overflow-hidden border-2 border-gray-200 bg-white transition-all duration-300 hover:border-black hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white"
                      onClick={() => setSelectedImage(image.url)}
                    >
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={image.url}
                            alt={image.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <StyleIcon className="h-8 w-8 text-white" />
                            {image.style && (
                              <Badge className="bg-white/90 text-black backdrop-blur capitalize">
                                {image.style.replace(/-/g, " ")}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Empty State */}
            {images.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="py-20 text-center"
              >
                <Sparkles className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  No images found for this style
                </p>
              </motion.div>
            )}
          </TabsContent>
        </Tabs>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl border-2 border-black bg-white p-2 dark:border-white dark:bg-black">
            {selectedImage && (
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedImage}
                  alt="Full size image"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
