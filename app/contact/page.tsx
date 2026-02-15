import type { Metadata } from "next";
import {
  ContactHero,
  LocationAndMapSection,
  ContactFormSection,
  FAQSection,
  contactLocations,
  faqCategories,
} from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact & Support - Edwin's Dance & Costume Company",
  description:
    "Get in touch with Footloose Edwin's Dance Company in Coimbatore. Visit our R.S. Puram or Ramanathapuram branches for classes, costume rentals, and event bookings. We respond within 24 hours.",
  keywords: [
    "dance classes Coimbatore",
    "Edwin's Dance Company contact",
    "costume rental Coimbatore",
    "R.S. Puram dance studio",
    "Ramanathapuram dance classes",
    "contact Footloose",
  ],
  openGraph: {
    title: "Contact Edwin's Dance & Costume Company - Footloose",
    description:
      "Reach out to Edwin's Dance Company for classes, choreography, costumes, and events. Two locations in Coimbatore with expert support.",
    url: "https://footloose.online/contact",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Footloose Edwin's Dance & Costume Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Edwin's Dance & Costume Company",
    description:
      "Get in touch with Footloose for dance classes, costumes, and event bookings.",
    images: ["https://i.ibb.co/84DmJmx7/footloose.jpg"],
  },
};

// Structured Data for LocalBusiness
const structuredData = {
  "@context": "https://schema.org",
  "@type": "DanceSchool",
  name: "Edwin's Dance & Costume Company (Footloose)",
  alternateName: "Footloose",
  description:
    "Premier dance school and costume rental service in Coimbatore offering Western, Bollywood, Classical, and wellness programs.",
  url: "https://footloose.online",
  telephone: "+91-9842222467",
  email: "contact@footloose.online",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "123 Avinashi Road, R.S. Puram",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641002",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "456 Sathy Road, Ramanathapuram",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641045",
      addressCountry: "IN",
    },
  ],
  geo: [
    {
      "@type": "GeoCoordinates",
      latitude: 11.0168,
      longitude: 76.9558,
    },
    {
      "@type": "GeoCoordinates",
      latitude: 11.051,
      longitude: 76.9634,
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/footloose_edwin",
    "https://www.facebook.com/footloosecoimbatore",
  ],
  priceRange: "₹₹",
  areaServed: {
    "@type": "City",
    name: "Coimbatore",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <ContactHero />

      {/* Location and Map Section - Combined */}
      <LocationAndMapSection locations={contactLocations} />

      {/* Contact Form */}
      {/* <div id="contact">
        <ContactFormSection />
      </div> */}

      {/* FAQ Section */}
      {/* <FAQSection categories={faqCategories} /> */}
    </>
  );
}
