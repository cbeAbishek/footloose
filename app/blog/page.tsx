import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Magic Behind Our Themed Performances",
      excerpt: "Discover how we create immersive themed experiences that transport audiences to different worlds through dance, costumes, and storytelling.",
      author: "Edwin Rodriguez",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Behind the Scenes",
      image: "/professional-dance-studio-with-dancers-in-colorful.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Why Dance Classes Benefit Children's Development",
      excerpt: "Learn about the physical, mental, and social benefits that dance education provides for children of all ages.",
      author: "Sarah Martinez",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Education",
      image: "/children-dancing-in-dinosaur-costumes-colorful-sta.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Creating Custom Choreography for Special Events",
      excerpt: "Our process for developing unique dance routines tailored to your event's theme, venue, and audience.",
      author: "Edwin Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Choreography",
      image: "/dancers-in-superhero-costumes-action-poses.jpg",
      featured: false
    },
    {
      id: 4,
      title: "The Evolution of Dance: From Classical to Contemporary",
      excerpt: "Explore how dance has evolved over the decades and how we incorporate both traditional and modern elements in our performances.",
      author: "Maria Santos",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Dance History",
      image: "/elegant-fairy-tale-dance-performance-snow-white.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Technology in Dance: AI and Future Performances",
      excerpt: "How we're using technology and AI to create innovative performances like our Edwin's AI theme.",
      author: "Tech Team",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Innovation",
      image: "/futuristic-ai-dance-performance-with-neon-lights.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Planning the Perfect Birthday Party Performance",
      excerpt: "Tips and ideas for incorporating dance performances into children's birthday parties for maximum fun and engagement.",
      author: "Event Team",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Event Planning",
      image: "/professional-dance-studio-with-dancers-in-colorful.jpg",
      featured: false
    }
  ]

  const categories = ["All", "Behind the Scenes", "Education", "Choreography", "Dance History", "Innovation", "Event Planning"]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="h-4 w-4 mr-1" />
              Dance Blog
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dance Stories & Insights
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-orange-100">
            Discover the world of dance through our stories, tips, and behind-the-scenes insights from Footloose Edwin's
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
            Read Latest Posts
          </Button>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Story</h2>
              <p className="text-xl text-muted-foreground">
                Our latest and most popular blog post
              </p>
            </div>
            
            <Card className="overflow-hidden max-w-4xl mx-auto">
              <div className="md:flex">
                <div className="md:w-1/2 relative aspect-video md:aspect-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="mb-4">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="group">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Stories</h2>
            <p className="text-xl text-muted-foreground">
              Insights, tips, and stories from the world of dance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest dance tips, performance updates, and behind-the-scenes content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Dance Story to Share?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            We'd love to feature your dance journey or event experience on our blog
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="/contact">Share Your Story</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Link href="/services">Book Performance</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
