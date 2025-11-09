"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "School Principal, St. Mary's High School",
    content:
      "Edwin's costume rental service transformed our annual day celebration. The quality, variety, and professional service exceeded our expectations. Highly recommended!",
    rating: 5,
    image: "/assets/testimonials/client-1.jpg",
  },
  {
    name: "Rajesh Kumar",
    role: "Wedding Planner",
    content:
      "We've been partnering with Edwin's for sangeet choreography and costumes for 5 years. Their attention to detail and timely delivery is unmatched.",
    rating: 5,
    image: "/assets/testimonials/client-2.jpg",
  },
  {
    name: "Anjali Menon",
    role: "Corporate Event Manager",
    content:
      "The corporate event costumes were professional, comfortable, and perfectly suited our brand theme. Excellent service from booking to return.",
    rating: 5,
    image: "/assets/testimonials/client-3.jpg",
  },
  {
    name: "Dr. Sunita Reddy",
    role: "Dance Academy Director",
    content:
      "As a dance professional, I appreciate the authenticity and quality of their classical costumes. Perfect for our students' arangetrams.",
    rating: 5,
    image: "/assets/testimonials/client-4.jpg",
  },
]

const faqs = [
  {
    question: "What is the deposit amount and when is it refunded?",
    answer:
      "Deposits vary by costume type (₹1,000-₹4,000) and are fully refundable within 7 days after the costume is returned in good condition. We inspect all items and process refunds promptly.",
  },
  {
    question: "What happens if the costume is damaged?",
    answer:
      "Minor wear and tear is expected and covered. For significant damage, repair costs are deducted from the deposit. We provide detailed damage assessment and transparent pricing. Professional stains or tears may incur charges.",
  },
  {
    question: "How do you ensure costume hygiene?",
    answer:
      "All costumes undergo professional dry cleaning after each rental. We follow strict hygiene protocols including UV sanitization, quality checks, and proper storage. Your safety and comfort are our priorities.",
  },
  {
    question: "Can costumes be altered for size?",
    answer:
      "We offer minor alterations for long-term rentals at an additional cost. For short-term rentals, we have multiple sizes available. Custom sizing is possible for advance bookings (2+ weeks notice).",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Cancellations made 15+ days before the event receive 90% refund. 7-14 days: 50% refund. Less than 7 days: no refund, but you can reschedule once within 3 months.",
  },
  {
    question: "Do you provide delivery and pickup services?",
    answer:
      "Yes! We offer free delivery and pickup within 20 km of Trichy. For distances beyond, nominal charges apply. You can also collect from our studio during business hours.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 2-4 weeks in advance for popular seasons (December-March) and 1-2 weeks for regular periods. Last-minute bookings subject to availability.",
  },
  {
    question: "Are accessories and jewelry included?",
    answer:
      "Basic accessories are included with classical and traditional costumes. Premium jewelry, specialty props, and makeup kits are available as add-ons at the rates listed in our accessories catalog.",
  },
]

export function TestimonialsAndFAQ() {
  return (
    <>
      {/* Testimonials Section */}
      <section className="bg-black py-16 dark:bg-white sm:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-black text-white dark:text-black sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400 dark:text-gray-600">
              Trusted by schools, event planners, and families across India
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-800 bg-gray-900 dark:border-gray-200 dark:bg-gray-50">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <Quote className="mb-4 h-8 w-8 text-gray-700 dark:text-gray-300" />

                    {/* Rating */}
                    <div className="mb-4 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="mb-6 text-sm leading-relaxed text-gray-300 dark:text-gray-700">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-800 dark:bg-gray-200">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-white dark:text-black">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-gray-400 dark:text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Everything you need to know about our costume rental service
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl border-2 border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-900"
                >
                  <AccordionTrigger className="text-left font-bold text-black hover:no-underline dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  )
}
