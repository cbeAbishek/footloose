import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Dinosaur Adventure Performance",
      category: "Themed Performance",
      date: "March 2024",
      location: "Birthday Party",
      attendees: "25 Kids",
      image: "/children-dancing-in-dinosaur-costumes-colorful-sta.jpg",
      isVideo: false
    },
    {
      id: 2,
      title: "Avengers Superhero Show",
      category: "Themed Performance",
      date: "February 2024",
      location: "School Event",
      attendees: "100+ Students",
      image: "/dancers-in-superhero-costumes-action-poses.jpg",
      isVideo: false
    },
    {
      id: 3,
      title: "Snow White Fairy Tale",
      category: "Themed Performance",
      date: "January 2024",
      location: "Theater Performance",
      attendees: "200+ Audience",
      image: "/elegant-fairy-tale-dance-performance-snow-white.jpg",
      isVideo: false
    },
    {
      id: 4,
      title: "Professional Dance Class",
      category: "Dance Classes",
      date: "Ongoing",
      location: "Studio Sessions",
      attendees: "15-20 Students",
      image: "/professional-dance-studio-with-dancers-in-colorful.jpg",
      isVideo: false
    },
    {
      id: 5,
      title: "Edwin's AI Futuristic Show",
      category: "Themed Performance",
      date: "December 2023",
      location: "Corporate Event",
      attendees: "150+ Guests",
      image: "/futuristic-ai-dance-performance-with-neon-lights.jpg",
      isVideo: true
    },
    {
      id: 6,
      title: "Dance Silhouettes",
      category: "Artistic Photography",
      date: "November 2023",
      location: "Photo Shoot",
      attendees: "Professional Dancers",
      image: "/dance-silhouettes-pattern.jpg",
      isVideo: false
    }
  ]

  const categories = ["All", "Themed Performance", "Dance Classes", "Artistic Photography", "Videos"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-violet-100">
            Explore our collection of memorable performances, dance classes, and magical moments captured through the lens
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
            View Latest Work
          </Button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.isVideo && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="lg" className="rounded-full w-16 h-16 p-0">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{item.attendees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground">
              Creating memories one performance at a time
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-muted-foreground">Performances</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-lg text-muted-foreground">Happy Audience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg text-muted-foreground">Different Themes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8+</div>
              <div className="text-lg text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Videos</h2>
            <p className="text-xl text-muted-foreground">
              Watch our most popular performances in action
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center relative overflow-hidden group">
              <Button size="lg" className="rounded-full w-20 h-20 p-0 group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8" />
              </Button>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Avengers Performance Highlights</h3>
                <p className="text-sm text-white/80">3:45 minutes</p>
              </div>
            </div>
            
            <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center relative overflow-hidden group">
              <Button size="lg" className="rounded-full w-20 h-20 p-0 group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8" />
              </Button>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Dinosaur Adventure Best Moments</h3>
                <p className="text-sm text-white/80">2:30 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Be Featured?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Book your performance today and become part of our amazing gallery of unforgettable moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact">Book Performance</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
