"use client"

import { motion } from "framer-motion"
import {
  Sparkles,
  Package,
  RotateCcw,
  ShieldCheck,
  Droplets,
  Sun,
  Wind,
  AlertCircle,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

const careGuidelines = [
  {
    title: "Before You Receive",
    icon: Package,
    color: "from-blue-500 to-cyan-500",
    guidelines: [
      "All costumes are professionally dry-cleaned and UV-sanitized",
      "Items are quality-checked for any defects or damage",
      "Costumes are packed in protective garment bags",
      "Care instruction cards are included with each rental",
    ],
  },
  {
    title: "During Your Rental",
    icon: ShieldCheck,
    color: "from-purple-500 to-pink-500",
    guidelines: [
      "Handle costumes with clean, dry hands",
      "Avoid food, drinks, and makeup stains when possible",
      "Store in a cool, dry place away from direct sunlight",
      "Keep costumes in provided garment bags when not in use",
      "Report any accidental damage immediately",
    ],
  },
  {
    title: "What to Avoid",
    icon: AlertCircle,
    color: "from-orange-500 to-red-500",
    guidelines: [
      "Do not wash, dry clean, or iron costumes yourself",
      "Avoid wearing outdoors in extreme weather",
      "Keep away from sharp objects and rough surfaces",
      "Do not apply perfume or deodorant directly on costumes",
      "Avoid exposing to heat sources (candles, fireworks, etc.)",
    ],
  },
  {
    title: "After Your Event",
    icon: RotateCcw,
    color: "from-green-500 to-emerald-500",
    guidelines: [
      "Return costumes as-is (no need to clean)",
      "Ensure all accessories and props are included",
      "Fold neatly and place back in garment bags",
      "Schedule pickup or drop-off within 24 hours",
      "Fill feedback form for continuous improvement",
    ],
  },
]

const specificCare = [
  {
    title: "Silk & Delicate Fabrics",
    description: "Handle with extra care. Avoid water contact. Store flat when possible.",
  },
  {
    title: "Embroidered & Embellished Costumes",
    description: "Beadwork and embellishments can snag. Avoid contact with Velcro, zippers, and rough surfaces.",
  },
  {
    title: "Jewelry & Accessories",
    description: "Store separately in provided pouches. Handle clasps gently to avoid breakage.",
  },
  {
    title: "Footwear",
    description: "Try on with socks first. Clean soles before indoor use. Report sizing issues early.",
  },
  {
    title: "Headgear & Props",
    description: "Handle structural pieces carefully. Avoid bending or compressing. Store in original packaging.",
  },
]

export function CostumeCareGuidelines() {
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
            Costume Care Guidelines
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Simple care instructions to ensure costumes stay pristine for your performance
          </p>
        </motion.div>

        {/* Care Guidelines Grid */}
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {careGuidelines.map((section, index) => {
            const Icon = section.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div
                      className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${section.color} p-4 shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-xl font-black text-black dark:text-white">
                      {section.title}
                    </h3>

                    {/* Guidelines */}
                    <ul className="space-y-2">
                      {section.guidelines.map((guideline, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black dark:bg-white" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {guideline}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Specific Care Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-4xl"
        >
          <h3 className="mb-8 text-center text-2xl font-black text-black dark:text-white">
            Fabric-Specific Care
          </h3>

          <Accordion type="single" collapsible className="space-y-4">
            {specificCare.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border-2 border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <AccordionTrigger className="text-left font-bold text-black hover:no-underline dark:text-white">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 rounded-3xl border-2 border-orange-200 bg-orange-50 p-8 dark:border-orange-900 dark:bg-orange-950"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-orange-500 p-3">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-black text-black dark:text-white">
                Remember: No Cleaning Needed!
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Please return costumes as-is without washing or dry cleaning. Our professional
                cleaning team uses specialized techniques to preserve costume quality. Attempting
                to clean costumes yourself may cause damage and incur additional charges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
