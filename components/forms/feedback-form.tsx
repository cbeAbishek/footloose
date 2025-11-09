"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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

const feedbackSchema = z.object({
  full_name: z.string().min(2, "Enter your name"),
  role: z.string().min(2, "Share your role"),
  testimonial: z.string().min(40, "Tell us more"),
  rating: z.number({ invalid_type_error: "Provide a rating" }).min(1).max(5),
  image: z.any().optional(),
})

export type FeedbackFormValues = z.infer<typeof feedbackSchema>

export function FeedbackForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      full_name: "",
      role: "",
      testimonial: "",
      rating: 5,
      image: undefined,
    },
  })

  const handleSubmit = async (values: FeedbackFormValues) => {
    setSubmitting(true)

    const formData = new FormData()
    formData.set("full_name", values.full_name)
    formData.set("role", values.role)
    formData.set("testimonial", values.testimonial)
    formData.set("rating", String(values.rating))

    const image = extractFile(values.image)
    if (image) {
      formData.set("image", image)
    }

    const result = await submitForm("feedback", formData)
    setSubmitting(false)

    if (result.success) {
      toast({
        title: "Thank you",
        description: "Your note helps us keep improving.",
      })
      form.reset({
        full_name: "",
        role: "",
        testimonial: "",
        rating: 5,
        image: undefined,
      })
      return
    }

    toast({
      title: "Could not submit",
      description: result.error ?? "Please retry soon.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input placeholder="Parent, Client, Performer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="testimonial"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Share your experience with Footloose" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={field.value}
                  onChange={(event) => field.onChange(Number(event.target.value))}
                  className="w-full accent-foreground"
                />
              </FormControl>
              <p className="text-xs text-foreground/50">{field.value} / 5</p>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image (optional)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(event) => field.onChange(event.target.files ?? undefined)}
                />
              </FormControl>
              <p className="text-xs text-foreground/50">Include a photo to highlight your story.</p>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Send feedback"}
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
