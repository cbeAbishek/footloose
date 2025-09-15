
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Dumbbell, Users, Clock, Target, Heart, Brain, CheckCircle, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Cardiovascular Health",
    description: "Improve heart health with low-impact exercises designed for office workers",
  },
  {
    icon: Brain,
    title: "Stress Relief",
    description: "Reduce workplace stress through mindful movement and breathing techniques",
  },
  {
    icon: Target,
    title: "Posture Improvement",
    description: "Combat the effects of prolonged sitting with targeted posture exercises",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Foster team spirit and collaboration through group fitness activities",
  },
]

const programs = [
  {
    title: "Individual Sessions",
    description: "Personalized ChaircoCISE training for individual employees",
    duration: "30 minutes",
    price: "$50",
    features: ["One-on-one instruction", "Customized routine", "Progress tracking", "Flexible scheduling"],
    image: "/individual-chaircoCISE.jpg",
  },
  {
    title: "Team Sessions",
    description: "Group ChaircoCISE sessions for teams and departments",
    duration: "45 minutes",
    price: "$200",
    features: ["Up to 15 participants", "Team building focus", "Interactive exercises", "Regular scheduling"],
    image: "/team-chaircoCISE.jpg",
  },
  {
    title: "Corporate Package",
    description: "Comprehensive wellness program for entire organizations",
    duration: "Custom",
    price: "Custom",
    features: ["Company-wide program", "Multiple sessions", "Progress reports", "Wellness workshops"],
    image: "/corporate-chaircoCISE.jpg",
  },
]

export default function ChaircoCISEPage() {
  return (
    <div className="min-h-screen">
     
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-orange-50 text-orange-600 border-orange-200">
                  <Dumbbell className="h-3 w-3 mr-1" />
                  ChaircoCISE Program
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">
                  Fitness for <span className="text-primary">IT Professionals</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Our signature ChaircoCISE program is specifically designed for IT employees and desk workers. Combat
                  the effects of prolonged sitting with our innovative chair-based exercises and wellness routines.
                </p>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    30-45 minutes
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Individual & Group
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-1" />
                    Desk-friendly
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link
                      href="https://wa.me/1234567890?text=Hi! I'm interested in ChaircoCISE program."
                      target="_blank"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Book Demo Session
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent" asChild>
                    <Link href="#programs">View Programs</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/chaircoCISE-hero.jpg"
                  alt="ChaircoCISE Program"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs opacity-90">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
                Why <span className="text-primary">ChaircoCISE</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Specifically designed to address the unique health challenges faced by IT professionals and desk
                workers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-pretty">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
                Choose Your <span className="text-primary">Program</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Flexible programs designed to fit your organization's needs and schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {program.price}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-pretty">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {program.duration}
                    </div>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" asChild>
                      <Link
                        href={`https://wa.me/1234567890?text=Hi! I'm interested in ${program.title}.`}
                        target="_blank"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
                How <span className="text-primary">ChaircoCISE</span> Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-muted-foreground text-pretty">
                  We assess your team's specific needs and workspace constraints to customize the program.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-muted-foreground text-pretty">
                  Our certified instructors conduct regular sessions at your office or virtually.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-muted-foreground text-pretty">
                  We monitor progress and adjust the program to ensure maximum benefit for your team.
                </p>
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
                  Transform Your Workplace <span className="text-primary">Wellness</span>
                </h2>
                <p className="text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                  Join hundreds of companies that have improved their employee wellness with ChaircoCISE. Book a free
                  demo session today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="https://wa.me/1234567890?text=Hi! I'd like to book a ChaircoCISE demo." target="_blank">
                      Book Free Demo
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent" asChild>
                    <Link href="/contact">Get Custom Quote</Link>
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
