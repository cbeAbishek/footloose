
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Palette, Music, Dumbbell, ArrowRight, Star, Clock, Award } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Dance Classes",
    description: "Professional dance instruction for all skill levels and ages",
    longDescription:
      "Our comprehensive dance classes cater to everyone from complete beginners to advanced dancers. We offer group classes, private lessons, and specialized workshops across multiple dance styles.",
    features: [
      "Beginner to Advanced Levels",
      "Group & Private Sessions",
      "Multiple Dance Styles",
      "Flexible Scheduling",
    ],
    href: "/services/classes",
    image: "/dance-class-group-instruction.jpg",
    price: "From $25/class",
    duration: "45-60 minutes",
    popular: false,
  },
  {
    icon: Palette,
    title: "Props & Design",
    description: "Custom-designed props and costumes for your performances",
    longDescription:
      "Transform your performances with our custom-designed props and costumes. We create theme-specific designs that bring your vision to life, with both purchase and rental options available.",
    features: ["Custom Design Service", "Rental & Purchase Options", "Theme-Specific Props", "Professional Quality"],
    href: "/services/props",
    image: "/colorful-dance-props-costumes.jpg",
    price: "Custom Quote",
    duration: "2-4 weeks delivery",
    popular: false,
  },
  {
    icon: Music,
    title: "Choreography",
    description: "Professional choreography for schools, corporates, and competitions",
    longDescription:
      "Our expert choreographers create stunning performances tailored to your specific needs. Whether it's a school annual day, corporate event, or competition, we deliver memorable choreography.",
    features: ["School Annual Days", "Corporate Events", "Competition Prep", "Custom Music Selection"],
    href: "/services/choreography",
    image: "/professional-choreography-session.jpg",
    price: "From $500/event",
    duration: "1-3 weeks prep",
    popular: true,
  },
  {
    icon: Dumbbell,
    title: "ChaircoCISE",
    description: "Specialized fitness program designed for IT professionals",
    longDescription:
      "Our signature ChaircoCISE program addresses the unique health challenges faced by IT professionals. Desk-friendly exercises, stress relief techniques, and team building activities.",
    features: ["Desk-Friendly Exercises", "Stress Relief Techniques", "Team Building Focus", "Corporate Packages"],
    href: "/services/chaircoCISE",
    image: "/office-fitness-chaircoCISE.jpg",
    price: "From $200/session",
    duration: "30-45 minutes",
    popular: true,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <Star className="h-3 w-3 mr-1" />
                Professional Services
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                From dance classes to specialized fitness programs, we offer comprehensive solutions for all your
                movement and performance needs. Discover how we can bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {service.duration}
                          </div>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-1" />
                            {service.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-pretty">{service.longDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0"></div>
                            <span className="text-pretty">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full" asChild>
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-balance mb-4">
                Ready to Get <span className="text-primary">Started</span>?
              </h2>
              <p className="text-muted-foreground mb-8 text-pretty">
                Contact us today to discuss your specific needs and get a custom quote for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="https://wa.me/1234567890?text=Hi! I'd like to discuss your services." target="_blank">
                    Get Free Consultation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
