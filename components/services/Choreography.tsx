"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Sparkles, 
  Trophy, 
  Star, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { servicesData } from "./data"

const iconMap = {
  Sparkles,
  Trophy,
  Star,
  Users
}

export function Choreography() {
  const data = servicesData.choreography

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-16 sm:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl space-y-4"
            >
              <Badge className="bg-white/90 text-black backdrop-blur">
                {data.tagline}
              </Badge>
              <h1 className="text-4xl font-black text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {data.title}
              </h1>
              <p className="text-lg text-white/90 sm:text-xl">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-black hover:bg-gray-100"
                >
                  <a href="#request">{data.cta}</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-white text-white hover:bg-white hover:text-black"
                >
                  <Link href="/gallery">View Portfolio</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-black text-black dark:text-white sm:text-4xl">
              Our Choreography Services
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.features.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group h-full border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-black hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white">
                    <div className="mb-4 inline-flex rounded-full bg-gray-100 p-3 transition-colors group-hover:bg-black dark:bg-gray-800 dark:group-hover:bg-white">
                      <Icon className="h-6 w-6 text-black transition-colors group-hover:text-white dark:text-white dark:group-hover:text-black" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-black text-black dark:text-white sm:text-4xl">
                What's Included
              </h2>
              <div className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-black dark:text-white" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="pt-4">
                <p className="text-lg font-bold text-black dark:text-white">
                  {data.pricing}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {data.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-square overflow-hidden rounded-2xl"
                >
                  <Image
                    src={image}
                    alt={`Choreography ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request" className="scroll-mt-20 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-black text-black dark:text-white sm:text-4xl">
                Request Custom Choreography
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Tell us about your project and we'll create something extraordinary
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-black py-16 dark:bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-black text-white dark:text-black sm:text-4xl">
              Let's Create Something Amazing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300 dark:text-gray-700">
              30+ years of experience creating memorable performances
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-black hover:bg-gray-100"
              >
                <a href="tel:+919842222467">Call Us</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-white text-white hover:bg-white hover:text-black dark:border-black dark:text-black dark:hover:bg-black dark:hover:text-white"
              >
                <Link href="/contact">
                  Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
