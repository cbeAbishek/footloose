"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Upload, Image as ImageIcon, X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GalleryCategory } from "./types"
import { categoryLabels } from "./data"

const formSchema = z.object({
  submitterName: z.string().min(2, "Name must be at least 2 characters"),
  submitterEmail: z.string().email("Invalid email address"),
  eventName: z.string().min(3, "Event name must be at least 3 characters"),
  eventDate: z.string().min(1, "Please select an event date"),
  category: z.string().min(1, "Please select a category"),
  description: z.string().min(10, "Description must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export function GallerySubmission() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      submitterName: "",
      submitterEmail: "",
      eventName: "",
      eventDate: "",
      category: "",
      description: "",
    },
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    // Limit to 10 files
    const newFiles = [...selectedFiles, ...files].slice(0, 10)
    setSelectedFiles(newFiles)

    // Create preview URLs
    const newUrls = newFiles.map((file) => URL.createObjectURL(file))
    setPreviewUrls(newUrls)
  }

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index)
    const newUrls = previewUrls.filter((_, i) => i !== index)
    setSelectedFiles(newFiles)
    setPreviewUrls(newUrls)
  }

  const onSubmit = async (data: FormData) => {
    if (selectedFiles.length === 0) {
      form.setError("root", {
        message: "Please select at least one image to upload",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Here you would upload to Supabase storage
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitted(true)
      form.reset()
      setSelectedFiles([])
      setPreviewUrls([])

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      form.setError("root", {
        message: "Failed to submit. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-black py-16 dark:bg-white sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-black text-white dark:text-black sm:text-4xl">
            Submit Your Memories
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400 dark:text-gray-600">
            Share your favorite moments from performances, workshops, and events with the Footloose community
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-2 border-white bg-gray-900 dark:border-black dark:bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-white dark:text-black">Gallery Submission</CardTitle>
              <CardDescription className="text-gray-400 dark:text-gray-600">
                Your photos will be reviewed before being added to the gallery
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-12 text-center"
                >
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                  <h3 className="mb-2 text-2xl font-bold text-white dark:text-black">
                    Submission Successful!
                  </h3>
                  <p className="text-gray-400 dark:text-gray-600">
                    Thank you for sharing your memories. We'll review your submission soon.
                  </p>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="submitterName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white dark:text-black">Your Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                {...field}
                                className="border-gray-700 bg-black text-white placeholder:text-gray-500 dark:border-gray-300 dark:bg-white dark:text-black dark:placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="submitterEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white dark:text-black">Your Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                                className="border-gray-700 bg-black text-white placeholder:text-gray-500 dark:border-gray-300 dark:bg-white dark:text-black dark:placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Event Information */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="eventName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white dark:text-black">Event Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Annual Day 2024"
                                {...field}
                                className="border-gray-700 bg-black text-white placeholder:text-gray-500 dark:border-gray-300 dark:bg-white dark:text-black dark:placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white dark:text-black">Event Date *</FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                {...field}
                                className="border-gray-700 bg-black text-white placeholder:text-gray-500 dark:border-gray-300 dark:bg-white dark:text-black dark:placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white dark:text-black">Event Category *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-700 bg-black text-white dark:border-gray-300 dark:bg-white dark:text-black">
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.entries(categoryLabels)
                                .filter(([key]) => key !== "all")
                                .map(([key, label]) => (
                                  <SelectItem key={key} value={key}>
                                    {label}
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
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white dark:text-black">Description *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about these photos..."
                              className="min-h-[100px] border-gray-700 bg-black text-white placeholder:text-gray-500 dark:border-gray-300 dark:bg-white dark:text-black dark:placeholder:text-gray-400"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-gray-500 dark:text-gray-500">
                            Provide context about the event, performances, or moments captured
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* File Upload */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white dark:text-black">
                        Upload Images * (Max 10)
                      </label>
                      <div className="rounded-xl border-2 border-dashed border-gray-700 bg-black p-8 text-center transition-colors hover:border-white dark:border-gray-300 dark:bg-white dark:hover:border-black">
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                          disabled={selectedFiles.length >= 10}
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Upload className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                          <p className="mb-2 text-sm font-medium text-white dark:text-black">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            PNG, JPG, GIF up to 10MB each
                          </p>
                        </label>
                      </div>

                      {/* Image Previews */}
                      {previewUrls.length > 0 && (
                        <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-5">
                          {previewUrls.map((url, index) => (
                            <div key={index} className="group relative aspect-square">
                              <img
                                src={url}
                                alt={`Preview ${index + 1}`}
                                className="h-full w-full rounded-lg object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Error Message */}
                    {form.formState.errors.root && (
                      <div className="rounded-lg bg-red-500/10 p-4 text-sm text-red-500">
                        {form.formState.errors.root.message}
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black transition-transform hover:bg-gray-200 hover:scale-105 disabled:opacity-50 dark:bg-black dark:text-white dark:hover:bg-gray-800"
                    >
                      {isSubmitting ? (
                        <>
                          <ImageIcon className="mr-2 h-5 w-5 animate-pulse" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Upload className="mr-2 h-5 w-5" />
                          Submit Images
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
