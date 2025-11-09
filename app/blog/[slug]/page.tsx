import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPostView } from "@/components/blog/BlogPostView"
import { sampleBlogPosts, getRelatedPosts, calculateReadingTime } from "@/components/blog/data"
import { BlogPost as BlogPostType } from "@/components/blog/types"

interface BlogPostPageProps {
  params: { slug: string }
}

// For demo purposes, we'll use sample data
// In production, you would fetch from Supabase
async function getPost(slug: string): Promise<BlogPostType | null> {
  return sampleBlogPosts.find((post) => post.slug === slug && post.published) || null
}

export async function generateStaticParams() {
  return sampleBlogPosts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slug,
    }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: "Post not found",
    }
  }

  return {
    title: `${post.title} | Edwin's Dance Company Blog`,
    description: post.summary,
    keywords: [
      post.title,
      ...post.tags,
      "Edwin's Dance Company",
      "Footloose",
      "dance blog",
      post.category,
    ],
    authors: [{ name: post.author_name }],
    creator: post.author_name,
    publisher: "Edwin's Dance & Costume Company",
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://footloose.online/blog/${post.slug}`,
      siteName: "Footloose Edwin's Dance Company",
      type: "article",
      publishedTime: post.published_at || post.created_at,
      authors: [post.author_name],
      locale: "en_IN",
      images: post.thumbnail_url
        ? [
            {
              url: post.thumbnail_url,
              width: 1200,
              height: 630,
              alt: post.title,
            },
            {
              url: post.thumbnail_url,
              width: 1920,
              height: 1080,
              alt: post.title,
            },
          ]
        : [
            {
              url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: post.thumbnail_url
        ? [post.thumbnail_url]
        : ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
      creator: "@footloosedance",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://footloose.online/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, sampleBlogPosts)

  return <BlogPostView post={post} relatedPosts={relatedPosts} />
}
