"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "@/hooks/use-toast"
import { submitForm } from "@/lib/form-submit"
import { Button } from "@/components/ui/button"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BadgeCheck, Sparkles } from "lucide-react"

const classInquirySchema = z.object({
  full_name: z.string().min(2, "Please enter the student's full name"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  phone: z.string().min(6, "Add a valid phone number").max(20),
  age: z
    .union([z.coerce.number().int().min(3).max(80), z.literal(""), z.undefined()])
    .optional()
    .transform((value) => (typeof value === "number" ? value : undefined)),
  interested_class: z.string().optional().or(z.literal("")),
  dance_style: z.string().optional().or(z.literal("")),
  experience_level: z.string().optional().or(z.literal("")),
  preferred_schedule: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
  source: z.string().optional().or(z.literal("")),
})

export type ClassInquiryFormValues = z.infer<typeof classInquirySchema>

const experienceLevels = [
  "First timer",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Professional",
]

const scheduleOptions = [
  "Weekday mornings",
  "Weekday evenings",
  "Weekend mornings",
  "Weekend evenings",
]

const styleOptions = [
  "Bollywood",
  "Hip-Hop",
  "Contemporary",
  "Chair-Co-Cise",
  "Kids Creative",
  "Wedding / Sangeet",
]

const interestOptions = [
  "Regular classes",
  "Performance team",
  "Private coaching",
  "Corporate / group",
  "Chair-Co-Cise",
]

const sourceOptions = [
  "Instagram",
  "YouTube",
  "Google",
  "Friend / Family",
  "Stage show",
  "Other",
]

export function ClassInquiryForm() {
  const [showSuccess, setShowSuccess] = useState(false)

  const form = useForm<ClassInquiryFormValues>({
    resolver: zodResolver(classInquirySchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      age: undefined,
      interested_class: "",
      dance_style: "",
      experience_level: "",
      preferred_schedule: "",
      message: "",
      source: "",
    },
  })

  const isSubmitting = form.formState.isSubmitting

  async function handleSubmit(values: ClassInquiryFormValues) {
    const payload = {
      ...values,
      age: typeof values.age === "number" ? values.age : undefined,
    }

    const result = await submitForm("class_inquiries", payload)

    if (result.success) {
      setShowSuccess(true)
      toast({
        title: "Inquiry sent!",
        description: "Our admissions team will follow up within one business day.",
      })
      form.reset()
      setTimeout(() => setShowSuccess(false), 6000)
      return
    }

    toast({
      title: "Unable to submit",
      description: result.error ?? "Please try again shortly.",
      variant: "destructive",
    })
  }

  return (
    <section className="bg-gradient-to-br from-white via-white to-gray-50 py-16 dark:from-black dark:via-black dark:to-gray-950">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-[32px] border-2 border-black/80 bg-white p-8 shadow-[12px_12px_0_#000] dark:border-white/80 dark:bg-black dark:shadow-[12px_12px_0_#fff] md:p-12">
            <div className="mb-8 space-y-3 text-center">
              <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-black/60 dark:text-white/60">
                <Sparkles className="h-4 w-4" />
                Class Inquiry
              </p>
              <h2 className="text-3xl font-black text-black dark:text-white md:text-4xl">
                Reserve your spot in our studio
              </h2>
              <p className="text-base text-black/70 dark:text-white/70">
                Tell us a little about your dancer and well pair you with the right mentor,
                schedule, and style.
              </p>
            </div>

            {showSuccess && (
              <Alert className="mb-6 border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20">
                <BadgeCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                <AlertDescription className="text-emerald-800 dark:text-emerald-100">
                  Thanks! Your inquiry is in and a coordinator will reach out shortly.
                </AlertDescription>
              </Alert>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Student / applicant name"
                            className="h-12 rounded-xl border-2 border-black bg-white text-base dark:border-white dark:bg-black"
                            {...field}
                          />
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
                        <FormLabel>Phone *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="(+91) 98765 43210"
                            className="h-12 rounded-xl border-2 border-black bg-white text-base dark:border-white dark:bg-black"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="parent@example.com"
                            className="h-12 rounded-xl border-2 border-black bg-white text-base dark:border-white dark:bg-black"
                            {...field}
                          />
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
                            className="h-12 rounded-xl border-2 border-black bg-white text-base dark:border-white dark:bg-black"
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

                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="interested_class"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interested class</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value ?? ""}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl border-2 border-black bg-white text-left text-base dark:border-white dark:bg-black">
                              <SelectValue placeholder="Choose a program" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {interestOptions.map((option) => (
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
                        <FormLabel>Preferred dance style</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value ?? ""}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl border-2 border-black bg-white text-left text-base dark:border-white dark:bg-black">
                              <SelectValue placeholder="Pick a style" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {styleOptions.map((option) => (
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

                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="experience_level"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience level</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value ?? ""}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl border-2 border-black bg-white text-left text-base dark:border-white dark:bg-black">
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {experienceLevels.map((option) => (
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
                    name="preferred_schedule"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred schedule</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value ?? ""}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl border-2 border-black bg-white text-left text-base dark:border-white dark:bg-black">
                              <SelectValue placeholder="When can you attend?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {scheduleOptions.map((option) => (
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Goals or notes</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Share motivations, timeline, or anything we should know."
                          className="rounded-xl border-2 border-black bg-white text-base dark:border-white dark:bg-black"
                          {...field}
                        />
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
                          <SelectTrigger className="h-12 rounded-xl border-2 border-black bg-white text-left text-base dark:border-white dark:bg-black">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {sourceOptions.map((option) => (
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

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-14 w-full rounded-full bg-black text-lg font-semibold text-white shadow-[6px_6px_0_#000] transition-all hover:-translate-y-0.5 hover:shadow-[10px_10px_0_#000] disabled:opacity-70 dark:bg-white dark:text-black dark:shadow-[6px_6px_0_#fff] dark:hover:shadow-[10px_10px_0_#fff]"
                  >
                    {isSubmitting ? "Sending inquiry..." : "Submit inquiry"}
                  </Button>
                </motion.div>

                <p className="text-center text-xs text-black/60 dark:text-white/60">
                  By submitting you agree to be contacted via phone / email about Footloose programs.
                </p>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
