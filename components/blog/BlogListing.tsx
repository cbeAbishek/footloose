"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { FeaturedPost } from "./FeaturedPost"
import { BlogCard } from "./BlogCard"
import { BlogFilters } from "./BlogFilters"
import { BlogCategory, BlogPost } from "./types"
import { sampleBlogPosts, sampleTags } from "./data"

export function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get featured post
  const featuredPost = useMemo(() => {
    return sampleBlogPosts.find((post) => post.featured && post.published)
  }, [])

  // Filter posts
  const filteredPosts = useMemo(() => {
    return sampleBlogPosts.filter((post) => {
      if (!post.published) return false
      if (post.id === featuredPost?.id) return false // Exclude featured post from list

      // Category filter
      if (selectedCategory !== "all" && post.category !== selectedCategory) {
        return false
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = post.title.toLowerCase().includes(query)
        const matchesSummary = post.summary.toLowerCase().includes(query)
        const matchesTags = post.tags.some((tag) => tag.toLowerCase().includes(query))
        if (!matchesTitle && !matchesSummary && !matchesTags) {
          return false
        }
      }

      // Tags filter
      if (selectedTags.length > 0) {
        const hasMatchingTag = post.tags.some((tag) => selectedTags.includes(tag))
        if (!hasMatchingTag) {
          return false
        }
      }

      return true
    })
  }, [selectedCategory, searchQuery, selectedTags, featuredPost])

  // Get all available tags from current filtered posts
  const availableTags = useMemo(() => {
    const tagCounts = new Map<string, number>()
    
    sampleBlogPosts.forEach((post) => {
      if (post.published) {
        post.tags.forEach((tag) => {
          tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)
        })
      }
    })

    return Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([tag]) => tag)
  }, [])

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen bg-white py-16 dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Featured Post */}
        {featuredPost && <FeaturedPost post={featuredPost} />}

        {/* Filters */}
        <BlogFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          availableTags={availableTags}
          totalResults={filteredPosts.length}
        />

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-20 text-center"
          >
            <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-900" />
            <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filters or search query
            </p>
          </motion.div>
        )}

        {/* Newsletter Signup Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="rounded-3xl border-2 border-black bg-black p-8 text-center dark:border-white dark:bg-white md:p-12">
            <h3 className="mb-3 text-2xl font-black text-white dark:text-black md:text-3xl">
              Stay Updated
            </h3>
            <p className="mb-6 text-gray-300 dark:text-gray-700">
              Subscribe to our newsletter for the latest articles, updates, and dance tips
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
    </div>
  )
}
