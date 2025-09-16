"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Users, Calendar, Trophy, Heart } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Happy Clients",
    description: "Across schools, corporates, and individuals",
  },
  {
    icon: Calendar,
    value: 31,
    suffix: "",
    label: "Years Experience",
    description: "Three decades of dance excellence",
  },
  {
    icon: Trophy,
    value: 250,
    suffix: "+",
    label: "Performances",
    description: "Successful events and competitions",
  },
  {
    icon: Heart,
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Client happiness is our priority",
  },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      {/* Animated Gradient Background - matching hero section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/10 via-transparent to-yellow-900/10 animate-gradient-shift-reverse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse-slow"></div>
      </div>

      {/* Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-fade-in">
            Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Thousands</span> of Clients
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto text-pretty leading-relaxed opacity-90">
            Our numbers speak for themselves. Three decades of dedication to dance excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group relative p-8 text-center bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[1px] rounded-lg bg-slate-800/90 group-hover:bg-slate-800/70" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
                    <stat.icon className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300 relative z-10" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-500">
                    <CountUp end={stat.value} />
                    <span className="text-purple-400">{stat.suffix}</span>
                  </div>
                  <div className="font-semibold text-slate-200 text-lg group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-400 text-pretty leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {stat.description}
                  </div>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes gradient-shift-reverse {
          0%,
          100% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 0% 50%;
          }
        }
        @keyframes float-random {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-15px) translateX(8px);
            opacity: 0.9;
          }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
        }
        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 10s ease infinite;
        }
        .animate-float-random {
          animation: float-random 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  )
}
