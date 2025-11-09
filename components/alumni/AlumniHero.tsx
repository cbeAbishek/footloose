"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { MapPin, Users, Sparkles } from "lucide-react"
import { useRef } from "react"

interface AlumniHeroProps {
  totalAlumni?: number
  globalLocations?: number
}

export function AlumniHero({ totalAlumni = 500, globalLocations = 25 }: AlumniHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  return (
    <section ref={sectionRef} className="pt-10 relative min-h-[100vh] overflow-hidden bg-black dark:bg-white">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 dark:from-purple-100/20 dark:via-white dark:to-blue-100/20"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(88, 28, 135, 0.2), rgba(0, 0, 0, 1), rgba(30, 58, 138, 0.2))",
            "linear-gradient(to bottom right, rgba(30, 58, 138, 0.2), rgba(0, 0, 0, 1), rgba(88, 28, 135, 0.2))",
            "linear-gradient(to bottom right, rgba(88, 28, 135, 0.2), rgba(0, 0, 0, 1), rgba(30, 58, 138, 0.2))",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/20 dark:bg-black/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/assets/alumni-hero.jpg"
          alt="Footloose Alumni Community"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black dark:from-white/70 dark:via-white/50 dark:to-white" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-[0.3em] text-white/80 dark:text-black/80"
          >
            Alumni Network
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-black leading-tight text-white dark:text-black md:text-7xl lg:text-8xl"
          >
            Footloose Family
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent dark:from-black dark:via-gray-700 dark:to-black">
              Around the World
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto max-w-3xl text-lg text-white/90 dark:text-black/90 md:text-xl"
          >
            From Coimbatore stages to global platforms — celebrating the journeys, achievements,
            and enduring connections of dancers who started here and now inspire the world.
          </motion.p>

          {/* Stats with Counter Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-8"
          >
            <motion.div 
              className="group flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all group-hover:bg-white/20 dark:bg-black/10 dark:group-hover:bg-black/20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="h-6 w-6 text-white dark:text-black" />
              </motion.div>
              <div className="text-left">
                <motion.p 
                  className="text-3xl font-black text-white dark:text-black"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                >
                  {totalAlumni}+
                </motion.p>
                <p className="text-sm text-white/70 dark:text-black/70">Alumni Worldwide</p>
              </div>
            </motion.div>

            <motion.div 
              className="h-12 w-px bg-white/20 dark:bg-black/20"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
            />

            <motion.div 
              className="group flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all group-hover:bg-white/20 dark:bg-black/10 dark:group-hover:bg-black/20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="h-6 w-6 text-white dark:text-black" />
              </motion.div>
              <div className="text-left">
                <motion.p 
                  className="text-3xl font-black text-white dark:text-black"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  {globalLocations}+
                </motion.p>
                <p className="text-sm text-white/70 dark:text-black/70">Countries</p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons with Advanced Interactions */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            <motion.button 
              className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black dark:bg-black dark:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Join Alumni Network
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
            
            <motion.button 
              className="group relative overflow-hidden rounded-full border-2 border-white px-8 py-4 font-bold text-white dark:border-black dark:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span
                className="absolute inset-0 bg-white dark:bg-black"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black dark:group-hover:text-white">
                <Sparkles className="h-4 w-4" />
                Submit Your Story
              </span>
            </motion.button>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-12 w-6 rounded-full border-2 border-white/50 dark:border-black/50"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mx-auto mt-2 h-2 w-2 rounded-full bg-white dark:bg-black"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
