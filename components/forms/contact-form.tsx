"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

import { submitForm } from "@/lib/form-submit"
import { toast } from "@/hooks/use-toast"

const contactSchema = z.object({
  full_name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Share a few more details"),
})

export type ContactFormValues = z.infer<typeof contactSchema>

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@footloose.online",
    href: "mailto:hello@footloose.online",
  },
  {
    icon: Phone,
    label: "Call",
    value: "+91 98422 22467",
    href: "tel:+919842222467",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, Tamil Nadu",
    href: "https://maps.google.com",
  },
]

export function ContactForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      full_name: "",
      email: "",
      message: "",
    },
  })

  const handleSubmit = async (values: ContactFormValues) => {
    setSubmitting(true)
    const result = await submitForm("inquiries", values)
    setSubmitting(false)

    if (result.success) {
      toast({
        title: "Thank you",
        description: "We received your inquiry and will respond within one business day.",
      })
      form.reset()
      return
    }

    toast({
      title: "Submission failed",
      description: result.error ?? "Please try again in a moment.",
    })
  }

  return (
    <div className="relative w-full max-w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 shadow-2xl backdrop-blur-xl transition-colors dark:border-white/10 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95">
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 opacity-50 transition-opacity" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl transition-opacity" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl transition-opacity" />
      
      <div className="relative grid w-full grid-cols-1 gap-8 p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-10 lg:p-12 xl:gap-14 xl:p-14 2xl:gap-16 2xl:p-16">
        {/* Left side - Contact items */}
        <div className="w-full space-y-8 lg:space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl">Get in Touch</h2>
            <p className="text-base leading-relaxed text-white/70 lg:text-lg">
              Connect with us through any of these channels. We're here to help bring your vision to life.
            </p>
          </div>
          
          <div className="space-y-4 lg:space-y-5">
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noreferrer" : undefined}
                  className="group flex w-full items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-500/20 lg:p-6"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 lg:h-14 lg:w-14">
                      <Icon className="h-6 w-6 text-white lg:h-7 lg:w-7" strokeWidth={2} />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/60 lg:text-sm">
                        {item.label}
                      </span>
                      <span className="truncate text-base font-medium text-white lg:text-lg">{item.value}</span>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 lg:h-12 lg:w-12">
                    <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1 lg:h-6 lg:w-6" strokeWidth={2} />
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-10 xl:p-12">
          <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-6 lg:space-y-7">
            <div className="w-full space-y-2">
              <label htmlFor="full_name" className="block text-center text-base font-semibold text-white lg:text-lg">
                Name
              </label>
              <input
                id="full_name"
                type="text"
                placeholder="Your full name"
                {...form.register("full_name")}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-base text-white backdrop-blur-sm transition-all duration-300 placeholder:text-white/40 focus:border-indigo-400 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 lg:px-6 lg:py-4 lg:text-lg"
              />
              {form.formState.errors.full_name && (
                <p className="text-sm text-red-400 lg:text-base">{form.formState.errors.full_name.message}</p>
              )}
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="email" className="block text-center text-base font-semibold text-white lg:text-lg">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                {...form.register("email")}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-base text-white backdrop-blur-sm transition-all duration-300 placeholder:text-white/40 focus:border-indigo-400 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 lg:px-6 lg:py-4 lg:text-lg"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-400 lg:text-base">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="message" className="block text-center text-base font-semibold text-white lg:text-lg">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Share your project details, timelines, or any questions..."
                {...form.register("message")}
                className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-base text-white backdrop-blur-sm transition-all duration-300 placeholder:text-white/40 focus:border-indigo-400 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 lg:px-6 lg:py-4 lg:text-lg"
              />
              {form.formState.errors.message && (
                <p className="text-sm text-red-400 lg:text-base">{form.formState.errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 lg:text-xl"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
