"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "919842222467";

type SummerCampEnquiry = {
  studentName: string;
  studentAge: string;
  parentName: string;
  phoneNumber: string;
  enquiryContent: string;
};

const initialFormState: SummerCampEnquiry = {
  studentName: "",
  studentAge: "",
  parentName: "",
  phoneNumber: "",
  enquiryContent: "",
};

export default function SummerCampPage() {
  const [formValues, setFormValues] =
    useState<SummerCampEnquiry>(initialFormState);
  const [showValidation, setShowValidation] = useState(false);

  const phoneDigits = useMemo(
    () => formValues.phoneNumber.replace(/[^\d]/g, ""),
    [formValues.phoneNumber],
  );

  const errors = useMemo(
    () => ({
      studentName: formValues.studentName.trim()
        ? ""
        : "Student name is required",
      studentAge: formValues.studentAge.trim() ? "" : "Student age is required",
      parentName: formValues.parentName.trim() ? "" : "Parent name is required",
      phoneNumber:
        phoneDigits.length >= 8
          ? ""
          : "Enter a valid phone number with at least 8 digits",
    }),
    [
      formValues.parentName,
      formValues.studentAge,
      formValues.studentName,
      phoneDigits,
    ],
  );

  const canSubmit = useMemo(
    () => Object.values(errors).every((value) => value.length === 0),
    [errors],
  );

  const updateField = (field: keyof SummerCampEnquiry, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
  };

  const buildWhatsAppMessage = (values: SummerCampEnquiry) => {
    return [
      "Hello Footloose Team,",
      "",
      "*Summer Camp Enquiry*",
      `Student Name: ${values.studentName}`,
      `Student Age: ${values.studentAge}`,
      `Parent Name: ${values.parentName}`,
      `Mobile Number: ${values.phoneNumber}`,
      "",
      "Additional Information Need to Know:",
      values.enquiryContent.trim() || "Not provided",
      "",
      "Please share the next steps and fee details. Thank you!",
    ].join("\n");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowValidation(true);

    if (!canSubmit) {
      return;
    }

    const message = encodeURIComponent(buildWhatsAppMessage(formValues));
    window.location.assign(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-cyan-50 py-10 dark:from-black dark:via-zinc-950 dark:to-black sm:py-14">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-700/20" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-700/20" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-5xl"
        >
          <section className="mb-8 rounded-3xl border border-emerald-200/70 bg-white/85 p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-10">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:border-emerald-700/60 dark:bg-emerald-900/30 dark:text-emerald-300">
              <Sparkles className="h-4 w-4" />
              Summer Camp 2026
            </p>
            <h1 className="text-balance text-3xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Student Enquiry Form
            </h1>
            <p className="mt-4 max-w-3xl text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
              Fill in the student details and enquiry content. When you submit,
              you will be redirected to WhatsApp with all details preloaded as a
              message.
            </p>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="studentName">Student Name *</Label>
                  <Input
                    id="studentName"
                    placeholder="Enter student name"
                    value={formValues.studentName}
                    onChange={(event) =>
                      updateField("studentName", event.target.value)
                    }
                  />
                  {showValidation && errors.studentName ? (
                    <p className="text-xs text-red-500">{errors.studentName}</p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentAge">Student Age *</Label>
                  <Input
                    id="studentAge"
                    type="number"
                    min={3}
                    max={80}
                    placeholder="Age"
                    value={formValues.studentAge}
                    onChange={(event) =>
                      updateField("studentAge", event.target.value)
                    }
                  />
                  {showValidation && errors.studentAge ? (
                    <p className="text-xs text-red-500">{errors.studentAge}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent Name *</Label>
                  <Input
                    id="parentName"
                    placeholder="Enter parent name"
                    value={formValues.parentName}
                    onChange={(event) =>
                      updateField("parentName", event.target.value)
                    }
                  />
                  {showValidation && errors.parentName ? (
                    <p className="text-xs text-red-500">{errors.parentName}</p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Mobile Number *</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formValues.phoneNumber}
                    onChange={(event) =>
                      updateField("phoneNumber", event.target.value)
                    }
                  />
                  {showValidation && errors.phoneNumber ? (
                    <p className="text-xs text-red-500">{errors.phoneNumber}</p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="enquiryContent">
                  Additional Information Need to Know
                </Label>
                <Textarea
                  id="enquiryContent"
                  rows={5}
                  placeholder="Share any important details, goals, concerns, or questions."
                  value={formValues.enquiryContent}
                  onChange={(event) =>
                    updateField("enquiryContent", event.target.value)
                  }
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  This content is optional and will be added to the preloaded
                  WhatsApp message if provided.
                </p>
              </div>

              <Button
                type="submit"
                className="h-12 w-full rounded-full bg-emerald-600 text-base font-semibold text-white shadow-[0_8px_20px_rgba(5,150,105,0.35)] transition-transform hover:scale-[1.01] hover:bg-emerald-500"
              >
                <MessageCircle className="mr-1 h-5 w-5" />
                Submit and Continue to WhatsApp
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.form>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
            >
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                How this works
              </h2>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                <li>1. Enter student and contact details.</li>
                <li>2. Add your enquiry content with your requirements.</li>
                <li>
                  3. Tap submit and you will be redirected to WhatsApp chat.
                </li>
              </ul>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-800/60 dark:bg-emerald-900/20 dark:text-emerald-200">
                WhatsApp Number: +91 98422 22467
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-200">
                Tip: Add class timing preference and dance goals in the
                additional information so the team can guide you faster.
              </div>
            </motion.aside>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
