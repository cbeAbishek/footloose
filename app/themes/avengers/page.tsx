import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AvengersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-blue-600 to-yellow-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 bg-yellow-500 text-yellow-900">
              <Shield className="h-4 w-4 mr-1" />
              Superhero Theme
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Avengers Assemble
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-red-100">
            Join Earth's Mightiest Heroes in an epic dance performance featuring superhero choreography and heroic adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 text-yellow-900 hover:bg-yellow-400">
              Assemble Your Event
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Watch Heroes Dance
            </Button>
          </div>
        </div>
      </section>

      {/* Theme Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Superhero Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power and excitement of being a superhero through dance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Superhero Choreography</CardTitle>
                <CardDescription>
                  Dynamic moves inspired by your favorite Avengers with special powers and abilities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Hero Costumes</CardTitle>
                <CardDescription>
                  Authentic superhero costumes and props that make every dancer feel like a true Avenger
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Team Performance</CardTitle>
                <CardDescription>
                  Epic group choreography that showcases the power of teamwork and unity
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Heroes Showcase */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Heroes</h2>
            <p className="text-xl text-muted-foreground">
              Each performance features different Avengers characters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-red-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <CardTitle className="text-lg">Captain America</CardTitle>
                <CardDescription>Leadership and shield-throwing choreography</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-yellow-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <CardTitle className="text-lg">Thor</CardTitle>
                <CardDescription>Thunder god with hammer-wielding moves</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💚</span>
                </div>
                <CardTitle className="text-lg">Hulk</CardTitle>
                <CardDescription>Incredible strength and smashing choreography</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-red-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <CardTitle className="text-lg">Iron Man</CardTitle>
                <CardDescription>High-tech moves with flying sequences</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hero Gallery</h2>
            <p className="text-xl text-muted-foreground">
              See our Avengers performances in action
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/dancers-in-superhero-costumes-action-poses.jpg"
                alt="Dancers in superhero costumes"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video bg-gradient-to-br from-red-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Avengers Dance 2</span>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Avengers Dance 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Effects</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our Avengers theme includes spectacular special effects to enhance the superhero experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Effects</h3>
              <p className="text-gray-300">LED lighting and strobes for Thor's thunder powers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Shield Projections</h3>
              <p className="text-gray-300">Visual effects for Captain America's shield</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hero Music</h3>
              <p className="text-gray-300">Epic superhero soundtrack with character themes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Assemble?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bring the power of the Avengers to your event and create an epic superhero experience your guests will never forget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Assemble Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/themes">View All Themes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
