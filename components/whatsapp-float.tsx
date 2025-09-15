"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg animate-float hover:scale-110 transition-transform duration-200"
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
