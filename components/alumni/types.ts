export interface AlumniProfile {
  id: string
  created_at: string | null
  full_name: string
  headline: string
  bio: string
  graduation_year: number
  email: string | null
  website: string | null
  photo_url: string | null
  dance_specialization?: string
  current_role?: string
  location?: string
  achievements?: string[]
  latitude?: number
  longitude?: number
  social_links?: {
    instagram?: string
    facebook?: string
    linkedin?: string
    youtube?: string
  }
  featured?: boolean
  verified?: boolean
}

export interface AlumniTestimonial {
  id: string
  alumni_id: string
  alumni_name: string
  content: string
  video_url?: string
  created_at: string
}

export interface AlumniEvent {
  id: string
  title: string
  description: string
  event_date: string
  location: string
  image_url?: string
  registration_link?: string
}

export interface AlumniOpportunity {
  id: string
  title: string
  type: "job" | "internship" | "collaboration" | "teaching"
  description: string
  organization: string
  location: string
  posted_date: string
  deadline?: string
  contact_email?: string
  is_active: boolean
}

export interface AlumniAward {
  id: string
  alumni_id: string
  alumni_name: string
  award_title: string
  description: string
  year: number
  image_url?: string
}
