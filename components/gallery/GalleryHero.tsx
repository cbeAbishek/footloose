"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Camera, Play, Sparkles } from "lucide-react";

export function GalleryHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Montage */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
            className="relative overflow-hidden"
          >
            <Image
              src={`/assets/${i}.jpg`}
              alt={`Gallery montage ${i}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 h-full w-full rounded-full bg-gradient-to-tl from-pink-500/10 to-transparent blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[85vh] items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/10 text-white backdrop-blur-md">
              <Camera className="mr-2 h-4 w-4" />
              30 Years of Memories
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl font-black leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Footloose
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Moments
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-300 sm:text-2xl"
          >
            A visual journey through performances, emotions, and artistry —
            celebrating three decades of dance excellence
          </motion.p>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 text-white"
          >
            <div className="flex items-center gap-3">
              <Camera className="h-6 w-6 text-purple-400" />
              <div className="text-left">
                <div className="text-2xl font-black">5,000+</div>
                <div className="text-sm text-gray-400">Photos</div>
              </div>
            </div>

            <div className="h-12 w-px bg-white/20" />

            <div className="flex items-center gap-3">
              <Play className="h-6 w-6 text-pink-400" />
              <div className="text-left">
                <div className="text-2xl font-black">150+</div>
                <div className="text-sm text-gray-400">Videos</div>
              </div>
            </div>

            <div className="h-12 w-px bg-white/20" />

            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-orange-400" />
              <div className="text-left">
                <div className="text-2xl font-black">500+</div>
                <div className="text-sm text-gray-400">Events</div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 3.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-xs font-bold uppercase tracking-wider">
            Explore Gallery
          </span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
