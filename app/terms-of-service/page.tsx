import type { Metadata } from "next";

import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Footloose Edwin's Dance Company terms governing service engagements and site usage.",
};

const terms = [
  {
    title: "Acceptance of terms",
    body: [
      'By using footloose.online or partnering with Footloose Edwin\'s Dance Company ("Footloose"), you agree to these terms. Additional agreements may apply for specific projects and will supersede any conflicting clauses here.',
    ],
  },
  {
    title: "Services",
    body: [
      "Our services include choreography, classes, costume design, rentals, wellness programs, and production consulting.",
      "Scope, pricing, and delivery timelines are defined in written proposals approved by both parties.",
    ],
  },
  {
    title: "Client responsibilities",
    body: [
      "Provide accurate information, rehearsal access, and timely approvals to ensure smooth delivery.",
      "Secure necessary performance permissions, venue access, and technical infrastructure unless otherwise agreed.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "Footloose retains rights to original choreography, costume designs, and creative assets unless explicitly transferred in writing.",
      "Clients receive usage rights aligned with the agreed scope. Reproduction or distribution beyond this scope requires written approval.",
    ],
  },
  {
    title: "Payments and cancellations",
    body: [
      "Invoices follow the payment schedule detailed in proposals. Delayed payments may impact rehearsals or delivery dates.",
      "Cancellations or postponements should be communicated in writing. Applicable fees are outlined in service agreements.",
    ],
  },
  {
    title: "Liability",
    body: [
      "Footloose is not liable for indirect, incidental, or consequential damages arising from events outside our reasonable control.",
      "We maintain insurance for our team; clients must provide venue-specific coverage when required.",
    ],
  },
  {
    title: "Supabase services",
    body: [
      "Authenticated areas of the site use Supabase for account management. Users must protect their credentials and notify us of any unauthorised access.",
    ],
  },
  {
    title: "Changes to terms",
    body: [
      "We may update these terms to reflect operational changes or legal requirements. Updates become effective upon publication.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions regarding these terms, email admin@footloose.online or write to Footloose Studio, Chennai, Tamil Nadu, India.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <Container className="space-y-12 py-16">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          Terms
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Terms of service
        </h1>
        <p className="text-sm text-foreground/60">
          Effective date: {new Date().getFullYear()}
        </p>
      </div>
      <div className="space-y-8">
        {terms.map((term) => (
          <section key={term.title} className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {term.title}
            </h2>
            <div className="space-y-3 text-sm text-foreground/70">
              {term.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
