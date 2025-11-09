import type { Metadata } from "next"

import { PageHeader } from "@/components/layout/page-header"
import { Container } from "@/components/layout/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { EventBookingForm } from "@/components/forms/event-booking-form"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Partner with Footloose for choreography, classes, events, or wellness programs. Share your brief and our production desk will respond within one business day.",
    openGraph: {
        title: "Connect with Footloose",
        description:
            "Book choreography, classes, and movement experiences with Footloose Edwin's Dance Company.",
        url: "http://localhost:3000//contact",
        images: [
            {
                url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
                width: 1200,
                height: 630,
                alt: "Footloose contact",
            },
        ],
    },
}

const studioContacts = [
    {
        title: "Studio desk",
        lines: ["Footloose Studio", "Chennai, Tamil Nadu"],
    },
    {
        title: "Email",
        lines: ["hello@footloose.online"],
    },
    {
        title: "Phone",
        lines: ["+91 98422 22467"],
    },
    {
        title: "Hours",
        lines: ["Mon-Fri: 9:00 - 19:00", "Sat-Sun: 10:00 - 17:00"],
    },
]

export default function ContactPage() {
    return (
        <>
            <PageHeader
                eyebrow="Collaborate"
                title="Bring Footloose into your next production"
                description="Share your inquiry for choreography, corporate wellness, or training programs. Our producers review every brief carefully to craft bespoke movement experiences."
            />
            <Container className="space-y-16 py-16">
                <section className="grid gap-10 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)]">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-foreground">Contact points</h2>
                        <p className="text-sm text-foreground/70">
                            Prefer WhatsApp? Message us at +91 98422 22467 and we will route your requirement to the right team. For
                            detailed briefs, use the forms on this page so we can respond with clarity.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {studioContacts.map((item) => (
                                <Card key={item.title} className="border-border/70">
                                    <CardHeader>
                                        <CardTitle className="text-sm uppercase tracking-[0.2em] text-foreground/60">
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-foreground/80">
                                        {item.lines.map((line) => (
                                            <p key={line}>{line}</p>
                                        ))}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <Card className="border-border/70">
                        <CardHeader>
                            <CardTitle className="text-xl text-foreground">General inquiry</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ContactForm />
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                <section className="grid gap-10 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)]">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">Plan an event with Footloose</h2>
                        <p className="text-sm text-foreground/70">
                            Large productions demand precise logistics. Use the event form to give us clarity on scale, timelines, and
                            creative direction so our producers can align with you quickly.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground/60">
                            <li>- Corporate launches and employee engagements</li>
                            <li>- School annual days and cultural festivals</li>
                            <li>- Fashion runways and bespoke entries</li>
                        </ul>
                    </div>
                    <Card className="border-border/70">
                        <CardHeader>
                            <CardTitle className="text-xl text-foreground">Event briefing</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <EventBookingForm />
                        </CardContent>
                    </Card>
                </section>
            </Container>
        </>
    )
}