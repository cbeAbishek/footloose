import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, TreePine, Shield, Crown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ThemesPage() {
  const themes = [
    {
      id: "edwins-ai",
      title: "Edwin's AI",
      description: "Step into the future with AI-powered choreography and futuristic visuals",
      icon: Sparkles,
      color: "from-purple-600 to-blue-600",
      badge: "AI-Powered",
      href: "/themes/edwins-ai"
    },
    {
      id: "dinosaur",
      title: "Dinosaur Adventure",
      description: "Journey back to prehistoric times with roaring fun and ancient beats",
      icon: TreePine,
      color: "from-green-600 to-emerald-600",
      badge: "Adventure",
      href: "/themes/dinosaur"
    },
    {
      id: "avengers",
      title: "Avengers",
      description: "Join Earth's Mightiest Heroes in epic superhero choreography",
      icon: Shield,
      color: "from-red-600 to-blue-600",
      badge: "Superhero",
      href: "/themes/avengers"
    },
    {
      id: "snow-white",
      title: "Snow White",
      description: "Enter an enchanted fairy tale world with elegant ballet",
      icon: Crown,
      color: "from-pink-600 to-purple-600",
      badge: "Fairy Tale",
      href: "/themes/snow-white"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dance Themes
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Discover our spectacular themed dance performances that transform any event into an unforgettable experience
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
            Explore All Themes
          </Button>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Themes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each theme is carefully crafted with unique choreography, costumes, and special effects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {themes.map((theme) => (
              <Card key={theme.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${theme.color} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      {theme.badge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <theme.icon className="h-20 w-20 text-white/50" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {theme.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {theme.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full group-hover:shadow-md transition-shadow">
                    <Link href={theme.href}>
                      Explore Theme
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Themes */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Themes Are Special</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every theme is designed to create magical moments and lasting memories
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Choreography</h3>
              <p className="text-muted-foreground">
                Each theme features unique dance moves and choreography designed specifically for the theme
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Costumes</h3>
              <p className="text-muted-foreground">
                High-quality costumes and props that bring each character and theme to life
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <TreePine className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Immersive Experience</h3>
              <p className="text-muted-foreground">
                Special effects, lighting, and music create a fully immersive themed experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Themes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Themes Available</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't see what you're looking for? We can create custom themes for your special event
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Hollywood</CardTitle>
                <CardDescription>Red carpet glamour and movie magic</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Bollywood</CardTitle>
                <CardDescription>Vibrant Indian dance and colorful costumes</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Pirates</CardTitle>
                <CardDescription>Swashbuckling adventure on the high seas</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Space Odyssey</CardTitle>
                <CardDescription>Intergalactic dance journey among the stars</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Choose Your Theme?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Let us bring your chosen theme to life and create an unforgettable experience for your event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact">Book Your Theme</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
