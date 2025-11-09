import Image from "next/image"
import type { Metadata } from "next"

import { PageHeader } from "@/components/layout/page-header"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AlumniForm } from "@/components/forms/alumni-form"
import { getFeaturedAlumni } from "@/lib/queries"

export const metadata: Metadata = {
    title: "Alumni Network",
    description:
        "Discover Footloose alumni shaping stages, studios, and creative ventures worldwide. Submit your profile to join the showcase.",
    openGraph: {
        title: "Footloose Alumni Community",
        description:
            "Stories, achievements, and journeys from Footloose alumni who continue to advance dance, movement, and storytelling.",
        url: "http://footloose.online//alumni",
        images: [
            {
                url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
                width: 1200,
                height: 630,
                alt: "Footloose Alumni",
            },
        ],
    },
}

export default async function AlumniPage() {
    const alumni = await getFeaturedAlumni(18)

    return (
        <>
            <PageHeader
                eyebrow="Community"
                title="Footloose Alumni Collective"
                description="A living archive of performers, choreographers, educators, and creative technologists who started at Footloose. Explore their journeys and share your own story to join the next cohort."
            />
            <Container className="space-y-16 py-16">
                <section className="space-y-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Alumni spotlights</p>
                            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                Featured profiles
                            </h2>
                            <p className="max-w-2xl text-sm text-foreground/70">
                                The alumni program keeps us connected through touring projects, faculty residencies, and digital showcases. Every quarter we highlight individuals pushing dance, wellness, and creative education into new spaces.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {(alumni.length ? alumni : placeholderAlumni).map((person) => (
                            <Card key={person.id} className="flex h-full flex-col border-border/70">
                                <CardHeader className="flex flex-row items-start gap-4">
                                    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-border/70 bg-muted">
                                        {person.photo_url ? (
                                            <Image
                                                src={person.photo_url}
                                                alt={person.full_name}
                                                fill
                                                sizes="64px"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center text-sm uppercase text-foreground/30">
                                                {initials(person.full_name)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <CardTitle className="text-xl font-semibold text-foreground">{person.full_name}</CardTitle>
                                        <p className="text-sm text-foreground/70">{person.headline}</p>
                                        <Badge variant="outline" className="rounded-full border-border px-3 py-1 text-xs uppercase">
                                            Class of {person.graduation_year}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm leading-relaxed text-foreground/70">{person.bio}</p>
                                                        <div className="text-xs text-foreground/60">
                                                            {person.email ? <p>Email: {person.email}</p> : null}
                                                            {person.website ? (
                                                                <p>
                                                                    Link: <a href={person.website} className="underline" target="_blank" rel="noreferrer">
                                                                        Portfolio
                                                                    </a>
                                                                </p>
                                                            ) : null}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <Separator />

                <section className="grid gap-12 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)]">
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Add your profile</p>
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            Join the alumni showcase
                        </h2>
                        <p className="text-sm text-foreground/70">
                            Submit your biography, current focus areas, and contact details. Our alumni desk reviews entries weekly before publishing them to the showcase.
                        </p>
                                    <ul className="space-y-2 text-sm text-foreground/60">
                                        <li>- Highlight notable performances, collaborations, or awards</li>
                                        <li>- Share what support you can extend to the Footloose community</li>
                                        <li>- Optional photo uploads help audiences connect with you instantly</li>
                        </ul>
                    </div>
                    <Card className="border-border/70">
                        <CardContent className="p-6">
                            <AlumniForm />
                        </CardContent>
                    </Card>
                </section>
            </Container>
        </>
    )
}

const placeholderAlumni = [
    {
        id: "placeholder-1",
        full_name: "Priya Nambiar",
        headline: "Choreographer, New Delhi",
        bio: "Priya crafts interdisciplinary works fusing contemporary Indian movement with theatre design. She mentors Footloose students through the residency program each summer.",
        graduation_year: 2005,
        email: "",
        website: "",
        photo_url: "",
    },
    {
        id: "placeholder-2",
        full_name: "Marcus Densel",
        headline: "Movement Director, Singapore",
        bio: "Marcus leads movement direction for fashion campaigns in Southeast Asia and hosts workshops on precision-based choreography for Footloose cohorts.",
        graduation_year: 2008,
        email: "",
        website: "",
        photo_url: "",
    },
    {
        id: "placeholder-3",
        full_name: "Lakshmi Rao",
        headline: "Wellness Coach, Bengaluru",
        bio: "Lakshmi builds corporate wellness and mindfulness programs inspired by Chair-Co-Cise. She drives ergonomics training for remote-first organisations.",
        graduation_year: 2012,
        email: "",
        website: "",
        photo_url: "",
    },
]

function initials(name: string) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("")
}