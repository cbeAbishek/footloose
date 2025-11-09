import type { Metadata } from "next"

import { PageHeader } from "@/components/layout/page-header"
import { Container } from "@/components/layout/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CostumeRentalForm } from "@/components/forms/costume-rental-form"

export const metadata: Metadata = {
    title: "Costume Rental",
    description:
        "Rent curated Footloose costume collections for schools, corporates, and live productions with modular sizing and fast turnarounds.",
    openGraph: {
        title: "Footloose Costume Rentals",
        description: "Access Footloose costume inventory with seamless sizing support and logistics.",
        url: "http://localhost:3000//costume-rental",
        images: [
            {
                url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
                width: 1200,
                height: 630,
                alt: "Footloose costume rental",
            },
        ],
    },
}

const rentalCollections = [
    {
        title: "Thematic sets",
        detail: "Over 60 curated themes from mythology to futuristic concepts, packaged with accessories and prop options.",
    },
    {
        title: "Quick turnaround",
        detail: "Streamlined fittings, cleaning, and delivery ensure you can scale productions within days.",
    },
    {
        title: "Touring support",
        detail: "Documentation, repair kits, and replacement inventory keep shows running without interruptions.",
    },
]

export default function CostumeRentalPage() {
    return (
        <>
            <PageHeader
                eyebrow="Costume rentals"
                title="Ready-to-wear collections for every movement brief"
                description="Our rental library spans cultural showcases, contemporary productions, and corporate performances. Share your event details and sizing requirements to receive availability and pricing."
            />
            <Container className="space-y-16 py-16">
                <section className="grid gap-6 sm:grid-cols-3">
                    {rentalCollections.map((item) => (
                        <Card key={item.title} className="border-border/70">
                            <CardHeader>
                                <Badge variant="outline" className="rounded-full border-border px-3 py-1 text-xs uppercase">
                                    Collection
                                </Badge>
                                <CardTitle className="text-lg text-foreground">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-foreground/70">{item.detail}</CardContent>
                        </Card>
                    ))}
                </section>

                <section className="grid gap-10 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)]">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">Request availability</h2>
                        <p className="text-sm text-foreground/70">
                            Provide your event dates, theme, and sizing requirements. Our costume team will confirm stock, share look
                            books, and block inventory for your rehearsal plan.
                        </p>
                    </div>
                    <Card className="border-border/70">
                        <CardHeader>
                            <CardTitle className="text-xl text-foreground">Rental form</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <CostumeRentalForm />
                        </CardContent>
                    </Card>
                </section>
            </Container>
        </>
    )
}