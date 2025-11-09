"use client"

import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const packages = [
  {
    title: "School Event Package",
    description: "Perfect for annual days, cultural programs, and competitions",
    features: [
      "10+ costume rentals",
      "15% group discount",
      "Free delivery & pickup",
      "Backup costume provision",
      "Rehearsal costume option",
      "Extended rental period",
    ],
    price: "Starting ₹8,000",
    popular: true,
  },
  {
    title: "Wedding Sangeet Bundle",
    description: "Complete costume solution for wedding dance performances",
    features: [
      "5-15 costumes",
      "Matching color coordination",
      "Jewelry included",
      "2-day rental period",
      "Emergency alterations",
      "Photography-ready costumes",
    ],
    price: "Starting ₹12,000",
    popular: false,
  },
  {
    title: "Corporate Event Pack",
    description: "Professional costumes for product launches and team events",
    features: [
      "20+ costumes",
      "Brand color customization",
      "Professional styling",
      "3-day rental",
      "On-site coordinator",
      "Invoice with GST",
    ],
    price: "Starting ₹15,000",
    popular: false,
  },
  {
    title: "Individual Rental",
    description: "Single costume for personal use or small events",
    features: [
      "Full catalog access",
      "1-day or weekly rates",
      "All sizes available",
      "Basic accessories included",
      "Flexible pickup times",
      "Standard deposit",
    ],
    price: "From ₹600/day",
    popular: false,
  },
]

export function PricingPackages() {
  return (
    <section className="py-16 sm:py-24">
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
            Pricing & Packages
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Transparent pricing with flexible packages designed for every need and budget
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                  <Badge className="bg-black text-white dark:bg-white dark:text-black">
                    <Star className="mr-1 h-3 w-3 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card
                className={`group h-full transition-all duration-500 ${
                  pkg.popular
                    ? "border-4 border-black shadow-2xl dark:border-white"
                    : "border-2 border-gray-200 hover:border-black hover:shadow-xl dark:border-gray-800 dark:hover:border-white"
                } bg-white dark:bg-gray-900`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-black text-black dark:text-white">
                    {pkg.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent className="pb-6">
                  {/* Price */}
                  <div className="mb-6 border-b-2 border-gray-100 pb-6 dark:border-gray-800">
                    <div className="text-3xl font-black text-black dark:text-white">
                      {pkg.price}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-black p-0.5 dark:bg-white">
                          <Check className="h-3 w-3 text-white dark:text-black" />
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    className={`w-full rounded-full ${
                      pkg.popular
                        ? "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
                        : "bg-gray-100 text-black hover:bg-black hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-black"
                    }`}
                  >
                    <Link href="#booking-form">Choose Package</Link>
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
          className="mt-12 rounded-3xl border-2 border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900"
        >
          <h3 className="mb-3 text-xl font-black text-black dark:text-white">
            Need a Custom Package?
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            We create tailored solutions for large events, film productions, and special requirements.
            Contact us for a personalized quote.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <Link href="/contact">Request Custom Quote</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
