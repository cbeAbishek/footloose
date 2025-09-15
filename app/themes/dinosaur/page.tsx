import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TreePine, Volume2, Palette, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DinosaurPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-lime-400 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 bg-amber-500 text-amber-900">
              <TreePine className="h-4 w-4 mr-1" />
              Adventure Theme
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dinosaur Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-100">
            Journey back to prehistoric times with our exciting dinosaur-themed dance adventure featuring roaring fun and ancient beats
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 text-amber-900 hover:bg-amber-400">
              Book This Adventure
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Watch Dinosaurs Dance
            </Button>
          </div>
        </div>
      </section>

      {/* Theme Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Adventure Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the thrill of the prehistoric world through dance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <TreePine className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Prehistoric Choreography</CardTitle>
                <CardDescription>
                  Dynamic dance moves inspired by dinosaur movements and prehistoric life
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Palette className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Colorful Costumes</CardTitle>
                <CardDescription>
                  Vibrant dinosaur costumes and jungle-themed props that bring the theme to life
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Volume2 className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Roaring Soundtrack</CardTitle>
                <CardDescription>
                  Adventure music mixed with realistic dinosaur sounds and jungle ambiance
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Dinosaur Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Dinosaurs</h2>
            <p className="text-xl text-muted-foreground">
              Each performance features different dinosaur characters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🦕</span>
                </div>
                <CardTitle className="text-lg">T-Rex</CardTitle>
                <CardDescription>The king of dinosaurs with powerful moves</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🦴</span>
                </div>
                <CardTitle className="text-lg">Triceratops</CardTitle>
                <CardDescription>Gentle giant with graceful movements</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-purple-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🦖</span>
                </div>
                <CardTitle className="text-lg">Pterodactyl</CardTitle>
                <CardDescription>Flying dinosaur with soaring choreography</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🦣</span>
                </div>
                <CardTitle className="text-lg">Stegosaurus</CardTitle>
                <CardDescription>Spiky friend with rhythmic tail moves</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Adventure Gallery</h2>
            <p className="text-xl text-muted-foreground">
              See our dinosaur performances in action
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/children-dancing-in-dinosaur-costumes-colorful-sta.jpg"
                alt="Children dancing in dinosaur costumes"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Dinosaur Dance 2</span>
            </div>
            <div className="aspect-video bg-gradient-to-br from-emerald-400 to-lime-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Dinosaur Dance 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Prehistoric Party?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Let our dinosaur adventure theme transport your guests back in time for an unforgettable experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">Book Adventure</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Link href="/themes">View All Themes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
