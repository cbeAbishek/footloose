"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Image as ImageIcon, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { performanceAlbumsData, categoryLabels } from "./data"
import type { GalleryCategory } from "./types"

export function EventHighlights() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all")

  const filteredAlbums =
    selectedCategory === "all"
      ? performanceAlbumsData
      : performanceAlbumsData.filter((album) => album.category === selectedCategory)

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
            Performance Albums
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Explore our journey through spectacular events and unforgettable performances
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs
            defaultValue="all"
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value as GalleryCategory)}
            className="w-full"
          >
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

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-sm text-gray-600 dark:text-gray-400"
        >
          Showing {filteredAlbums.length} album{filteredAlbums.length !== 1 && "s"}
        </motion.div>

        {/* Albums Grid */}
        {filteredAlbums.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAlbums.map((album, index) => (
              <AlbumCard key={album.id} album={album} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center dark:border-gray-700 dark:bg-gray-900"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No albums found in this category. Check back soon for updates!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function AlbumCard({ album, index }: { album: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/gallery/${album.slug}`}>
        <Card className="group h-full overflow-hidden border-2 border-gray-200 bg-white transition-all duration-500 hover:border-black hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white">
          {/* Cover Image */}
          <div className="relative h-80 overflow-hidden">
            <Image
              src={album.coverImage}
              alt={album.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Category Badge */}
            <div className="absolute left-4 top-4">
              <Badge className="bg-white/90 text-black backdrop-blur capitalize">
                {categoryLabels[album.category as keyof typeof categoryLabels]}
              </Badge>
            </div>

            {/* Image Count */}
            <div className="absolute right-4 top-4">
              <Badge className="bg-black/80 text-white backdrop-blur">
                <ImageIcon className="mr-1 h-3 w-3" />
                {album.imageCount} Photos
              </Badge>
            </div>

            {/* Title & Date */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="mb-2 flex items-center gap-2 text-sm text-gray-300">
                <Calendar className="h-4 w-4" />
                {new Date(album.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <h3 className="text-xl font-black text-white">{album.title}</h3>
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-6">
            <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
              {album.description}
            </p>

            {album.location && (
              <div className="mb-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                {album.location}
              </div>
            )}

            <Button
              variant="ghost"
              className="group/btn w-full justify-between p-0 text-black hover:bg-transparent dark:text-white"
            >
              View Album
              <svg
                className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
