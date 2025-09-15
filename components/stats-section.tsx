"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Users, Calendar, Trophy, Heart } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Across schools, corporates, and individuals",
  },
  {
    icon: Calendar,
    value: 30,
    suffix: "",
    label: "Years Experience",
    description: "Three decades of dance excellence",
  },
  {
    icon: Trophy,
    value: 150,
    suffix: "+",
    label: "Performances",
    description: "Successful events and competitions",
  },
  {
    icon: Heart,
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Client happiness is our priority",
  },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export function StatsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Trusted by <span className="text-primary">Hundreds</span> of Clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Our numbers speak for themselves. Three decades of dedication to dance excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="font-semibold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground text-pretty">{stat.description}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
