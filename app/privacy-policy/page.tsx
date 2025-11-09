import type { Metadata } from "next"

import { Container } from "@/components/layout/container"

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Understand how Footloose Edwin's Dance Company collects, stores, and protects your information.",
}

const sections = [
    {
        title: "Overview",
        body: [
            "Footloose Edwin's Dance Company (\"Footloose\", \"we\", \"our\") delivers choreography, wellness programs, and entertainment services across India. This privacy policy explains how we handle personal information shared with us online or offline.",
        ],
    },
    {
        title: "Information we collect",
        body: [
            "Contact details shared through enquiry forms, registrations, and bookings.",
            "Project, event, and production requirements submitted for service delivery.",
            "Authentication data when you sign in to protected portals using Supabase Auth.",
            "Media files uploaded to support alumni profiles, testimonials, and blog posts.",
        ],
    },
    {
        title: "How we use information",
        body: [
            "Respond to enquiries, provide quotes, and manage contractual obligations.",
            "Plan rehearsals, workshops, and events with precise logistics.",
            "Operate alumni networks, publish testimonials, and maintain community archives.",
            "Comply with legal requirements and protect the integrity of our services.",
        ],
    },
    {
        title: "Data storage and security",
        body: [
            "We use Supabase databases and storage for all submissions. Access is restricted to authorised Footloose teams via role-based authentication.",
            "Files uploaded through forms are stored in secured buckets with signed URLs when needed.",
            "We retain information only as long as necessary for the purpose it was collected or as required by law.",
        ],
    },
    {
        title: "Your choices",
        body: [
            "Request access to, correction of, or deletion of your personal data by emailing privacy@footloose.online.",
            "Opt out of marketing communication at any time by following unsubscribe instructions or contacting us directly.",
            "If you use our authenticated portals, you may manage your Supabase account settings or request assistance from our admin desk.",
        ],
    },
    {
        title: "Third-party services",
        body: [
            "Analytics and performance tracking may occur through Vercel Analytics and similar providers.",
            "Some media assets may be hosted on trusted content delivery networks. They follow their own privacy practices.",
        ],
    },
    {
        title: "Policy updates",
        body: [
            "We may update this policy to reflect new services or regulatory requirements. Updates take effect immediately when posted to this page.",
        ],
    },
    {
        title: "Contact",
        body: [
            "For privacy questions, email privacy@footloose.online or write to Footloose Studio, Chennai, Tamil Nadu, India.",
        ],
    },
]

export default function PrivacyPolicyPage() {
    return (
        <Container className="space-y-12 py-16">
            <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Policy</p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Privacy policy
                </h1>
                <p className="text-sm text-foreground/60">Last updated: {new Date().getFullYear()}</p>
            </div>
            <div className="space-y-8">
                {sections.map((section) => (
                    <section key={section.title} className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                        <div className="space-y-3 text-sm text-foreground/70">
                            {section.body.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </Container>
    )
}