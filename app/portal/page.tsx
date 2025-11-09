
"use client"
import { useEffect } from "react"
import { redirect } from "next/navigation"

export default function PortalPage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "https://hoc-coral.vercel.app/"
    }, 1200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-accent border-t-foreground" />
      <div className="text-sm text-foreground/80">Redirecting to portal…</div>
    </div>
  )
}
