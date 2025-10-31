"use client"

import { useEffect } from "react"
import { useNotification } from "@/components/notification-provider"

const vapidKey = process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY
const isProduction = process.env.NODE_ENV === "production"

const hasWindow = () => typeof window !== "undefined"

const urlBase64ToUint8Array = (base64String: string) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/")
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; i += 1) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export function PushManager() {
  const { addNotification } = useNotification()

  useEffect(() => {
    if (!hasWindow()) {
      return
    }

    const registerServiceWorker = async () => {
      if (!isProduction) {
        return
      }

      if (!("serviceWorker" in navigator)) {
        return
      }

      try {
        const registration = await navigator.serviceWorker.register("/service-worker.js")

        if (typeof Notification === "undefined") {
          return
        }

        if (Notification.permission === "default") {
          const permission = await Notification.requestPermission()

          if (permission === "granted") {
            addNotification({
              type: "success",
              title: "Notifications enabled",
              message: "You will receive updates about new performances and classes.",
            })
          } else if (permission === "denied") {
            addNotification({
              type: "warning",
              title: "Notifications blocked",
              message: "Enable notifications in your browser settings to receive updates.",
            })
          }
        }

        if (vapidKey && registration.pushManager) {
          const subscription = await registration.pushManager.getSubscription()

          if (!subscription) {
            try {
              await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(vapidKey),
              })
              addNotification({
                type: "info",
                title: "Device subscribed",
                message: "Push notifications are active. Sync this subscription on your server to deliver campaigns.",
              })
            } catch (error) {
              addNotification({
                type: "error",
                title: "Subscription failed",
                message: "We could not subscribe this device. Verify the VAPID key and server endpoint.",
              })
            }
          }
        }
      } catch (error) {
        addNotification({
          type: "error",
          title: "Service worker error",
          message: "We could not register the service worker. Check the console for details.",
        })
      }
    }

    registerServiceWorker()
  }, [addNotification])

  useEffect(() => {
    if (!hasWindow()) {
      return
    }

    if (!isProduction) {
      return
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "PUSH_SUBSCRIPTION_CHANGED") {
        addNotification({
          type: "info",
          title: "Subscription update required",
          message: "Your push subscription changed. Re-sync it on your marketing server to keep notifications active.",
        })
      }
    }

    navigator.serviceWorker?.addEventListener("message", handleMessage)
    return () => navigator.serviceWorker?.removeEventListener("message", handleMessage)
  }, [addNotification])

  return null
}

export default PushManager
