"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Music,
  Sparkles,
  Heart,
  GraduationCap,
  Footprints,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { servicesData } from "./data";

const servicesList = [
  {
    key: "danceClasses",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
  },
  {
    key: "choreography",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
  },
  {
    key: "events",
    icon: Music,
    color: "from-orange-500 to-red-500",
  },
  {
    key: "chairCoCise",
    icon: Heart,
    color: "from-green-500 to-emerald-500",
  },
  {
    key: "espShowcase",
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-500",
  },
  {
    key: "laRamp",
    icon: Footprints,
    color: "from-pink-500 to-rose-500",
  },
];

export function ServicesOverview() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
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
            className="absolute -top-1/2 -right-1/2 h-full w-full bg-gradient-to-br from-gray-200/20 to-transparent dark:from-gray-800/20 rounded-full blur-3xl"
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
            className="absolute -bottom-1/2 -left-1/2 h-full w-full bg-gradient-to-tl from-gray-200/20 to-transparent dark:from-gray-800/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="mb-6 bg-black/90 text-white backdrop-blur dark:bg-white/90 dark:text-black">
              30 Years of Excellence
            </Badge>
            <h1 className="mb-6 text-4xl font-black text-black dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Our Services
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
              From dance education to event production, we offer comprehensive
              solutions for every movement and creative need
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="scroll-mt-20 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-black text-black dark:text-white sm:text-4xl">
              What We Offer
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Professional services designed to bring your creative vision to
              life
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, index) => {
              const data =
                servicesData[service.key as keyof typeof servicesData];
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/services/${data.slug}`}>
                    <Card className="group h-full overflow-hidden border-2 border-gray-200 bg-white transition-all duration-500 hover:border-black hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={data.heroImage}
                          alt={data.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Icon Badge */}
                        <div className="absolute left-4 top-4">
                          <div
                            className={`rounded-full bg-gradient-to-br ${service.color} p-3 shadow-lg backdrop-blur`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>

                        {/* Tagline */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge className="mb-2 bg-white/90 text-black backdrop-blur">
                            {data.tagline}
                          </Badge>
                          <h3 className="text-2xl font-black text-white">
                            {data.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-6">
                        <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-400">
                          {data.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6 space-y-2">
                          {data.features.slice(0, 3).map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-black dark:bg-white" />
                              <span className="text-gray-700 dark:text-gray-300">
                                {feature.title}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-black dark:text-white">
                            {data.pricing.split("/")[0]}
                          </span>
                          <Button
                            variant="ghost"
                            className="group/btn p-0 text-black hover:bg-transparent dark:text-white"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-16 dark:bg-white sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "30+", label: "Years Experience" },
              { number: "10,000+", label: "Students Trained" },
              { number: "500+", label: "Events Produced" },
              { number: "100+", label: "Corporate Clients" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-black text-white dark:text-black sm:text-5xl">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-400 dark:text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 text-center dark:border-gray-800 dark:from-gray-950 dark:to-gray-900 sm:p-12 md:p-16"
          >
            <h2 className="mb-4 text-3xl font-black text-black dark:text-white sm:text-4xl md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Contact us today to discuss your project and discover how we can
              bring your vision to life
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
              >
                <a href="tel:+919842222467">Call +91 9842222467</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Link href="/contact">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
