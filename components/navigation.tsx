"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react"

const navigationItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Dance Classes", href: "/services/classes" },
      { name: "Props & Design", href: "/services/props" },
      { name: "Choreography", href: "/services/choreography" },
      { name: "ChaircoCISE Fitness", href: "/services/chaircoCISE" },
    ],
  },
  {
    name: "Themes",
    href: "/themes",
    submenu: [
      { name: "Edwin's AI", href: "/themes/edwins-ai" },
      { name: "Dinosaur Adventure", href: "/themes/dinosaur" },
      { name: "Avengers", href: "/themes/avengers" },
      { name: "Snow White", href: "/themes/snow-white" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("")
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  
  const toggleMenu = () => setIsOpen(!isOpen)
  
  const toggleSubmenu = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      const match = navigationItems.find((item) => item.href === path)
      setActive(match?.name || "")
    }
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) {
        setIsOpen(false)
        setOpenSubmenu(null)
      }
    }
    
    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-[90%] max-w-7xl">
      <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl px-4 py-0 pt-4 sm:px-6 sm:py-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <img
                src="/logo.svg"
                alt="Footloose Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white whitespace-nowrap flex items-center">
              <span className="nav-rotating-word">
              <span className="nav-word">Footloose</span>
              <span className="nav-word">Edwin's</span>
              <span className="nav-word">Dance</span>
              <span className="nav-word">Company</span>
              </span>

              <style jsx>{`
              .nav-rotating-word {
                position: relative;
                display: inline-block;
                height: 1.2em;
                overflow: hidden;
                min-width: 200px;
              }

              .nav-word {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                opacity: 0;
                transform: translateY(100%);
                animation: rotateWords 8s infinite;
                transition: all 0.5s ease-in-out;
              }

              .nav-word:nth-child(1) { animation-delay: 0s; }
              .nav-word:nth-child(2) { animation-delay: 2s; }
              .nav-word:nth-child(3) { animation-delay: 4s; }
              .nav-word:nth-child(4) { animation-delay: 6s; }

              @keyframes rotateWords {
                0% { 
                opacity: 0; 
                transform: translateY(100%); 
                }
                12.5% { 
                opacity: 1; 
                transform: translateY(0%); 
                }
                25% { 
                opacity: 1; 
                transform: translateY(0%); 
                }
                37.5% { 
                opacity: 0; 
                transform: translateY(-100%); 
                }
                100% { 
                opacity: 0; 
                transform: translateY(-100%); 
                }
              }

              @media (max-width: 1023px) {
                .nav-rotating-word {
                min-width: 80px;
                }
              }

              @media (max-width: 639px) {
                .nav-rotating-word {
                min-width: 120px;
                }
              }
              `}</style>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-4 xl:space-x-6 items-center">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-gray-300 hover:text-white font-medium transition duration-300 relative flex items-center px-2 py-1 rounded-lg ${
                    active === item.name
                      ? "text-blue-400 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-blue-400"
                      : "hover:bg-gray-800/30"
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                
                {/* Desktop Dropdown menu */}
                {item.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-xl bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl" />
                      <div className="relative p-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block rounded-lg px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Desktop CTA Buttons */}
            <div className="flex items-center space-x-2 ml-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="bg-gray-800/50 hover:bg-gray-700/70 border border-gray-600/50 text-gray-300 hover:text-white transition-all duration-300"
                asChild
              >
                <Link href="tel:+919842222467">
                  <Phone className="h-4 w-4" />
                  <span className="sr-only">Call Now</span>
                </Link>
              </Button>
              
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white border-0 shadow-lg shadow-blue-900/25 hover:shadow-blue-900/40 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="https://wa.me/+919842222467" target="_blank" className="flex items-center text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span className="hidden xl:inline">WhatsApp</span>
                  <span className="xl:hidden">Chat</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden text-gray-300">
            <button 
              onClick={(e) => {
                e.stopPropagation()
                toggleMenu()
              }} 
              className="focus:outline-none hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/30"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out rounded-xl bg-gray-900/95 backdrop-blur-md border border-gray-700/50 mt-4 ${
          isOpen
            ? "max-h-[600px] py-4 px-4 opacity-100"
            : "max-h-0 py-0 px-4 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col space-y-2">
          {navigationItems.map((item) => (
            <div key={item.name} className="group">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => !item.submenu && setIsOpen(false)}
                  className={`block text-gray-300 py-2 text-base hover:text-white font-medium transition-colors flex-1 ${
                    active === item.name
                      ? "text-blue-400 underline underline-offset-4 decoration-blue-400"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      openSubmenu === item.name ? "rotate-180" : ""
                    }`} />
                  </button>
                )}
              </div>
              
              {/* Mobile Submenu */}
              {item.submenu && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ml-4 border-l border-gray-600 pl-4 ${
                    openSubmenu === item.name
                      ? "max-h-48 mt-2 space-y-1 opacity-100"
                      : "max-h-0 mt-0 space-y-0 opacity-0"
                  }`}
                >
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-2 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA Buttons */}
          <div className="pt-4 space-y-2 border-t border-gray-700/50">
            <Button 
              variant="ghost" 
              className="w-full justify-start bg-gray-800/50 hover:bg-gray-700/70 border border-gray-600/50 text-gray-300 hover:text-white transition-all duration-300"
              asChild
            >
              <Link href="tel:+919842222467" onClick={() => setIsOpen(false)}>
                <Phone className="h-4 w-4 mr-3" />
                Call Now
              </Link>
            </Button>
            
            <Button 
              className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white border-0 shadow-lg shadow-blue-900/25 hover:shadow-blue-900/40 transition-all duration-300"
              asChild
            >
              <Link href="https://wa.me/+919842222467" target="_blank" onClick={() => setIsOpen(false)}>
                <MessageCircle className="h-4 w-4 mr-3" />
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </nav>
  )
}
