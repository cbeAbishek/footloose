export type CostumeCategory = "classical" | "contemporary" | "folk" | "western" | "kids" | "theatrical"
export type AgeGroup = "kids" | "teens" | "adults" | "all-ages"
export type Occasion = "wedding" | "school-event" | "corporate" | "festival" | "stage-production" | "photoshoot"
export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "Custom"

export interface Costume {
  id: string
  name: string
  slug: string
  category: CostumeCategory
  theme: string
  description: string
  images: string[]
  ageGroup: AgeGroup
  occasion: Occasion[]
  sizes: Size[]
  pricePerDay: number
  pricePerWeek: number
  deposit: number
  available: boolean
  quantity: number
  features: string[]
  careInstructions: string[]
  relatedProps?: string[]
  createdAt: string
}

export interface Accessory {
  id: string
  name: string
  image: string
  category: "jewelry" | "shoes" | "hats" | "props" | "makeup"
  price: number
  available: boolean
  description: string
}

export interface RentalBooking {
  costumeId: string
  startDate: string
  endDate: string
  customerName: string
  email: string
  phone: string
  ageGroup: AgeGroup
  size: Size
  deliveryPreference: "pickup" | "delivery"
  notes?: string
}
