"use client"

import { Heart, Music, Briefcase, ShieldCheck } from "lucide-react"
import { ServiceTemplate } from "./ServiceTemplate"
import { ContactForm } from "@/components/forms/contact-form"
import { servicesData } from "./data"

const iconMap = {
  Heart,
  Music,
  Briefcase,
  ShieldCheck
}

export function ChairCoCise() {
  const data = servicesData.chairCoCise
  
  const features = data.features.map(f => ({
    ...f,
    icon: iconMap[f.icon as keyof typeof iconMap]
  }))

  return (
    <ServiceTemplate
      {...data}
      features={features}
      formComponent={<ContactForm />}
      iconMap={iconMap}
    />
  )
}
