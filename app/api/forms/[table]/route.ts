import { randomUUID } from "crypto"
import { NextResponse } from "next/server"
import { z } from "zod"

import { createSupabaseServiceClient } from "@/lib/supabase"

export const runtime = "nodejs"

type TableConfig = {
  schema: z.ZodTypeAny
  fileField?: string
  storageField?: string
  bucket?: string
}

function normalizeDate(value: string): string | null {
  const trimmed = value.trim()

  if (!trimmed) {
    return null
  }

  // Already ISO formatted (YYYY-MM-DD)
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed
  }

  // Handle common DD/MM/YYYY or DD-MM-YYYY inputs
  const dayFirstMatch = trimmed.match(/^(\d{2})[\/\-](\d{2})[\/\-](\d{4})$/)
  if (dayFirstMatch) {
    const [, day, month, year] = dayFirstMatch
    return `${year}-${month}-${day}`
  }

  // Fallback to Date parsing
  const parsed = new Date(trimmed)
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10)
  }

  return null
}

function generateInquiryCode(date = new Date()): string {
  const pad = (value: number) => value.toString().padStart(2, "0")
  const year = date.getUTCFullYear().toString().slice(-2)
  const month = pad(date.getUTCMonth() + 1)
  const day = pad(date.getUTCDate())
  const hours = pad(date.getUTCHours())
  const minutes = pad(date.getUTCMinutes())
  const seconds = pad(date.getUTCSeconds())
  const randomSuffix = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0")

  return `INQ-${year}${month}${day}${hours}${minutes}${seconds}-${randomSuffix}`
}

function normalizeDateArray(value: unknown): string[] | undefined {
  if (!value) {
    return undefined
  }

  const entries = Array.isArray(value)
    ? value
    : typeof value === "string"
      ? value
          .split(/[,\n]/)
          .map((entry) => entry.trim())
          .filter(Boolean)
      : []

  const normalized = entries
    .map((entry) => (typeof entry === "string" ? normalizeDate(entry) : null))
    .filter((entry): entry is string => Boolean(entry))

  return normalized.length > 0 ? normalized : undefined
}

function normalizeStringArray(value: unknown): string[] | undefined {
  if (!value) {
    return undefined
  }

  if (Array.isArray(value)) {
    const normalized = value
      .map((entry) => (typeof entry === "string" ? entry.trim() : ""))
      .filter(Boolean)
    return normalized.length > 0 ? normalized : undefined
  }

  if (typeof value === "string") {
    const normalized = value
      .split(/[,\n]/)
      .map((entry) => entry.trim())
      .filter(Boolean)
    return normalized.length > 0 ? normalized : undefined
  }

  return undefined
}

function normalizeTablePayload(table: string, data: Record<string, unknown>) {
  const normalized = { ...data }
  const invalidDateFields: string[] = []

  const setDate = (key: string, options: { required?: boolean } = {}) => {
    const value = normalized[key]

    if (typeof value !== "string") {
      return
    }

    if (!value.trim()) {
      if (options.required) {
        invalidDateFields.push(key)
      } else {
        normalized[key] = null
      }
      return
    }

    const result = normalizeDate(value)
    if (!result) {
      invalidDateFields.push(key)
      return
    }

    normalized[key] = result
  }

  switch (table) {
    case "event_inquiries":
      setDate("preferred_date")
      normalized.alternative_dates = normalizeDateArray(normalized.alternative_dates)
      break
    case "costume_rental_inquiries":
      setDate("rental_start", { required: true })
      setDate("rental_end", { required: true })
      break
    case "career_applications":
      setDate("available_from")
      normalized.skills = normalizeStringArray(normalized.skills)
      normalized.certifications = normalizeStringArray(normalized.certifications)
      normalized.languages = normalizeStringArray(normalized.languages)
      normalized.additional_documents = normalizeStringArray(normalized.additional_documents)
      break
    case "blog_posts":
      normalized.tags = normalizeStringArray(normalized.tags)
      normalized.meta_keywords = normalizeStringArray(normalized.meta_keywords)
      normalized.gallery_urls = normalizeStringArray(normalized.gallery_urls)
      break
    case "feedback":
      normalized.attachments = normalizeStringArray(normalized.attachments)
      break
    case "alumni":
      normalized.dance_styles = normalizeStringArray(normalized.dance_styles)
      normalized.notable_performances = normalizeStringArray(normalized.notable_performances)
      normalized.awards = normalizeStringArray(normalized.awards)
      normalized.certifications = normalizeStringArray(normalized.certifications)
      break
    case "testimonials":
      setDate("approved_at")
      break
    default:
      break
  }

  return { normalized, invalidDateFields }
}

const stringOrEmpty = () => z.union([z.string().min(2), z.literal("")]).optional().default("")
const emailOrEmpty = () => z.union([z.string().email(), z.literal("")]).optional().default("")
const optionalLongText = () => z.union([z.string().min(5), z.literal("")]).optional().default("")

const tableSchemas: Record<string, TableConfig> = {
  inquiries: {
    schema: z.object({
      full_name: z.string().trim().min(2),
      email: z.string().trim().email(),
      phone: z.string().trim().min(10).max(20),
      subject: z.string().trim().min(2),
      message: z.string().trim().min(10),
    }),
  },
  class_inquiries: {
    schema: z.object({
      full_name: z.string().min(2),
      email: emailOrEmpty(),
      phone: z.string().min(6).max(20),
      age: z.coerce.number().int().min(1).max(120).optional(),
      interested_class: stringOrEmpty(),
      dance_style: stringOrEmpty(),
      experience_level: stringOrEmpty(),
      preferred_schedule: stringOrEmpty(),
      message: optionalLongText(),
      source: stringOrEmpty(),
    }),
  },
  event_inquiries: {
    schema: z.object({
      full_name: z.string().min(2),
      email: emailOrEmpty(),
      phone: z.string().min(6).max(20),
      organization: stringOrEmpty(),
      event_type: z.string().min(2),
      event_name: stringOrEmpty(),
      preferred_date: z.union([z.string().min(4), z.literal("")]).optional().default(""),
      alternative_dates: z
        .union([z.array(z.string().min(4)), z.string(), z.literal(""), z.undefined()])
        .optional(),
      event_duration_hours: z.union([
        z.coerce.number().positive().max(72),
        z.literal(""),
        z.undefined(),
      ]),
      guest_count: z.union([
        z.coerce.number().int().min(1).max(100000),
        z.literal(""),
        z.undefined(),
      ]),
      venue: stringOrEmpty(),
      budget_range: stringOrEmpty(),
      performance_requirements: optionalLongText(),
      special_requests: optionalLongText(),
      message: optionalLongText(),
    }),
  },
  costume_rental_inquiries: {
    schema: z.object({
      full_name: z.string().min(2),
      email: emailOrEmpty(),
      phone: z.string().min(6).max(20),
      requested_items: z.string().min(2),
      quantity_needed: z.union([
        z.coerce.number().int().min(1),
        z.literal(""),
        z.undefined(),
      ]),
      rental_start: z.string().min(4),
      rental_end: z.string().min(4),
      event_type: stringOrEmpty(),
      event_location: stringOrEmpty(),
      notes: optionalLongText(),
    }),
  },
  career_applications: {
    schema: z.object({
      full_name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(6).max(20),
      current_location: stringOrEmpty(),
      position_applied: z.string().min(2),
      department: stringOrEmpty(),
      expected_salary: z.union([
        z.coerce.number().min(0),
        z.literal(""),
        z.undefined(),
      ]),
      available_from: z.union([z.string().min(4), z.literal(""), z.undefined()]),
      years_of_experience: z.union([
        z.coerce.number().int().min(0).max(50),
        z.literal(""),
        z.undefined(),
      ]),
      current_employer: stringOrEmpty(),
      education_qualification: stringOrEmpty(),
      resume_url: z.union([z.string().url(), z.literal(""), z.undefined()]),
      portfolio_url: z.union([z.string().url(), z.literal(""), z.undefined()]),
      cover_letter: optionalLongText(),
      skills: z.union([z.array(z.string().min(2)), z.string(), z.literal(""), z.undefined()]),
      certifications: z.union([z.array(z.string().min(2)), z.string(), z.literal(""), z.undefined()]),
      languages: z.union([z.array(z.string().min(2)), z.string(), z.literal(""), z.undefined()]),
    }),
    fileField: "resume",
    storageField: "resume_url",
    bucket: "documents",
  },
  blog_posts: {
    schema: z.object({
      title: z.string().min(4),
      slug: z
        .string()
        .min(2)
        .regex(/^[a-z0-9\-]+$/),
      excerpt: z.string().min(20).max(360),
      content: z.string().min(80),
      author_name: z.string().min(2),
      category: stringOrEmpty(),
      tags: z.union([z.array(z.string()), z.string(), z.literal(""), z.undefined()]),
      status: z.enum(["draft", "scheduled", "published", "archived"]).optional().default("draft"),
      meta_title: stringOrEmpty(),
      meta_description: optionalLongText(),
      meta_keywords: z.union([z.array(z.string()), z.string(), z.literal(""), z.undefined()]),
      gallery_urls: z.union([z.array(z.string().url()), z.string(), z.literal(""), z.undefined()]),
      source_link: z.union([z.string().url(), z.literal(""), z.undefined()]),
    }),
    fileField: "cover_image",
    storageField: "cover_image_url",
    bucket: "uploads",
  },
  blog_comments: {
    schema: z.object({
      post_id: z.string().uuid(),
      parent_comment_id: z.string().uuid().optional().or(z.literal("")),
      user_id: z.string().uuid().optional().or(z.literal("")),
      commenter_name: z.string().min(2),
      commenter_email: emailOrEmpty(),
      content: z.string().min(5),
    }),
  },
  alumni: {
    schema: z.object({
      full_name: z.string().min(2),
      email: emailOrEmpty(),
      phone: stringOrEmpty(),
      current_location: stringOrEmpty(),
      batch_year: z.union([
        z.coerce.number().int().min(1980).max(new Date().getFullYear()),
        z.literal(""),
        z.undefined(),
      ]),
      enrollment_year: z.union([
        z.coerce.number().int().min(1980).max(new Date().getFullYear()),
        z.literal(""),
        z.undefined(),
      ]),
      graduation_year: z.union([
        z.coerce.number().int().min(1980).max(new Date().getFullYear()),
        z.literal(""),
        z.undefined(),
      ]),
      training_duration_years: z.union([
        z.coerce.number().min(0),
        z.literal(""),
        z.undefined(),
      ]),
      dance_styles: z.union([z.array(z.string().min(2)), z.string(), z.literal(""), z.undefined()]),
      current_role: stringOrEmpty(),
      current_organization: stringOrEmpty(),
      profession: stringOrEmpty(),
      achievements: optionalLongText(),
      notable_performances: z.union([z.array(z.string().min(2)), z.string(), z.literal(""), z.undefined()]),
      awards: z.union([z.array(z.string().min(2)), z.string(), z.literal(""), z.undefined()]),
      certifications: z.union([z.array(z.string().min(2)), z.string(), z.literal(""), z.undefined()]),
      bio: z.string().min(40),
      website_url: z.union([z.string().url(), z.literal(""), z.undefined()]),
      willing_to_mentor: z.coerce.boolean().optional().default(false),
      available_for_events: z.coerce.boolean().optional().default(false),
    }),
    fileField: "photo",
    storageField: "photo_url",
    bucket: "profile",
  },
  testimonials: {
    schema: z.object({
      author_name: z.string().min(2),
      author_role: stringOrEmpty(),
      author_organization: stringOrEmpty(),
      title: stringOrEmpty(),
      content: z.string().min(30),
      rating: z.coerce.number().int().min(1).max(5).optional(),
      related_to: stringOrEmpty(),
      event_id: z.union([z.string().uuid(), z.literal(""), z.undefined()]),
      class_id: z.union([z.string().uuid(), z.literal(""), z.undefined()]),
      is_featured: z.coerce.boolean().optional().default(false),
    }),
    fileField: "author_photo",
    storageField: "author_photo_url",
    bucket: "profile",
  },
  feedback: {
    schema: z.object({
      contact_name: stringOrEmpty(),
      contact_email: emailOrEmpty(),
      contact_phone: stringOrEmpty(),
      feedback_type: z.string().min(2),
      category: stringOrEmpty(),
      subject: stringOrEmpty(),
      message: z.string().min(20),
      overall_rating: z.union([
        z.coerce.number().int().min(1).max(5),
        z.literal(""),
        z.undefined(),
      ]),
      service_rating: z.union([
        z.coerce.number().int().min(1).max(5),
        z.literal(""),
        z.undefined(),
      ]),
      instructor_rating: z.union([
        z.coerce.number().int().min(1).max(5),
        z.literal(""),
        z.undefined(),
      ]),
      facility_rating: z.union([
        z.coerce.number().int().min(1).max(5),
        z.literal(""),
        z.undefined(),
      ]),
      related_to: stringOrEmpty(),
      event_id: z.union([z.string().uuid(), z.literal(""), z.undefined()]),
      class_id: z.union([z.string().uuid(), z.literal(""), z.undefined()]),
      is_anonymous: z.coerce.boolean().optional().default(false),
      attachments: z.union([z.array(z.string().url()), z.string(), z.literal(""), z.undefined()]),
    }),
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

  let supabase: ReturnType<typeof createSupabaseServiceClient>
  try {
    supabase = createSupabaseServiceClient()
  } catch (error) {
    console.error("[forms:supabase-client]", error)
    return NextResponse.json(
      { error: "Form service not configured. Please try again later." },
      { status: 500 },
    )
  }

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
    const { normalized, invalidDateFields } = normalizeTablePayload(params.table, parsed)

    if (invalidDateFields.length > 0) {
      return NextResponse.json(
        {
          error: `Invalid date format for ${invalidDateFields.join(", ")}`,
        },
        { status: 422 },
      )
    }

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
      Object.entries(normalized).map(([key, value]) => {
        if (typeof value === "string") {
          const trimmed = value.trim()
          return [key, trimmed.length > 0 ? trimmed : null]
        }
        return [key, value]
      }),
    )

    if (params.table === "inquiries") {
      const timestamp = new Date().toISOString()
      cleaned.id ??= randomUUID()
      cleaned.inquiry_code ??= generateInquiryCode()
      cleaned.created_at ??= timestamp
      cleaned.updated_at = timestamp
    }

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

    const message =
      typeof error === "object" && error !== null && "message" in error
        ? String((error as { message?: string }).message)
        : "Unable to submit form"

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
