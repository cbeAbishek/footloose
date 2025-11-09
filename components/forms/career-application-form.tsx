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

const careerSchema = z.object({
  full_name: z.string().min(2, "Enter your full name"),
  email: z.string().email(),
  phone: z.string().min(6),
  role: z.string().min(2, "What role are you applying for?"),
  experience_years: z
    .number({ invalid_type_error: "Enter years of experience" })
    .min(0)
    .max(50),
  portfolio_url: z
    .string()
    .url("Provide a valid link")
    .optional()
    .or(z.literal("")),
  cover_letter: z.string().max(1000).optional().or(z.literal("")),
})

export type CareerApplicationValues = z.infer<typeof careerSchema>

export function CareerApplicationForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const form = useForm<CareerApplicationValues>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      role: "",
      experience_years: 0,
      portfolio_url: "",
      cover_letter: "",
    },
  })

  const handleSubmit = async (values: CareerApplicationValues) => {
    setSubmitting(true)
    const result = await submitForm("career_applications", values)
    setSubmitting(false)

    if (result.success) {
      toast({
        title: "Application received",
        description: "Our talent desk will get in touch soon.",
      })
      form.reset()
      return
    }

    toast({
      title: "Could not submit",
      description: result.error ?? "Please try again later.",
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
                <Input placeholder="Your name" {...field} />
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
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input placeholder="Eg. Choreography Assistant" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience_years"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience (years)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={50}
                    step={1}
                    value={field.value}
                    onChange={(event) => field.onChange(Number(event.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="portfolio_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Portfolio / reel (optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cover_letter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover letter (optional)</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Share why you want to work with Footloose" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit application"}
        </Button>
      </form>
    </Form>
  )
}
