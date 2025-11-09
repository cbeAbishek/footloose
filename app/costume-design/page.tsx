import type { Metadata } from "next"

import { PageHeader } from "@/components/layout/page-header"
import { Container } from "@/components/layout/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Costume Design",
    description:
        "Discover Footloose costume design labs crafting stage-ready looks with functional detailing, durable fabrics, and fast delivery cycles.",
    openGraph: {
        title: "Footloose Costume Design",
        description: "Concept, fabricate, and deliver performance-ready costumes with Footloose labs.",
        url: "http://footloose.online//costume-design",
        images: [
            {
                url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
                width: 1200,
                height: 630,
                alt: "Footloose costume design",
            },
        ],
    },
}

const designPillars = [
    {
        title: "Research and concepting",
        detail: "Mood boards, motion studies, and fabric testing ensure every look supports choreography and character arcs.",
    },
    {
        title: "Fabrication labs",
        detail: "In-house pattern makers, dye specialists, and accessory teams deliver precise fits with quick iterations.",
    },
    {
        title: "Performance readiness",
        detail: "Costumes are rehearsed, durability tested, and delivered with repair kits for stress-free touring.",
    },
]

const serviceHighlights = [
    "Custom design for schools, brands, and entertainment houses",
    "Large order management with detailed fittings and logistics",
    "Sustainable fabric options and modular components",
    "Styling guides, look books, and backstage change workflows",
]

export default function CostumeDesignPage() {
    return (
        <>
            <PageHeader
                eyebrow="Costume labs"
                title="Stage-ready design and fabrication"
                description="Our costume lab sits with the choreography team from day one, sketching silhouettes, stress-testing fabrics, and delivering fully styled looks that move at the speed of your production."
                actions={
                    <Button asChild variant="outline" className="rounded-full border-border/80">
                        <a href="/costume-rental">Explore rentals</a>
                    </Button>
                }
            />
            <Container className="space-y-16 py-16">
                <section className="grid gap-6 sm:grid-cols-3">
                    {designPillars.map((pillar) => (
                        <Card key={pillar.title} className="border-border/70">
                            <CardHeader>
                                <CardTitle className="text-lg text-foreground">{pillar.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-foreground/70">{pillar.detail}</CardContent>
                        </Card>
                    ))}
                </section>

                <section className="space-y-6">
                    <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Workflow</p>
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            How the design sprint unfolds
                        </h2>
                        <p className="max-w-3xl text-sm text-foreground/70">
                            Every project moves through discovery, prototyping, rehearsals, and delivery. We share progress boards so creative directors can iterate without slowing down rehearsal calendars.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {["Discovery", "Prototype", "Fittings", "Delivery"].map((step, index) => (
                            <Card key={step} className="border-border/70">
                                <CardHeader className="space-y-2">
                                    <Badge variant="outline" className="rounded-full border-border px-3 py-1 text-xs">
                                        Step {index + 1}
                                    </Badge>
                                    <CardTitle className="text-lg text-foreground">{step}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xs text-foreground/60">
                                    {stepDescriptions[index]}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Highlights</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {serviceHighlights.map((highlight) => (
                            <Card key={highlight} className="border-border/70">
                                <CardContent className="p-6 text-sm text-foreground/70">{highlight}</CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </Container>
        </>
    )
}

const stepDescriptions = [
    "Review choreography notes, references, and movement constraints.",
    "Prototype silhouettes, choose fabrics, and build sample swatches.",
    "Custom fittings, alterations, and mobility testing in rehearsal rooms.",
    "Final delivery with catalogued packing and on-call alterations support.",
]