"use client"

import { motion } from "framer-motion"

interface InteractiveMapProps {
  locations: Array<{
    name: string
    coordinates: {
      lat: number
      lng: number
    }
  }>
}

export function InteractiveMap({ locations }: InteractiveMapProps) {
  // Calculate center point between locations
  const centerLat =
    locations.reduce((sum, loc) => sum + loc.coordinates.lat, 0) / locations.length
  const centerLng =
    locations.reduce((sum, loc) => sum + loc.coordinates.lng, 0) / locations.length

  // Create markers string for multiple locations
  const markers = locations
    .map(
      (loc, index) =>
        `&markers=color:${index === 0 ? "red" : "blue"}%7Clabel:${index + 1}%7C${loc.coordinates.lat},${loc.coordinates.lng}`
    )
    .join("")

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-950">
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
            Navigate
          </p>
          <h2 className="mb-6 text-4xl font-black text-black dark:text-white md:text-5xl">
            Find Your Way
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Both branches are easily accessible with ample parking facilities.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border-2 border-black shadow-lg dark:border-white"
        >
          <div className="relative aspect-video w-full bg-gray-200 dark:bg-gray-800">
            {/* Google Maps Embed - FOOTLOOSE Edwin's Dance School */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.376021798665!2d76.952635!3d11.010388599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591e6b163c17%3A0x4791de6e4e43318d!2sFOOTLOOSE%20-%20Edwin&#39;s%20Dance%20School!5e0!3m2!1sen!2sin!4v1762709986206!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Footloose Edwin's Dance Company Locations"
            />
          </div>
        </motion.div>

        {/* Map Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-black/70 dark:text-white/70"
        >
          {locations.map((location, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`h-3 w-3 rounded-full ${index === 0 ? "bg-red-500" : "bg-blue-500"}`}
              />
              <span className="font-medium">{location.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href={`https://maps.app.goo.gl/Rt87oq1Vnfki3gCD7`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border-2 border-black bg-white px-6 py-2 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Directions to R.S. Puram
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
