"use client"

import { motion } from "framer-motion"
import { MessageCircle, Calendar, Bell, Users, Facebook, Instagram, Youtube } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { AlumniEvent } from "./types"

interface AlumniNetworkProps {
  events: AlumniEvent[]
}

export function AlumniNetwork({ events }: AlumniNetworkProps) {
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
            Stay Connected
          </p>
          <h2 className="mb-6 text-4xl font-black text-black dark:text-white md:text-5xl lg:text-6xl">
            Join Our Alumni Community
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Connect with fellow alumni, share experiences, and stay updated with exclusive events and opportunities.
          </p>
        </motion.div>

        {/* WhatsApp Community Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <Card className="group overflow-hidden border-2 border-black bg-gradient-to-br from-green-50 to-white transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:from-green-950 dark:to-black dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <CardContent className="p-8 md:p-12">
              {/* Icon Header */}
              <div className="mb-6 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <div className="absolute -inset-2 rounded-full bg-green-500/20 blur-xl" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-green-500 bg-green-500">
                    <MessageCircle className="h-12 w-12 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="mb-8 text-center">
                <h3 className="mb-3 text-3xl font-black text-black dark:text-white md:text-4xl">
                  WhatsApp Alumni Community
                </h3>
                <p className="mb-4 text-lg text-black/70 dark:text-white/70">
                  Join our active WhatsApp group for daily updates, quick discussions, and instant connections with the Footloose family worldwide.
                </p>
                
                {/* Features */}
                <div className="mx-auto mb-6 grid max-w-md gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm text-black/80 dark:text-white/80">
                      Connect with 500+ alumni worldwide
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm text-black/80 dark:text-white/80">
                      Get exclusive event invitations & updates
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                      <Bell className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm text-black/80 dark:text-white/80">
                      Stay informed with instant notifications
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://chat.whatsapp.com/G3ZCbRix42p8Oticppo2Tj?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn relative mx-auto flex w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-black bg-green-500 px-8 py-4 text-lg font-black text-white transition-all hover:bg-green-600 dark:border-white"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  Join WhatsApp Group
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>

              {/* Privacy Note */}
              <p className="mt-4 text-center text-xs text-black/50 dark:text-white/50">
                By joining, you agree to maintain community guidelines and respect fellow members.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
