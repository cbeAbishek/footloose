import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import NotificationProvider from "@/components/notification-provider"
import PushManager from "@/components/pwa/push-manager"

const siteUrl = "https://footloose.online"
const businessName = "Footloose Edwin's Dance Company"
const businessGeo = {
  latitude: 13.0827,
  longitude: 80.2707,
}

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessName,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    sameAs: [
      "https://www.facebook.com/footlooseedwin",
      "https://www.instagram.com/footlooseedwin",
      "https://www.youtube.com/@footlooseedwin",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-00000-00000",
        contactType: "customer service",
        areaServed: ["IN"],
        availableLanguage: ["English"],
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    description:
      "Dance entertainment company providing choreography, themed performances, props, and wellness programs across India.",
    url: siteUrl,
    telephone: "+91-98422-22467",
    priceRange: "₹₹",
    image: [`${siteUrl}/icon-512.jpg`],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Footloose Studio",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600018",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessGeo.latitude,
      longitude: businessGeo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "India",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: businessName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
]

const structuredDataJson = JSON.stringify(structuredData)

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Footloose Edwin's Dance Company | 30 Years of Dance Excellence",
    template: `%s | Footloose Edwin's Dance Company`,
  },
  description:
    "Professional dance company offering themed performances, choreography, props, and specialized fitness programs like ChaircoCISE. Serving schools, corporates, and individuals for 30 years.",
  generator: "Next.js",
  applicationName: "Footloose Edwin's Dance Company",
  referrer: "origin-when-cross-origin",
  keywords: [
    "dance",
    "choreography",
    "props",
    "fitness",
    "ChaircoCISE",
    "corporate events",
    "school performances",
    "themed dance",
    "dance company",
  ],
  authors: [{ name: "Footloose Edwin's Dance Company", url: siteUrl }],
  creator: "Footloose Edwin's Dance Company",
  publisher: "Footloose Edwin's Dance Company",
  category: "entertainment",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": siteUrl,
      "en-US": siteUrl,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Footloose Edwin's Dance Company | 30 Years of Dance Excellence",
    description:
      "Professional dance company with 30 years of experience in themed performances, choreography, and fitness.",
    url: siteUrl,
    siteName: "Footloose Edwin's Dance Company",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Footloose Edwin's Dance Company performing on stage",
      },
    ],
    locale: "en_IN",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Footloose Edwin's Dance Company | 30 Years of Dance Excellence",
    description:
      "Professional dance company with 30 years of experience in themed performances, choreography, and fitness.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
    site: "@FootlooseEdwin",
    creator: "@FootlooseEdwin",
  },
  appLinks: {
    web: {
      url: siteUrl,
      should_fallback: true,
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.position": `${businessGeo.latitude};${businessGeo.longitude}`,
    ICBM: `${businessGeo.latitude}, ${businessGeo.longitude}`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#059669" },
    { media: "(prefers-color-scheme: dark)", color: "#10b981" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <NotificationProvider>
          <Navigation />
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
          <WhatsAppFloat />
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-S8XNFD36GG" strategy="afterInteractive" />
          <Script id="ga-gtag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-S8XNFD36GG');
            `}
          </Script>
          <Analytics />
          <PushManager />
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: structuredDataJson }}
          />
        </NotificationProvider>
      </body>
    </html>
  )
}
