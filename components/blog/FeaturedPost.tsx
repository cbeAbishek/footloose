"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlogPost, categoryColors } from "./types"
import { formatDate } from "./data"

interface FeaturedPostProps {
  post: BlogPost
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="mb-6 flex items-center gap-3">
        <TrendingUp className="h-6 w-6 text-black dark:text-white" />
        <h2 className="text-2xl font-black text-black dark:text-white">
          Featured Article
        </h2>
      </div>

      <Card className="group overflow-hidden border-2 border-black bg-white transition-all duration-500 hover:shadow-2xl dark:border-white dark:bg-black">
        <CardContent className="p-0">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Image Section */}
            <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden md:h-auto">
              <Image
                src={post.thumbnail_url || "/assets/placeholder-blog.jpg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute left-4 top-4">
                <Badge className={`border ${post.category !== "all" ? categoryColors[post.category] : "bg-gray-500/10 text-gray-600"}`}>
                  {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </Badge>
              </div>
            </Link>

            {/* Content Section */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              {/* Meta Info */}
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.published_at || post.created_at)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.reading_time} min read</span>
                </div>
              </div>

              {/* Title */}
              <Link href={`/blog/${post.slug}`}>
                <h3 className="mb-4 text-3xl font-black leading-tight text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-400 md:text-4xl">
                  {post.title}
                </h3>
              </Link>

              {/* Summary */}
              <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
                {post.summary}
              </p>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-gray-300 bg-transparent text-xs dark:border-gray-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Author & CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {post.author_avatar && (
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-gray-200 dark:border-gray-800">
                      <Image
                        src={post.author_avatar}
                        alt={post.author_name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="text-sm">
                    <div className="font-bold text-black dark:text-white">
                      {post.author_name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {post.views.toLocaleString()} views
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read Article
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
