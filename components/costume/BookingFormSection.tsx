"use client"

import { motion } from "framer-motion"
import { CostumeRentalForm } from "@/components/forms/costume-rental-form"

export function BookingFormSection() {
  return (
    <section id="booking-form" className="scroll-mt-20 bg-gray-50 py-16 dark:bg-gray-950 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-black text-black dark:text-white sm:text-4xl">
            Book Your Costume
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Fill out the form below and we'll get back to you within 24 hours with availability confirmation
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-3xl border-2 border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:p-12">
            <CostumeRentalForm />
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400"
        >
          <p>
            Instant confirmation for bookings made 7+ days in advance.{" "}
            <span className="font-bold">Need urgent rental?</span> Call us at{" "}
            <a href="tel:+919842222467" className="font-bold text-black dark:text-white">
              +91 98422 22467
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
