"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { costumeBackstageImages } from "./data"

export function CostumeBackstage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState<"all" | "costume" | "backstage">("all")

  const filteredImages = costumeBackstageImages.filter((img) => {
    if (filter === "costume") return img.isCostume
    if (filter === "backstage") return img.isBackstage
    return true
  })

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-24">
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
            Costume & Backstage Moments
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Behind the scenes magic — craftsmanship, preparation, and team spirit
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs value={filter} onValueChange={(v) => setFilter(v as any)} className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-3 gap-2 bg-transparent">
              <TabsTrigger
                value="all"
                className="rounded-full border-2 border-gray-200 data-[state=active]:border-black data-[state=active]:bg-black data-[state=active]:text-white dark:border-gray-800 dark:data-[state=active]:border-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="costume"
                className="rounded-full border-2 border-gray-200 data-[state=active]:border-black data-[state=active]:bg-black data-[state=active]:text-white dark:border-gray-800 dark:data-[state=active]:border-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                Costumes
              </TabsTrigger>
              <TabsTrigger
                value="backstage"
                className="rounded-full border-2 border-gray-200 data-[state=active]:border-black data-[state=active]:bg-black data-[state=active]:text-white dark:border-gray-800 dark:data-[state=active]:border-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                Backstage
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Image Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedImage(image.url)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                <Badge className="mb-2 bg-white/90 text-black backdrop-blur">
                  {image.isCostume ? "Costume" : "Backstage"}
                </Badge>
                <h4 className="text-sm font-bold text-white">{image.title}</h4>
                {image.description && (
                  <p className="text-xs text-gray-300">{image.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl border-none bg-transparent p-0">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              {selectedImage && (
                <Image src={selectedImage} alt="Selected image" fill className="object-contain" />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
