import type { Metadata } from "next"
import ClassesPageClient from "./classes-page-client"

const pageUrl = "https://footloose.online/services/classes"

export const metadata: Metadata = {
  title: "Dance Classes in Chennai | Footloose Edwin's Training Programs",
  description:
    "Join Footloose Edwin's Dance Company classes in Chennai offering ballet, hip hop, contemporary, kids dance, and ChaircoCISE-inspired fitness sessions for all ages.",
  keywords: [
    "dance classes Chennai",
    "kids dance lessons",
    "adult dance fitness",
    "ChaircoCISE training",
    "Footloose dance academy",
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      "en-IN": pageUrl,
      "en-US": pageUrl,
    },
  },
  openGraph: {
    title: "Dance Classes | Footloose Edwin's Dance Company",
    description:
      "Sign up for Footloose Edwin's group and private dance classes in Chennai covering classical, contemporary, Bollywood, and fitness-focused programs.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Dance classes with Footloose Edwin's Dance Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dance Classes | Footloose Edwin's Dance Company",
    description:
      "Learn multiple dance styles, performance skills, and wellness routines through Footloose Edwin's classes in Chennai.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
  },
}

export default function ClassesServicesPage() {
  return <ClassesPageClient />
}
