import { NextResponse } from "next/server"

import { getBlogPosts } from "@/lib/queries"

export const revalidate = 3600

const siteUrl = "http://localhost:3000/"

export async function GET() {
  const posts = await getBlogPosts()

  const feedItems = posts
    .map((post) => {
      const published = post.created_at ? new Date(post.created_at).toUTCString() : new Date().toUTCString()
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${siteUrl}/blog/${post.slug}</link>
          <guid>${siteUrl}/blog/${post.slug}</guid>
          <pubDate>${published}</pubDate>
          <description><![CDATA[${post.summary}]]></description>
        </item>
      `
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Footloose Edwin's Dance Company</title>
      <link>${siteUrl}/blog</link>
      <description>Stories and updates from Footloose.</description>
      ${feedItems}
    </channel>
  </rss>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
