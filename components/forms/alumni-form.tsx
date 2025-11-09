"use client"

import { useMemo, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
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

const CURRENT_YEAR = new Date().getFullYear()

const alumniSchema = z.object({
  full_name: z.string().min(2, "Please enter your full name"),
  headline: z.string().min(4, "Share a short headline"),
  bio: z.string().min(40, "Tell us more about your journey"),
  graduation_year: z
    .number({ invalid_type_error: "Enter a valid year" })
    .min(1980, "Year looks too early")
    .max(CURRENT_YEAR, "Year cannot be in the future"),
  email: z
    .string()
    .email("Enter a valid email")
    .optional()
    .or(z.literal("")),
  website: z
    .string()
    .url("Provide a valid link")
    .optional()
    .or(z.literal("")),
  photo: z.any().optional(),
})

export type AlumniFormValues = z.infer<typeof alumniSchema>

type AlumniSubmitPayload = Omit<AlumniFormValues, "photo"> & {
  photo?: File | null
}

export function AlumniForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const form = useForm<AlumniFormValues>({
    resolver: zodResolver(alumniSchema),
    defaultValues: {
      full_name: "",
      headline: "",
      bio: "",
      graduation_year: CURRENT_YEAR,
      email: "",
      website: "",
      photo: undefined,
    },
  })

  const onSubmit = async (values: AlumniFormValues) => {
    setSubmitting(true)

    const payload: AlumniSubmitPayload = {
      ...values,
      photo: undefined,
    }

    const formData = new FormData()
    formData.set("full_name", values.full_name)
    formData.set("headline", values.headline)
    formData.set("bio", values.bio)
    formData.set("graduation_year", String(values.graduation_year))
    formData.set("email", values.email ?? "")
    formData.set("website", values.website ?? "")

    const file = extractFile(values.photo)
    if (file) {
      formData.set("photo", file)
    }

    const result = await submitForm("alumni", formData)

    setSubmitting(false)

    if (result.success) {
      toast({
        title: "Profile submitted",
        description: "Our alumni desk will review and publish shortly.",
      })
      form.reset()
      return
    }

    toast({
      title: "Submission failed",
      description: result.error ?? "Please try again soon.",
    })
  }

  const graduationYearOptions = useMemo(() => {
    const years: number[] = []
    for (let year = CURRENT_YEAR; year >= 1990; year -= 1) {
      years.push(year)
    }
    return years
  }, [])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="headline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Headline</FormLabel>
                <FormControl>
                  <Input placeholder="Performer, Coach, Creative Director" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Journey</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Tell us about your Footloose experience and what you are building now." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-6 sm:grid-cols-3">
          <FormField
            control={form.control}
            name="graduation_year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Graduation year</FormLabel>
                <FormControl>
                  <select
                    className="flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    value={field.value}
                    onChange={(event) => field.onChange(Number(event.target.value))}
                  >
                    {graduationYearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email (optional)</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website / profile (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="https://" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Controller
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile photo (optional)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(event) => field.onChange(event.target.files ?? undefined)}
                />
              </FormControl>
              <p className="text-xs text-foreground/50">Upload JPEG or PNG up to 5 MB.</p>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Share my profile"}
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
