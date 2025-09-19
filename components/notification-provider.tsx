"use client"

import React, { useState, useEffect, createContext, useContext } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, X, AlertCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

// Add custom CSS for animations
const styles = `
  @keyframes shrink {
    from { width: 100%; }
    to { width: 0%; }
  }
  
  @keyframes slideInRight {
    from { 
      transform: translateX(100%) scale(0.8);
      opacity: 0;
    }
    to { 
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from { 
      transform: translateX(0) scale(1);
      opacity: 1;
    }
    to { 
      transform: translateX(100%) scale(0.8);
      opacity: 0;
    }
  }
`

interface Notification {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  message: string
  duration?: number
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  // Inject styles
  useEffect(() => {
    const styleElement = document.createElement('style')
    styleElement.textContent = styles
    document.head.appendChild(styleElement)
    
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification = { ...notification, id }
    
    setNotifications(prev => [...prev, newNotification])

    // Auto remove after duration (default 5 seconds)
    setTimeout(() => {
      removeNotification(id)
    }, notification.duration || 5000)
  }

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <NotificationContainer notifications={notifications} removeNotification={removeNotification} />
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}

function NotificationContainer({ 
  notifications, 
  removeNotification 
}: { 
  notifications: Notification[]
  removeNotification: (id: string) => void 
}) {
  if (notifications.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 pointer-events-none">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onRemove={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  )
}

function NotificationCard({ 
  notification, 
  onRemove 
}: { 
  notification: Notification
  onRemove: () => void 
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const handleRemove = () => {
    setIsVisible(false)
    setTimeout(onRemove, 300) // Wait for animation
  }

  const getColorClasses = () => {
    switch (notification.type) {
      case 'success':
        return 'from-emerald-500/30 to-green-500/30 border-emerald-400/40 shadow-emerald-500/20'
      case 'error':
        return 'from-red-500/30 to-rose-500/30 border-red-400/40 shadow-red-500/20'
      case 'warning':
        return 'from-amber-500/30 to-yellow-500/30 border-amber-400/40 shadow-amber-500/20'
      case 'info':
        return 'from-blue-500/30 to-cyan-500/30 border-blue-400/40 shadow-blue-500/20'
      default:
        return 'from-gray-500/30 to-slate-500/30 border-gray-400/40 shadow-gray-500/20'
    }
  }

  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <CheckCircle className="h-6 w-6 text-emerald-400 drop-shadow-lg" />
      case 'error':
        return <AlertCircle className="h-6 w-6 text-red-400 drop-shadow-lg" />
      case 'warning':
        return <AlertCircle className="h-6 w-6 text-amber-400 drop-shadow-lg" />
      case 'info':
        return <Info className="h-6 w-6 text-blue-400 drop-shadow-lg" />
      default:
        return <Info className="h-6 w-6 text-gray-400 drop-shadow-lg" />
    }
  }

  return (
    <Card className={`
      w-80 sm:w-96 pointer-events-auto transform transition-all duration-500 ease-out
      ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'}
      bg-gradient-to-r ${getColorClasses()} backdrop-blur-xl border shadow-2xl
      hover:shadow-3xl hover:scale-105 transition-all duration-300
      relative overflow-hidden group
    `}>
      {/* Animated border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      <CardContent className="p-5 relative z-10">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 pt-0.5 relative">
            <div className="absolute inset-0 rounded-full bg-current opacity-20 animate-pulse" />
            {getIcon()}
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-white mb-2 tracking-wide">
              {notification.title}
            </h4>
            <p className="text-sm text-gray-200 leading-relaxed">
              {notification.message}
            </p>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0 text-gray-300 hover:text-white hover:bg-white/20 
                       rounded-full flex-shrink-0 transition-all duration-200 
                       hover:scale-110 hover:rotate-90"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Progress bar */}
        <div className="mt-3 h-1 bg-gray-700/50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-white/60 to-white/80 rounded-full
                       animate-[shrink_5s_linear_forwards]"
            style={{
              animationDuration: `${notification.duration || 5000}ms`
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default NotificationProvider
