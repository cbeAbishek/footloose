import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MessageCircle, Phone, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
          <CardContent className="relative p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Ready to Start Your <span className="text-primary">Dance Journey</span>?
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Whether you're planning a school event, corporate team building, or personal fitness goals, we're here
                  to make it extraordinary. Let's create something amazing together.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <Button size="lg" className="h-14" asChild>
                  <Link href="https://wa.me/+919842222467?text=Hi! I'd like to book a consultation." target="_blank">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Us
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 bg-transparent" asChild>
                  <Link href="tel:+919842222467">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" className="h-14" asChild>
                  <Link href="/contact">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Visit
                  </Link>
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>Free consultation • Flexible scheduling • Custom packages available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
