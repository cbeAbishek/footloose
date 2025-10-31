import type { Metadata } from "next"

import ContactPageClient from "./contact-page-client"

const pageUrl = "https://footloose.online/contact"

export const metadata: Metadata = {
  title: "Contact Footloose Edwin's Dance Company | Book Performances in Chennai",
  description:
    "Contact Footloose Edwin's Dance Company in Chennai for corporate events, school performances, themed choreography, ChaircoCISE sessions, and custom props across India.",
  keywords: [
    "contact Footloose Edwin's",
    "book dance performers Chennai",
    "corporate dance booking",
    "ChaircoCISE enquiry",
    "dance company contact India",
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      "en-IN": pageUrl,
      "en-US": pageUrl,
    },
  },
  openGraph: {
    title: "Contact Footloose Edwin's Dance Company",
    description:
      "Reach Footloose Edwin's Dance Company to schedule corporate choreography, school programs, themed performances, or wellness classes in Chennai, India.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Footloose Edwin's Dance Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Footloose Edwin's Dance Company",
    description:
      "Request pricing or availability for Footloose Edwin's themed dance performances, classes, and wellness programs in Chennai.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
