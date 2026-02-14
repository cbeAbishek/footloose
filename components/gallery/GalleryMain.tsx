"use client"

import { GalleryHero } from "./GalleryHero"
import { EventHighlights } from "./EventHighlights"
import { CostumeBackstage } from "./CostumeBackstage"
import { VideoGallery } from "./VideoGallery"
import { StudentSpotlight } from "./StudentSpotlight"
import { ThemedCollections } from "./ThemedCollections"
import { TestimonialsSnapshots } from "./TestimonialsSnapshots"
import { GallerySubmission } from "./GallerySubmission"

export function GalleryMain() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <GalleryHero />

      {/* Event Highlights / Performance Albums */}
      {/* <EventHighlights /> */}

      {/* Costume & Backstage Moments */}
      <CostumeBackstage />

      {/* Video Gallery */}
      {/* <VideoGallery /> */}

      {/* Student & Alumni Spotlight */}
      {/* <StudentSpotlight /> */}

      {/* Themed Collections */}
      <ThemedCollections />

      {/* Testimonials with Snapshots */}
      <TestimonialsSnapshots />

      {/* Gallery Submission Form */}
      {/* <div id="submit">
        <GallerySubmission />
      </div> */}
    </main>
  )
}
