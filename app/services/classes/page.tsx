
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Clock, Star, Calendar, MessageCircle, CheckCircle } from "lucide-react"

const classTypes = [
  {
    title: "Beginner Classes",
    description: "Perfect for those just starting their dance journey",
    duration: "45 minutes",
    price: "$25",
    features: ["Basic techniques", "Confidence building", "Fun atmosphere", "Patient instruction"],
    schedule: ["Mon/Wed 6:00 PM", "Sat 10:00 AM"],
    image: "/beginner-dance-class.jpg",
  },
  {
    title: "Intermediate Classes",
    description: "Build on your foundation with more complex choreography",
    duration: "60 minutes",
    price: "$30",
    features: ["Advanced techniques", "Choreography focus", "Performance prep", "Style variety"],
    schedule: ["Tue/Thu 7:00 PM", "Sun 2:00 PM"],
    image: "/intermediate-dance-class.jpg",
  },
  {
    title: "Advanced Classes",
    description: "Master level training for experienced dancers",
    duration: "75 minutes",
    price: "$40",
    features: ["Complex choreography", "Competition prep", "Professional techniques", "Individual attention"],
    schedule: ["Mon/Wed/Fri 8:00 PM"],
    image: "/advanced-dance-class.jpg",
  },
  {
    title: "Private Lessons",
    description: "One-on-one instruction tailored to your goals",
    duration: "60 minutes",
    price: "$80",
    features: ["Personalized curriculum", "Flexible scheduling", "Rapid progress", "Individual attention"],
    schedule: ["By appointment"],
    image: "/private-dance-lesson.jpg",
  },
]

const danceStyles = ["Contemporary", "Hip Hop", "Jazz", "Ballet", "Bollywood", "Latin", "Folk Dance", "Freestyle"]

export default function DanceClassesPage() {
  return (
    <div className="min-h-screen">
     
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary">
                  <Users className="h-3 w-3 mr-1" />
                  Dance Classes
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">
                  Learn to <span className="text-primary">Dance</span> with the Best
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Join our comprehensive dance classes designed for all skill levels. From complete beginners to
                  advanced dancers, we have the perfect program to help you achieve your dance goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="https://wa.me/1234567890?text=Hi! I'd like to join dance classes." target="_blank">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Book Trial Class
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent" asChild>
                    <Link href="#class-types">View Classes</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/dance-class-hero.jpg"
                  alt="Dance Classes at Footloose Edwin's"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs opacity-90">Students Trained</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Class Types */}
        <section id="class-types" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
                Choose Your <span className="text-primary">Level</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                We offer classes for every skill level, from absolute beginners to professional dancers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {classTypes.map((classType, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                    <img
                      src={classType.image || "/placeholder.svg"}
                      alt={classType.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {classType.price}/class
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{classType.title}</CardTitle>
                    <CardDescription className="text-pretty">{classType.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {classType.duration}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Multiple slots
                      </div>
                    </div>
                    <div className="space-y-2">
                      {classType.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Available Schedules:</div>
                      {classType.schedule.map((time, timeIndex) => (
                        <div key={timeIndex} className="text-sm text-muted-foreground">
                          • {time}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" asChild>
                      <Link
                        href={`https://wa.me/1234567890?text=Hi! I'm interested in ${classType.title}.`}
                        target="_blank"
                      >
                        Book This Class
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dance Styles */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
                Dance <span className="text-primary">Styles</span> We Teach
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Explore various dance styles and find the one that resonates with you.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {danceStyles.map((style, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{style}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-balance mb-4">
                  Start Your Dance Journey <span className="text-primary">Today</span>
                </h2>
                <p className="text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                  Book a trial class and experience the joy of dance with our expert instructors. No experience
                  necessary - just bring your enthusiasm!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="https://wa.me/1234567890?text=Hi! I'd like to book a trial class." target="_blank">
                      Book Free Trial
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent" asChild>
                    <Link href="/contact">Ask Questions</Link>
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
