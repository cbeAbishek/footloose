"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PhoneCall, Sparkles, X } from "lucide-react"

const STORAGE_KEY = "footloose-kids-offer-dismissed-v1"

export function KidsClassOfferPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const dismissedAt = window.localStorage.getItem(STORAGE_KEY)
      if (!dismissedAt) {
        setOpen(true)
      } else {
        const dismissedDate = Number(dismissedAt)
        const ONE_DAY = 24 * 60 * 60 * 1000
        if (Number.isFinite(dismissedDate) && Date.now() - dismissedDate > ONE_DAY) {
          setOpen(true)
        }
      }
    }, 1200)

    return () => window.clearTimeout(timeout)
  }, [])

  const handleClose = (value: boolean) => {
    if (!value) {
      window.localStorage.setItem(STORAGE_KEY, Date.now().toString())
    }
    setOpen(value)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[90vw] sm:max-w-xl overflow-hidden rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/95 dark:bg-gray-900/95 p-0 shadow-2xl">
        <div className="relative">
          <button
            className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={() => handleClose(false)}
            aria-label="Close offer"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="relative h-52 w-full overflow-hidden sm:h-64">
            <Image
              src="/banner.jpeg"
              alt="Kids dance class"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute left-6 right-6 top-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              <Sparkles className="h-4 w-4" />
              Limited Time Offer
            </div>
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <Badge className="bg-white/90 text-gray-900 shadow-sm backdrop-blur">Dance Special</Badge>
              <DialogTitle className="text-2xl font-black leading-tight sm:text-3xl">
                Join Your Kid for the Ultimate Dance Adventure
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base text-white/80">
                Enrol now and unlock confidence, rhythm, and joy every week.
              </DialogDescription>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-dashed border-gray-300/80 p-4 text-center dark:border-gray-700/80">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
                Regular Fee
              </p>
              <p className="mt-1 text-2xl font-black text-gray-400 line-through">₹2,500</p>
            </div>
            <div className="rounded-2xl border border-gray-900 bg-gray-900 p-4 text-center text-white dark:border-white dark:bg-white dark:text-gray-900 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70 dark:text-gray-700">
                Launch Offer
              </p>
              <p className="mt-1 text-3xl font-black">₹1,999</p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <p className="font-semibold text-gray-900 dark:text-white">
              8 high-energy sessions designed for kids 6-12 years old. Limited seats to keep every class personal and fun.
            </p>
            <ul className="list-disc space-y-1 pl-5 marker:text-gray-900 dark:marker:text-white">
              <li>Learn show-ready choreography with certified instructors</li>
              <li>Boost confidence, posture, and creative expression</li>
              <li>Complimentary costume trial + parent showcase day</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 flex-1 rounded-xl bg-gray-900 text-white shadow-lg transition hover:translate-y-0.5 hover:bg-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              <a href="tel:+919842222467">
                <PhoneCall className="mr-2 h-5 w-5" />
                Call to Enrol
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 flex-1 rounded-xl border-2 border-gray-900 text-gray-900 transition hover:border-gray-700 hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-white/10"
            >
              <Link href="/services/classes">View Class Details</Link>
            </Button>
          </div>

          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            Offer valid for new admissions until {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
