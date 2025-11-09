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
  const communityChannels = [
    {
      name: "WhatsApp Community",
      description: "Daily updates, quick discussions, and instant connections",
      icon: MessageCircle,
      link: "https://chat.whatsapp.com/G3ZCbRix42p8Oticppo2Tj?mode=wwt",
      color: "bg-green-500"
    }
  ]

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-950">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
            Stay Connected
          </p>
          <h2 className="mb-6 text-4xl font-black text-black dark:text-white md:text-5xl lg:text-6xl">
            Alumni Network & Community
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Join active conversations, attend exclusive events, and stay connected with the global Footloose family.
          </p>
        </motion.div>

        {/* Community Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-center text-2xl font-black text-black dark:text-white">
            Join Our Community Channels
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {communityChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <a
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="group h-full overflow-hidden border-2 border-black bg-white transition-all hover:scale-[1.02] hover:shadow-xl dark:border-white dark:bg-black">
                      <CardContent className="p-6 text-center">
                        <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${channel.color} transition-transform group-hover:scale-110`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="mb-2 text-lg font-black text-black dark:text-white">
                          {channel.name}
                        </h4>
                        <p className="text-sm text-black/70 dark:text-white/70">
                          {channel.description}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
