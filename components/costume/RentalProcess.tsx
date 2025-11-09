"use client"

import { motion } from "framer-motion"
import {
  Search,
  Calendar,
  CreditCard,
  Truck,
  Sparkles,
  RotateCcw,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const iconMap = {
  Search,
  Calendar,
  CreditCard,
  Truck,
  Sparkles,
  RotateCcw,
}

const steps = [
  {
    title: "Browse & Select",
    description:
      "Explore our catalog, filter by occasion, age group, and theme. View detailed photos and specifications.",
    icon: "Search",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Check Availability",
    description:
      "Use our calendar to check real-time availability for your event date. Reserve instantly online.",
    icon: "Calendar",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Book & Pay",
    description:
      "Fill the booking form, pay deposit online, and receive confirmation via email with rental details.",
    icon: "CreditCard",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Pick-Up or Delivery",
    description:
      "Choose to collect from our studio or opt for home delivery. We pack everything securely.",
    icon: "Truck",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Wear & Perform",
    description:
      "Enjoy your event with confidence. Follow the care instructions provided with your rental.",
    icon: "Sparkles",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Return",
    description:
      "Return costumes as-is (no need to clean). Drop off or schedule pickup. Deposit refunded within 7 days.",
    icon: "RotateCcw",
    color: "from-pink-500 to-rose-500",
  },
]

export function RentalProcess() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-24">
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
            How Rental Works
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Simple, transparent, and hassle-free rental process designed for your convenience
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full border-2 border-gray-200 bg-white transition-all duration-500 hover:border-black hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="mb-6 flex items-start justify-between">
                      <div
                        className={`rounded-2xl bg-gradient-to-br ${step.color} p-4 shadow-lg transition-transform duration-500 group-hover:scale-110`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white dark:bg-white dark:text-black">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-xl font-black text-black dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Process Timeline (Mobile) */}
        <div className="mt-12 lg:hidden">
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-8 pl-20 last:mb-0"
                >
                  <div
                    className={`absolute left-3 top-0 rounded-full bg-gradient-to-br ${step.color} p-2.5`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-600 dark:text-gray-400">
                    Step {index + 1}
                  </div>
                  <h4 className="mb-1 text-lg font-bold text-black dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
