import type { MetadataRoute } from "next"

import { getBlogPosts } from "@/lib/queries"

const baseUrl = "http://localhost:3000/"

const staticRoutes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/choreography", changeFrequency: "monthly", priority: 0.6 },
  { path: "/services/dance-class", changeFrequency: "monthly", priority: 0.6 },
  { path: "/services/chair-co-cise", changeFrequency: "monthly", priority: 0.6 },
  { path: "/services/esp-showcase", changeFrequency: "monthly", priority: 0.6 },
  { path: "/services/events", changeFrequency: "monthly", priority: 0.6 },
  { path: "/services/events/Corporate-event", changeFrequency: "monthly", priority: 0.5 },
  { path: "/services/events/Entry", changeFrequency: "monthly", priority: 0.5 },
  { path: "/services/events/Fashion-show", changeFrequency: "monthly", priority: 0.5 },
  { path: "/services/events/school-Annualday", changeFrequency: "monthly", priority: 0.5 },
  { path: "/services/la-ramp", changeFrequency: "monthly", priority: 0.6 },
  { path: "/alumni", changeFrequency: "monthly", priority: 0.7 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.6 },
  { path: "/costume-design", changeFrequency: "monthly", priority: 0.6 },
  { path: "/costume-rental", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/portal", changeFrequency: "monthly", priority: 0.4 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  const posts = await getBlogPosts()

  const staticEntries = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))

  const blogEntries = (posts ?? []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.created_at ? new Date(post.created_at) : lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
