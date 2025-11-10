import type { Metadata } from "next"
import { CareerApplicationForm } from "@/components/forms/career-application-form"

export const metadata: Metadata = {
  title: "Careers at Footloose | Apply to Join Edwin's Dance Company",
  description:
    "Apply for choreography, performance, production, and operations roles at Footloose Edwin's Dance & Costume Company. Submit your profile to join our creative team.",
  openGraph: {
    title: "Careers at Footloose | Apply to Join Edwin's Dance Company",
    description:
      "Share your experience, portfolio, and goals to join the Footloose Edwin's Dance & Costume Company team.",
    url: "https://footloose.online/careers",
    type: "website",
  },
}

export default function CareersPage() {
  return (
    <main className="bg-gradient-to-b from-white via-white to-slate-100 py-16 dark:from-black dark:via-black dark:to-slate-900">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Join the Team
          </p>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
            Build Your Career with Footloose
          </h1>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            We're always looking for passionate choreographers, instructors, performers, creatives, and administrators to grow with us. Share your background and we'll be in touch.
          </p>
        </div>
        <div className="rounded-3xl border-2 border-slate-900 bg-white p-8 shadow-xl dark:border-white dark:bg-slate-900 sm:p-12">
          <CareerApplicationForm />
        </div>
      </div>
    </main>
  )
}
