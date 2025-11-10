import type { Metadata } from "next"
import { ServerRequestForm } from "@/components/forms/server-request-form"

export const metadata: Metadata = {
  title: "Operations Request Desk | Edwin's Dance & Costume Company",
  description:
    "Submit internal requests for production, costume, logistics, or administrative support at Footloose Edwin's Dance & Costume Company.",
}

export default function OperationsRequestsPage() {
  return (
    <main className="bg-slate-100 py-16 dark:bg-slate-950">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Internal Operations
          </p>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
            Submit a Support Request
          </h1>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Use this form to log production, costume, facilities, or technology requests. The operations team will receive an instant notification.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-12">
          <ServerRequestForm />
        </div>
      </div>
    </main>
  )
}
