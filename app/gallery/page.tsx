import type { Metadata } from "next"
import { GalleryMain } from "@/components/gallery/GalleryMain"

export const metadata: Metadata = {
  title: "Gallery - Footloose Moments | Edwin's Dance & Costume Company",
  description:
    "Explore 5,000+ photos and 150+ videos from Footloose performances, events, and behind-the-scenes moments. Browse Annual Day shows, theme performances, ESP showcases, corporate events, fashion shows, workshops, costume galleries, and student spotlights.",
  keywords: [
    "Footloose gallery",
    "Edwin's Dance photos",
    "dance performance videos",
    "Annual Day Coimbatore",
    "theme show gallery",
    "ESP showcase",
    "corporate event photos",
    "dance costume gallery",
    "backstage moments",
    "student spotlight",
    "dance videos",
    "Western dance photos",
    "Bollywood performance",
    "Chair-Co-Cise gallery",
    "kids dance photos",
    "LED dance videos",
    "dance school memories",
    "performance albums",
    "dance workshop photos",
    "fashion show gallery",
  ],
  authors: [{ name: "Edwin's Dance & Costume Company" }],
  creator: "Edwin's Dance & Costume Company",
  publisher: "Footloose Edwin's Dance Company",
  openGraph: {
    title: "Gallery - Footloose Moments | Edwin's Dance & Costume Company",
    description:
      "Explore 5,000+ photos and 150+ videos from Footloose performances, events, and behind-the-scenes moments. Annual Day shows, theme performances, costume galleries, and student spotlights.",
    url: "https://footloose.online/gallery",
    siteName: "Footloose Edwin's Dance Company",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Footloose Gallery - Dance performances, costumes, and behind-the-scenes moments",
      },
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1920,
        height: 1080,
        alt: "Footloose performance gallery showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Footloose Moments | Edwin's Dance & Costume Company",
    description:
      "Explore 5,000+ photos and 150+ videos from Footloose performances and events. Annual Day shows, theme performances, and student spotlights.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
    creator: "@footloosedance",
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
  alternates: {
    canonical: "https://footloose.online/gallery",
  },
}

export default function GalleryPage() {
  return <GalleryMain />
}