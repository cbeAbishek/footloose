import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Bot, Music, Star } from "lucide-react"
import Link from "next/link"

export default function EdwinsAIPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-4 w-4 mr-1" />
              AI-Powered Theme
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Edwin's AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Step into the future with our revolutionary AI-powered dance theme featuring cutting-edge choreography and futuristic visuals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Book This Theme
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Watch Preview
            </Button>
          </div>
        </div>
      </section>

      {/* Theme Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Theme Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of technology and artistry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Bot className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>AI Choreography</CardTitle>
                <CardDescription>
                  Revolutionary dance moves inspired by artificial intelligence and robotics
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Sparkles className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Neon Lighting</CardTitle>
                <CardDescription>
                  Stunning LED and neon light effects that create an otherworldly atmosphere
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Music className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Electronic Soundtrack</CardTitle>
                <CardDescription>
                  Futuristic electronic music and sound effects perfectly synchronized
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Theme Gallery</h2>
            <p className="text-xl text-muted-foreground">
              See our AI theme in action
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">AI Performance 1</span>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">AI Performance 2</span>
            </div>
            <div className="aspect-video bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">AI Performance 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for the Future?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bring Edwin's AI theme to your next event and create an unforgettable futuristic experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Themes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
