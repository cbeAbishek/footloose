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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const classRegistrationSchema = z.object({
  full_name: z.string().min(2, "Enter the participant name"),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().min(6, "Add a contact number"),
  age: z
    .union([z.coerce.number().int().min(3).max(80), z.literal(""), z.undefined()])
    .optional(),
  interested_class: z.string().optional().or(z.literal("")),
  dance_style: z.string().optional().or(z.literal("")),
  experience_level: z.string().min(1, "Pick experience"),
  preferred_schedule: z.string().optional().or(z.literal("")),
  message: z.string().max(500).optional().or(z.literal("")),
  source: z.string().optional().or(z.literal("")),
})

export type ClassRegistrationValues = z.infer<typeof classRegistrationSchema>

const EXPERIENCE_OPTIONS = [
  { value: "first-timer", label: "First timer" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "professional", label: "Professional" },
]

const CLASS_INTERESTS = [
  "Regular classes",
  "Performance team",
  "Private coaching",
  "Corporate / group",
  "Chair-Co-Cise",
]

const SCHEDULE_OPTIONS = [
  "Weekday mornings",
  "Weekday evenings",
  "Weekend mornings",
  "Weekend evenings",
]

const STYLE_OPTIONS = [
  "Bollywood",
  "Contemporary",
  "Hip-Hop",
  "Chair-Co-Cise",
  "Bharatanatyam",
]

const SOURCE_OPTIONS = [
  "Instagram",
  "YouTube",
  "Google",
  "Friend / Family",
  "Stage show",
  "Other",
]

export function ClassRegistrationForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const form = useForm<ClassRegistrationValues>({
    resolver: zodResolver(classRegistrationSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      age: undefined,
      interested_class: "",
      dance_style: "",
      experience_level: "",
      message: "",
      preferred_schedule: "",
      source: "",
    },
  })

  const handleSubmit = async (values: ClassRegistrationValues) => {
    setSubmitting(true)
    const payload = {
      ...values,
      age: typeof values.age === "number" ? values.age : undefined,
    }
    const result = await submitForm("class_inquiries", payload)
    setSubmitting(false)

    if (result.success) {
      toast({
        title: "Registration received",
        description: "Our admissions team will follow up with schedules and onboarding details.",
      })
      form.reset()
      return
    }

    toast({
      title: "Could not submit",
      description: result.error ?? "Please refresh and try again.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Applicant name</FormLabel>
                <FormControl>
                  <Input placeholder="Student or dancer name" {...field} />
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="email" placeholder="student@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={3}
                    max={80}
                    placeholder="9"
                    {...field}
                    value={field.value ?? ""}
                    onChange={(event) => field.onChange(event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="interested_class"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interested program</FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CLASS_INTERESTS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dance_style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred style</FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pick a style" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {STYLE_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="experience_level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {EXPERIENCE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferred_schedule"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred schedule</FormLabel>
              <Select onValueChange={field.onChange} value={field.value ?? ""}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="When can you attend?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {SCHEDULE_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional notes (optional)</FormLabel>
              <FormControl>
                <Textarea rows={4} placeholder="Tell us about goals, schedules, or accessibility needs" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How did you hear about us?</FormLabel>
              <Select onValueChange={field.onChange} value={field.value ?? ""}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a channel" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {SOURCE_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Join the program"}
        </Button>
      </form>
    </Form>
  )
}
