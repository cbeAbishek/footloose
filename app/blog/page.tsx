import type { Metadata } from "next"
import { BlogListing } from "@/components/blog/BlogListing"

export const metadata: Metadata = {
  title: "Blog - Dance Stories, Wellness Tips & Creative Insights | Edwin's Dance Company",
  description:
    "Explore our blog featuring company news, success stories, wellness tips, event recaps, and dance tutorials. Stay inspired with insights from Edwin's Dance & Costume Company's creative journey.",
  keywords: [
    "dance blog",
    "Edwin's Dance stories",
    "dance wellness tips",
    "choreography insights",
    "event recaps Coimbatore",
    "dance tutorials",
    "success stories",
    "dance education",
    "fitness tips",
    "Chair-Co-Cise",
    "Bollywood dance guide",
    "Western dance tips",
    "dance company news",
    "alumni stories",
    "dance inspiration",
    "performance highlights",
    "dance training advice",
    "Footloose blog",
  ],
  authors: [{ name: "Edwin's Dance & Costume Company" }],
  creator: "Edwin's Dance & Costume Company",
  publisher: "Footloose Edwin's Dance Company",
  openGraph: {
    title: "Blog - Dance Stories, Wellness Tips & Creative Insights | Edwin's Dance Company",
    description:
      "Explore company news, success stories, wellness tips, event recaps, and dance tutorials from Edwin's Dance & Costume Company. Get inspired and learn from our creative journey.",
    url: "https://footloose.online/blog",
    siteName: "Footloose Edwin's Dance Company",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Footloose Blog - Dance stories, wellness tips, and creative insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Dance Stories & Wellness Tips | Edwin's Dance Company",
    description:
      "Explore company news, success stories, wellness tips, and dance tutorials from Edwin's Dance & Costume Company.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
    creator: "@footloosedance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://footloose.online/blog",
    types: {
      "application/rss+xml": "https://footloose.online/blog/rss",
    },
  },
}

export default function BlogPage() {
  return <BlogListing />
}

