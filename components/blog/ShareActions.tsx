"use client"

import { useState } from "react"
import { Twitter, Facebook, Linkedin, Link2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

interface ShareActionsProps {
  title: string
  url: string
}

export function ShareActions({ title, url }: ShareActionsProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      })
    }
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      <Button
        size="icon"
        onClick={() => window.open(shareLinks.twitter, "_blank")}
        className="h-12 w-12 rounded-full bg-black text-white shadow-lg transition-transform hover:scale-110 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5" />
      </Button>

      <Button
        size="icon"
        onClick={() => window.open(shareLinks.facebook, "_blank")}
        className="h-12 w-12 rounded-full bg-black text-white shadow-lg transition-transform hover:scale-110 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        aria-label="Share on Facebook"
      >
        <Facebook className="h-5 w-5" />
      </Button>

      <Button
        size="icon"
        onClick={() => window.open(shareLinks.linkedin, "_blank")}
        className="h-12 w-12 rounded-full bg-black text-white shadow-lg transition-transform hover:scale-110 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </Button>

      <Button
        size="icon"
        onClick={handleCopyLink}
        className="h-12 w-12 rounded-full bg-black text-white shadow-lg transition-transform hover:scale-110 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        aria-label="Copy link"
      >
        {copied ? <Check className="h-5 w-5" /> : <Link2 className="h-5 w-5" />}
      </Button>
    </div>
  )
}
