"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ContactLocation } from "./types"

interface LocationCardsProps {
  locations: ContactLocation[]
}

export function LocationCards({ locations }: LocationCardsProps) {
  return (
    <section id="locations" className="bg-white py-20 dark:bg-black">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
            Find Us
          </p>
          <h2 className="mb-6 text-4xl font-black text-black dark:text-white md:text-5xl">
            Our Locations
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Visit us at either of our branches in Coimbatore. Walk-ins welcome during business
            hours.
          </p>
        </motion.div>

        {/* Location Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="group h-full overflow-hidden border-2 border-black transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <CardContent className="space-y-6 p-8">
                  {/* Header with Badge */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="mb-2 text-2xl font-black text-black dark:text-white">
                        {location.name}
                      </h3>
                      {index === 0 && (
                        <Badge className="bg-black text-white dark:bg-white dark:text-black">
                          Main Branch
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="rounded-full border-2 border-black bg-white p-3 dark:border-white dark:bg-black">
                        <MapPin className="h-5 w-5 text-black dark:text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-bold text-black dark:text-white">Address</p>
                      <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                        {location.address}
                      </p>
                      <motion.a
                        href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center text-sm font-bold text-black hover:underline dark:text-white"
                        whileHover={{ x: 5 }}
                      >
                        Get Directions →
                      </motion.a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="rounded-full border-2 border-black bg-white p-3 dark:border-white dark:bg-black">
                        <Phone className="h-5 w-5 text-black dark:text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-bold text-black dark:text-white">Phone</p>
                      <motion.a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="text-sm font-mono text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {location.phone}
                      </motion.a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="rounded-full border-2 border-black bg-white p-3 dark:border-white dark:bg-black">
                        <Mail className="h-5 w-5 text-black dark:text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-bold text-black dark:text-white">Email</p>
                      <motion.a
                        href={`mailto:${location.email}`}
                        className="text-sm text-black/70 hover:text-black hover:underline dark:text-white/70 dark:hover:text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {location.email}
                      </motion.a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="rounded-full border-2 border-black bg-white p-3 dark:border-white dark:bg-black">
                        <Clock className="h-5 w-5 text-black dark:text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-bold text-black dark:text-white">
                        Working Hours
                      </p>
                      <div className="space-y-1 text-sm text-black/70 dark:text-white/70">
                        <p>{location.workingHours.weekdays}</p>
                        <p>{location.workingHours.weekends}</p>
                        {location.workingHours.closed && (
                          <p className="font-medium text-red-600 dark:text-red-400">
                            {location.workingHours.closed}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
