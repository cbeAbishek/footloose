"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Send, CheckCircle2 } from "lucide-react"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

const inquirySchema = z.object({
  full_name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  topic: z.string().min(1, "Please select a topic"),
  message: z.string().min(10, "Please provide more details (at least 10 characters)"),
})

export type InquiryFormValues = z.infer<typeof inquirySchema>

const topics = [
  "Class Enrollment Inquiry",
  "Costume Rental Request",
  "Event Booking",
  "Corporate Wellness Program",
  "General Question",
  "Feedback or Complaint",
  "Alumni Inquiry",
  "Career Opportunities",
]

export function ContactFormSection() {
  const [isSubmitting, setSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const form = useForm<InquiryFormValues>({
    mode: "onBlur",
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    },
  })

  const handleSubmit = async (values: InquiryFormValues) => {
    setSubmitting(true)
    const result = await submitForm("inquiries", values)
    setSubmitting(false)

    if (result.success) {
      setShowSuccess(true)
      toast({
        title: "Message received!",
        description: "Thank you — we'll get back to you within 24 hours.",
      })
      form.reset({
        full_name: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
      })
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
      return
    }

    toast({
      title: "Unable to submit",
      description: result.error ?? "Please try again shortly.",
      variant: "destructive",
    })
  }

  return (
    <section className="bg-white py-20 dark:bg-black">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
            Get in Touch
          </p>
          <h2 className="mb-6 text-4xl font-black text-black dark:text-white md:text-5xl">
            Send Us a Message
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Fill out the form below and we'll respond within one business day. For urgent matters,
            please call us directly.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl border-2 border-black bg-white shadow-lg dark:border-white dark:bg-black">
            <div className="p-8 md:p-12">
              {/* Success Alert */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-8"
                >
                  <Alert className="border-2 border-green-500 bg-green-50 dark:bg-green-950">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      <strong>Thank you for reaching out!</strong> We've received your message and
                      will respond soon.
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="full_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-black dark:text-white">
                            Full Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              className="h-12 rounded-lg border-2 border-black bg-white transition-all focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-black dark:text-white">
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              autoComplete="email"
                              className="h-12 rounded-lg border-2 border-black bg-white transition-all focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-black dark:text-white">
                            Phone Number *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+91 98765 43210"
                              autoComplete="tel"
                              className="h-12 rounded-lg border-2 border-black bg-white transition-all focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="topic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-black dark:text-white">
                            Topic *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 rounded-lg border-2 border-black bg-white transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
                                <SelectValue placeholder="Select a topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {topics.map((topic) => (
                                <SelectItem key={topic} value={topic}>
                                  {topic}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-black dark:text-white">
                          Message *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={6}
                            placeholder="Tell us more about your inquiry, requirements, or questions..."
                            className="rounded-lg border-2 border-black bg-white transition-all focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-14 w-full rounded-full bg-black text-lg font-bold text-white transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:bg-white dark:text-black dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="h-5 w-5 rounded-full border-2 border-white border-t-transparent dark:border-black dark:border-t-transparent"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="h-5 w-5" />
                        </span>
                      )}
                    </Button>
                  </motion.div>

                  {/* Privacy Note */}
                  <p className="text-center text-xs text-black/60 dark:text-white/60">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
