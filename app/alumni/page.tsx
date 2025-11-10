import type { Metadata } from "next"
import {
  AlumniHero,
  FeaturedAlumni,
  AlumniDirectory,
  AlumniMap,
  TestimonialsMemories,
  AlumniNetwork,
  CareerOpportunities,
  RecognitionAwards,
  AlumniCTA,
  sampleAlumni,
  sampleTestimonials,
  sampleEvents,
  sampleOpportunities,
  sampleAwards,
} from "@/components/alumni"
import { AlumniForm } from "@/components/forms/alumni-form"

export const metadata: Metadata = {
  title: "Alumni Network - Footloose Family Around the World | Edwin's Dance Company",
  description:
    "Celebrating Footloose alumni making an impact worldwide. Connect with dancers, choreographers, and creative professionals from our global alumni community. Join the network, explore opportunities, and stay connected.",
  keywords: [
    "Footloose alumni",
    "Edwin's Dance alumni",
    "dance alumni network",
    "Coimbatore dance alumni",
    "global dance community",
    "alumni success stories",
    "dance career opportunities",
    "alumni mentorship",
    "dance industry jobs",
    "choreographer network",
    "alumni directory",
    "dance community India",
  ],
  openGraph: {
    title: "Alumni Network - Footloose Family Around the World",
    description:
      "Connect with Footloose alumni shaping dance, choreography, and creative industries worldwide. Stories, achievements, opportunities, and community.",
    url: "http://footloose.online/alumni",
    siteName: "Footloose Edwin's Dance Company",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Footloose Alumni Network - Global Dance Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alumni Network - Footloose Family Around the World",
    description:
      "Connect with alumni, explore opportunities, and stay connected with the global Footloose dance community.",
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
    canonical: "http://footloose.online/alumni",
  },
}

export default function AlumniPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AlumniHero totalAlumni={500} globalLocations={25} />

      {/* Featured Alumni Highlights */}
      <FeaturedAlumni alumni={sampleAlumni} />

      {/* Comprehensive Alumni Directory */}
      {/* <AlumniDirectory alumni={sampleAlumni} /> */}

      {/* Interactive Global Map */}
      {/* <AlumniMap alumni={sampleAlumni} /> */}

      {/* Testimonials & Memories */}
      <TestimonialsMemories testimonials={sampleTestimonials} />

      {/* Alumni Network & Community */}
      <AlumniNetwork events={sampleEvents} />

      {/* Alumni Submission Form */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
              Share Your Journey
            </p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
              Add Your Story to the Alumni Directory
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
              Submit your profile, achievements, and current projects so we can feature you in the Footloose alumni showcase.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none sm:p-12">
            <AlumniForm />
          </div>
        </div>
      </section>

      {/* Career & Collaboration Opportunities */}
      {/* <CareerOpportunities opportunities={sampleOpportunities} /> */}

      {/* Recognition & Awards */}
      {/* <RecognitionAwards awards={sampleAwards} /> */}

      {/* Final Call to Action */}
      <AlumniCTA />
    </main>
  )
}