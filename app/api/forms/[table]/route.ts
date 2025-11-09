import { randomUUID } from "crypto"
import { NextResponse } from "next/server"
import { z } from "zod"

import { createSupabaseServerClient } from "@/lib/supabase"

export const runtime = "nodejs"

type TableConfig = {
  schema: z.ZodTypeAny
  fileField?: string
  storageField?: string
  bucket?: string
}

const tableSchemas: Record<string, TableConfig> = {
  inquiries: {
    schema: z.object({
      full_name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(6).max(20),
      topic: z.string().min(2),
      message: z.string().min(10),
    }),
  },
  class_registrations: {
    schema: z.object({
      student_name: z.string().min(2),
      guardian_name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(6).max(20),
      preferred_style: z.string().min(2),
      experience_level: z.string().min(1),
      message: z.string().optional().default(""),
    }),
  },
  event_bookings: {
    schema: z.object({
      organization: z.string().min(2),
      contact_name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(6).max(20),
      event_date: z.string().min(4),
      location: z.string().min(2),
      audience_size: z.string().min(1),
      notes: z.string().optional().default(""),
    }),
  },
  costume_rentals: {
    schema: z.object({
      full_name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(6).max(20),
      event_date: z.string().min(4),
      theme: z.string().min(2),
      sizes: z.string().min(2),
      notes: z.string().optional().default(""),
    }),
  },
  server_requests: {
    schema: z.object({
      requester: z.string().min(2),
      department: z.string().min(2),
      priority: z.enum(["low", "medium", "high"]),
      summary: z.string().min(4),
      details: z.string().min(10),
    }),
  },
  career_applications: {
    schema: z.object({
      full_name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(6).max(20),
      role: z.string().min(2),
      experience_years: z.coerce.number().min(0).max(50),
      portfolio_url: z
        .string()
        .url()
        .optional()
        .or(z.literal("")),
      cover_letter: z.string().optional().default(""),
    }),
  },
  blog_posts: {
    schema: z.object({
      title: z.string().min(4),
      slug: z
        .string()
        .min(2)
        .regex(/^[a-z0-9\-]+$/),
      summary: z.string().min(10).max(240),
      body: z.string().min(50),
      author_name: z.string().min(2),
      source_link: z
        .string()
        .url()
        .optional()
        .or(z.literal("")),
    }),
    fileField: "thumbnail",
    storageField: "thumbnail_url",
    bucket: "uploads",
  },
  alumni: {
    schema: z.object({
      full_name: z.string().min(2),
      headline: z.string().min(4),
      bio: z.string().min(20),
      graduation_year: z.coerce.number().min(1980).max(new Date().getFullYear()),
      email: z.string().email().optional().or(z.literal("")),
      website: z.string().url().optional().or(z.literal("")),
      photo_url: z.string().url().optional(),
    }),
    fileField: "photo",
    storageField: "photo_url",
    bucket: "profile",
  },
  feedback: {
    schema: z.object({
      full_name: z.string().min(2),
      role: z.string().min(2),
      testimonial: z.string().min(20),
      rating: z.coerce.number().min(1).max(5),
      image_url: z.string().url().optional(),
    }),
    fileField: "image",
    storageField: "image_url",
    bucket: "profile",
  },
}

export async function POST(
  request: Request,
  { params }: { params: { table: keyof typeof tableSchemas } },
) {
  const config = tableSchemas[params.table]

  if (!config) {
    return NextResponse.json({ error: "Unknown form" }, { status: 404 })
  }

  const contentType = request.headers.get("content-type") || ""
  const supabase = createSupabaseServerClient()

  try {
  let payload: Record<string, unknown> = {}
  let file: File | undefined

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData()
      formData.forEach((value, key) => {
        if (value instanceof File) {
          if (config.fileField && key === config.fileField && value.size > 0) {
            file = value
          }
        } else {
          payload[key] = value
        }
      })
    } else {
      payload = await request.json()
    }

    const parsed = config.schema.parse(payload) as Record<string, unknown>

    const storageField = config.storageField

    if (file && storageField) {
      const uploadFile = file as File
      const arrayBuffer = await uploadFile.arrayBuffer()
      const fileName = `${params.table}/${randomUUID()}-${uploadFile.name.replace(/\s+/g, "-").toLowerCase()}`
      const bucket = config.bucket ?? "uploads"

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from(bucket)
        .upload(fileName, Buffer.from(arrayBuffer), {
          contentType: uploadFile.type,
          upsert: false,
        })

      if (uploadError) {
        throw uploadError
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from(bucket).getPublicUrl(uploadData.path)

      parsed[storageField] = publicUrl
    }

    const cleaned = Object.fromEntries(
      Object.entries(parsed).map(([key, value]) => {
        if (typeof value === "string") {
          const trimmed = value.trim()
          return [key, trimmed.length > 0 ? trimmed : null]
        }
        return [key, value]
      }),
    )

    const { error } = await supabase.from(params.table).insert(cleaned)

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.flatten() },
        { status: 422 },
      )
    }

    console.error(`[forms:${params.table}]`, error)

    return NextResponse.json({ error: "Unable to submit form" }, { status: 500 })
  }
}
