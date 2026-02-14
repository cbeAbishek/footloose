
import { HeroSection } from "@/components/landing/hero-section"
import { StatisticsBoard } from "@/components/landing/statistics-board"
import { TestimonialsSection } from "@/components/landing/testimonials"
import { SocialWall } from "@/components/landing/social-wall"
import { AboutSection } from "@/components/landing/about-section"
import { ChaircoCiseSection } from "@/components/landing/chaircoCise-section"
import { ClientsSection } from "@/components/landing/clients-section"
import { BehindTheStageSection } from "@/components/landing/behind-stage-section"
import { FounderMessageSection } from "@/components/landing/founder-message-section"
import { ClassesShowsEventsSection } from "@/components/landing/classes-shows-events-section"
import { ScrollProgressIndicator } from "@/components/landing/scroll-progress-indicator"
import  ClassCard from "@/components/landing/class-card"

export default function HomePage() {
  return (
    <main>
      <ScrollProgressIndicator />
      <HeroSection />
      <StatisticsBoard />
      <AboutSection />
      {/* <ChaircoCiseSection /> */}
      <TestimonialsSection />
      <ClientsSection />
      {/* <BehindTheStageSection /> */}
      <FounderMessageSection />
      {/* <ClassCard /> */}
      {/* <ClassesShowsEventsSection /> */}
      {/* <SocialWall /> */}
    </main>
  );
}


