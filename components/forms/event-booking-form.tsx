"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { submitForm } from "@/lib/form-submit"
import { toast } from "@/hooks/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const eventBookingSchema = z.object({
  organization: z.string().min(2, "Enter your organisation"),
  contact_name: z.string().min(2, "Enter the main contact"),
  email: z.string().email(),
  phone: z.string().min(6),
  event_date: z.string().min(4, "Provide a tentative date"),
  location: z.string().min(2, "Provide the venue or city"),
  audience_size: z.string().min(1, "Approximate audience size helps us plan"),
  notes: z.string().max(600).optional().or(z.literal("")),
})

export type EventBookingValues = z.infer<typeof eventBookingSchema>

export function EventBookingForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const form = useForm<EventBookingValues>({
    resolver: zodResolver(eventBookingSchema),
    defaultValues: {
      organization: "",
      contact_name: "",
      email: "",
      phone: "",
      event_date: "",
      location: "",
      audience_size: "",
      notes: "",
    },
  })

  const handleSubmit = async (values: EventBookingValues) => {
    setSubmitting(true)
    const result = await submitForm("event_bookings", values)
    setSubmitting(false)

    if (result.success) {
      toast({
        title: "Event brief received",
        description: "Our production desk will reach out with next steps.",
      })
      form.reset()
      return
    }

    toast({
      title: "Unable to submit",
      description: result.error ?? "Please try again shortly.",
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-2xl border border-border bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <div className="p-8 md:p-10 lg:p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Organisation / brand
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Company or institution"
                          className="w-full rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact_name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Primary contact
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name of the coordinator"
                          className="w-full rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          autoComplete="email"
                          placeholder="contact@example.com"
                          className="w-full rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-foreground">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            autoComplete="tel"
                            placeholder="Contact number"
                            className="w-full rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="event_date"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Event date
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Preferred date or range"
                          className="w-full rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Location
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="City / venue"
                          className="w-full rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="audience_size"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-foreground">
                      Audience size
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Approximate numbers"
                        className="w-full rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-foreground">
                      Event notes (optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Describe objectives, themes, or technical requests"
                        className="min-h-[120px] rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <Button type="submit" className="rounded-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Request proposal"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
