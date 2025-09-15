"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

const themes = [
  {
    id: "edwins-ai",
    title: "Edwin's AI",
    description: "Futuristic dance performances with AI-inspired choreography",
    image: "/futuristic-ai-dance-performance-with-neon-lights.jpg",
    color: "from-blue-500 to-purple-600",
    badge: "New",
  },
  {
    id: "dinosaur",
    title: "Dinosaur Adventure",
    description: "Prehistoric fun with educational dance storytelling",
    image: "/children-dancing-in-dinosaur-costumes-colorful-sta.jpg",
    color: "from-green-500 to-emerald-600",
    badge: "Popular",
  },
  {
    id: "avengers",
    title: "Avengers",
    description: "Superhero-themed performances with action choreography",
    image: "/dancers-in-superhero-costumes-action-poses.jpg",
    color: "from-red-500 to-blue-600",
    badge: "Trending",
  },
  {
    id: "snow-white",
    title: "Snow White",
    description: "Classic fairy tale brought to life through dance",
    image: "/elegant-fairy-tale-dance-performance-snow-white.jpg",
    color: "from-pink-500 to-rose-600",
    badge: "Classic",
  },
]

export function ThemesPreview() {
  const [hoveredTheme, setHoveredTheme] = useState<string | null>(null)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Themed <span className="text-primary">Experiences</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Immerse yourself in our signature themed performances. Each theme offers unique choreography, costumes, and
            storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {themes.map((theme) => (
            <Card
              key={theme.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredTheme(theme.id)}
              onMouseLeave={() => setHoveredTheme(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={theme.image || "/placeholder.svg"}
                  alt={theme.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${theme.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {theme.badge}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="shadow-lg">
                    Preview Theme
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{theme.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty mb-4">{theme.description}</p>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href={`/themes/${theme.id}`}>
                    Explore Theme
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/themes">
              View All Themes
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
