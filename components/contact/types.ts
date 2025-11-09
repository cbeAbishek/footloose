export interface ContactLocation {
  id: string
  name: string
  address: string
  phone: string
  email: string
  workingHours: {
    weekdays: string
    weekends: string
    closed?: string
  }
  coordinates: {
    lat: number
    lng: number
  }
}

export interface ContactInquiry {
  id?: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status?: "new" | "replied" | "closed"
  created_at?: string
}

export interface FAQItem {
  id: string
  category: string
  question: string
  answer: string
  order?: number
}

export interface FAQCategory {
  id: string
  name: string
  icon: string
  items: FAQItem[]
}
