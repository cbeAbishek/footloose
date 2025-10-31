import type { Metadata } from "next"

import ChoreographyPageClient from "./choreography-page-client"

const pageUrl = "https://footloose.online/services/choreography"

export const metadata: Metadata = {
  title: "Choreography Services in Chennai | Corporate and School Dance Experts",
  description:
    "Footloose Edwin's Dance Company crafts bespoke choreography for corporate launches, school annual days, sangeets, and stage productions across Chennai and India.",
  keywords: [
    "corporate choreography Chennai",
    "school annual day choreographer",
    "event dance direction",
    "Footloose choreography services",
    "custom stage performances India",
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      "en-IN": pageUrl,
      "en-US": pageUrl,
    },
  },
  openGraph: {
    title: "Choreography Services | Footloose Edwin's Dance Company",
    description:
      "Book Footloose Edwin's professional choreographers for corporate shows, school programmes, themed events, and social celebrations in Chennai, India.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Professional choreography by Footloose Edwin's Dance Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Choreography Services | Footloose Edwin's Dance Company",
    description:
      "Book Footloose Edwin's professional choreographers for corporate shows, school programmes, themed events, and social celebrations in Chennai, India.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
  },
}

export default function ChoreographyPage() {
  return <ChoreographyPageClient />
}
