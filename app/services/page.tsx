import Link from "next/link"

import { PageHeader } from "@/components/layout/page-header"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
    {
        title: "Choreography",
        summary:
            "Creative direction, rehearsal leadership, and show-calling for stages that need more than a routine—they need a narrative arc.",
        href: "/services/choreography",
        tags: ["Narrative design", "Music editing", "Stagecraft"],
    },
    {
        title: "Dance Class Program",
        summary:
            "Modular training built for schools, studios, and community centres with curricula tuned to age, experience, and ambition.",
        href: "/services/dance-class",
        tags: ["Technique labs", "Assessments", "Faculty residencies"],
    },
    {
        title: "Chair-Co-Cise",
        summary:
            "Office-friendly movement circuits that restore mobility, improve ergonomics, and energise corporate teams in under 30 minutes.",
        href: "/services/chair-co-cise",
        tags: ["Corporate wellness", "Hybrid teams", "Custom analytics"],
    },
    {
        title: "ESP Showcase",
        summary:
            "Immersive themed productions combining costume labs, projection layouts, and choreography for unforgettable brand moments.",
        href: "/services/esp-showcase",
        tags: ["Storyboarding", "Costume fabrication", "Lighting maps"],
    },
    {
        title: "Events engineering",
        summary:
            "High-impact experiences for launches, ceremonies, and annual days with end-to-end planning and multi-team coordination.",
        href: "/services/events",
        tags: ["Corporate", "Fashion", "Education"],
    },
    {
        title: "La Ramp",
        summary:
            "Runway choreography, model coaching, and backstage flow management tailored for fashion weeks and brand showcases.",
        href: "/services/la-ramp",
        tags: ["Model training", "Music curation", "Backstage ops"],
    },
]

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                eyebrow="Service ecosystem"
                title="Modular offerings that adapt to every movement brief"
                description="Each service is engineered as a reusable system. We plug in choreography, costume design, mentorship, or production support depending on the outcome you are chasing. Explore the service verticals below or engage our team for a hybrid roadmap."
                        actions={
                            <Button asChild variant="outline" className="rounded-full border-border/80">
                                <Link href="/contact">Book a consultation</Link>
                            </Button>
                        }
            />
            <Container className="grid gap-6 pb-16 md:grid-cols-2">
                {services.map((service) => (
                    <Card key={service.title} className="flex h-full flex-col border-border/70">
                        <CardHeader className="space-y-3">
                            <CardTitle className="text-2xl font-semibold text-foreground">{service.title}</CardTitle>
                            <p className="text-sm text-foreground/70">{service.summary}</p>
                        </CardHeader>
                        <CardContent className="mt-auto space-y-4">
                            <div className="flex flex-wrap gap-2 text-xs text-foreground/60">
                                {service.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="rounded-full border-border px-3 py-1">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                                            <Button asChild variant="ghost" className="justify-start px-0 text-sm text-foreground">
                                                <Link href={service.href}>Learn more</Link>
                                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Container>
        </>
    )
}