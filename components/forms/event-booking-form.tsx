"use client"

import * as React from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { submitForm } from "@/lib/form-submit"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const eventInquirySchema = z.object({
  full_name: z.string().min(2, "Name is required"),
  organization: z.string().optional().or(z.literal("")),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Phone is required"),
  event_type: z.string().min(2, "Event type is required"),
  event_name: z.string().optional().or(z.literal("")),
  preferred_date: z.string().optional().or(z.literal("")),
  alternative_dates: z.string().optional().or(z.literal("")),
  guest_count: z
    .union([z.coerce.number().int().min(1).max(100000), z.literal(""), z.undefined()])
    .optional(),
  event_duration_hours: z
    .union([z.coerce.number().min(1).max(72), z.literal(""), z.undefined()])
    .optional(),
  venue: z.string().optional().or(z.literal("")),
  budget_range: z.string().optional().or(z.literal("")),
  performance_requirements: z.string().optional().or(z.literal("")),
  special_requests: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
})

export type EventBookingValues = z.infer<typeof eventInquirySchema>

export function EventBookingForm() {
  const { toast } = useToast()

  const form = useForm<EventBookingValues>({
    resolver: zodResolver(eventInquirySchema),
    defaultValues: {
      full_name: "",
      organization: "",
      email: "",
      phone: "",
      event_type: "",
      event_name: "",
      preferred_date: "",
      alternative_dates: "",
      guest_count: "",
      event_duration_hours: "",
      venue: "",
      budget_range: "",
      performance_requirements: "",
      special_requests: "",
      message: "",
    },
  })

  const handleSubmit = async (values: EventBookingValues) => {
    try {
      await submitForm("event_inquiries", {
        ...values,
        guest_count: values.guest_count === "" ? null : values.guest_count,
        event_duration_hours:
          values.event_duration_hours === "" ? null : values.event_duration_hours,
      })
      toast({
        title: "Request received",
        description: "Our team will coordinate with you shortly.",
      })
      form.reset()
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Please retry in a moment or contact support.",
      })
    }
  }

  const isSubmitting = form.formState.isSubmitting

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="rounded-2xl border border-border bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <div className="p-8 md:p-10 lg:p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="full_name"
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
                          placeholder="Include country code"
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
                  name="event_type"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Event type
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Concert, showcase, corporate, etc."
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
                  name="event_name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Event name (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Annual day, launch, etc."
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
                  name="preferred_date"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Preferred date
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="DD/MM/YYYY or range"
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
                  name="alternative_dates"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Alternative dates
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={2}
                          placeholder="Comma separated back-up dates"
                          className="rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
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
                  name="guest_count"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Guest count
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          placeholder="Approximate numbers"
                          className="w-full rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="event_duration_hours"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Duration (hours)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          max={72}
                          step={0.5}
                          placeholder="e.g. 2"
                          className="w-full rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          {...field}
                          value={field.value ?? ""}
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
                  name="venue"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Venue / city
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Location of performance"
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
                  name="budget_range"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Budget range (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. ₹2–3L"
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
                name="performance_requirements"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-foreground">
                      Performance requirements
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Describe acts, props, production cues"
                        className="min-h-[120px] rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="special_requests"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-foreground">
                      Special requests
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder="Celebrity appearances, backstage passes, etc."
                        className="min-h-[100px] rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-foreground">
                      Additional context
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder="Share timelines, goals, or references"
                        className="min-h-[100px] rounded-lg border-input bg-background px-4 py-3 text-sm transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
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
