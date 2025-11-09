import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Container } from "@/components/layout/container"
import { Separator } from "@/components/ui/separator"
import { getBlogPost, getBlogPosts } from "@/lib/queries"

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post not found",
    }
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `http://localhost:3000//blog/${post.slug}`,
      type: "article",
      images: post.thumbnail_url
        ? [
            {
              url: post.thumbnail_url,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const publishedAt = post.created_at ? new Date(post.created_at).toLocaleDateString() : ""

  return (
    <Container className="space-y-10 py-16">
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Footloose Blog</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
            <span>By {post.author_name}</span>
            {publishedAt ? <span>{publishedAt}</span> : null}
            {post.source_link ? (
              <a href={post.source_link} target="_blank" rel="noreferrer" className="underline">
                Source link
              </a>
            ) : null}
          </div>
        </header>
        <Separator />
        <div className="prose prose-invert max-w-none text-sm leading-relaxed text-foreground/80">
          {post.body.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Container>
  )
}
