import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { ThemesPreview } from "@/components/themes-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"

const pageUrl = "https://footloose.online"

export const metadata: Metadata = {
  title: "Footloose Edwin's Dance Company | Corporate, School, and Event Dance Performances",
  description:
    "Footloose Edwin's Dance Company in Chennai delivers corporate event choreography, school annual day performances, themed dance shows, props, and ChaircoCISE wellness classes across India.",
  keywords: [
    "Chennai dance company",
    "corporate choreography Chennai",
    "school annual day dance",
    "ChaircoCISE classes",
    "themed dance performances India",
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      "en-IN": pageUrl,
      "en-US": pageUrl,
    },
  },
  openGraph: {
    title: "Footloose Edwin's Dance Company | Chennai Dance Entertainment",
    description:
      "Experience corporate choreography, school performances, props, and ChaircoCISE wellness programs by Footloose Edwin's Dance Company in Chennai, India.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Footloose Edwin's Dance Company performers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Footloose Edwin's Dance Company | Chennai Dance Entertainment",
    description:
      "Book corporate choreography, school performances, and themed shows with Footloose Edwin's Dance Company in Chennai.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <ServicesOverview />
        {/* <ThemesPreview /> */}
        <TestimonialsSection />
        {/* <CTASection />  */}
    </div>
  )
}
