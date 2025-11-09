export type FeedbackRecord = {
  id: string
  created_at: string | null
  full_name: string
  role: string
  testimonial: string
  rating: number
  image_url: string | null
}

export type AlumniRecord = {
  id: string
  created_at: string | null
  full_name: string
  headline: string
  bio: string
  graduation_year: number
  email: string | null
  website: string | null
  photo_url: string | null
}

export type BlogPostRecord = {
  id: string
  created_at: string | null
  title: string
  slug: string
  summary: string
  body: string
  author_name: string
  source_link: string | null
  thumbnail_url?: string | null
}

export type InquiryRecord = {
  id: string
  created_at: string | null
  full_name: string
  email: string
  phone: string
  topic: string
  message: string
}

export type ClassRegistrationRecord = {
  id: string
  created_at: string | null
  student_name: string
  guardian_name: string
  email: string
  phone: string
  preferred_style: string
  experience_level: string
  message: string | null
}

export type EventBookingRecord = {
  id: string
  created_at: string | null
  organization: string
  contact_name: string
  email: string
  phone: string
  event_date: string
  location: string
  audience_size: string
  notes: string | null
}

export type CostumeRentalRecord = {
  id: string
  created_at: string | null
  full_name: string
  email: string
  phone: string
  event_date: string
  theme: string
  sizes: string
  notes: string | null
}

export type ServerRequestRecord = {
  id: string
  created_at: string | null
  requester: string
  department: string
  priority: "low" | "medium" | "high"
  summary: string
  details: string
}

export type CareerApplicationRecord = {
  id: string
  created_at: string | null
  full_name: string
  email: string
  phone: string
  role: string
  experience_years: number
  portfolio_url: string | null
  cover_letter: string | null
}
