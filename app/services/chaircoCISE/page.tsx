import type { Metadata } from "next"
import ChaircoCISEPageClient from "./chaircoCISE-page-client"

const pageUrl = "https://footloose.online/services/chaircoCISE"

export const metadata: Metadata = {
  title: "ChaircoCISE Fitness in Chennai | Footloose Edwin's Workplace Wellness",
  description:
    "Footloose Edwin's ChaircoCISE program delivers low-impact workplace wellness, senior fitness, and mobility-focused dance workouts across Chennai and India.",
  keywords: [
    "ChaircoCISE Chennai",
    "corporate wellness dance",
    "senior fitness classes",
    "seated dance workouts",
    "Footloose wellness program",
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      "en-IN": pageUrl,
      "en-US": pageUrl,
    },
  },
  openGraph: {
    title: "ChaircoCISE Program | Footloose Edwin's Dance Company",
    description:
      "Improve mobility, flexibility, and morale with Footloose Edwin's ChaircoCISE wellness program tailored for workplaces and active seniors in Chennai, India.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "ChaircoCISE wellness session by Footloose Edwin's",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaircoCISE Program | Footloose Edwin's",
    description:
      "Seated dance-inspired wellness sessions for corporate teams and seniors delivered by Footloose Edwin's Dance Company in Chennai.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
  },
}

export default function ChaircoCISEPage() {
  return <ChaircoCISEPageClient />
}
