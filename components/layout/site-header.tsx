"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  Info, 
  Briefcase, 
  Palette, 
  Shirt, 
  Image, 
  BookOpen, 
  Users, 
  Mail 
} from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const primaryNav = [
  { href: "/about", label: "About", icon: Info },
  {
    href: "/services",
    label: "Services",
    icon: Briefcase,
    children: [
      { href: "/services/dance-class", label: "Dance Classes" },
      { href: "/services/choreography", label: "Choreography" },
      { href: "/services/events", label: "Event Management" },
      { href: "/services/chair-co-cise", label: "Chair Co-cise" },
      { href: "/services/esp-showcase", label: "ESP Showcase" },
      { href: "/services/la-ramp", label: "La Ramp" },
    ],
  },
  { href: "/costume-design", label: "Costume Design", icon: Palette },
  { href: "/costume-rental", label: "Costume Rental", icon: Shirt },
  { href: "/gallery", label: "Gallery", icon: Image },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/alumni", label: "Alumni", icon: Users },
  { href: "/contact", label: "Contact", icon: Mail },
]

const rotatingWords = ["Footloose", "Edwin's", "Dance", "Company"]

export function SiteHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [desktopSubmenu, setDesktopSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [wordAnimationKey, setWordAnimationKey] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
      setWordAnimationKey((prev) => prev + 1)
    }, 2000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveSubmenu(null)
  }, [pathname])

  useEffect(() => {
    const handleClick = () => setDesktopSubmenu(null)
    if (desktopSubmenu) {
      document.addEventListener("click", handleClick)
      return () => document.removeEventListener("click", handleClick)
    }
  }, [desktopSubmenu])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const toggleSubmenu = (href: string) => {
    setActiveSubmenu(activeSubmenu === href ? null : href)
  }

  const closeAllMenus = () => {
    setMobileMenuOpen(false)
    setActiveSubmenu(null)
    setDesktopSubmenu(null)
  }

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
    if (!isMobileMenuOpen) {
      setActiveSubmenu(null)
    }
  }

  return (
    <>
      <style jsx global>{`
        @keyframes wordCycle {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          15% {
            opacity: 1;
            transform: translateY(0);
          }
          85% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-12px);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }

        .submenu-expand {
          animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .rotate-word {
          animation: wordCycle 2s ease-in-out;
          display: inline-block;
        }

        .slide-in {
          animation: slideInFromLeft 0.3s ease-out;
        }

        .dropdown-enter {
          animation: slideInFromTop 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu-enter {
          animation: fadeInScale 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .logo-glow {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .logo-glow:hover {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1);
          transform: scale(1.08) rotate(5deg);
        }

        .nav-item {
          position: relative;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-item::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #000, #444);
          transform: translateX(-50%);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dark .nav-item::before {
          background: linear-gradient(90deg, #fff, #aaa);
        }

        .nav-item:hover::before {
          width: 80%;
        }

        .mobile-menu-item {
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu-item:active {
          transform: scale(0.98);
        }

        .submenu-item {
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .submenu-item:hover {
          transform: translateX(4px);
        }
      `}</style>

      <nav
        className={cn(
          "fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-xl transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md dark:bg-gray-900/95 shadow-lg shadow-black/20 dark:shadow-white/20"
            : "bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 shadow-md shadow-black/10 dark:shadow-white/10"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full logo-glow transition-all duration-300">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="relative h-6 w-32 overflow-hidden">
              <span
                key={wordAnimationKey}
                className="rotate-word h-6 text-lg font-bold leading-6 text-gray-900 dark:text-white whitespace-nowrap"
              >
                {rotatingWords[currentWordIndex]}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center space-x-1 lg:flex">
            {primaryNav.map((item) => {
              const active = isActive(item.href)
              const hasChildren = item.children && item.children.length > 0

              if (hasChildren) {
                return (
                  <div key={item.href} className="relative group">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          "nav-item rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                          active
                            ? "text-gray-900 dark:text-white font-semibold"
                            : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setDesktopSubmenu(desktopSubmenu === item.href ? null : item.href)
                        }}
                        className={cn(
                          "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300",
                          active
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            desktopSubmenu === item.href && "rotate-180"
                          )}
                        />
                      </button>
                    </div>

                    {desktopSubmenu === item.href && (
                      <div className="dropdown-enter absolute left-0 top-full z-50 mt-2 w-64 rounded-xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-2 shadow-2xl">
                        {item.children?.map((child, idx) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeAllMenus}
                            style={{ animationDelay: `${idx * 30}ms` }}
                            className={cn(
                              "submenu-item slide-in block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
                              pathname === child.href
                                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "nav-item rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                    active
                      ? "text-gray-900 dark:text-white font-semibold"
                      : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <ThemeToggle />

            {/* Mobile Login Button - Visible on mobile */}
            <Link
              href="https://www.staff.footloose.online/"
              className="flex lg:hidden items-center space-x-1 rounded-lg border-2 border-gray-900 dark:border-white px-3 py-1.5 text-xs font-semibold text-gray-900 dark:text-white transition-all duration-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 active:scale-95"
            >
              <span>Login</span>
            </Link>

            {/* Desktop Action Buttons */}
            <div className="ml-4 hidden items-center space-x-2 lg:flex">
              <a
                href="https://wa.me/+919842222467"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 rounded-lg bg-gray-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <Link
                href="https://www.staff.footloose.online/"
                className="flex items-center space-x-2 rounded-lg border-2 border-gray-900 dark:border-white px-4 py-2 text-sm font-medium text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 active:scale-95"
              >
                <span>Login</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 lg:hidden"
              aria-label="Toggle menu"
            >
              <div className="relative h-5 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-5 bg-gray-900 transition-all duration-300 ease-in-out dark:bg-white",
                    isMobileMenuOpen && "top-2 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-2 h-0.5 w-5 bg-gray-900 transition-all duration-300 ease-in-out dark:bg-white",
                    isMobileMenuOpen && "opacity-0 scale-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-4 h-0.5 w-5 bg-gray-900 transition-all duration-300 ease-in-out dark:bg-white",
                    isMobileMenuOpen && "top-2 -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed left-0 top-20 z-40 h-[calc(100vh-5rem)] w-full transform overflow-y-auto bg-white/95 dark:bg-black backdrop-blur-xl transition-all duration-500 ease-out lg:hidden shadow-2xl",
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        )}
      >
        <div className="space-y-2 p-4">
          {primaryNav.map((item, itemIdx) => {
            const active = isActive(item.href)
            const hasChildren = item.children && item.children.length > 0
            const isExpanded = activeSubmenu === item.href
            const Icon = item.icon

            return (
              <div 
                key={item.href} 
                className="mobile-menu-enter"
                style={{ animationDelay: `${itemIdx * 40}ms` }}
              >
                {hasChildren ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={item.href}
                        onClick={closeAllMenus}
                        className={cn(
                          "mobile-menu-item flex items-center space-x-2.5 flex-1 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 shadow-sm",
                          active
                            ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
                        )}
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>View All {item.label}</span>
                      </Link>
                      <button
                        onClick={() => toggleSubmenu(item.href)}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md active:scale-95 shadow-sm"
                      >
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-300 text-gray-900 dark:text-white",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="submenu-expand space-y-1.5 rounded-xl bg-gray-50 dark:bg-gray-800/50 p-2 border border-gray-200 dark:border-gray-700">
                        {item.children?.map((child, idx) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeAllMenus}
                            style={{ animationDelay: `${idx * 50}ms` }}
                            className={cn(
                              "slide-in submenu-item block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
                              pathname === child.href
                                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeAllMenus}
                    className={cn(
                      "mobile-menu-item flex items-center space-x-2.5 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 shadow-sm",
                      active
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
                    )}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            )
          })}

          {/* Mobile Action Buttons */}
          <div className="space-y-2.5 pt-6 border-t border-gray-200 dark:border-gray-700">
            <a
              href="tel:+919842222467"
              className="flex items-center justify-center space-x-2 rounded-xl bg-gray-900 dark:bg-white px-4 py-3.5 text-sm font-semibold text-white dark:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/+919842222467"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 rounded-xl bg-gray-900 dark:bg-white px-4 py-3.5 text-sm font-semibold text-white dark:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
