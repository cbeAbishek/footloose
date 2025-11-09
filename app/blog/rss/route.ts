import { NextResponse } from "next/server"
import { sampleBlogPosts } from "@/components/blog/data"

export const revalidate = 3600

const siteUrl = "https://footloose.online"

export async function GET() {
  const posts = sampleBlogPosts.filter((post) => post.published)

  const feedItems = posts
    .map((post) => {
      const published = new Date(post.published_at || post.created_at).toUTCString()
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${siteUrl}/blog/${post.slug}</link>
          <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
          <pubDate>${published}</pubDate>
          <description><![CDATA[${post.summary}]]></description>
          <content:encoded><![CDATA[${post.body}]]></content:encoded>
          <dc:creator>${post.author_name}</dc:creator>
          <category>${post.category}</category>
          ${post.tags.map((tag) => `<category>${tag}</category>`).join("\n          ")}
          ${post.thumbnail_url ? `<enclosure url="${post.thumbnail_url}" type="image/jpeg" />` : ""}
        </item>
      `
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" 
       xmlns:atom="http://www.w3.org/2005/Atom"
       xmlns:content="http://purl.org/rss/1.0/modules/content/"
       xmlns:dc="http://purl.org/dc/elements/1.1/">
    <channel>
      <title>Footloose Blog - Edwin's Dance &amp; Costume Company</title>
      <link>${siteUrl}/blog</link>
      <description>Dance stories, wellness tips, creative insights, event recaps, and tutorials from Edwin's Dance &amp; Costume Company.</description>
      <language>en-IN</language>
      <copyright>© 2024 Edwin's Dance &amp; Costume Company. All rights reserved.</copyright>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${siteUrl}/blog/rss" rel="self" type="application/rss+xml" />
      <image>
        <url>https://i.ibb.co/84DmJmx7/footloose.jpg</url>
        <title>Footloose Blog</title>
        <link>${siteUrl}/blog</link>
      </image>
      ${feedItems}
    </channel>
  </rss>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
