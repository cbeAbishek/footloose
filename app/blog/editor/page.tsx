"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { BlogPostForm } from "@/components/forms/blog-post-form"
import { useSupabase } from "@/hooks/use-supabase"

export default function BlogEditorPage() {
  const router = useRouter()
  const supabase = useSupabase()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace("/portal")
      }
    })
  }, [router, supabase])

  return (
    <main className="min-h-screen bg-white py-16 dark:bg-black">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-black/50 dark:text-white/60">
            Editorial Desk
          </p>
          <h1 className="text-3xl font-black text-black dark:text-white md:text-4xl">
            Publish a New Story
          </h1>
          <p className="mt-4 text-base text-black/70 dark:text-white/70">
            Share creative insights, behind-the-scenes stories, wellness advice, or dance tutorials. Attach an optional thumbnail for social previews.
          </p>
        </div>
        <div className="rounded-3xl border-2 border-black bg-white p-8 shadow-xl dark:border-white dark:bg-black sm:p-12">
          <BlogPostForm />
        </div>
      </div>
    </main>
  )
}
