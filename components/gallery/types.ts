export type GalleryCategory = 
  | "annual-day" 
  | "theme-shows" 
  | "esp-showcase" 
  | "corporate" 
  | "fashion" 
  | "workshops"
  | "all"

export type PerformanceStyle = 
  | "western" 
  | "bollywood" 
  | "chair-co-cise" 
  | "kids" 
  | "led" 
  | "classical"

export interface GalleryImage {
  id: string
  url: string
  thumbnail?: string
  title: string
  description?: string
  albumId: string
  category: GalleryCategory
  style?: PerformanceStyle
  capturedDate: string
  photographer?: string
  tags?: string[]
  isBackstage?: boolean
  isCostume?: boolean
  downloadable?: boolean
}

export interface PerformanceAlbum {
  id: string
  title: string
  slug: string
  description: string
  date: string
  category: GalleryCategory
  style?: PerformanceStyle
  coverImage: string
  imageCount: number
  location?: string
  images: GalleryImage[]
}

export interface VideoItem {
  id: string
  title: string
  description: string
  url: string
  thumbnailUrl: string
  source: "supabase" | "youtube" | "vimeo"
  category: GalleryCategory
  duration?: string
  uploadDate: string
}

export interface SpotlightItem {
  id: string
  name: string
  title: string
  description: string
  image: string
  achievement: string
  year: number
  category: "student" | "alumni"
}

export interface TestimonialSnapshot {
  id: string
  image: string
  quote: string
  author: string
  role: string
  event?: string
}

export interface GallerySubmission {
  id?: string
  submitterName: string
  submitterEmail: string
  eventName: string
  eventDate: string
  category: GalleryCategory
  description: string
  images: File[]
  approved?: boolean
}
