"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { AlumniProfile } from "./types"

interface FeaturedAlumniProps {
  alumni: AlumniProfile[]
}

export function FeaturedAlumni({ alumni }: FeaturedAlumniProps) {
  const featuredAlumni = alumni.filter((a) => a.featured)

  return (
    <section className="bg-white py-20 dark:bg-black">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
            Spotlight
          </p>
          <h2 className="mb-6 text-4xl font-black text-black dark:text-white md:text-5xl lg:text-6xl">
            Featured Alumni Highlights
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Celebrating exceptional alumni who are making waves in dance, choreography, wellness, and creative industries worldwide.
          </p>
        </motion.div>

        {/* Featured Alumni Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredAlumni.map((alumni, index) => (
            <motion.div
              key={alumni.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group h-full overflow-hidden border-2 border-black bg-white transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                {/* Profile Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  {alumni.photo_url ? (
                    <>
                      <Image
                        src={alumni.photo_url}
                        alt={alumni.full_name}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                    </>
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                      <motion.p 
                        className="text-6xl font-black text-gray-400 dark:text-gray-600"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        {alumni.full_name.split(" ").map((n) => n[0]).join("")}
                      </motion.p>
                    </div>
                  )}
                  
                  {/* Verified Badge with Pulse */}
                  {alumni.verified && (
                    <motion.div 
                      className="absolute right-4 top-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <Badge className="relative bg-black text-white dark:bg-white dark:text-black">
                        <motion.span
                          className="absolute inset-0 rounded-full bg-green-500"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="relative z-10">✓ Verified</span>
                      </Badge>
                    </motion.div>
                  )}

                  {/* Enhanced Overlay on Hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-white/80 dark:via-white/40"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <CardContent className="space-y-4 p-6">
                  {/* Name */}
                  <div>
                    <h3 className="mb-1 text-2xl font-black text-black dark:text-white">
                      {alumni.full_name}
                    </h3>
                  </div>

                  {/* Bio */}
                  <p className="line-clamp-3 text-sm leading-relaxed text-black/70 dark:text-white/70">
                    {alumni.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
