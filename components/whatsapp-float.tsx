"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md px-3 py-1.5 shadow-lg whitespace-nowrap">
      Chat on WhatsApp
      </div>
      <Button
      size="lg"
      className="rounded-full h-14 w-14 shadow-lg animate-float hover:scale-110 transition-transform duration-200 bg-green-500 hover:bg-green-600 text-white"
      asChild
      >
      <Link
        href="https://wa.me/+919842222467?text=Hi! I'm interested in your dance services."
        target="_blank"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>
      </Button>
    </div>
  )
}
