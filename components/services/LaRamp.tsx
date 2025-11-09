"use client"

import { Footprints, User, Lightbulb, ShoppingBag } from "lucide-react"
import { ServiceTemplate } from "./ServiceTemplate"
import { ContactForm } from "@/components/forms/contact-form"
import { servicesData } from "./data"

const iconMap = {
  Footprints,
  User,
  Lightbulb,
  ShoppingBag
}

export function LaRamp() {
  const data = servicesData.laRamp
  
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
