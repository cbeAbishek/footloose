"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Shirt,
  Calendar,
  CreditCard,
  FileText,
  HelpCircle,
  ChevronDown,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import type { FAQCategory } from "./types"

interface FAQSectionProps {
  categories: FAQCategory[]
}

const iconMap: Record<string, any> = {
  GraduationCap,
  Shirt,
  Calendar,
  CreditCard,
  FileText,
  HelpCircle,
}

export function FAQSection({ categories }: FAQSectionProps) {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-950">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
            Help Center
          </p>
          <h2 className="mb-6 text-4xl font-black text-black dark:text-white md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Quick answers to common questions about our classes, costumes, events, and policies.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="mx-auto max-w-5xl space-y-8">
          {categories.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon] || HelpCircle

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden border-2 border-black bg-white dark:border-white dark:bg-black">
                  <CardContent className="p-0">
                    {/* Category Header */}
                    <div className="border-b-2 border-black bg-gray-100 p-6 dark:border-white dark:bg-gray-900">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full border-2 border-black bg-white p-3 dark:border-white dark:bg-black">
                          <Icon className="h-6 w-6 text-black dark:text-white" />
                        </div>
                        <h3 className="text-2xl font-black text-black dark:text-white">
                          {category.name}
                        </h3>
                      </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="p-6">
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="overflow-hidden rounded-lg border-2 border-black bg-white transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                          >
                            <AccordionTrigger className="px-6 py-4 text-left font-bold text-black hover:no-underline dark:text-white [&[data-state=open]]:bg-gray-50 dark:[&[data-state=open]]:bg-gray-900">
                              <div className="flex items-start gap-3 pr-4">
                                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white dark:bg-white dark:text-black">
                                  {itemIndex + 1}
                                </span>
                                <span className="text-base md:text-lg">{item.question}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="border-t-2 border-black bg-gray-50 px-6 py-4 dark:border-white dark:bg-gray-900">
                              <p className="pl-9 text-sm leading-relaxed text-black/80 dark:text-white/80 md:text-base">
                                {item.answer}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="mx-auto max-w-2xl border-2 border-black bg-white dark:border-white dark:bg-black">
            <CardContent className="p-8">
              <h3 className="mb-3 text-2xl font-black text-black dark:text-white">
                Still Have Questions?
              </h3>
              <p className="mb-6 text-black/70 dark:text-white/70">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-black px-8 py-3 font-bold text-white transition-all hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
              >
                Contact Us Directly
                <ChevronDown className="h-4 w-4" />
              </motion.a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
