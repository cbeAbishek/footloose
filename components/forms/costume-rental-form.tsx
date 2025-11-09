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

const costumeRentalSchema = z.object({
  full_name: z.string().min(2, "Enter your name"),
  email: z.string().email(),
  phone: z.string().min(6),
  event_date: z.string().min(4, "Provide an expected date"),
  theme: z.string().min(2, "Share the theme or concept"),
  sizes: z.string().min(2, "List sizes or age groups"),
  notes: z.string().max(600).optional().or(z.literal("")),
})

export type CostumeRentalValues = z.infer<typeof costumeRentalSchema>

export function CostumeRentalForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const form = useForm<CostumeRentalValues>({
    resolver: zodResolver(costumeRentalSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      event_date: "",
      theme: "",
      sizes: "",
      notes: "",
    },
  })

  const handleSubmit = async (values: CostumeRentalValues) => {
    setSubmitting(true)
    const result = await submitForm("costume_rentals", values)
    setSubmitting(false)

    if (result.success) {
      toast({
        title: "Request received",
        description: "Our costume lab will confirm availability and pricing soon.",
      })
      form.reset()
      return
    }

    toast({
      title: "Could not submit",
      description: result.error ?? "Please retry in a few minutes.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="Contact person" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input autoComplete="tel" placeholder="Include country code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="event_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event date</FormLabel>
                <FormControl>
                  <Input placeholder="DD/MM/YYYY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Theme / concept</FormLabel>
                <FormControl>
                  <Input placeholder="Eg. Retro, Mythology, Futuristic" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="sizes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sizes required</FormLabel>
              <FormControl>
                <Textarea rows={3} placeholder="Eg. 10 dancers | Ages 10-14 | Size chart if available" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional details (optional)</FormLabel>
              <FormControl>
                <Textarea rows={4} placeholder="Share timelines, accessories, or delivery notes" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Request availability"}
        </Button>
      </form>
    </Form>
  )
}
