import type { Metadata } from "next"

import { PageHeader } from "@/components/layout/page-header"
import { Container } from "@/components/layout/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Browse Footloose productions spanning corporate events, fashion runways, and community showcases in a curated gallery format.",
    openGraph: {
        title: "Footloose Gallery",
        description: "A visual archive of Footloose Edwin's Dance Company productions.",
        url: "http://localhost:3000//gallery",
        images: [
            {
                url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
                width: 1200,
                height: 630,
                alt: "Footloose gallery",
            },
        ],
    },
}

const showcases = [
    {
        title: "Corporate experiences",
        description:
            "Immersive product launches, leadership offsites, and employee celebrations featuring custom choreography and live music."
    },
    {
        title: "School annual days",
        description:
            "Large format productions where students, faculty, and parents collaborate on storytelling, costumes, and orchestration."
    },
    {
        title: "Fashion runways",
        description:
            "La Ramp sequences fusing movement direction, runway pacing, and dramatic lighting across Indian fashion weeks."
    },
    {
        title: "Community showcases",
        description:
            "Neighbourhood and city-wide festivals that bring inclusive dance education to public spaces and cultural institutions."
    },
    {
        title: "Behind the scenes",
        description:
            "Rehearsal footage, production boards, and costume labs documenting how we build every performance."
    },
    {
        title: "Chair-Co-Cise in action",
        description:
            "Snapshots from corporate campuses where our wellness teams transform boardrooms into movement hubs."
    },
]

export default function GalleryPage() {
    return (
        <>
            <PageHeader
                eyebrow="Archive"
                title="Scenes from three decades of Footloose"
                description="Dive into curated collections from our rehearsal studios, costume labs, and stages. Use these galleries as references when briefing our teams."
            />
            <Container className="space-y-12 py-16">
                <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {showcases.map((item) => (
                        <Card key={item.title} className="border-border/70">
                            <CardHeader>
                                <CardTitle className="text-lg text-foreground">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-foreground/70">{item.description}</CardContent>
                        </Card>
                    ))}
                </section>
                <p className="text-sm text-foreground/60">
                    Looking for media access? Email press@footloose.online for high-resolution assets, showreels, and usage guidelines.
                </p>
            </Container>
        </>
    )
}