import type { MetadataRoute } from "next"

const baseUrl = "https://footloose.online"

const routes = [
  "",
  "/about",
  "/services",
  "/services/choreography",
  "/services/classes",
  "/services/props",
  "/services/chaircoCISE",
  "/gallery",
  "/themes",
  "/themes/avengers",
  "/themes/dinosaur",
  "/themes/edwins-ai",
  "/themes/snow-white",
  "/blog",
  "/contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
