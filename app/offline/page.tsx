import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Offline Access | Footloose Edwin's Dance Company",
  description: "You are currently offline. Explore Footloose Edwin's Dance Company once your connection is restored.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 text-center text-white">
      <h1 className="mb-4 text-3xl font-bold">You appear to be offline</h1>
      <p className="mb-6 max-w-xl text-gray-300">
        We could not reach Footloose Edwin&apos;s Dance Company right now. Please reconnect to continue exploring upcoming performances, classes, and themed entertainment experiences.
      </p>
      <Link
        href="/"
        className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
      >
        Try again
      </Link>
    </div>
  )
}
