"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Trophy, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { AlumniAward } from "./types"

interface RecognitionAwardsProps {
  awards: AlumniAward[]
}

export function RecognitionAwards({ awards }: RecognitionAwardsProps) {
  return (
    <section className="relative overflow-hidden bg-black py-20 dark:bg-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white blur-3xl dark:bg-black" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-white blur-3xl dark:bg-black" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/60 dark:text-black/60">
            Excellence & Achievement
          </p>
          <h2 className="mb-6 text-4xl font-black text-white dark:text-black md:text-5xl lg:text-6xl">
            Recognition & Awards
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80 dark:text-black/80">
            Honoring alumni who have achieved remarkable milestones, performed internationally, and made significant contributions to dance and the arts.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="group relative h-full overflow-hidden border-2 border-white bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10 dark:border-black dark:bg-black/5 dark:hover:bg-black/10">
                {/* Award Image (if available) */}
                {award.image_url && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={award.image_url}
                      alt={award.award_title}
                      fill
                      className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent dark:from-white" />
                  </div>
                )}

                <CardContent className="space-y-4 p-6">
                  {/* Trophy Icon */}
                  <div className="flex items-center justify-between">
                    <div className="rounded-full bg-yellow-500 p-3">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="bg-white text-black dark:bg-black dark:text-white">
                      {award.year}
                    </Badge>
                  </div>

                  {/* Award Title */}
                  <h3 className="text-xl font-black leading-tight text-white dark:text-black">
                    {award.award_title}
                  </h3>

                  {/* Alumni Name */}
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <p className="font-bold text-white/90 dark:text-black/90">
                      {award.alumni_name}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/70 dark:text-black/70">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid gap-8 rounded-3xl border-2 border-white p-12 dark:border-black md:grid-cols-3"
        >
          <div className="text-center">
            <Award className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
            <p className="mb-2 text-4xl font-black text-white dark:text-black">50+</p>
            <p className="text-sm text-white/70 dark:text-black/70">National Awards</p>
          </div>
          <div className="text-center">
            <Trophy className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
            <p className="mb-2 text-4xl font-black text-white dark:text-black">25+</p>
            <p className="text-sm text-white/70 dark:text-black/70">International Performances</p>
          </div>
          <div className="text-center">
            <Star className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
            <p className="mb-2 text-4xl font-black text-white dark:text-black">100+</p>
            <p className="text-sm text-white/70 dark:text-black/70">Industry Leaders</p>
          </div>
        </motion.div>

        {/* Nomination CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-white/80 dark:text-black/80">
            Know an alumni making waves in the dance world? Nominate them for recognition!
          </p>
          <button className="rounded-full bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105 dark:bg-black dark:text-white">
            Nominate an Alumni
          </button>
        </motion.div>
      </div>
    </section>
  )
}
