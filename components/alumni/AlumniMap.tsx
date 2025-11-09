"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Users } from "lucide-react"
import type { AlumniProfile } from "./types"

interface AlumniMapProps {
  alumni: AlumniProfile[]
}

export function AlumniMap({ alumni }: AlumniMapProps) {
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniProfile | null>(null)
  
  // Filter alumni with valid coordinates
  const alumniWithCoordinates = alumni.filter(
    (a) => a.latitude && a.longitude
  )

  // Group alumni by location
  const locationGroups = alumniWithCoordinates.reduce((acc, alumnus) => {
    const key = `${alumnus.latitude},${alumnus.longitude}`
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(alumnus)
    return acc
  }, {} as Record<string, AlumniProfile[]>)

  return (
    <section className="bg-black py-20 dark:bg-white">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/60 dark:text-black/60">
            Global Presence
          </p>
          <h2 className="mb-6 text-4xl font-black text-white dark:text-black md:text-5xl">
            Alumni Around the World
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80 dark:text-black/80">
            Our alumni are making an impact across {Object.keys(locationGroups).length} locations worldwide,
            spreading the Footloose legacy of excellence and artistry.
          </p>
        </motion.div>

        {/* Map Container - Placeholder for interactive map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border-4 border-white dark:border-black"
        >
          {/* Simple World Map Visualization */}
          <div className="relative aspect-[16/9] bg-gradient-to-br from-gray-900 to-black dark:from-gray-100 dark:to-white">
            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid h-full grid-cols-12 grid-rows-8">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div key={i} className="border border-white dark:border-black" />
                ))}
              </div>
            </div>

            {/* Location Markers */}
            <div className="absolute inset-0">
              {Object.entries(locationGroups).map(([key, group], index) => {
                const [lat, lng] = key.split(",").map(Number)
                // Simple projection (not accurate, just for visual effect)
                const x = ((lng + 180) / 360) * 100
                const y = ((90 - lat) / 180) * 100

                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="absolute"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <button
                      onClick={() => setSelectedAlumni(group[0])}
                      className="group relative -translate-x-1/2 -translate-y-1/2"
                    >
                      {/* Ping Animation */}
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75 dark:bg-black" />
                      
                      {/* Marker */}
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-xl transition-transform group-hover:scale-125 dark:bg-black dark:text-white">
                        <MapPin className="h-4 w-4" />
                      </div>

                      {/* Count Badge */}
                      {group.length > 1 && (
                        <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                          {group.length}
                        </div>
                      )}

                      {/* Tooltip */}
                      <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-2 text-sm font-bold text-black opacity-0 shadow-xl transition-opacity group-hover:opacity-100 dark:bg-black dark:text-white">
                        {group[0].location}
                        {group.length > 1 && ` (${group.length} alumni)`}
                      </div>
                    </button>
                  </motion.div>
                )
              })}
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-4">
              <div className="rounded-2xl border-2 border-white bg-black/80 px-6 py-3 backdrop-blur-sm dark:border-black dark:bg-white/80">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-white dark:text-black" />
                  <div>
                    <p className="text-2xl font-black text-white dark:text-black">
                      {alumniWithCoordinates.length}
                    </p>
                    <p className="text-xs text-white/70 dark:text-black/70">Alumni Mapped</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-white bg-black/80 px-6 py-3 backdrop-blur-sm dark:border-black dark:bg-white/80">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-white dark:text-black" />
                  <div>
                    <p className="text-2xl font-black text-white dark:text-black">
                      {Object.keys(locationGroups).length}
                    </p>
                    <p className="text-xs text-white/70 dark:text-black/70">Global Locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Note */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="rounded-2xl border-2 border-dashed border-white/50 bg-black/50 px-8 py-6 backdrop-blur-sm dark:border-black/50 dark:bg-white/50">
              <MapPin className="mx-auto mb-3 h-12 w-12 text-white dark:text-black" />
              <p className="text-sm font-bold text-white dark:text-black">
                Interactive Map with Leaflet/Mapbox
              </p>
              <p className="mt-2 text-xs text-white/70 dark:text-black/70">
                Connect with alumni across the globe
              </p>
            </div>
          </div>
        </motion.div>

        {/* Location List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(locationGroups).map(([key, group]) => (
            <div
              key={key}
              className="rounded-2xl border-2 border-white bg-white/5 p-4 backdrop-blur-sm dark:border-black dark:bg-black/5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-white dark:text-black">{group[0].location}</p>
                  <p className="text-sm text-white/60 dark:text-black/60">
                    {group.length} {group.length === 1 ? "alumnus" : "alumni"}
                  </p>
                </div>
                <MapPin className="h-5 w-5 text-white dark:text-black" />
              </div>
              {group.length <= 3 && (
                <div className="mt-3 space-y-1">
                  {group.map((alumnus) => (
                    <p key={alumnus.id} className="text-xs text-white/70 dark:text-black/70">
                      • {alumnus.full_name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
