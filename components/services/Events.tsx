"use client"

import { Clapperboard, Palette, Users, Mic } from "lucide-react"
import { ServiceTemplate } from "./ServiceTemplate"
import { EventBookingForm } from "@/components/forms/event-booking-form"
import { servicesData } from "./data"

const iconMap = {
  Clapperboard,
  Palette,
  Users,
  Mic
}

export function Events() {
  const data = servicesData.events
  
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
