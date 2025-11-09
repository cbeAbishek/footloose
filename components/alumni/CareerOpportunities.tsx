"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Clock, MapPin, Building2, Mail, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { AlumniOpportunity } from "./types"

interface CareerOpportunitiesProps {
  opportunities: AlumniOpportunity[]
}

export function CareerOpportunities({ opportunities }: CareerOpportunitiesProps) {
  const [selectedType, setSelectedType] = useState<string>("all")

  // Filter opportunities
  const filteredOpportunities = selectedType === "all"
    ? opportunities
    : opportunities.filter((opp) => opp.type === selectedType)

  const activeOpportunities = filteredOpportunities.filter((opp) => opp.is_active)

  // Type colors
  const typeColors: Record<string, string> = {
    job: "bg-blue-500",
    internship: "bg-green-500",
    collaboration: "bg-purple-500",
    teaching: "bg-orange-500"
  }

  // Type labels
  const typeLabels: Record<string, string> = {
    job: "Full-Time Job",
    internship: "Internship",
    collaboration: "Collaboration",
    teaching: "Teaching Position"
  }

  return (
    <section className="bg-white py-20 dark:bg-black">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
            Opportunities
          </p>
          <h2 className="mb-6 text-4xl font-black text-black dark:text-white md:text-5xl lg:text-6xl">
            Career & Collaboration Board
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Exclusive opportunities for Footloose alumni — jobs, internships, freelance projects, and teaching positions in the dance and creative industries.
          </p>
        </motion.div>

        {/* Type Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <Tabs value={selectedType} onValueChange={setSelectedType} className="w-full">
            <TabsList className="grid w-full grid-cols-2 gap-2 rounded-full border-2 border-black bg-transparent p-2 md:grid-cols-5 dark:border-white">
              <TabsTrigger
                value="all"
                className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                All ({opportunities.length})
              </TabsTrigger>
              <TabsTrigger
                value="job"
                className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                Jobs ({opportunities.filter(o => o.type === "job").length})
              </TabsTrigger>
              <TabsTrigger
                value="internship"
                className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                Internships ({opportunities.filter(o => o.type === "internship").length})
              </TabsTrigger>
              <TabsTrigger
                value="collaboration"
                className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                Collaborations ({opportunities.filter(o => o.type === "collaboration").length})
              </TabsTrigger>
              <TabsTrigger
                value="teaching"
                className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                Teaching ({opportunities.filter(o => o.type === "teaching").length})
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Opportunities List */}
        {activeOpportunities.length > 0 ? (
          <div className="space-y-6">
            {activeOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Card className="group overflow-hidden border-2 border-black bg-white transition-all hover:shadow-xl dark:border-white dark:bg-black">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      {/* Main Content */}
                      <div className="flex-1 space-y-4">
                        {/* Type Badge & Title */}
                        <div>
                          <Badge className={`${typeColors[opportunity.type]} mb-3 text-white`}>
                            {typeLabels[opportunity.type]}
                          </Badge>
                          <h3 className="mb-2 text-2xl font-black text-black dark:text-white">
                            {opportunity.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-black/60 dark:text-white/60">
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4" />
                              <span className="font-bold text-black dark:text-white">
                                {opportunity.organization}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{opportunity.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>
                                Posted {new Date(opportunity.posted_date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="leading-relaxed text-black/80 dark:text-white/80">
                          {opportunity.description}
                        </p>

                        {/* Deadline */}
                        {opportunity.deadline && (
                          <div className="inline-flex items-center gap-2 rounded-full border-2 border-red-500 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-600 dark:text-red-400">
                            <Clock className="h-4 w-4" />
                            Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col gap-3 md:min-w-[200px]">
                        {opportunity.contact_email && (
                          <a
                            href={`mailto:${opportunity.contact_email}`}
                            className="flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
                          >
                            <Mail className="h-4 w-4" />
                            Apply Now
                          </a>
                        )}
                        <button className="flex items-center justify-center gap-2 rounded-full border-2 border-black px-6 py-3 font-bold text-black transition-all hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
                          <ExternalLink className="h-4 w-4" />
                          Learn More
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <Briefcase className="mx-auto mb-6 h-24 w-24 text-black/20 dark:text-white/20" />
            <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
              No opportunities available
            </h3>
            <p className="text-black/60 dark:text-white/60">
              Check back soon for new postings
            </p>
          </motion.div>
        )}

        {/* Post Opportunity CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          <Card className="border-2 border-black bg-gradient-to-br from-black to-gray-900 p-12 text-center dark:border-white dark:from-white dark:to-gray-100">
            <Briefcase className="mx-auto mb-6 h-16 w-16 text-white dark:text-black" />
            <h3 className="mb-4 text-3xl font-black text-white dark:text-black">
              Have an Opportunity to Share?
            </h3>
            <p className="mb-8 text-lg text-white/80 dark:text-black/80">
              Help fellow alumni grow their careers. Post job openings, collaboration opportunities, or teaching positions.
            </p>
            <button className="rounded-full bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105 dark:bg-black dark:text-white">
              Post an Opportunity
            </button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
