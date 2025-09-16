import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  metadataBase: new URL("https://footloose-edwin.vercel.app"),
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
  authors: [{ name: "Footloose Edwin's Dance Company", url: "https://footloose-edwin.vercel.app" }],
  creator: "Footloose Edwin's Dance Company",
  publisher: "Footloose Edwin's Dance Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
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
    url: "https://footloose-edwin.vercel.app",
    siteName: "Footloose Edwin's Dance Company",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Footloose Edwin's Dance Company performing on stage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Footloose Edwin's Dance Company | 30 Years of Dance Excellence",
    description:
      "Professional dance company with 30 years of experience in themed performances, choreography, and fitness.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
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
      <Navigation />
      <Suspense fallback={null}>{children}</Suspense>
      <Footer />
      <WhatsAppFloat />
      <Analytics />
      </body>
    </html>
  )
}
