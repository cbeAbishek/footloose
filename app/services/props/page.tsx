
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Palette, Package, Clock, Star, CheckCircle, MessageCircle, Sparkles } from "lucide-react"

const propCategories = [
  {
    title: "Themed Costumes",
    description: "Complete costume sets for themed performances",
    items: ["Dinosaur costumes", "Superhero outfits", "Fairy tale dresses", "Cultural attire"],
    image: "/themed-costumes-collection.jpg",
    price: "From $50/piece",
  },
  {
    title: "Dance Props",
    description: "Essential props to enhance your performances",
    items: ["Ribbons & scarves", "Pom-poms", "Fans", "Musical instruments"],
    image: "/dance-props-collection.jpg",
    price: "From $15/piece",
  },
  {
    title: "Stage Backdrops",
    description: "Professional backdrops for stunning stage presence",
    items: ["Themed backdrops", "LED panels", "Fabric drapes", "Custom designs"],
    image: "/stage-backdrops.jpg",
    price: "From $200/piece",
  },
  {
    title: "Accessories",
    description: "Complete your look with matching accessories",
    items: ["Headpieces", "Jewelry", "Shoes", "Makeup kits"],
    image: "/dance-accessories.jpg",
    price: "From $10/piece",
  },
]

const services = [
  {
    title: "Custom Design",
    description: "Unique designs created specifically for your performance",
    features: ["Concept development", "3D visualization", "Material selection", "Fitting sessions"],
    timeline: "2-4 weeks",
    price: "Custom quote",
  },
  {
    title: "Rental Service",
    description: "High-quality props and costumes available for rent",
    features: ["Wide selection", "Flexible duration", "Cleaning included", "Damage protection"],
    timeline: "Same day pickup",
    price: "30% of purchase price",
  },
  {
    title: "Purchase Options",
    description: "Own your props and costumes for repeated use",
    features: ["Bulk discounts", "Maintenance guide", "Storage solutions", "Warranty included"],
    timeline: "1-2 weeks delivery",
    price: "Full retail price",
  },
]

export default function PropsPage() {
  return (
    <div className="min-h-screen">
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-purple-50 text-purple-600 border-purple-200">
                  <Palette className="h-3 w-3 mr-1" />
                  Props & Design
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">
                  Bring Your Vision to <span className="text-primary">Life</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Transform your performances with our custom-designed props and costumes. From concept to creation, we
                  bring your artistic vision to life with professional quality and attention to detail.
                </p>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-1" />
                    Custom Design
                  </div>
                  <div className="flex items-center">
                    <Package className="h-4 w-4 mr-1" />
                    Rental Available
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Fast Delivery
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="https://wa.me/1234567890?text=Hi! I need custom props and costumes." target="_blank">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Get Custom Quote
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent" asChild>
                    <Link href="#categories">Browse Catalog</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/props-design-hero.jpg"
                  alt="Custom Props and Costumes"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-xs opacity-90">Props Created</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Choose from custom design, rental, or purchase options to fit your needs and budget.
              </p>
            </div>

            <Tabs defaultValue="custom" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="custom">Custom Design</TabsTrigger>
                <TabsTrigger value="rental">Rental Service</TabsTrigger>
                <TabsTrigger value="purchase">Purchase</TabsTrigger>
              </TabsList>

              {services.map((service, index) => (
                <TabsContent key={index} value={index === 0 ? "custom" : index === 1 ? "rental" : "purchase"}>
                  <Card>
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg text-pretty">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold">What's Included:</h4>
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Timeline:</span>
                            <span className="text-muted-foreground">{service.timeline}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Pricing:</span>
                            <span className="text-primary font-semibold">{service.price}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <Link
                          href={`https://wa.me/1234567890?text=Hi! I'm interested in ${service.title}.`}
                          target="_blank"
                        >
                          Get Started
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
                Our <span className="text-primary">Categories</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Explore our extensive collection of props and costumes across various categories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {propCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {category.price}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription className="text-pretty">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                          <Star className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" asChild>
                      <Link
                        href={`https://wa.me/1234567890?text=Hi! I'm interested in ${category.title}.`}
                        target="_blank"
                      >
                        View Collection
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
                Our Design <span className="text-primary">Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                <p className="text-muted-foreground text-pretty">
                  We discuss your vision, theme, and requirements in detail.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-muted-foreground text-pretty">
                  Our designers create detailed concepts and 3D visualizations.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Creation</h3>
                <p className="text-muted-foreground text-pretty">
                  Skilled craftspeople bring the designs to life with quality materials.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Delivery</h3>
                <p className="text-muted-foreground text-pretty">
                  Final fitting, adjustments, and delivery to ensure perfect results.
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
                  Ready to Create Something <span className="text-primary">Amazing</span>?
                </h2>
                <p className="text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                  Let's bring your creative vision to life with custom props and costumes that will make your
                  performance unforgettable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="https://wa.me/1234567890?text=Hi! I need custom props and costumes." target="_blank">
                      Start Your Project
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent" asChild>
                    <Link href="/gallery">View Our Work</Link>
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
