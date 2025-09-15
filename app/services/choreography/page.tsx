import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Music, Users, Trophy, Building, GraduationCap, CheckCircle, MessageCircle, Star } from "lucide-react"

const choreographyServices = [
  {
    icon: GraduationCap,
    title: "School Annual Days",
    description: "Memorable performances for school events and celebrations",
    features: ["Age-appropriate choreography", "Educational themes", "Large group coordination", "Parent involvement"],
    image: "/school-annual-day-performance.jpg",
    price: "From $800",
    duration: "2-3 weeks prep",
    popular: true,
  },
  {
    icon: Building,
    title: "Corporate Events",
    description: "Professional entertainment for corporate functions",
    features: ["Team building focus", "Professional presentation", "Custom themes", "Flexible scheduling"],
    image: "/corporate-event-performance.jpg",
    price: "From $1200",
    duration: "1-2 weeks prep",
    popular: true,
  },
  {
    icon: Trophy,
    title: "Competition Prep",
    description: "Winning choreography for dance competitions",
    features: ["Competition-level training", "Technical excellence", "Performance coaching", "Music editing"],
    image: "/competition-dance-prep.jpg",
    price: "From $1500",
    duration: "3-4 weeks prep",
    popular: false,
  },
  {
    icon: Users,
    title: "Special Events",
    description: "Custom choreography for weddings, parties, and celebrations",
    features: ["Personalized themes", "Guest participation", "Photo opportunities", "Memorable moments"],
    image: "/special-event-choreography.jpg",
    price: "From $600",
    duration: "1-2 weeks prep",
    popular: false,
  },
]

const process = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We discuss your event, theme, audience, and specific requirements.",
  },
  {
    step: 2,
    title: "Concept Development",
    description: "Our choreographers create a unique concept tailored to your needs.",
  },
  {
    step: 3,
    title: "Music Selection",
    description: "We select or edit music that perfectly complements the choreography.",
  },
  {
    step: 4,
    title: "Rehearsals",
    description: "Structured rehearsal sessions to perfect the performance.",
  },
  {
    step: 5,
    title: "Final Performance",
    description: "Professional execution on the day of your event.",
  },
]

export default function ChoreographyPage() {
  return (
    <div className="min-h-screen">
     
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-green-50 text-green-600 border-green-200">
                  <Music className="h-3 w-3 mr-1" />
                  Professional Choreography
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">
                  Create <span className="text-primary">Unforgettable</span> Performances
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Our expert choreographers create stunning performances tailored to your specific event. From school
                  annual days to corporate functions, we bring creativity and professionalism to every performance.
                </p>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Expert Choreographers
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    All Group Sizes
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 mr-1" />
                    Award-Winning
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="https://wa.me/1234567890?text=Hi! I need choreography for my event." target="_blank">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Book Consultation
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent" asChild>
                    <Link href="#services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/choreography-hero.jpg"
                  alt="Professional Choreography Services"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-xs opacity-90">Events Choreographed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
                Our <span className="text-primary">Choreography</span> Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Professional choreography services tailored to your specific event and audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {choreographyServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
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
                      <div className="flex items-center justify-between text-white text-sm">
                        <span>{service.price}</span>
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="h-10 w-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-pretty">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" asChild>
                      <Link
                        href={`https://wa.me/1234567890?text=Hi! I'm interested in ${service.title}.`}
                        target="_blank"
                      >
                        Get Quote
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                From concept to performance, we guide you through every step of creating an amazing show.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Why Choose Our <span className="text-primary">Choreography</span>?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">30 Years of Experience</h4>
                      <p className="text-muted-foreground text-sm">
                        Three decades of creating memorable performances across various events and audiences.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Custom Themes</h4>
                      <p className="text-muted-foreground text-sm">
                        Every performance is uniquely crafted to match your event's theme and requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Professional Team</h4>
                      <p className="text-muted-foreground text-sm">
                        Expert choreographers and instructors ensure high-quality performances.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Complete Support</h4>
                      <p className="text-muted-foreground text-sm">
                        From concept to performance day, we provide comprehensive support and guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/why-choose-choreography.jpg"
                  alt="Why Choose Our Choreography"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <Card className="border-0 bg-transparent">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-balance mb-4">
                  Ready to Create Your <span className="text-primary">Performance</span>?
                </h2>
                <p className="text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                  Let's discuss your event and create a choreography that will leave your audience amazed. Contact us
                  for a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="https://wa.me/1234567890?text=Hi! I need choreography for my event." target="_blank">
                      Book Free Consultation
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent" asChild>
                    <Link href="/gallery">View Our Performances</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
    </div>
  )
}
