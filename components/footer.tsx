import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FE</span>
              </div>
              <span className="font-bold text-lg">Footloose Edwin's</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              30 years of dance excellence. Professional choreography, themed performances, and specialized fitness
              programs for all ages.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="#" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/classes" className="text-muted-foreground hover:text-primary transition-colors">
                  Dance Classes
                </Link>
              </li>
              <li>
                <Link href="/services/props" className="text-muted-foreground hover:text-primary transition-colors">
                  Props & Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/choreography"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Choreography
                </Link>
              </li>
              <li>
                <Link
                  href="/services/chaircoCISE"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ChaircoCISE Fitness
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Themes */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Popular Themes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/themes/edwins-ai" className="text-muted-foreground hover:text-primary transition-colors">
                  Edwin's AI
                </Link>
              </li>
              <li>
                <Link href="/themes/dinosaur" className="text-muted-foreground hover:text-primary transition-colors">
                  Dinosaur Adventure
                </Link>
              </li>
              <li>
                <Link href="/themes/avengers" className="text-muted-foreground hover:text-primary transition-colors">
                  Avengers
                </Link>
              </li>
              <li>
                <Link href="/themes/snow-white" className="text-muted-foreground hover:text-primary transition-colors">
                  Snow White
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 98422 22467</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@footlooseedwin.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>RS Puram, Coimbatore, Tamilnadu</span>
              </div>
            </div>
            <Button className="w-full" asChild>
              <Link href="https://wa.me/+919842222467" target="_blank">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Footloose Edwin's Dance Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
