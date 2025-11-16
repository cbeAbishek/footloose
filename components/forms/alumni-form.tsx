"use client"

import { useState } from "react"
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
  email: z.union([z.string().email(), z.literal(""), z.undefined()]),
  phone: z.union([z.string().min(6), z.literal(""), z.undefined()]),
  current_location: z.union([z.string(), z.literal(""), z.undefined()]),
  headline: z.string().min(4, "Share a short headline"),
  bio: z.string().min(40, "Tell us more about your journey"),
  batch_year: z.union([
    z.coerce.number().int().min(1980).max(CURRENT_YEAR),
    z.literal(""),
    z.undefined(),
  ]),
  enrollment_year: z.union([
    z.coerce.number().int().min(1980).max(CURRENT_YEAR),
    z.literal(""),
    z.undefined(),
  ]),
  graduation_year: z.union([
    z.coerce.number().int().min(1980).max(CURRENT_YEAR),
    z.literal(""),
    z.undefined(),
  ]),
  training_duration_years: z.union([z.coerce.number().min(0), z.literal(""), z.undefined()]),
  dance_styles: z.union([z.string(), z.literal(""), z.undefined()]),
  current_role: z.union([z.string(), z.literal(""), z.undefined()]),
  current_organization: z.union([z.string(), z.literal(""), z.undefined()]),
  profession: z.union([z.string(), z.literal(""), z.undefined()]),
  achievements: z.union([z.string(), z.literal(""), z.undefined()]),
  notable_performances: z.union([z.string(), z.literal(""), z.undefined()]),
  awards: z.union([z.string(), z.literal(""), z.undefined()]),
  certifications: z.union([z.string(), z.literal(""), z.undefined()]),
  website_url: z.union([z.string().url(), z.literal(""), z.undefined()]),
  willing_to_mentor: z.coerce.boolean().optional().default(false),
  available_for_events: z.coerce.boolean().optional().default(false),
  photo: z.any().optional(),
})

export type AlumniFormValues = z.infer<typeof alumniSchema>

export function AlumniForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const form = useForm<AlumniFormValues>({
    resolver: zodResolver(alumniSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      current_location: "",
      headline: "",
      bio: "",
      batch_year: "",
      enrollment_year: "",
      graduation_year: "",
      training_duration_years: "",
      dance_styles: "",
      current_role: "",
      current_organization: "",
      profession: "",
      achievements: "",
      notable_performances: "",
      awards: "",
      certifications: "",
      website_url: "",
      willing_to_mentor: false,
      available_for_events: false,
      photo: undefined,
    },
  })

  const onSubmit = async (values: AlumniFormValues) => {
    setSubmitting(true)

    const formData = new FormData()
    formData.set("full_name", values.full_name)
    formData.set("email", values.email ?? "")
    formData.set("phone", values.phone ?? "")
    formData.set("current_location", values.current_location ?? "")
    formData.set("headline", values.headline)
    formData.set("bio", values.bio)
    formData.set("batch_year", values.batch_year ? String(values.batch_year) : "")
    formData.set("enrollment_year", values.enrollment_year ? String(values.enrollment_year) : "")
    formData.set("graduation_year", values.graduation_year ? String(values.graduation_year) : "")
    formData.set(
      "training_duration_years",
      values.training_duration_years ? String(values.training_duration_years) : "",
    )
    formData.set("dance_styles", values.dance_styles ?? "")
    formData.set("current_role", values.current_role ?? "")
    formData.set("current_organization", values.current_organization ?? "")
    formData.set("profession", values.profession ?? "")
    formData.set("achievements", values.achievements ?? "")
    formData.set("notable_performances", values.notable_performances ?? "")
    formData.set("awards", values.awards ?? "")
    formData.set("certifications", values.certifications ?? "")
    formData.set("website_url", values.website_url ?? "")
    formData.set("willing_to_mentor", String(values.willing_to_mentor ?? false))
    formData.set("available_for_events", String(values.available_for_events ?? false))

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
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="(+91)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="current_location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current location</FormLabel>
                <FormControl>
                  <Input placeholder="City, Country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
        <div className="grid gap-6 sm:grid-cols-4">
          {[
            { name: "batch_year", label: "Batch year" },
            { name: "enrollment_year", label: "Enrollment year" },
            { name: "graduation_year", label: "Graduation year" },
            { name: "training_duration_years", label: "Training years" },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={form.control}
              name={name as keyof AlumniFormValues}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="YYYY"
                      value={field.value ?? ""}
                      onChange={(event) => field.onChange(event.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <FormField
          control={form.control}
          name="dance_styles"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dance styles</FormLabel>
              <FormControl>
                <Input placeholder="Comma separated styles" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="current_role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current role</FormLabel>
                <FormControl>
                  <Input placeholder="Creative Director" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="current_organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization</FormLabel>
                <FormControl>
                  <Input placeholder="Company / Crew" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profession</FormLabel>
              <FormControl>
                <Input placeholder="Performer, Founder, Educator" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="achievements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Achievements</FormLabel>
              <FormControl>
                <Textarea rows={3} placeholder="Share awards or highlights" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-6 sm:grid-cols-3">
          <FormField
            control={form.control}
            name="notable_performances"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notable performances</FormLabel>
                <FormControl>
                  <Input placeholder="Comma separated" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="awards"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Awards</FormLabel>
                <FormControl>
                  <Input placeholder="Comma separated" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="certifications"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Certifications</FormLabel>
                <FormControl>
                  <Input placeholder="Comma separated" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="website_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website / profile</FormLabel>
              <FormControl>
                <Input placeholder="https://" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4 rounded-2xl border border-border/60 p-4 sm:flex-row">
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={form.watch("willing_to_mentor")}
              onChange={(event) => form.setValue("willing_to_mentor", event.target.checked)}
            />
            Available to mentor current students
          </label>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={form.watch("available_for_events")}
              onChange={(event) => form.setValue("available_for_events", event.target.checked)}
            />
            Open for events / talks
          </label>
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
