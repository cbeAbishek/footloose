import type { Metadata } from "next"

import GalleryPageClient from "./gallery-page-client"

const pageUrl = "https://footloose.online/gallery"

export const metadata: Metadata = {
  title: "Dance Event Gallery | Footloose Edwin's Performances and Productions",
  description:
    "Browse the Footloose Edwin's Dance Company gallery featuring corporate dance entertainment, school shows, themed performances, and ChaircoCISE wellness sessions in Chennai and across India.",
  keywords: [
    "dance event gallery",
    "Chennai dance performances",
    "corporate entertainment photos",
    "Footloose Edwin's productions",
    "ChaircoCISE gallery",
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      "en-IN": pageUrl,
      "en-US": pageUrl,
    },
  },
  openGraph: {
    title: "Footloose Edwin's Dance Company Gallery",
    description:
      "View photos and highlights from Footloose Edwin's corporate events, school performances, themed productions, and wellness programs in Chennai, India.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Footloose Edwin's Dance Company gallery montage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Footloose Edwin's Dance Company Gallery",
    description:
      "Catch a glimpse of Footloose Edwin's themed dance performances, classes, and live events across India.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
  },
}

export default function GalleryPage() {
  return <GalleryPageClient />
}
