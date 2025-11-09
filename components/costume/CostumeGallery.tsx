"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Filter, ArrowRight, Calendar, IndianRupee } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Costume } from "./types"
import { costumesData } from "./data"

export function CostumeGallery() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [ageGroupFilter, setAgeGroupFilter] = useState<string>("all")
  const [occasionFilter, setOccasionFilter] = useState<string>("all")

  const filteredCostumes = costumesData.filter((costume) => {
    const matchesSearch =
      costume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      costume.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      costume.theme.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || costume.category === categoryFilter
    const matchesAgeGroup = ageGroupFilter === "all" || costume.ageGroup === ageGroupFilter || costume.ageGroup === "all-ages"
    const matchesOccasion = occasionFilter === "all" || costume.occasion.includes(occasionFilter as any)

    return matchesSearch && matchesCategory && matchesAgeGroup && matchesOccasion
  })

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
            Available Costumes
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Browse our extensive collection of over 500+ costumes across various themes and occasions
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search costumes by name, theme, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 border-2 border-gray-200 dark:border-gray-800"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="h-12 border-2 border-gray-200 dark:border-gray-800">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="classical">Classical</SelectItem>
                <SelectItem value="contemporary">Contemporary</SelectItem>
                <SelectItem value="folk">Folk</SelectItem>
                <SelectItem value="western">Western</SelectItem>
                <SelectItem value="kids">Kids</SelectItem>
                <SelectItem value="theatrical">Theatrical</SelectItem>
              </SelectContent>
            </Select>

            <Select value={ageGroupFilter} onValueChange={setAgeGroupFilter}>
              <SelectTrigger className="h-12 border-2 border-gray-200 dark:border-gray-800">
                <SelectValue placeholder="Age Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ages</SelectItem>
                <SelectItem value="kids">Kids</SelectItem>
                <SelectItem value="teens">Teens</SelectItem>
                <SelectItem value="adults">Adults</SelectItem>
              </SelectContent>
            </Select>

            <Select value={occasionFilter} onValueChange={setOccasionFilter}>
              <SelectTrigger className="h-12 border-2 border-gray-200 dark:border-gray-800">
                <SelectValue placeholder="Occasion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Occasions</SelectItem>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="school-event">School Event</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
                <SelectItem value="festival">Festival</SelectItem>
                <SelectItem value="stage-production">Stage Production</SelectItem>
                <SelectItem value="photoshoot">Photoshoot</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setCategoryFilter("all")
                setAgeGroupFilter("all")
                setOccasionFilter("all")
              }}
              className="h-12 border-2 border-gray-200 dark:border-gray-800"
            >
              <Filter className="mr-2 h-4 w-4" />
              Clear Filters
            </Button>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-sm text-gray-600 dark:text-gray-400"
        >
          Showing {filteredCostumes.length} of {costumesData.length} costumes
        </motion.div>

        {/* Costume Grid */}
        {filteredCostumes.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCostumes.map((costume, index) => (
              <CostumeCard key={costume.id} costume={costume} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center dark:border-gray-700 dark:bg-gray-900"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No costumes found matching your filters. Try adjusting your search criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function CostumeCard({ costume, index }: { costume: Costume; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link href={`/costume-rental/${costume.slug}`}>
        <Card className="group h-full overflow-hidden border-2 border-gray-200 bg-white transition-all duration-500 hover:border-black hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white">
          {/* Image */}
          <div className="relative h-80 overflow-hidden">
            <Image
              src={costume.images[0]}
              alt={costume.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Availability Badge */}
            <div className="absolute left-4 top-4">
              <Badge
                className={`${
                  costume.available
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {costume.available ? `${costume.quantity} Available` : "Booked"}
              </Badge>
            </div>

            {/* Category Badge */}
            <div className="absolute right-4 top-4">
              <Badge className="bg-white/90 text-black backdrop-blur capitalize">
                {costume.category}
              </Badge>
            </div>

            {/* Title */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="mb-1 text-sm text-gray-300">{costume.theme}</p>
              <h3 className="text-xl font-black text-white">
                {costume.name}
              </h3>
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-6">
            <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
              {costume.description}
            </p>

            {/* Occasion Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {costume.occasion.slice(0, 2).map((occasion) => (
                <Badge
                  key={occasion}
                  variant="outline"
                  className="text-xs capitalize"
                >
                  {occasion.replace("-", " ")}
                </Badge>
              ))}
              {costume.occasion.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{costume.occasion.length - 2} more
                </Badge>
              )}
            </div>

            {/* Pricing */}
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-sm">
                <IndianRupee className="h-4 w-4" />
                <span className="font-bold text-black dark:text-white">
                  {costume.pricePerDay}
                </span>
                <span className="text-gray-600 dark:text-gray-400">/day</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                <IndianRupee className="h-3 w-3" />
                <span>{costume.pricePerWeek}/week</span>
              </div>
            </div>
          </CardContent>

          {/* Footer */}
          <CardFooter className="p-6 pt-0">
            <Button
              variant="ghost"
              className="group/btn w-full justify-between p-0 text-black hover:bg-transparent dark:text-white"
            >
              View Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
