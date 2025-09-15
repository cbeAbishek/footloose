import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Users, Star } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@footlooseedwins.com", "bookings@footlooseedwins.com"],
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Dance Street", "Performance City, PC 12345"],
      description: "Visit our studio"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"],
      description: "Our operating hours"
    }
  ]

  const services = [
    "Themed Performances",
    "Dance Classes",
    "Choreography Services",
    "ChaircoCISE Fitness",
    "Props & Design",
    "Custom Theme Development",
    "Event Planning Consultation"
  ]

  const eventTypes = [
    "Birthday Party",
    "Wedding",
    "Corporate Event",
    "School Performance",
    "Community Event",
    "Private Lesson",
    "Other"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Ready to bring magic to your event? Contact us today to discuss your vision and let us create an unforgettable experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Information</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to reach us for your convenience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription className="text-sm mb-4">
                    {info.description}
                  </CardDescription>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Tell us about your event and we'll get back to you within 24 hours
              </p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Preferred Event Date</Label>
                      <Input id="eventDate" type="date" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Input id="guests" type="number" placeholder="e.g. 25" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500">Under $500</SelectItem>
                          <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                          <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                          <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                          <SelectItem value="over-5000">Over $5,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Services Interested In</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox id={service.toLowerCase().replace(/ /g, '-')} />
                          <Label 
                            htmlFor={service.toLowerCase().replace(/ /g, '-')} 
                            className="text-sm font-normal cursor-pointer"
                          >
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Your Event *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your event, preferred themes, special requirements, or any questions you have..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm font-normal">
                      I'd like to receive updates about new themes and special offers
                    </Label>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl text-muted-foreground">
              Choose the fastest way to connect with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Call Now</CardTitle>
                <CardDescription className="mb-4">
                  Speak directly with our team for immediate booking and questions
                </CardDescription>
                <Button asChild>
                  <Link href="tel:+15551234567">
                    Call (555) 123-4567
                  </Link>
                </Button>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription className="mb-4">
                  Quick messaging for fast responses and easy communication
                </CardDescription>
                <Button asChild>
                  <Link href="https://wa.me/15551234567" target="_blank">
                    Message on WhatsApp
                  </Link>
                </Button>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Schedule Consultation</CardTitle>
                <CardDescription className="mb-4">
                  Book a free 15-minute consultation to discuss your event
                </CardDescription>
                <Button variant="outline">
                  Schedule Meeting
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How far in advance should I book?</CardTitle>
                <CardDescription>
                  We recommend booking 2-4 weeks in advance, especially for weekends and popular themes. However, we can often accommodate last-minute requests.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you perform at any location?</CardTitle>
                <CardDescription>
                  Yes! We perform at your chosen venue - homes, schools, community centers, or outdoor spaces. We bring all necessary equipment.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can you create custom themes?</CardTitle>
                <CardDescription>
                  Absolutely! We love creating custom themes tailored to your specific event. Just let us know your vision and we'll make it happen.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in a performance?</CardTitle>
                <CardDescription>
                  Our performances include choreographed dances, authentic costumes, props, music, and interactive audience participation when appropriate.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Magic Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Your perfect event is just a conversation away. Contact us today and let's start planning something extraordinary.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>5-Star Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>10,000+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>24-Hour Response</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
