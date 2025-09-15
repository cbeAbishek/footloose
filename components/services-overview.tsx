import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Palette, Music, Dumbbell, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Dance Classes",
    description: "Professional dance instruction for all skill levels and ages",
    features: ["Beginner to Advanced", "Group & Private", "Multiple Styles"],
    href: "/services/classes",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Palette,
    title: "Props & Design",
    description: "Custom-designed props and costumes for your performances",
    features: ["Custom Design", "Rental Options", "Theme-Specific"],
    href: "/services/props",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Music,
    title: "Choreography",
    description: "Professional choreography for schools, corporates, and competitions",
    features: ["School Events", "Corporate Shows", "Competitions"],
    href: "/services/choreography",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Dumbbell,
    title: "ChaircoCISE",
    description: "Specialized fitness program designed for IT professionals",
    features: ["Desk-Friendly", "Stress Relief", "Team Building"],
    href: "/services/chaircoCISE",
    color: "bg-orange-50 text-orange-600",
    badge: "Popular",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            From dance classes to specialized fitness programs, we offer comprehensive solutions for all your movement
            and performance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`h-12 w-12 rounded-lg ${service.color} flex items-center justify-center`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  {service.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-pretty">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
