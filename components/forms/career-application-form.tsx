"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { submitForm } from "@/lib/form-submit";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const optionalText = () =>
  z
    .union([z.string().min(2), z.literal("")])
    .optional()
    .default("");

const careerSchema = z.object({
  full_name: z.string().min(2, "Enter your full name"),
  email: z.string().email(),
  phone: z.string().min(6),
  current_location: optionalText(),
  position_applied: z.string().min(2, "What role are you applying for?"),
  department: optionalText(),
  expected_salary: z.union([
    z.coerce.number().min(0),
    z.literal(""),
    z.undefined(),
  ]),
  available_from: z.union([z.string().min(4), z.literal(""), z.undefined()]),
  years_of_experience: z.union([
    z.coerce.number().int().min(0).max(50),
    z.literal(""),
    z.undefined(),
  ]),
  current_employer: optionalText(),
  education_qualification: optionalText(),
  resume: z.any().optional(),
  portfolio_url: z.union([z.string().url(), z.literal(""), z.undefined()]),
  cover_letter: z.string().max(2000).optional().or(z.literal("")),
  skills: z.union([z.string(), z.literal(""), z.undefined()]),
  certifications: z.union([z.string(), z.literal(""), z.undefined()]),
  languages: z.union([z.string(), z.literal(""), z.undefined()]),
});

export type CareerApplicationValues = z.infer<typeof careerSchema>;

export function CareerApplicationForm() {
  const [isSubmitting, setSubmitting] = useState(false);

  const form = useForm<CareerApplicationValues>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      current_location: "",
      position_applied: "",
      department: "",
      expected_salary: "",
      available_from: "",
      years_of_experience: "",
      current_employer: "",
      education_qualification: "",
      resume: undefined,
      portfolio_url: "",
      cover_letter: "",
      skills: "",
      certifications: "",
      languages: "",
    },
  });

  const handleSubmit = async (values: CareerApplicationValues) => {
    setSubmitting(true);
    const formData = new FormData();
    formData.set("full_name", values.full_name);
    formData.set("email", values.email);
    formData.set("phone", values.phone);
    formData.set("current_location", values.current_location ?? "");
    formData.set("position_applied", values.position_applied);
    formData.set("department", values.department ?? "");
    formData.set(
      "expected_salary",
      values.expected_salary ? String(values.expected_salary) : "",
    );
    formData.set("available_from", values.available_from ?? "");
    formData.set(
      "years_of_experience",
      values.years_of_experience ? String(values.years_of_experience) : "",
    );
    formData.set("current_employer", values.current_employer ?? "");
    formData.set(
      "education_qualification",
      values.education_qualification ?? "",
    );
    formData.set("portfolio_url", values.portfolio_url ?? "");
    formData.set("cover_letter", values.cover_letter ?? "");
    formData.set("skills", values.skills ?? "");
    formData.set("certifications", values.certifications ?? "");
    formData.set("languages", values.languages ?? "");

    const resumeFile = extractFile(values.resume);
    if (resumeFile) {
      formData.set("resume", resumeFile);
    }

    const result = await submitForm("career_applications", formData);
    setSubmitting(false);

    if (result.success) {
      toast({
        title: "Application received",
        description: "Our talent desk will get in touch soon.",
      });
      form.reset();
      return;
    }

    toast({
      title: "Could not submit",
      description: result.error ?? "Please try again later.",
    });
  };

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
        <div className="grid gap-6 sm:grid-cols-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
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
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    autoComplete="tel"
                    placeholder="Include country code"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="current_location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current location</FormLabel>
                <FormControl>
                  <Input placeholder="City, Country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="position_applied"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Input placeholder="Eg. Choreography Assistant" {...field} />
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
                  <Input
                    placeholder="Productions, Academy, Costumes"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <FormField
            control={form.control}
            name="expected_salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected salary (₹)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    placeholder="Monthly"
                    value={field.value ?? ""}
                    onChange={(event) => field.onChange(event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="available_from"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Available from</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="years_of_experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience (years)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={50}
                    step={1}
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
            name="current_employer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current employer</FormLabel>
                <FormControl>
                  <Input placeholder="Company / Collective" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="education_qualification"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Education / certification</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Diploma, Degree, Certification"
                    {...field}
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
            name="portfolio_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Portfolio / reel</FormLabel>
                <FormControl>
                  <Input placeholder="https://" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resume (PDF)</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="application/pdf"
                    onChange={(event) =>
                      field.onChange(event.target.files ?? undefined)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key skills</FormLabel>
              <FormControl>
                <Input
                  placeholder="Comma separated e.g. choreography, teaching, lighting"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="certifications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certifications</FormLabel>
              <FormControl>
                <Input placeholder="Comma separated" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages</FormLabel>
              <FormControl>
                <Input placeholder="Comma separated" {...field} />
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
              <FormLabel>Cover letter</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Share why you want to work with Footloose"
                  {...field}
                />
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
  );
}

function extractFile(value: unknown): File | undefined {
  if (!value) return undefined;
  if (value instanceof File) return value;
  if (value instanceof FileList) {
    return value.length > 0 ? value[0] : undefined;
  }
  if (Array.isArray(value)) {
    return value[0] instanceof File ? (value[0] as File) : undefined;
  }
  return undefined;
}
