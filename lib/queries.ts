import "server-only"

import { cache } from "react"

import { createSupabaseStaticClient, isSupabaseStaticClientEnabled } from "@/lib/supabase"
import { fallbackAlumni, fallbackBlogPosts, fallbackFeedback } from "@/lib/static-content"
import type {
  AlumniRecord,
  BlogPostRecord,
  FeedbackRecord,
} from "@/types/tables"

export const getFeedback = cache(async (limit = 8): Promise<FeedbackRecord[]> => {
  const fallback = fallbackFeedback.slice(0, limit)

  if (!isSupabaseStaticClientEnabled()) {
    return fallback
  }

  try {
    const supabase = createSupabaseStaticClient()
    const { data, error } = await supabase
      .from("feedback")
      .select("id, created_at, full_name, role, testimonial, rating, image_url")
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.warn("[queries:getFeedback] Falling back to static testimonials.", error.message ?? error)
      return fallback
    }

    return data ?? fallback
  } catch (error) {
    console.warn("[queries:getFeedback] Falling back to static testimonials.",
      error instanceof Error ? error.message : error,
    )
    return fallback
  }
})

export const getFeaturedAlumni = cache(async (limit = 12): Promise<AlumniRecord[]> => {
  const fallback = fallbackAlumni.slice(0, limit)

  if (!isSupabaseStaticClientEnabled()) {
    return fallback
  }

  try {
    const supabase = createSupabaseStaticClient()
    const { data, error } = await supabase
      .from("alumni")
      .select(
        "id, created_at, full_name, headline, bio, graduation_year, email, website, photo_url",
      )
      .order("graduation_year", { ascending: false })
      .limit(limit)

    if (error) {
      console.warn(
        "[queries:getFeaturedAlumni] Falling back to static alumni showcase.",
        error.message ?? error,
      )
      return fallback
    }

    return data ?? fallback
  } catch (error) {
    console.warn(
      "[queries:getFeaturedAlumni] Falling back to static alumni showcase.",
      error instanceof Error ? error.message : error,
    )
    return fallback
  }
})

export const getBlogPosts = cache(async (): Promise<BlogPostRecord[]> => {
  const fallback = fallbackBlogPosts

  if (!isSupabaseStaticClientEnabled()) {
    return fallback
  }

  try {
    const supabase = createSupabaseStaticClient()
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id, created_at, title, slug, summary, body, author_name, source_link, thumbnail_url",
      )
      .order("created_at", { ascending: false })

    if (error) {
      console.warn("[queries:getBlogPosts] Falling back to static article feed.", error.message ?? error)
      return fallback
    }

    return data ?? fallback
  } catch (error) {
    console.warn(
      "[queries:getBlogPosts] Falling back to static article feed.",
      error instanceof Error ? error.message : error,
    )
    return fallback
  }
})

export const getBlogPost = cache(async (slug: string): Promise<BlogPostRecord | null> => {
  const fallback = fallbackBlogPosts.find((post) => post.slug === slug) ?? null

  if (!isSupabaseStaticClientEnabled()) {
    return fallback
  }

  try {
    const supabase = createSupabaseStaticClient()
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id, created_at, title, slug, summary, body, author_name, source_link, thumbnail_url",
      )
      .eq("slug", slug)
      .maybeSingle()

    if (error) {
      console.warn(
        `[queries:getBlogPost:${slug}] Falling back to static article feed.`,
        error.message ?? error,
      )
      return fallback
    }

    return data ?? fallback
  } catch (error) {
    console.warn(
      `[queries:getBlogPost:${slug}] Falling back to static article feed.`,
      error instanceof Error ? error.message : error,
    )
    return fallback
  }
})
