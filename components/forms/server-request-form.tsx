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

const serverRequestSchema = z.object({
  requester: z.string().min(2, "Enter your name"),
  department: z.string().min(2, "Department is required"),
  priority: z.enum(["low", "medium", "high"]),
  summary: z.string().min(4, "Summary is required"),
  details: z.string().min(20, "Provide a bit more detail"),
})

export type ServerRequestValues = z.infer<typeof serverRequestSchema>

export function ServerRequestForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const form = useForm<ServerRequestValues>({
    resolver: zodResolver(serverRequestSchema),
    defaultValues: {
      requester: "",
      department: "",
      priority: "medium",
      summary: "",
      details: "",
    },
  })

  const handleSubmit = async (values: ServerRequestValues) => {
    setSubmitting(true)
    const result = await submitForm("server_requests", values)
    setSubmitting(false)

    if (result.success) {
      toast({
        title: "Request captured",
        description: "Our operations team will follow up shortly.",
      })
      form.reset({
        requester: "",
        department: "",
        priority: "medium",
        summary: "",
        details: "",
      })
      return
    }

    toast({
      title: "Unable to submit",
      description: result.error ?? "Please try again in a moment.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="requester"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <Input placeholder="Eg. Production, Costume" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Input placeholder="Eg. Request for rehearsal slots" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Details</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Outline requirements, timelines, dependencies" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit request"}
        </Button>
      </form>
    </Form>
  )
}
