"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { testimonialSnapshotsData } from "./data"

export function TestimonialsSnapshots() {
  return (
    <section className="bg-white py-16 dark:bg-black sm:py-24">
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
            Moments & Memories
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Real stories and candid moments from our community
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonialSnapshotsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-2 border-gray-200 bg-white transition-all duration-500 hover:border-black hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden md:col-span-2 md:h-auto">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center p-6 md:col-span-3">
                      {/* Quote Icon */}
                      <Quote className="mb-4 h-8 w-8 text-gray-300 dark:text-gray-700" />

                      {/* Quote */}
                      <blockquote className="mb-6 text-base italic leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="mb-1 font-bold text-black dark:text-white">
                            {testimonial.author}
                          </div>
                          <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.role}
                          </div>
                          {testimonial.event && (
                            <Badge
                              variant="outline"
                              className="border-gray-300 text-xs dark:border-gray-700"
                            >
                              <Calendar className="mr-1 h-3 w-3" />
                              {testimonial.event}
                            </Badge>
                          )}
                        </div>

                        {/* Decorative Element */}
                        <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 md:flex">
                          <Quote className="h-6 w-6 text-black/20 dark:text-white/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Want to share your story?{" "}
            <a
              href="#submit"
              className="font-bold text-black underline transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
            >
              Submit your photos and memories
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
