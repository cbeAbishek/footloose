"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RelatedPost, categoryColors } from "./types"
import { formatDate } from "./data"

interface RelatedPostsProps {
  posts: RelatedPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 border-t border-gray-200 pt-16 dark:border-gray-800"
    >
      <h2 className="mb-8 text-3xl font-black text-black dark:text-white">
        Related Articles
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group h-full overflow-hidden border-2 border-gray-200 bg-white transition-all duration-500 hover:border-black hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white">
              <Link href={`/blog/${post.slug}`} className="relative block h-40 overflow-hidden">
                <Image
                  src={post.thumbnail_url || "/assets/placeholder-blog.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute left-3 top-3">
                  <Badge className={`border text-xs ${post.category !== "all" ? categoryColors[post.category] : "bg-gray-500/10 text-gray-600"}`}>
                    {post.category}
                  </Badge>
                </div>
              </Link>

              <CardHeader className="pb-3">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="line-clamp-2 text-lg font-bold leading-tight text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-400">
                    {post.title}
                  </h3>
                </Link>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="line-clamp-2 text-sm text-gray-700 dark:text-gray-300">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.reading_time} min</span>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="h-auto p-0 text-black hover:bg-transparent hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
                  >
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
                      Read
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
