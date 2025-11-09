"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram, Youtube, Twitter, Facebook, Linkedin, Star } from "lucide-react"

const GoogleIcon = ({ className = "" }: { className?: string }) => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
    alt="Google G"
    className={`${className} rounded-full object-contain`}
  />
)

const socialMedia = [
  {
    platform: "YouTube",
    icon: Youtube,
    followers: "15.2K",
    color: "bg-[#FF0000]",
    hoverColor: "hover:bg-[#CC0000]",
    link: "https://youtube.com/@edwinsdance",
    bio: "Watch our dance performances & tutorials",
  },
  {
    platform: "Instagram",
    icon: Instagram,
    followers: "28.5K",
    color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
    hoverColor: "hover:scale-110",
    link: "https://instagram.com/edwinsdance",
    bio: "Daily updates & behind-the-scenes moments",
  },
  {
    platform: "Twitter",
    icon: Twitter,
    followers: "12.8K",
    color: "bg-[#1DA1F2]",
    hoverColor: "hover:bg-[#1A8CD8]",
    link: "https://twitter.com/edwinsdance",
    bio: "Latest news & announcements",
  },
  {
    platform: "Facebook",
    icon: Facebook,
    followers: "45.3K",
    color: "bg-[#1877F2]",
    hoverColor: "hover:bg-[#166FE5]",
    link: "https://facebook.com/edwinsdance",
    bio: "Community updates & event highlights",
  },
  {
    platform: "LinkedIn",
    icon: Linkedin,
    followers: "8.7K",
    color: "bg-[#0A66C2]",
    hoverColor: "hover:bg-[#004182]",
    link: "https://linkedin.com/company/edwinsdance",
    bio: "Professional network & career opportunities",
  },
  {
    platform: "Google",
    icon: GoogleIcon,
    followers: "4.8K",
    color: "bg-white",
    hoverColor: "hover:scale-110",
    link: "https://g.page/edwinsdance",
    bio: "Reviews, ratings & business information",
    textColor: "text-black",
  },
]

export function SocialWall() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 mb-32 md:py-32 bg-white dark:bg-black relative overflow-visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Connect With Us
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              On Social Media
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Follow our journey and stay updated with our latest performances
          </p>
        </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {socialMedia.map((social, index) => {
            const Icon = social.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={social.platform}
                className={`relative transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 3000)}
              >
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex flex-col items-center gap-4">
                    {/* Icon Circle */}
                    <div
                      className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full ${social.color} ${social.hoverColor} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95`}
                    >
                      <Icon className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${social.platform === 'Google' ? '' : 'text-white'}`} />
                      
                      {/* Subtle ring effect */}
                      <div className="absolute inset-0 rounded-full ring-4 ring-white/20 dark:ring-black/20 group-hover:ring-8 transition-all duration-300" />
                    </div>

                    {/* Follower Count */}
                    <div className="text-center">
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {social.followers}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
                        {social.platform}
                      </p>
                    </div>
                  </div>
                </a>

                {/* Preview Card - Shows on Hover/Touch */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 z-[100] pointer-events-none transition-all duration-300 ${
                    isHovered 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-2"
                  }`}
                  style={{
                    minWidth: "280px",
                    maxWidth: "320px",
                  }}
                >
                  {/* Card Container */}
                  <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden">
                    {/* Header with Platform Color */}
                    <div className={`${social.color} p-4 flex items-center gap-3`}>
                      <div className={`w-12 h-12 rounded-full ${social.platform === 'Google' ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-sm'} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${social.platform === 'Google' ? '' : 'text-white'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-lg truncate ${social.platform === 'Google' ? 'text-gray-900' : 'text-white'}`}>
                          Edwin's Dance
                        </h3>
                        <p className={`text-sm ${social.platform === 'Google' ? 'text-gray-700' : 'text-white/90'}`}>
                          @edwinsdance
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {social.followers}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Followers
                          </p>
                        </div>
                        <div className="h-8 w-px bg-gray-300 dark:bg-gray-700" />
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {index === 0 ? "150+" : index === 1 ? "500+" : index === 2 ? "1.2K" : index === 3 ? "300+" : index === 4 ? "120+" : "85"}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {index === 5 ? "Rating" : "Posts"}
                          </p>
                        </div>
                      </div>

                      {/* Bio/Tagline */}
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                        {social.bio}
                      </p>

                      {/* Platform Badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {social.platform}
                        </span>
                        <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                          Click to visit →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Pointer */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-l border-t border-gray-200/50 dark:border-gray-700/50 rotate-45" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
