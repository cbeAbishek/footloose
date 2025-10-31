import type { Metadata } from "next"

import ServicesPageClient from "./services-page-client"

const pageUrl = "https://footloose.online/services"

export const metadata: Metadata = {
  title: "Dance Services in Chennai | Corporate, School, Props, and ChaircoCISE",
  description:
    "Partner with Footloose Edwin's Dance Company for corporate choreography, school performances, props design, themed productions, and ChaircoCISE wellness programs across Chennai and India.",
  keywords: [
    "dance services Chennai",
    "corporate choreography services",
    "school dance production",
    "ChaircoCISE fitness classes",
    "event props for performances",
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      "en-IN": pageUrl,
      "en-US": pageUrl,
    },
  },
  openGraph: {
    title: "Footloose Edwin's Dance Company Services",
    description:
      "Explore corporate choreography, school showcase planning, themed props, and wellness programs offered by Footloose Edwin's Dance Company in Chennai, India.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Footloose Edwin's Dance Company services overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Footloose Edwin's Dance Company Services",
    description:
      "Corporate choreography, school events, props, and ChaircoCISE wellness solutions by Footloose Edwin's Dance Company in Chennai.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
