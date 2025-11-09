"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Download, Share2, X, Smartphone, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

// Helper types for the beforeinstallprompt event
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  prompt: () => Promise<void>
  userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
}

const STORAGE_KEY = "footloose_pwa_install_prompt_dismissed_v1"

const hasWindow = () => typeof window !== "undefined"

const isStandaloneMode = () => {
  if (!hasWindow()) return false
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in window.navigator && (window.navigator as unknown as { standalone?: boolean }).standalone)
  )
}

const isIos = () => {
  if (!hasWindow()) return false
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent)
}

const isAndroid = () => {
  if (!hasWindow()) return false
  return /android/i.test(window.navigator.userAgent)
}

const isMobile = () => {
  if (!hasWindow()) return false
  return /android|iphone|ipad|ipod/i.test(window.navigator.userAgent)
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showAndroidPrompt, setShowAndroidPrompt] = useState(false)
  const [showIosPrompt, setShowIosPrompt] = useState(false)

  // Listen for the beforeinstallprompt event on Android/Chrome based browsers
  useEffect(() => {
    if (!hasWindow() || !isMobile()) {
      return
    }

    const dismissedPreviously = localStorage.getItem(STORAGE_KEY) === "true"
    if (dismissedPreviously || isStandaloneMode()) {
      return
    }

    if (isIos()) {
      // Show manual install guidance for iOS Safari
      const timer = window.setTimeout(() => {
        setShowIosPrompt(true)
        toast({
          title: "Install Footloose",
          description: "Add us to your Home Screen for a full app experience.",
        })
      }, 1200)

      return () => {
        window.clearTimeout(timer)
      }
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault()
      const promptEvent = event as BeforeInstallPromptEvent
      setDeferredPrompt(promptEvent)
      setShowAndroidPrompt(true)
      toast({
        title: "Install Footloose",
        description: "Tap install to add the app to your home screen.",
      })
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  // Listen for successful install
  useEffect(() => {
    if (!hasWindow()) {
      return
    }

    const handleAppInstalled = () => {
      toast({
        title: "Footloose installed",
        description: "The app is now on your home screen. Enjoy quick access!",
      })
      localStorage.setItem(STORAGE_KEY, "true")
      setShowAndroidPrompt(false)
      setShowIosPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return
    }

    try {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === "accepted") {
        toast({
          title: "Installing…",
          description: "Adding Footloose to your device.",
        })
      } else {
        toast({
          title: "Install dismissed",
          description: "You can install the app later from your browser menu.",
        })
      }
    } catch (error) {
      toast({
        title: "Install failed",
        description: "We couldn't launch the install dialog. Please try again from your browser menu.",
      })
    } finally {
      setShowAndroidPrompt(false)
      setDeferredPrompt(null)
      localStorage.setItem(STORAGE_KEY, "true")
    }
  }

  const dismissPrompt = () => {
    localStorage.setItem(STORAGE_KEY, "true")
    setShowAndroidPrompt(false)
    setShowIosPrompt(false)
    setDeferredPrompt(null)
  }

  return (
    <AnimatePresence>
      {showAndroidPrompt && (
        <motion.div
          key="android-pwa"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", damping: 18, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 z-50 flex justify-center md:left-auto md:right-8 md:w-auto"
        >
          <div className="relative w-full max-w-md rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <button
              type="button"
              onClick={dismissPrompt}
              aria-label="Dismiss install prompt"
              className="absolute right-4 top-4 rounded-full border border-transparent p-1 text-black/60 transition hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg">
                <Download className="h-7 w-7" />
              </div>
              <div className="flex-1 space-y-1 text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
                  Install App
                </p>
                <h3 className="text-lg font-black text-black dark:text-white">
                  Footloose on your device
                </h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Get faster access, offline support, and native notifications right from your home screen.
                </p>
              </div>
              <div className="flex justify-center md:items-center">
                <Button
                  onClick={handleInstallClick}
                  className="rounded-full border-2 border-black bg-green-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-green-600 dark:border-white"
                >
                  Install
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {showIosPrompt && (
        <motion.div
          key="ios-pwa"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", damping: 18, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 z-50 flex justify-center md:left-auto md:right-8 md:w-auto"
        >
          <div className="relative w-full max-w-md rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <button
              type="button"
              onClick={dismissPrompt}
              aria-label="Dismiss install instructions"
              className="absolute right-4 top-4 rounded-full border border-transparent p-1 text-black/60 transition hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex flex-col gap-4 px-6 py-7">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
                    iPhone / iPad
                  </p>
                  <h3 className="text-lg font-black text-black dark:text-white">
                    Add Footloose to Home Screen
                  </h3>
                </div>
              </div>

              <div className="space-y-3 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black/80 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
                <div className="flex items-center gap-3">
                  <Share2 className="h-5 w-5 text-black dark:text-white" />
                  <p>1. Tap the <span className="font-semibold">Share</span> icon in Safari.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Plus className="h-5 w-5 text-black dark:text-white" />
                  <p>2. Choose <span className="font-semibold">Add to Home Screen</span>.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Download className="h-5 w-5 text-black dark:text-white" />
                  <p>3. Confirm to install Footloose as an app.</p>
                </div>
              </div>

              <p className="text-xs text-center font-medium text-black/60 dark:text-white/60">
                Enjoy one-tap access, full-screen browsing, and push notifications when you install the app.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
