"use client"

import { GraduationCap, BookOpen, Users, Theater } from "lucide-react"
import { ServiceTemplate } from "./ServiceTemplate"
import { EventBookingForm } from "@/components/forms/event-booking-form"
import { servicesData } from "./data"

const iconMap = {
  GraduationCap,
  BookOpen,
  Users,
  Theater
}

export function ESPShowcase() {
  const data = servicesData.espShowcase
  
  const features = data.features.map(f => ({
    ...f,
    icon: iconMap[f.icon as keyof typeof iconMap]
  }))

  return (
    <ServiceTemplate
      {...data}
      features={features}
      formComponent={<EventBookingForm />}
      iconMap={iconMap}
    />
  )
}
