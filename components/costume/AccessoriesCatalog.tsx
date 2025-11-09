"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { IndianRupee, ShoppingCart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const accessories = [
  {
    id: "acc-1",
    name: "Classical Temple Jewelry Set",
    image: "/assets/1.jpg",
    category: "jewelry",
    price: 500,
    available: true,
    description: "Complete temple jewelry set including necklace, earrings, maang tikka, and bangles",
  },
  {
    id: "acc-2",
    name: "Ghungroo (Ankle Bells)",
    image: "/assets/2.jpg",
    category: "jewelry",
    price: 200,
    available: true,
    description: "Professional quality ghungroo for classical dance performances",
  },
  {
    id: "acc-3",
    name: "Dance Shoes Collection",
    image: "/assets/3.jpg",
    category: "shoes",
    price: 300,
    available: true,
    description: "Various styles including ballet, jazz, and character shoes",
  },
  {
    id: "acc-4",
    name: "Traditional Headgear",
    image: "/assets/4.jpg",
    category: "hats",
    price: 400,
    available: true,
    description: "Assorted traditional headgear for various dance forms",
  },
  {
    id: "acc-5",
    name: "Hand Props Set",
    image: "/assets/5.jpg",
    category: "props",
    price: 350,
    available: true,
    description: "Collection of hand props including fans, veils, and sticks",
  },
  {
    id: "acc-6",
    name: "Stage Makeup Kit",
    image: "/assets/6.jpg",
    category: "makeup",
    price: 600,
    available: true,
    description: "Professional stage makeup kit with application guidance",
  },
  {
    id: "acc-7",
    name: "Flower Jewelry (Gajra)",
    image: "/assets/7.jpg",
    category: "jewelry",
    price: 150,
    available: true,
    description: "Fresh and artificial flower jewelry for hair and wrists",
  },
  {
    id: "acc-8",
    name: "Character Props Collection",
    image: "/assets/8.jpg",
    category: "props",
    price: 450,
    available: true,
    description: "Themed props for specific characters and performances",
  },
]

export function AccessoriesCatalog() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-black text-black dark:text-white sm:text-4xl">
            Accessories & Props
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Complete your look with our premium collection of jewelry, shoes, props, and makeup
          </p>
        </motion.div>

        {/* Accessories Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {accessories.map((accessory, index) => (
            <motion.div
              key={accessory.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="group h-full overflow-hidden border-2 border-gray-200 bg-white transition-all duration-500 hover:border-black hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={accessory.image}
                    alt={accessory.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute right-4 top-4">
                    <Badge className="bg-white/90 text-black backdrop-blur capitalize">
                      {accessory.category}
                    </Badge>
                  </div>

                  {/* Availability Badge */}
                  {accessory.available && (
                    <div className="absolute left-4 top-4">
                      <Badge className="bg-green-500 text-white">Available</Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-black text-black dark:text-white">
                    {accessory.name}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    {accessory.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-1">
                    <IndianRupee className="h-5 w-5 text-black dark:text-white" />
                    <span className="text-2xl font-black text-black dark:text-white">
                      {accessory.price}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">/rental</span>
                  </div>
                </CardContent>

                {/* Footer */}
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Booking
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All accessories are professionally cleaned and sanitized before each rental.{" "}
            <span className="font-bold">Bulk discounts available for 10+ items.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
