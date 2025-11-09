import Link from "next/link"

import { Container } from "./container"

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Costume Design", href: "/costume-design" },
  { label: "Costume Rental", href: "/costume-rental" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-of-service" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Footloose</p>
          <p className="max-w-xs text-sm text-foreground/60">
            Footloose Edwin's Dance Company delivers choreography, themed productions, and corporate wellness programs across India.
          </p>
          <div className="text-sm text-foreground/60">
            <p className="font-medium text-foreground">Call</p>
            <Link href="tel:+919842222467" className="hover:text-foreground">
              +91 98422 22467
            </Link>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/60">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
      <div className="border-t border-border/60 py-4 text-center text-xs text-foreground/50">
        © {new Date().getFullYear()} Footloose Edwin&apos;s Dance Company. All rights reserved.
      </div>
    </footer>
  )
}
