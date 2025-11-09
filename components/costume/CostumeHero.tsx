"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Phone } from "lucide-react"

export function CostumeHero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/1.jpg"
          alt="Costume Rental Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-1/4 top-0 h-full w-full rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-1/4 bottom-0 h-full w-full rounded-full bg-gradient-to-tl from-blue-500/20 to-transparent blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[90vh] items-center px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <Badge className="mb-6 w-fit bg-white/90 text-black backdrop-blur">
              <span className="mr-2">✨</span>
              Over 500+ Premium Costumes
            </Badge>

            <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Rent Premium Costumes for Every
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Performance
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              From classical Bharatanatyam to contemporary fusion, discover authentic costumes
              that bring your vision to life. Professional quality, affordable prices, and
              hassle-free service.
            </p>

            {/* Key Features */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {[
                "500+ Unique Designs",
                "All Sizes Available",
                "Professional Cleaning",
                "Same-Day Availability",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur"
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                  <span className="text-sm font-bold text-white">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-black hover:bg-gray-100"
              >
                <Link href="#gallery">
                  Browse Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="#booking-form">
                  <Calendar className="mr-2 h-5 w-5" />
                  Check Availability
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-white text-white hover:bg-white hover:text-black"
              >
                <a href="tel:+919842222467">
                  <Phone className="mr-2 h-5 w-5" />
                  +91 98422 22467
                </a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-black bg-gray-600"
                    />
                  ))}
                </div>
                <span>1,000+ Happy Clients</span>
              </div>
              <div>★★★★★ 4.9/5 Rating</div>
              <div>✓ Verified Hygiene Standards</div>
            </motion.div>
          </motion.div>

          {/* Right Column - Featured Costumes Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/assets/1.jpg", delay: 0 },
                { src: "/assets/2.jpg", delay: 0.1 },
                { src: "/assets/3.jpg", delay: 0.2 },
                { src: "/assets/4.jpg", delay: 0.3 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + item.delay }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative h-64 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={item.src}
                    alt={`Featured Costume ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl"
            >
              <div className="text-center">
                <div className="text-4xl font-black text-black">₹600</div>
                <div className="text-sm text-gray-600">Starting From</div>
                <div className="mt-2 text-xs font-bold text-gray-400">Per Day Rental</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-xs font-bold uppercase tracking-wider">Scroll to Explore</span>
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
  )
}
