import type { Metadata } from "next"
import { FeedbackForm } from "@/components/forms/feedback-form"

export const metadata: Metadata = {
  title: "Share Your Experience | Edwin's Dance & Costume Company",
  description:
    "Submit testimonials, reviews, and client stories for Footloose Edwin's Dance & Costume Company. Upload optional imagery and let the community know about your experience.",
  openGraph: {
    title: "Share Your Experience | Footloose Edwin's Dance Company",
    description:
      "We'd love to hear from you. Submit a testimonial and help future students and partners learn about Footloose Edwin's Dance Company.",
    url: "https://footloose.online/feedback",
    type: "website",
  },
}

export default function FeedbackPage() {
  return (
    <main className="bg-white py-16 dark:bg-black">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-black/50 dark:text-white/60">
            Client Stories
          </p>
          <h1 className="text-3xl font-black text-black dark:text-white md:text-4xl">
            Share Your Experience with Footloose
          </h1>
          <p className="mt-4 text-base text-black/70 dark:text-white/70">
            Celebrate your journey with us. Submit a testimonial and optional photo so we can highlight your story across our platforms.
          </p>
        </div>
        <div className="rounded-3xl border-2 border-black bg-white p-8 shadow-xl dark:border-white dark:bg-black sm:p-12">
          <FeedbackForm />
        </div>
      </div>
    </main>
  )
}
