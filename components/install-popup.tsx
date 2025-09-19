"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Download, Smartphone, Chrome, Share } from "lucide-react"
import { useNotification } from "@/components/notification-provider"

export default function InstallPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstallable, setIsInstallable] = useState(false)
  const { addNotification } = useNotification()

  useEffect(() => {
    // Check if user has already dismissed the popup
    const dismissed = localStorage.getItem('pwa-install-dismissed')
    if (dismissed) {
      const dismissedTime = parseInt(dismissed)
      const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24)
      
      // Don't show popup for 7 days after dismissal
      if (daysSinceDismissed < 7) {
        return
      }
    }

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      return
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsInstallable(true)
      
      // Show popup after 3 seconds
      setTimeout(() => {
        setIsVisible(true)
      }, 3000)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // For browsers that don't support beforeinstallprompt
    setTimeout(() => {
      if (!isInstallable && !window.matchMedia('(display-mode: standalone)').matches) {
        setIsVisible(true)
      }
    }, 5000)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [isInstallable])

  const handleInstall = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice
        
        if (outcome === 'accepted') {
          addNotification({
            type: 'success',
            title: 'Installation Started!',
            message: 'Footloose is being installed on your device. You will find it in your apps soon!'
          })
        } else {
          addNotification({
            type: 'info',
            title: 'No worries!',
            message: 'You can always install Footloose later from your browser menu.'
          })
        }
        
        setDeferredPrompt(null)
        setIsVisible(false)
      } catch (error) {
        addNotification({
          type: 'error',
          title: 'Installation Failed',
          message: 'There was an issue installing the app. Please try again later.'
        })
      }
    } else {
      // Show manual installation instructions
      showManualInstructions()
    }
  }

  const showManualInstructions = () => {
    const isChrome = /Chrome/.test(navigator.userAgent)
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
    const isFirefox = /Firefox/.test(navigator.userAgent)

    let message = 'To install this app: '
    
    if (isChrome) {
      message += 'Click the menu (⋮) → "Install Footloose" or look for the install icon in the address bar.'
    } else if (isSafari) {
      message += 'Tap the Share button → "Add to Home Screen"'
    } else if (isFirefox) {
      message += 'Click the menu (☰) → "Install" or look for the install option.'
    } else {
      message += 'Look for "Install" or "Add to Home Screen" in your browser menu.'
    }

    addNotification({
      type: 'info',
      title: 'Manual Installation',
      message,
      duration: 10000
    })
    
    setIsVisible(false)
  }

  const handleDismiss = () => {
    localStorage.setItem('pwa-install-dismissed', Date.now().toString())
    setIsVisible(false)
    
    addNotification({
      type: 'info',
      title: 'Popup Dismissed',
      message: 'We will not show this again for a week. You can still install from your browser menu!'
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-emerald-900/20" />
      
      <Card className="w-full max-w-lg mx-auto transform animate-in slide-in-from-bottom-8 duration-500 
                       bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 
                       backdrop-blur-2xl border-gray-600/30 shadow-2xl relative overflow-hidden
                       hover:shadow-emerald-500/10 transition-all duration-300">
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-purple-500/5 
                        animate-pulse opacity-50" />
        
        {/* Floating particles effect */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce delay-100" />
        <div className="absolute top-4 right-8 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-bounce delay-500" />
        
        <CardContent className="p-8 relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 
                               flex items-center justify-center shadow-lg shadow-emerald-500/25
                               hover:shadow-emerald-500/40 transition-all duration-300 group">
                  <Download className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 
                               rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-xs font-bold text-white">!</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 bg-gradient-to-r from-white to-gray-200 
                               bg-clip-text text-transparent">
                  Install Footloose
                </h3>
                <p className="text-sm text-gray-300">Get the premium app experience</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0 text-gray-400 hover:text-white hover:bg-white/10 
                         rounded-xl transition-all duration-200 hover:scale-110 hover:rotate-90"
              onClick={handleDismiss}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-6 mb-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-700/30 
                             border border-gray-600/30 hover:border-emerald-500/30 
                             transition-all duration-300 group hover:scale-105">
                <Smartphone className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:scale-110 
                                     transition-transform duration-300" />
                <p className="text-xs text-gray-300 font-medium">Offline Access</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-700/30 
                             border border-gray-600/30 hover:border-blue-500/30 
                             transition-all duration-300 group hover:scale-105">
                <Chrome className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 
                                 transition-transform duration-300" />
                <p className="text-xs text-gray-300 font-medium">Lightning Fast</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-700/30 
                             border border-gray-600/30 hover:border-purple-500/30 
                             transition-all duration-300 group hover:scale-105">
                <Share className="w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:scale-110 
                                transition-transform duration-300" />
                <p className="text-xs text-gray-300 font-medium">Easy Sharing</p>
              </div>
            </div>
            
            <div className="relative p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 
                           border border-emerald-500/20">
              <p className="text-sm text-gray-200 text-center leading-relaxed">
                Install Footloose for <span className="text-emerald-400 font-semibold">instant access</span> to 
                book classes, view schedules, and stay updated with our latest dance programs.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={handleInstall}
              className="flex-1 h-12 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 
                         hover:from-emerald-700 hover:via-emerald-600 hover:to-emerald-700 
                         text-white border-none shadow-lg shadow-emerald-500/25
                         hover:shadow-emerald-500/40 transition-all duration-300 
                         hover:scale-105 font-semibold text-base
                         relative overflow-hidden group"
            >
              <span className="relative z-10">
                {deferredPrompt ? '✨ Install Now' : '📱 Show Instructions'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                             translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
            <Button
              variant="outline"
              onClick={handleDismiss}
              className="px-6 h-12 border-gray-500/40 text-gray-300 hover:bg-gray-700/50 
                         hover:text-white hover:border-gray-400/60 transition-all duration-300
                         hover:scale-105 font-medium"
            >
              Maybe Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
