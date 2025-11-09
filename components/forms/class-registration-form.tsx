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
  student_name: z.string().min(2, "Enter the participant name"),
  guardian_name: z.string().min(2, "Enter the guardian or emergency contact"),
  email: z.string().email(),
  phone: z.string().min(6),
  preferred_style: z.string().min(2),
  experience_level: z.string().min(1),
  message: z.string().max(500).optional().or(z.literal("")),
})

export type ClassRegistrationValues = z.infer<typeof classRegistrationSchema>

const EXPERIENCE_OPTIONS = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "professional", label: "Professional" },
]

export function ClassRegistrationForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const form = useForm<ClassRegistrationValues>({
    resolver: zodResolver(classRegistrationSchema),
    defaultValues: {
      student_name: "",
      guardian_name: "",
      email: "",
      phone: "",
      preferred_style: "",
      experience_level: "",
      message: "",
    },
  })

  const handleSubmit = async (values: ClassRegistrationValues) => {
    setSubmitting(true)
    const result = await submitForm("class_registrations", values)
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
            name="student_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student name</FormLabel>
                <FormControl>
                  <Input placeholder="Participant" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guardian_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Guardian / emergency contact</FormLabel>
                <FormControl>
                  <Input placeholder="Contact person" {...field} />
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
        <FormField
          control={form.control}
          name="preferred_style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred dance style</FormLabel>
              <FormControl>
                <Input placeholder="Bharatanatyam, Contemporary, Hip-hop, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button type="submit" className="rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Join the program"}
        </Button>
      </form>
    </Form>
  )
}
