import type { Metadata } from "next"
import { CostumeRentalMain } from "@/components/costume"

export const metadata: Metadata = {
  title: "Costume Rental | Edwin's Dance & Costume Company",
  description:
    "Rent premium costumes for dance performances, weddings, school events, and corporate functions. 500+ unique designs across classical, contemporary, folk, western, and theatrical categories. Professional cleaning, all sizes, affordable pricing.",
  keywords: [
    "costume rental",
    "dance costume rental",
    "Bharatanatyam costume",
    "wedding sangeet costumes",
    "school event costumes",
    "theatrical costumes",
    "Trichy costume rental",
    "professional costume hire",
  ],
  openGraph: {
    title: "Premium Costume Rentals | Edwin's Dance & Costume Company",
    description:
      "500+ authentic costumes for every performance. Professional quality, affordable prices, hassle-free service.",
    url: "https://footloose.online/costume-rental",
    images: [
      {
        url: "https://footloose.online/assets/1.jpg",
        width: 1200,
        height: 630,
        alt: "Edwin's Costume Rental Collection",
      },
    ],
  },
}

export default function CostumeRentalPage() {
  return <CostumeRentalMain />
}