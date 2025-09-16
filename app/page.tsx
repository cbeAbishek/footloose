
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { ThemesPreview } from "@/components/themes-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <ServicesOverview />
        <ThemesPreview />
        <TestimonialsSection />
        <CTASection /> 
    </div>
  )
}
