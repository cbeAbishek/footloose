"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArticleHeader } from "./ArticleHeader"
import { ArticleContent } from "./ArticleContent"
import { RelatedPosts } from "./RelatedPosts"
import { ShareActions } from "./ShareActions"
import { BlogPost, RelatedPost } from "./types"
import { toast } from "@/hooks/use-toast"

interface BlogPostViewProps {
  post: BlogPost
  relatedPosts: RelatedPost[]
}

export function BlogPostView({ post, relatedPosts }: BlogPostViewProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.summary,
          url: window.location.href,
        })
        .catch(() => {})
    } else {
      toast({
        title: "Share this article",
        description: "Use the share buttons on the side to share this article.",
      })
    }
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <div className="min-h-screen bg-white py-12 dark:bg-black">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            asChild
            variant="ghost"
            className="text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        {/* Article Header */}
        <ArticleHeader post={post} onShare={handleShare} />

        {/* Article Content */}
        <ArticleContent content={post.body} />

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="rounded-3xl border-2 border-black bg-black p-8 text-center dark:border-white dark:bg-white md:p-12">
            <h3 className="mb-3 text-2xl font-black text-white dark:text-black md:text-3xl">
              Enjoyed this article?
            </h3>
            <p className="mb-6 text-gray-300 dark:text-gray-700">
              Subscribe to our newsletter for more dance insights, tips, and stories
            </p>
            <div className="mx-auto flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border-2 border-white bg-transparent px-6 py-3 text-white placeholder:text-gray-400 focus:outline-none dark:border-black dark:text-black dark:placeholder:text-gray-500"
              />
              <button className="rounded-full bg-white px-8 py-3 font-bold text-black transition-transform hover:scale-105 dark:bg-black dark:text-white">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Share Actions (Floating) */}
      <ShareActions title={post.title} url={currentUrl} />
    </div>
  )
}
