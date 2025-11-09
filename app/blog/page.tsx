import Link from "next/link"
import type { Metadata } from "next"

import { PageHeader } from "@/components/layout/page-header"
import { Container } from "@/components/layout/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getBlogPosts } from "@/lib/queries"

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Footloose stories on choreography, wellness, and dance innovation. Read field notes, alumni perspectives, and production insights.",
	openGraph: {
		title: "Footloose Blog",
		description:
			"Stories, playbooks, and interviews from Footloose Edwin's Dance Company.",
		url: "http://localhost:3000//blog",
		images: [
			{
				url: "https://i.ibb.co/84DmJmx7/footloose.jpg",
				width: 1200,
				height: 630,
				alt: "Footloose blog",
			},
		],
	},
}

export default async function BlogPage() {
	const posts = await getBlogPosts()

	return (
		<>
			<PageHeader
				eyebrow="Insights"
				title="Footloose field notes"
				description="Explore choreography playbooks, wellness frameworks, and behind-the-scenes stories from three decades on stage. Subscribe via RSS to receive new articles."
				actions={
					<Link href="/blog/rss.xml" className="text-sm font-medium text-foreground underline">
						RSS feed
					</Link>
				}
			/>
			<Container className="space-y-12 py-16">
				<section className="grid gap-6 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)]">
					<div className="space-y-4 text-sm text-foreground/70">
						<p>
							Our editorial team collaborates with faculty, alumni, and partners to document best practices in dance education, movement innovation, and corporate wellness. Every article is structured for search visibility with clear headings, meta descriptions, and open graph imagery.
						</p>
						<p>
							Want to contribute? Send drafts or ideas to editorial@footloose.online. Authenticated team members can publish directly from the portal once approved.
						</p>
					</div>
					<Card className="border-border/70">
						<CardHeader>
							<CardTitle className="text-lg text-foreground">Publishing guidelines</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2 text-sm text-foreground/70">
							<p>- Use descriptive titles and concise summaries under 240 characters.</p>
							<p>- Structure articles with H2 and H3 headings for readability.</p>
							<p>- Add source links for research or partner references.</p>
							<p>- Upload a 1200 x 630 image for optimal social previews.</p>
						</CardContent>
					</Card>
				</section>

				<Separator />

				<section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{(posts.length ? posts : placeholderPosts).map((post) => (
						<Card key={post.slug} className="flex h-full flex-col border-border/70">
							<CardHeader className="space-y-2">
								<Badge variant="outline" className="w-fit rounded-full border-border px-3 py-1 text-xs uppercase">
									{new Date(post.created_at ?? Date.now()).toLocaleDateString()}
								</Badge>
								<CardTitle className="text-lg text-foreground">
									<Link href={`/blog/${post.slug}`} className="hover:underline">
										{post.title}
									</Link>
								</CardTitle>
								<p className="text-xs uppercase tracking-[0.2em] text-foreground/50">{post.author_name}</p>
							</CardHeader>
							<CardContent className="space-y-4 text-sm text-foreground/70">
								<p>{post.summary}</p>
								<Link href={`/blog/${post.slug}`} className="text-sm font-medium text-foreground underline">
									Read article
								</Link>
							</CardContent>
						</Card>
					))}
				</section>
			</Container>
		</>
	)
}

const placeholderPosts = [
	{
		slug: "chair-co-cise-posture",
		title: "Chair-Co-Cise: Resetting posture in twenty minutes",
		summary:
			"Desk-friendly movement circuits designed for hybrid teams. Learn how we balance mobility, breathwork, and accountability across corporate campuses.",
		author_name: "Editorial Team",
		created_at: new Date().toISOString(),
	},
	{
		slug: "school-annual-day-guide",
		title: "Designing a school annual day that runs like clockwork",
		summary:
			"A planning framework that covers rehearsal cadences, backstage management, and collaborative storytelling with parents and faculty.",
		author_name: "Production Desk",
		created_at: new Date().toISOString(),
	},
	{
		slug: "alumni-spotlight",
		title: "Alumni spotlight: Movement directors across Asia",
		summary:
			"Highlights from Footloose alumni shaping choreography for fashion weeks, films, and immersive theatre experiences.",
		author_name: "Community Team",
		created_at: new Date().toISOString(),
	},
]
