"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Calendar, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    icon: Award,
    number: "500+",
    label: "Unique Costumes",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    number: "1,000+",
    label: "Happy Clients",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Calendar,
    number: "15+",
    label: "Years Experience",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    number: "100%",
    label: "Client Satisfaction",
    color: "from-green-500 to-emerald-500",
  },
]

export function AboutRentalDivision() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 dark:from-gray-950 dark:to-black sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 text-3xl font-black text-black dark:text-white sm:text-4xl lg:text-5xl">
              About Our Costume Rental Division
            </h2>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                For over 15 years, Edwin's Dance & Costume Company has been Trichy's premier
                destination for professional costume rentals. What started as a small collection
                to support our dance students has grown into an extensive inventory of over 500
                unique costumes spanning classical, contemporary, folk, western, and theatrical
                categories.
              </p>

              <p className="leading-relaxed">
                Our costume rental division was born from a simple observation: performers,
                schools, and event organizers needed access to high-quality, authentic costumes
                without the burden of ownership. We understood that purchasing costumes for
                one-time events was expensive and impractical.
              </p>

              <p className="leading-relaxed">
                Today, we serve schools, corporates, wedding planners, production houses, and
                individuals across South India. Each costume in our collection is carefully
                curated for authenticity, maintained with professional care, and available in
                multiple sizes to ensure the perfect fit for every performer.
              </p>

              <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-3 text-xl font-black text-black dark:text-white">
                  Our Commitment
                </h3>
                <ul className="space-y-2">
                  {[
                    "Authentic designs that respect cultural heritage",
                    "Professional cleaning and hygiene protocols",
                    "Transparent pricing with no hidden charges",
                    "Personalized service and styling guidance",
                    "Timely delivery and flexible rental periods",
                  ].map((commitment, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-black p-1 dark:bg-white">
                        <div className="h-1.5 w-1.5 rounded-full bg-white dark:bg-black" />
                      </div>
                      <span className="text-sm">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Images & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src="/assets/1.jpg"
                  alt="Costume Collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src="/assets/2.jpg"
                  alt="Costume Detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src="/assets/3.jpg"
                  alt="Performance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src="/assets/4.jpg"
                  alt="Happy Client"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card className="border-2 border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                      <CardContent className="p-6">
                        <div
                          className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${stat.color} p-3`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-3xl font-black text-black dark:text-white">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Legacy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-3xl border-2 border-gray-200 bg-white p-8 text-center dark:border-gray-800 dark:bg-gray-900 sm:p-12"
        >
          <h3 className="mb-4 text-2xl font-black text-black dark:text-white">
            Craftsmanship Meets Excellence
          </h3>
          <p className="mx-auto max-w-3xl leading-relaxed text-gray-700 dark:text-gray-300">
            Many of our costumes are custom-designed and handcrafted by skilled artisans who
            understand the nuances of dance and performance. We partner with traditional weavers,
            embroiderers, and costume designers to create pieces that not only look stunning but
            also allow for fluid movement and comfort during performances. This attention to
            detail and respect for craftsmanship is what sets Edwin's apart in the costume rental
            industry.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
