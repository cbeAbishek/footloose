import { ServicesOverview } from "@/components/services"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Edwin's Dance & Costume Company",
  description: "Professional dance classes, choreography, event management, Chair Co-cise wellness, ESP Showcase school programs, and La Ramp fashion shows. 30+ years of excellence in movement and creative arts.",
  keywords: ["dance classes", "choreography services", "event management", "chair co-cise", "school programs", "fashion shows", "Trichy dance school"],
}

export default function ServicesPage() {
  return <ServicesOverview />
}