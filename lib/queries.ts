import "server-only"

import { cache } from "react"

import { createSupabaseServerClient } from "@/lib/supabase"
import type {
  AlumniRecord,
  BlogPostRecord,
  FeedbackRecord,
} from "@/types/tables"

const withFallback = <T>(value: T | null | undefined, fallback: T): T =>
  value ?? fallback

export const getFeedback = cache(async (limit = 8): Promise<FeedbackRecord[]> => {
  try {
    const supabase = createSupabaseServerClient()
    const { data, error } = await supabase
      .from("feedback")
      .select("id, created_at, full_name, role, testimonial, rating, image_url")
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("[queries:getFeedback]", error)
      return []
    }

    return data ?? []
  } catch (error) {
    console.error("[queries:getFeedback]", error)
    return []
  }
})

export const getFeaturedAlumni = cache(async (limit = 12): Promise<AlumniRecord[]> => {
  try {
    const supabase = createSupabaseServerClient()
    const { data, error } = await supabase
      .from("alumni")
      .select(
        "id, created_at, full_name, headline, bio, graduation_year, email, website, photo_url",
      )
      .order("graduation_year", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("[queries:getFeaturedAlumni]", error)
      return []
    }

    return data ?? []
  } catch (error) {
    console.error("[queries:getFeaturedAlumni]", error)
    return []
  }
})

export const getBlogPosts = cache(async (): Promise<BlogPostRecord[]> => {
  try {
    const supabase = createSupabaseServerClient()
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id, created_at, title, slug, summary, body, author_name, source_link, thumbnail_url",
      )
      .order("created_at", { ascending: false })

    if (error) {
      console.error("[queries:getBlogPosts]", error)
      return []
    }

    return data ?? []
  } catch (error) {
    console.error("[queries:getBlogPosts]", error)
    return []
  }
})

export const getBlogPost = cache(async (slug: string): Promise<BlogPostRecord | null> => {
  try {
    const supabase = createSupabaseServerClient()
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id, created_at, title, slug, summary, body, author_name, source_link, thumbnail_url",
      )
      .eq("slug", slug)
      .maybeSingle()

    if (error) {
      console.error(`[queries:getBlogPost:${slug}]`, error)
      return null
    }

    return withFallback(data, null)
  } catch (error) {
    console.error(`[queries:getBlogPost:${slug}]`, error)
    return null
  }
})
