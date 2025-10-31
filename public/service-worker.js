const CACHE_PREFIX = "footloose-cache"
const STATIC_CACHE = `${CACHE_PREFIX}-static-v1`
const RUNTIME_CACHE = `${CACHE_PREFIX}-runtime`

const STATIC_ASSETS = [
  "./",
  "./offline",
  "./icon-192.jpg",
  "./icon-512.jpg",
  "./logo.svg",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== STATIC_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      )
    }).then(() => self.clients.claim())
  )
})

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return
  }

  const requestURL = new URL(event.request.url)

  if (requestURL.origin === self.location.origin && STATIC_ASSETS.includes(`.${requestURL.pathname}`)) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    )
    return
  }

  event.respondWith(
    caches.open(RUNTIME_CACHE).then((cache) => {
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            cache.put(event.request, response.clone())
          }
          return response
        })
        .catch(() => caches.match(event.request))
    })
  )
})

self.addEventListener("push", (event) => {
  const payload = event.data ? event.data.json() : {}
  const title = payload.title || "Footloose Edwin's Dance Company"
  const options = {
    body: payload.body || "Stay in step with the latest performances, classes, and themed events.",
    icon: payload.icon || "/icon-192.jpg",
    badge: payload.badge || "/icon-192.jpg",
    data: {
      url: payload.url || "/",
    },
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener("notificationclick", (event) => {
  event.notification.close()
  const target = event.notification.data && event.notification.data.url ? event.notification.data.url : "/"
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === target && "focus" in client) {
          return client.focus()
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(target)
      }
      return undefined
    })
  )
})

self.addEventListener("pushsubscriptionchange", (event) => {
  event.waitUntil(
    self.registration.pushManager.getSubscription().then((subscription) => {
      if (!subscription) {
        return clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
          clientList.forEach((client) => client.postMessage({ type: "PUSH_SUBSCRIPTION_CHANGED" }))
        })
      }
      return undefined
    })
  )
})
