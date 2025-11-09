"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar, Eye } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BlogPost, categoryColors } from "./types"
import { formatDate } from "./data"

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden border-2 border-gray-200 bg-white transition-all duration-500 hover:border-black hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white">
        {/* Thumbnail */}
        <Link href={`/blog/${post.slug}`} className="relative block h-48 overflow-hidden">
          <Image
            src={post.thumbnail_url || "/assets/placeholder-blog.jpg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute left-3 top-3">
            <Badge className={`border text-xs ${post.category !== "all" ? categoryColors[post.category] : "bg-gray-500/10 text-gray-600"}`}>
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </Badge>
          </div>

          {/* Reading Time */}
          <div className="absolute bottom-3 right-3">
            <Badge className="border border-white/20 bg-black/60 text-white backdrop-blur">
              <Clock className="mr-1 h-3 w-3" />
              {post.reading_time} min
            </Badge>
          </div>
        </Link>

        <CardHeader className="pb-3">
          {/* Title */}
          <Link href={`/blog/${post.slug}`}>
            <h3 className="mb-2 line-clamp-2 text-xl font-bold leading-snug text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-400">
              {post.title}
            </h3>
          </Link>

          {/* Meta Info */}
          <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(post.published_at || post.created_at)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{post.views.toLocaleString()}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-4">
          {/* Summary */}
          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {post.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-gray-300 bg-transparent text-xs dark:border-gray-700"
              >
                {tag}
              </Badge>
            ))}
            {post.tags.length > 2 && (
              <Badge
                variant="outline"
                className="border-gray-300 bg-transparent text-xs dark:border-gray-700"
              >
                +{post.tags.length - 2}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="border-t border-gray-100 pt-4 dark:border-gray-800">
          <div className="flex w-full items-center justify-between">
            {/* Author */}
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-gray-200 dark:border-gray-800">
                <AvatarImage src={post.author_avatar} alt={post.author_name} />
                <AvatarFallback className="bg-gray-200 text-xs dark:bg-gray-800">
                  {post.author_name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-black dark:text-white">
                {post.author_name}
              </span>
            </div>

            {/* CTA */}
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <Link href={`/blog/${post.slug}`}>
                Read More
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
