"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useSupabase } from "@/hooks/use-supabase"
import { submitForm } from "@/lib/form-submit"
import { toast } from "@/hooks/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const blogPostSchema = z.object({
  title: z.string().min(4, "Title is required"),
  slug: z
    .string()
    .min(2, "Slug is required")
    .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens only"),
  summary: z.string().min(20, "Summary should be at least 20 characters"),
  body: z.string().min(120, "Body requires at least 120 characters"),
  author_name: z.string().min(2, "Author is required"),
  source_link: z
    .string()
    .url("Provide a valid URL")
    .optional()
    .or(z.literal("")),
  thumbnail: z.any().optional(),
})

export type BlogPostFormValues = z.infer<typeof blogPostSchema>

export function BlogPostForm() {
  const supabase = useSupabase()
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [isSubmitting, setSubmitting] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setAuthenticated(Boolean(data.session))
    })
  }, [supabase])

  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      slug: "",
      summary: "",
      body: "",
      author_name: "",
      source_link: "",
      thumbnail: undefined,
    },
  })

  const handleSubmit = async (values: BlogPostFormValues) => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Authenticate with the admin portal before publishing.",
      })
      return
    }

    setSubmitting(true)

    const formData = new FormData()
    formData.set("title", values.title)
    formData.set("slug", values.slug)
    formData.set("summary", values.summary)
    formData.set("body", values.body)
    formData.set("author_name", values.author_name)
    formData.set("source_link", values.source_link ?? "")

    const thumbnail = extractFile(values.thumbnail)
    if (thumbnail) {
      formData.set("thumbnail", thumbnail)
    }

    const result = await submitForm("blog_posts", formData)

    setSubmitting(false)

    if (result.success) {
      toast({
        title: "Post published",
        description: "Your article is live and added to the feed.",
      })
      form.reset()
      return
    }

    toast({
      title: "Could not publish",
      description: result.error ?? "Try again or check your session.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {!isAuthenticated ? (
          <p className="rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            Sign in via the admin portal to publish new posts.
          </p>
        ) : null}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Footloose celebrates movement" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input placeholder="footloose-celebrates-movement" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Editorial Team" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea rows={3} placeholder="Short SEO description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Article body</FormLabel>
              <FormControl>
                <Textarea rows={10} placeholder="Compose your story in Markdown or plain text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="source_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Source link (optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thumbnail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail (optional)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(event) => field.onChange(event.target.files ?? undefined)}
                />
              </FormControl>
              <p className="text-xs text-foreground/50">Upload an image up to 5 MB for social previews.</p>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full" disabled={isSubmitting || !isAuthenticated}>
          {isSubmitting ? "Publishing..." : "Publish post"}
        </Button>
      </form>
    </Form>
  )
}

function extractFile(value: unknown): File | undefined {
  if (!value) return undefined
  if (value instanceof File) return value
  if (value instanceof FileList) {
    return value.length > 0 ? value[0] : undefined
  }
  if (Array.isArray(value)) {
    return value[0] instanceof File ? (value[0] as File) : undefined
  }
  return undefined
}
