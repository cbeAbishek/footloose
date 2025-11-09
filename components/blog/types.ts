export type BlogCategory = 
  | "news"
  | "stories"
  | "wellness"
  | "events"
  | "tutorials"
  | "all"

export type CommentStatus = "pending" | "approved" | "rejected"

export interface BlogPost {
  id: string
  created_at: string
  updated_at?: string
  title: string
  slug: string
  summary: string
  body: string
  author_name: string
  author_avatar?: string
  thumbnail_url?: string
  category: BlogCategory
  tags: string[]
  featured: boolean
  published: boolean
  published_at?: string
  reading_time: number
  views: number
  source_link?: string
}

export interface BlogComment {
  id: string
  created_at: string
  post_id: string
  author_name: string
  author_email: string
  content: string
  status: CommentStatus
  parent_id?: string
  replies?: BlogComment[]
}

export interface BlogTag {
  id: string
  name: string
  slug: string
  color: string
  count: number
}

export interface BlogReaction {
  id: string
  post_id: string
  type: "like" | "love" | "insightful" | "inspiring"
  count: number
}

export interface RelatedPost {
  id: string
  title: string
  slug: string
  summary: string
  thumbnail_url?: string
  category: BlogCategory
  reading_time: number
  published_at: string
}

export interface BlogFilters {
  category?: BlogCategory
  tags?: string[]
  search?: string
  featured?: boolean
}

export const categoryLabels: Record<BlogCategory, string> = {
  all: "All Posts",
  news: "Company News",
  stories: "Success Stories",
  wellness: "Wellness & Tips",
  events: "Event Recaps",
  tutorials: "Tutorials & Guides",
}

export const categoryColors: Record<Exclude<BlogCategory, "all">, string> = {
  news: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-500/20 dark:text-blue-400",
  stories: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:bg-purple-500/20 dark:text-purple-400",
  wellness: "bg-green-500/10 text-green-600 border-green-500/20 dark:bg-green-500/20 dark:text-green-400",
  events: "bg-orange-500/10 text-orange-600 border-orange-500/20 dark:bg-orange-500/20 dark:text-orange-400",
  tutorials: "bg-pink-500/10 text-pink-600 border-pink-500/20 dark:bg-pink-500/20 dark:text-pink-400",
}

export const reactionEmojis = {
  like: "👍",
  love: "❤️",
  insightful: "💡",
  inspiring: "✨",
}
