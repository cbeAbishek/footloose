import type { Metadata } from "next"
import PropsPageClient from "./props-page-client"

const pageUrl = "https://footloose.online/services/props"

export const metadata: Metadata = {
  title: "Themed Dance Props and Costumes in Chennai | Footloose Edwin's",
  description:
    "Rent or commission cinematic-quality props, costumes, and set pieces for dance performances, school productions, and corporate events with Footloose Edwin's in Chennai, India.",
  keywords: [
    "dance props Chennai",
    "custom stage costumes",
    "event prop rental India",
    "Footloose themed props",
    "dance set design Chennai",
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      "en-IN": pageUrl,
      "en-US": pageUrl,
    },
  },
  openGraph: {
    title: "Dance Props and Costumes | Footloose Edwin's Dance Company",
    description:
      "Access expertly crafted props, costumes, and themed set designs for performances curated by Footloose Edwin's Dance Company in Chennai.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Themed props by Footloose Edwin's Dance Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dance Props and Costumes | Footloose Edwin's",
    description:
      "High-impact themed props, costume design, and scenic elements for Footloose Edwin's performances in Chennai and India.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
  },
}

export default function PropsServicesPage() {
  return <PropsPageClient />
}
