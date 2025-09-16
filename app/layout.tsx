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
  title: "Footloose Edwin's Dance Company | 30 Years of Dance Excellence",
  description:
    "Professional dance company offering themed performances, choreography, props, and specialized fitness programs like ChaircoCISE. Serving schools, corporates, and individuals for 30 years.",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: [
    "dance",
    "choreography",
    "props",
    "fitness",
    "ChaircoCISE",
    "corporate events",
    "school performances",
    "themed dance",
  ],
  authors: [{ name: "Footloose Edwin's Dance Company" }],
  creator: "Footloose Edwin's Dance Company",
  publisher: "Footloose Edwin's Dance Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://footloose-edwin.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Footloose Edwin's Dance Company",
    description: "Professional dance company with 30 years of experience in themed performances and choreography",
    url: "https://footloose-edwin.vercel.app",
    siteName: "Footloose Edwin's Dance Company",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Footloose Edwin's Dance Company",
    description: "Professional dance company with 30 years of experience",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
