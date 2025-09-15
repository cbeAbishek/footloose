import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Heart, Sparkles, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SnowWhitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 bg-pink-500 text-pink-900">
              <Crown className="h-4 w-4 mr-1" />
              Fairy Tale Theme
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Snow White
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pink-100">
            Enter an enchanted fairy tale world with our magical Snow White theme featuring elegant ballet and whimsical forest choreography
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-500 text-pink-900 hover:bg-pink-400">
              Book This Magic
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Watch Fairy Tale
            </Button>
          </div>
        </div>
      </section>

      {/* Theme Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fairy Tale Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the magic and wonder of Snow White's enchanted world
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Crown className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Royal Ballet</CardTitle>
                <CardDescription>
                  Elegant classical ballet choreography fit for a princess and her royal court
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Heart className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Seven Dwarfs</CardTitle>
                <CardDescription>
                  Playful choreography featuring all seven dwarfs with their unique personalities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Sparkles className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Magical Effects</CardTitle>
                <CardDescription>
                  Enchanting lighting and special effects that bring the fairy tale to life
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Characters Showcase */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Characters</h2>
            <p className="text-xl text-muted-foreground">
              Each performance brings beloved fairy tale characters to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-pink-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">👸</span>
                </div>
                <CardTitle className="text-lg">Snow White</CardTitle>
                <CardDescription>The beautiful princess with graceful movements</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-purple-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">👑</span>
                </div>
                <CardTitle className="text-lg">Evil Queen</CardTitle>
                <CardDescription>Dramatic choreography with powerful presence</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🤴</span>
                </div>
                <CardTitle className="text-lg">Prince Charming</CardTitle>
                <CardDescription>Heroic dance moves with romantic flair</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🧙‍♂️</span>
                </div>
                <CardTitle className="text-lg">Seven Dwarfs</CardTitle>
                <CardDescription>Playful group choreography with character</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Scenes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Story Scenes</h2>
            <p className="text-xl text-muted-foreground">
              Follow Snow White's journey through dance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <div className="bg-gradient-to-br from-pink-300 to-purple-400 w-full h-full flex items-center justify-center">
                    <span className="text-white font-semibold">Forest Scene</span>
                  </div>
                </div>
                <CardTitle>In the Forest</CardTitle>
                <CardDescription>
                  Snow White discovers the dwarfs' cottage in an enchanted forest setting
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <div className="bg-gradient-to-br from-red-400 to-purple-500 w-full h-full flex items-center justify-center">
                    <span className="text-white font-semibold">Magic Mirror</span>
                  </div>
                </div>
                <CardTitle>Mirror Mirror</CardTitle>
                <CardDescription>
                  The Evil Queen's dramatic confrontation with the magic mirror
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <div className="bg-gradient-to-br from-blue-300 to-pink-400 w-full h-full flex items-center justify-center">
                    <span className="text-white font-semibold">True Love</span>
                  </div>
                </div>
                <CardTitle>True Love's Kiss</CardTitle>
                <CardDescription>
                  The romantic finale where Prince Charming awakens Snow White
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fairy Tale Gallery</h2>
            <p className="text-xl text-muted-foreground">
              See our Snow White performances in all their magical glory
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/elegant-fairy-tale-dance-performance-snow-white.jpg"
                alt="Elegant Snow White dance performance"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Snow White Dance 2</span>
            </div>
            <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Snow White Dance 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Fairy Tale</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pink-100">
            Bring the magic of Snow White to your event and create an enchanting experience that will captivate audiences of all ages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              <Link href="/contact">Book Your Magic</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              <Link href="/themes">View All Themes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
