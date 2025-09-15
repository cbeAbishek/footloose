import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Star, Award, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Edwin Rodriguez",
      role: "Founder & Lead Choreographer",
      bio: "With over 10 years of experience in dance and entertainment, Edwin founded Footloose Edwin's to bring joy and creativity to every event.",
      image: "/professional-man-smiling.png",
      specialties: ["Choreography", "Event Planning", "Theme Development"]
    },
    {
      name: "Sarah Martinez",
      role: "Dance Instructor & Coordinator",
      bio: "A passionate educator with a background in ballet and contemporary dance, Sarah leads our dance classes and educational programs.",
      image: "/professional-woman-smiling.png",
      specialties: ["Dance Education", "Ballet", "Contemporary"]
    },
    {
      name: "Maria Santos",
      role: "Costume Designer & Props Manager",
      bio: "Maria's creative vision brings our themed performances to life with stunning costumes and authentic props.",
      image: "/hispanic-professional-woman.png",
      specialties: ["Costume Design", "Props", "Theme Creation"]
    },
    {
      name: "Carlos Johnson",
      role: "Technical Director",
      bio: "Carlos handles all the technical aspects of our performances, from lighting to sound systems and special effects.",
      image: "/middle-aged-man-smiling.png",
      specialties: ["Lighting", "Sound", "Special Effects"]
    }
  ]

  const achievements = [
    {
      title: "500+ Successful Events",
      description: "We've brought joy to over 500 events across the region",
      icon: Calendar
    },
    {
      title: "10,000+ Happy Customers",
      description: "Thousands of satisfied clients and their guests",
      icon: Users
    },
    {
      title: "Award-Winning Performances",
      description: "Recognized for excellence in entertainment",
      icon: Award
    },
    {
      title: "8+ Years Experience",
      description: "Nearly a decade of creating magical moments",
      icon: Star
    }
  ]

  const values = [
    {
      title: "Creativity",
      description: "We believe in pushing boundaries and creating unique, memorable experiences",
      icon: "🎨"
    },
    {
      title: "Excellence",
      description: "Every performance is crafted with attention to detail and professional quality",
      icon: "⭐"
    },
    {
      title: "Joy",
      description: "Our mission is to bring happiness and wonder to every audience",
      icon: "😊"
    },
    {
      title: "Community",
      description: "We're committed to serving our community and building lasting relationships",
      icon: "🤝"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Footloose Edwin's
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-emerald-100">
            Creating magical dance experiences that inspire, entertain, and bring communities together through the power of movement and storytelling
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
            Our Story
          </Button>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-muted-foreground">
                How we started and where we're going
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Founded in 2016 by Edwin Rodriguez, Footloose Edwin's began as a dream to make dance accessible and exciting for everyone. What started as small birthday party performances has grown into a comprehensive dance entertainment company serving the entire region.
                </p>
                <p className="text-lg leading-relaxed">
                  Our passion lies in creating immersive themed experiences that transport audiences to different worlds. From superhero adventures to fairy tale fantasies, we believe that dance has the power to tell stories and create lasting memories.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're proud to offer a full range of services including themed performances, dance classes, choreography services, and fitness programs. Our team of talented professionals is dedicated to bringing joy and creativity to every event we touch.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/professional-dance-studio-with-dancers-in-colorful.jpg"
                    alt="Dance studio with colorful performers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Milestones that make us proud
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented professionals who bring our performances to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium mb-3">
                    {member.role}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Footloose Edwin's?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in the world of dance entertainment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle>Passionate Performers</CardTitle>
                <CardDescription>
                  Every member of our team is passionate about dance and dedicated to creating magical experiences for our audiences.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Personalized Service</CardTitle>
                <CardDescription>
                  We work closely with each client to understand their vision and create customized performances that exceed expectations.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Star className="h-12 w-12 text-yellow-500 mb-4" />
                <CardTitle>Proven Excellence</CardTitle>
                <CardDescription>
                  With hundreds of successful events and thousands of happy clients, we have a proven track record of delivering excellence.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Dance with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
            Let's create something magical together. Contact us today to discuss your event and how we can make it unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
