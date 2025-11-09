"use client"

import { motion } from "framer-motion"
import { Users, Heart, MessageSquare, Sparkles, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AlumniCTA() {
  const actions = [
    {
      icon: Users,
      title: "Join the Network",
      description: "Connect with alumni worldwide and be part of the Footloose family",
      action: "Get Connected",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Mentor Students",
      description: "Share your expertise and inspire the next generation of dancers",
      action: "Become a Mentor",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: MessageSquare,
      title: "Share Your Story",
      description: "Tell us about your journey and inspire fellow alumni",
      action: "Submit Story",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Sparkles,
      title: "Give Back",
      description: "Support scholarships and help future dancers achieve their dreams",
      action: "Contribute",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20 dark:from-white dark:via-gray-100 dark:to-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-3xl dark:bg-black/5" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-3xl animation-delay-2000 dark:bg-black/5" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Main CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-300 dark:from-black dark:to-gray-700"
          >
            <Users className="h-12 w-12 text-black dark:text-white" />
          </motion.div>

          <h2 className="mb-6 text-4xl font-black text-white dark:text-black md:text-5xl lg:text-6xl">
            Strengthen the
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent dark:from-black dark:via-gray-700 dark:to-black">
              Footloose Legacy
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-xl text-white/80 dark:text-black/80">
            Your journey doesn't end at graduation. Join thousands of alumni making a lasting impact through mentorship, collaboration, and community.
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="group h-full overflow-hidden border-2 border-white bg-white/10 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/20 dark:border-black dark:bg-black/10 dark:hover:bg-black/20">
                  <div className="p-6 text-center">
                    {/* Icon */}
                    <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${action.color}`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-black text-white dark:text-black">
                      {action.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-sm text-white/70 dark:text-black/70">
                      {action.description}
                    </p>

                    {/* CTA Button */}
                    <button className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-all hover:gap-3 dark:text-black">
                      {action.action}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Final CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-3xl border-4 border-white bg-white p-12 text-center dark:border-black dark:bg-black"
        >
          <h3 className="mb-4 text-3xl font-black text-black dark:text-white md:text-4xl">
            Ready to Reconnect?
          </h3>
          <p className="mb-8 text-lg text-black/80 dark:text-white/80">
            Update your profile, explore opportunities, and stay connected with the global Footloose family.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full bg-black px-8 py-4 font-bold text-white transition-transform hover:scale-105 dark:bg-white dark:text-black">
              Update Your Profile
            </button>
            <button className="rounded-full border-2 border-black px-8 py-4 font-bold text-black transition-all hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
              Contact Alumni Team
            </button>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-8 text-white/60 dark:text-black/60">
            <div className="text-center">
              <p className="text-2xl font-black text-white dark:text-black">500+</p>
              <p className="text-xs">Active Members</p>
            </div>
            <div className="h-8 w-px bg-white/20 dark:bg-black/20" />
            <div className="text-center">
              <p className="text-2xl font-black text-white dark:text-black">25+</p>
              <p className="text-xs">Countries</p>
            </div>
            <div className="h-8 w-px bg-white/20 dark:bg-black/20" />
            <div className="text-center">
              <p className="text-2xl font-black text-white dark:text-black">100+</p>
              <p className="text-xs">Annual Events</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
