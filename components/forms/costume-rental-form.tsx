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

const costumeRentalSchema = z.object({
  full_name: z.string().min(2, "Enter your name"),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().min(6),
  requested_items: z.string().min(2, "List the costume pieces required"),
  quantity_needed: z.union([
    z.coerce.number().int().min(1),
    z.literal(""),
    z.undefined(),
  ]),
  rental_start: z.string().min(4, "Provide a start date"),
  rental_end: z.string().min(4, "Provide an end date"),
  event_type: z.string().min(2, "Share the event type"),
  event_location: z.string().min(2, "Where will this be used?"),
  notes: z.string().max(600).optional().or(z.literal("")),
});

export type CostumeRentalValues = z.infer<typeof costumeRentalSchema>;

export function CostumeRentalForm() {
  const [isSubmitting, setSubmitting] = useState(false);

  const form = useForm<CostumeRentalValues>({
    resolver: zodResolver(costumeRentalSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      requested_items: "",
      quantity_needed: "",
      rental_start: "",
      rental_end: "",
      event_type: "",
      event_location: "",
      notes: "",
    },
  });

  const handleSubmit = async (values: CostumeRentalValues) => {
    setSubmitting(true);
    const payload: Record<string, FormDataEntryValue> = {
      full_name: values.full_name,
      email: values.email ?? "",
      phone: values.phone,
      requested_items: values.requested_items,
      rental_start: values.rental_start,
      rental_end: values.rental_end,
      event_type: values.event_type,
      event_location: values.event_location,
      notes: values.notes ?? "",
    };

    if (values.quantity_needed && typeof values.quantity_needed === "number") {
      payload.quantity_needed = String(values.quantity_needed);
    } else {
      payload.quantity_needed = "";
    }

    const startDate = new Date(values.rental_start);
    const endDate = new Date(values.rental_end);
    if (
      !Number.isNaN(startDate.getTime()) &&
      !Number.isNaN(endDate.getTime())
    ) {
      const diff =
        Math.round(
          (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
        ) + 1;
      if (diff > 0) {
        payload.rental_days = String(diff);
      }
    }

    const result = await submitForm("costume_rental_inquiries", payload);
    setSubmitting(false);

    if (result.success) {
      toast({
        title: "Request received",
        description:
          "Our costume lab will confirm availability and pricing soon.",
      });
      form.reset();
      return;
    }

    toast({
      title: "Could not submit",
      description: result.error ?? "Please retry in a few minutes.",
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
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="requested_items"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Requested items</FormLabel>
                <FormControl>
                  <Textarea
                    rows={3}
                    placeholder="Eg. 10 lehengas, 5 jackets, props"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity_needed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    placeholder="Total pieces"
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
            name="rental_start"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rental start</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rental_end"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rental end</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="event_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event type</FormLabel>
                <FormControl>
                  <Input
                    placeholder="School annual day, corporate show"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="event_location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event location</FormLabel>
                <FormControl>
                  <Input placeholder="City / venue" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional details (optional)</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Share timelines, accessories, or delivery notes"
                  {...field}
                />
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
  );
}
