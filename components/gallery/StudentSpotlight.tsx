"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Trophy, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { spotlightData } from "./data"

export function StudentSpotlight() {
  return (
    <section className="bg-black py-16 dark:bg-white sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-black text-white dark:text-black sm:text-4xl">
            Student & Alumni Spotlight
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400 dark:text-gray-600">
            Celebrating excellence, transformation, and achievement in our Footloose family
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {spotlightData.map((person, index) => (
                <CarouselItem key={person.id} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group h-full overflow-hidden border-2 border-gray-800 bg-gray-900 transition-all duration-500 hover:border-white hover:shadow-2xl dark:border-gray-200 dark:bg-gray-50 dark:hover:border-black">
                      {/* Image */}
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute left-4 top-4">
                          <Badge className="bg-white/90 text-black backdrop-blur capitalize">
                            {person.category === "student" ? (
                              <>
                                <Star className="mr-1 h-3 w-3" />
                                Student
                              </>
                            ) : (
                              <>
                                <Trophy className="mr-1 h-3 w-3" />
                                Alumni
                              </>
                            )}
                          </Badge>
                        </div>

                        {/* Name */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-2xl font-black text-white">{person.name}</h3>
                          <p className="text-sm text-gray-300">{person.title}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-6">
                        <p className="mb-4 text-sm text-gray-300 dark:text-gray-700">
                          {person.description}
                        </p>

                        {/* Achievement */}
                        <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4 dark:bg-black/5">
                          <Award className="h-5 w-5 flex-shrink-0 text-yellow-400 dark:text-yellow-600" />
                          <div>
                            <div className="text-sm font-bold text-white dark:text-black">
                              {person.achievement}
                            </div>
                            <div className="text-xs text-gray-400 dark:text-gray-600">
                              {person.year}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-white text-white dark:border-black dark:text-black" />
            <CarouselNext className="border-white text-white dark:border-black dark:text-black" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
