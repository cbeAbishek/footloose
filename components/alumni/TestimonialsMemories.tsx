"use client"

import { motion } from "framer-motion"
import { Play, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { AlumniTestimonial } from "./types"

interface TestimonialsMemoriesProps {
  testimonials: AlumniTestimonial[]
}

export function TestimonialsMemories({ testimonials }: TestimonialsMemoriesProps) {
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
            Voices & Memories
          </p>
          <h2 className="mb-6 text-4xl font-black text-black dark:text-white md:text-5xl lg:text-6xl">
            Stories from the Footloose Family
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Heartfelt reflections, cherished memories, and inspiring journeys shared by our global alumni community.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {testimonial.video_url ? (
                // Video Testimonial Card
                <Card className="group relative h-full overflow-hidden border-2 border-black bg-black dark:border-white dark:bg-white">
                  <div className="relative aspect-video overflow-hidden">
                    {/* Video Thumbnail */}
                    <iframe
                      src={testimonial.video_url}
                      title={`${testimonial.alumni_name} testimonial`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="rounded-full bg-white p-4 dark:bg-black">
                        <Play className="h-8 w-8 text-black dark:text-white" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="mb-2 text-lg font-black text-white dark:text-black">
                      {testimonial.alumni_name}
                    </p>
                    <p className="text-sm leading-relaxed text-white/80 dark:text-black/80">
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                // Text Testimonial Card
                <Card className="relative h-full border-2 border-black bg-gradient-to-br from-gray-50 to-white p-8 dark:border-white dark:from-gray-950 dark:to-black">
                  {/* Quote Icon */}
                  <div className="absolute right-8 top-8 opacity-10">
                    <Quote className="h-16 w-16 text-black dark:text-white" />
                  </div>

                  <CardContent className="relative space-y-6 p-0">
                    {/* Content */}
                    <p className="text-lg leading-relaxed text-black dark:text-white">
                      "{testimonial.content}"
                    </p>

                    {/* Attribution */}
                    <div className="border-t-2 border-black/10 pt-4 dark:border-white/10">
                      <p className="font-black text-black dark:text-white">
                        {testimonial.alumni_name}
                      </p>
                      <p className="text-sm text-black/60 dark:text-white/60">
                        Footloose Alumni
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="border-2 border-black bg-black p-12 dark:border-white dark:bg-white">
            <h3 className="mb-4 text-3xl font-black text-white dark:text-black">
              Share Your Footloose Story
            </h3>
            <p className="mb-8 text-lg text-white/80 dark:text-black/80">
              Your journey inspires the next generation. Share your memories, achievements, and experiences with the community.
            </p>
            <button className="rounded-full bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105 dark:bg-black dark:text-white">
              Submit Your Story
            </button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
