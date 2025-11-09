"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Clock, Eye, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlogPost, categoryColors } from "./types"
import { formatDate } from "./data"

interface ArticleHeaderProps {
  post: BlogPost
  onShare: () => void
}

export function ArticleHeader({ post, onShare }: ArticleHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      {/* Category Badge */}
      <div className="mb-6">
        <Badge className={`border text-sm ${post.category !== "all" ? categoryColors[post.category] : "bg-gray-500/10 text-gray-600"}`}>
          {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
        </Badge>
      </div>

      {/* Title */}
      <h1 className="mb-6 text-4xl font-black leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
        {post.title}
      </h1>

      {/* Summary */}
      <p className="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
        {post.summary}
      </p>

      {/* Meta Information */}
      <div className="flex flex-wrap items-center justify-between gap-6 border-y border-gray-200 py-6 dark:border-gray-800">
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 border-2 border-gray-200 dark:border-gray-800">
            <AvatarImage src={post.author_avatar} alt={post.author_name} />
            <AvatarFallback className="bg-gray-200 dark:bg-gray-800">
              {post.author_name.split(" ").map(n => n[0]).join("").slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold text-black dark:text-white">
              {post.author_name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Author & Contributor
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.published_at || post.created_at)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.reading_time} min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>{post.views.toLocaleString()} views</span>
          </div>
        </div>

        {/* Share Button */}
        <Button
          onClick={onShare}
          variant="outline"
          size="sm"
          className="border-2 border-gray-300 dark:border-gray-700"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>

      {/* Cover Image */}
      {post.thumbnail_url && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-8 h-96 overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-800 md:h-[500px]"
        >
          <Image
            src={post.thumbnail_url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      )}

      {/* Tags */}
      <div className="mt-8 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="border-gray-300 bg-transparent dark:border-gray-700"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}
