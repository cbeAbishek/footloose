import type { Metadata } from "next"
import AboutPageClient from "./about-page-client"

const pageUrl = "https://footloose.online/about"

export const metadata: Metadata = {
  title: "About Footloose Edwin's Dance Company | Award-Winning Chennai Choreographers",
  description:
    "Discover Footloose Edwin's Dance Company in Chennai: award-winning choreographers delivering themed performances, corporate entertainment, dance classes, and props management across India.",
  keywords: [
    "Footloose Edwin's Dance Company",
    "dance choreographers Chennai",
    "corporate entertainment India",
    "themed dance performances",
    "ChaircoCISE wellness program",
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      "en-IN": pageUrl,
      "en-US": pageUrl,
    },
  },
  openGraph: {
    title: "About Footloose Edwin's Dance Company | Chennai Dance Professionals",
    description:
      "Meet the award-winning choreographers, instructors, and creative team behind Footloose Edwin's Dance Company in Chennai, India.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Footloose Edwin's Dance Company team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Footloose Edwin's Dance Company | Chennai Dance Professionals",
    description:
      "Get to know the Footloose Edwin's Dance Company leadership and production team delivering immersive dance experiences in Chennai.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
