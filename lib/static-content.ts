import type { AlumniRecord, BlogPostRecord, FeedbackRecord } from "@/types/tables"

export const fallbackFeedback: FeedbackRecord[] = [
  {
    id: "placeholder-feedback-1",
    created_at: null,
    full_name: "Asha Menon",
    role: "Parent & Community Partner",
    testimonial:
      "Footloose keeps our kids inspired week after week. The faculty balance technique with empathy, and every showcase feels world-class.",
    rating: 5,
    image_url: null,
  },
  {
    id: "placeholder-feedback-2",
    created_at: null,
    full_name: "Rohit Verma",
    role: "Corporate Workshop Lead, Bengaluru",
    testimonial:
      "Chair-Co-Cise sessions lifted our employee wellness scores within a quarter. The team translated movement science into accessible routines for everyone.",
    rating: 5,
    image_url: null,
  },
  {
    id: "placeholder-feedback-3",
    created_at: null,
    full_name: "Meera S.",
    role: "Alumni Mentor",
    testimonial:
      "The alumni network feels like a creative accelerator. Students graduate with the confidence to choreograph, teach, and produce their own work.",
    rating: 4,
    image_url: null,
  },
]

export const fallbackAlumni: AlumniRecord[] = [
  {
    id: "placeholder-alumni-1",
    created_at: null,
    full_name: "Priya Nambiar",
    headline: "Choreographer, New Delhi",
    bio: "Priya crafts interdisciplinary works fusing contemporary Indian movement with theatre design. She mentors Footloose students through the residency program each summer.",
    graduation_year: 2005,
    email: null,
    website: null,
    photo_url: null,
  },
  {
    id: "placeholder-alumni-2",
    created_at: null,
    full_name: "Marcus Densel",
    headline: "Movement Director, Singapore",
    bio: "Marcus leads movement direction for fashion campaigns in Southeast Asia and hosts workshops on precision-based choreography for Footloose cohorts.",
    graduation_year: 2008,
    email: null,
    website: null,
    photo_url: null,
  },
  {
    id: "placeholder-alumni-3",
    created_at: null,
    full_name: "Lakshmi Rao",
    headline: "Wellness Coach, Bengaluru",
    bio: "Lakshmi builds corporate wellness and mindfulness programs inspired by Chair-Co-Cise. She drives ergonomics training for remote-first organisations.",
    graduation_year: 2012,
    email: null,
    website: null,
    photo_url: null,
  },
]

export const fallbackBlogPosts: BlogPostRecord[] = [
  {
    id: "placeholder-post-1",
    created_at: "2024-11-01T10:00:00Z",
    title: "Annual Day 2024: A Grand Celebration of Talent and Tradition",
    slug: "annual-day-2024-grand-celebration",
    summary:
      "Relive the magic of our Annual Day 2024 with over 500 performers, stunning choreography, and unforgettable moments that showcased the best of Edwin's Dance legacy.",
    body: "",
    author_name: "Edwin's Dance Company",
    source_link: null,
    thumbnail_url: "/sample.jpg",
  },
  {
    id: "placeholder-post-2",
    created_at: "2024-10-28T14:00:00Z",
    title: "5 Dance Warm-Up Exercises Every Dancer Should Know",
    slug: "5-dance-warmup-exercises-every-dancer",
    summary:
      "Discover essential warm-up exercises that prevent injuries, improve flexibility, and prepare your body for peak performance. Perfect for dancers of all levels.",
    body: "",
    author_name: "Priya Sharma",
    source_link: null,
    thumbnail_url: "/sample.jpg",
  },
  {
    id: "placeholder-post-3",
    created_at: "2024-10-25T09:00:00Z",
    title: "From Student to Professional: Rahul's Dance Journey",
    slug: "rahul-dance-journey-student-to-professional",
    summary:
      "Meet Rahul, a Footloose alumni who transformed his passion into a thriving career. Learn how dedication, training, and community support shaped his success story.",
    body: "",
    author_name: "Sarah Johnson",
    source_link: null,
    thumbnail_url: "/sample.jpg",
  },
]
