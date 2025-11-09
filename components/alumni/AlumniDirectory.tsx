"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Search, Filter, MapPin, Briefcase, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { AlumniProfile } from "./types"

interface AlumniDirectoryProps {
  alumni: AlumniProfile[]
}

export function AlumniDirectory({ alumni }: AlumniDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedLocation, setSelectedLocation] = useState<string>("all")

  // Extract unique years and locations
  const graduationYears = Array.from(new Set(alumni.map((a) => a.graduation_year)))
    .sort((a, b) => b - a)
  
  const locations = Array.from(new Set(alumni.map((a) => a.location).filter(Boolean)))
    .sort()

  // Filter alumni
  const filteredAlumni = alumni.filter((alumnus) => {
    const matchesSearch =
      alumnus.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumnus.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumnus.dance_specialization?.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesYear = selectedYear === "all" || alumnus.graduation_year.toString() === selectedYear
    const matchesLocation = selectedLocation === "all" || alumnus.location === selectedLocation

    return matchesSearch && matchesYear && matchesLocation
  })

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
            Complete Network
          </p>
          <h2 className="mb-6 text-4xl font-black text-black dark:text-white md:text-5xl">
            Alumni Directory
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Connect with fellow Footloose alumni across the globe. Search by name, year, location, or dance style.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-[1fr_auto_auto]">
            {/* Search with Focus Animation */}
            <motion.div 
              className="relative"
              whileFocus={{ scale: 1.02 }}
            >
              <motion.div
                animate={searchQuery ? { scale: 1.2, color: "#000" } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/40 dark:text-white/40" />
              </motion.div>
              <Input
                type="text"
                placeholder="Search by name, role, or dance style..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 rounded-full border-2 border-black pl-12 text-lg transition-all focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
              />
              {searchQuery && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black p-1 text-white dark:bg-white dark:text-black"
                  onClick={() => setSearchQuery("")}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              )}
            </motion.div>

            {/* Year Filter */}
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="h-14 w-full rounded-full border-2 border-black md:w-48 dark:border-white">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <SelectValue placeholder="All Years" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {graduationYears.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    Class of {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="h-14 w-full rounded-full border-2 border-black md:w-48 dark:border-white">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <SelectValue placeholder="All Locations" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location!}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between text-sm text-black/60 dark:text-white/60">
            <p>
              Showing <span className="font-bold text-black dark:text-white">{filteredAlumni.length}</span> of{" "}
              <span className="font-bold text-black dark:text-white">{alumni.length}</span> alumni
            </p>
            {(searchQuery || selectedYear !== "all" || selectedLocation !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedYear("all")
                  setSelectedLocation("all")
                }}
                className="font-bold text-black hover:underline dark:text-white"
              >
                Clear Filters
              </button>
            )}
          </div>
        </motion.div>

        {/* Alumni Grid */}
        {filteredAlumni.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredAlumni.map((alumnus, index) => (
              <motion.div
                key={alumnus.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Card className="group h-full overflow-hidden border-2 border-black bg-white transition-all hover:scale-[1.02] hover:shadow-xl dark:border-white dark:bg-black">
                  {/* Profile Image */}
                  <div className="relative aspect-square overflow-hidden">
                    {alumnus.photo_url ? (
                      <Image
                        src={alumnus.photo_url}
                        alt={alumnus.full_name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                        <p className="text-4xl font-black text-gray-400 dark:text-gray-600">
                          {alumnus.full_name.split(" ").map((n) => n[0]).join("")}
                        </p>
                      </div>
                    )}
                  </div>

                  <CardContent className="space-y-3 p-4">
                    {/* Name */}
                    <h3 className="text-lg font-black text-black dark:text-white">
                      {alumnus.full_name}
                    </h3>

                    {/* Headline */}
                    <p className="line-clamp-2 text-sm font-bold text-black/80 dark:text-white/80">
                      {alumnus.headline}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-1 text-xs text-black/60 dark:text-white/60">
                      {alumnus.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          <span>{alumnus.location}</span>
                        </div>
                      )}
                      {alumnus.current_role && (
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-3 w-3" />
                          <span className="line-clamp-1">{alumnus.current_role}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-3 w-3" />
                        <span>Class of {alumnus.graduation_year}</span>
                      </div>
                    </div>

                    {/* Specialization Badge */}
                    {alumnus.dance_specialization && (
                      <Badge
                        variant="outline"
                        className="border-black text-xs text-black dark:border-white dark:text-white"
                      >
                        {alumnus.dance_specialization.split(",")[0].trim()}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-black/5 dark:bg-white/5">
              <Filter className="h-12 w-12 text-black/20 dark:text-white/20" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
              No alumni found
            </h3>
            <p className="text-black/60 dark:text-white/60">
              Try adjusting your filters or search query
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
