"use client"

import { CostumeHero } from "./CostumeHero"
import { CostumeGallery } from "./CostumeGallery"
import { RentalProcess } from "./RentalProcess"
import { PricingPackages } from "./PricingPackages"
import { BookingFormSection } from "./BookingFormSection"
import { TestimonialsAndFAQ } from "./TestimonialsAndFAQ"
import { AccessoriesCatalog } from "./AccessoriesCatalog"
import { CostumeCareGuidelines } from "./CostumeCareGuidelines"
import { AboutRentalDivision } from "./AboutRentalDivision"

export function CostumeRentalMain() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <CostumeHero />

      {/* Costume Gallery with Search & Filters */}
      {/* <div id="gallery">
        <CostumeGallery />
      </div> */}

      {/* How Rental Works */}
      <RentalProcess />

      {/* Pricing & Packages */}
      <PricingPackages />

      {/* Booking Form */}
      <BookingFormSection />

      {/* Testimonials & FAQ */}
      <TestimonialsAndFAQ />

      {/* Accessories & Props */}
      <AccessoriesCatalog />

      {/* Costume Care Guidelines */}
      <CostumeCareGuidelines />

      {/* About Rental Division */}
      <AboutRentalDivision />
    </div>
  )
}
