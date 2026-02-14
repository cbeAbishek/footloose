"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Lightbulb, Heart, Sparkles } from "lucide-react";

export function CoreValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Users,
      title: "Inclusivity",
      description:
        "Dance programs for all age groups from 3 to 70+ years. We believe everyone can dance and deserves access to quality training.",
      features: [
        "All age groups",
        "All abilities",
        "Diverse dance forms",
        "Accessible programs",
      ],
      color: "from-purple-600 to-purple-400",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Professional choreography, high-quality costumes, and experienced certified trainers delivering world-class dance education.",
      features: [
        "Certified trainers",
        "Professional standards",
        "Quality costumes",
        "Expert choreography",
      ],
      color: "from-blue-600 to-cyan-400",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pioneering programs like CHAIR-CO-CISE and creating themed productions that push boundaries of performance art.",
      features: [
        "CHAIR-CO-CISE program",
        "Themed productions",
        "LED technology",
        "Creative concepts",
      ],
      color: "from-cyan-600 to-teal-400",
    },
    {
      icon: Heart,
      title: "Community",
      description:
        "Building connections through workshops, events, and performances that bring people together and create lasting bonds.",
      features: [
        "Social engagement",
        "Cultural events",
        "Workshops",
        "Community building",
      ],
      color: "from-pink-600 to-rose-400",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description:
        "Encouraging artistic expression and storytelling through dance, nurturing unique talents and individual voices.",
      features: [
        "Artistic expression",
        "Personal growth",
        "Storytelling",
        "Talent nurturing",
      ],
      color: "from-orange-600 to-amber-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">
              Our Core
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
            The principles that guide everything we do
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border-2 border-gray-200 dark:border-gray-800 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardContent className="p-6 sm:p-8 relative z-10 text-center">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}
                  >
                    <Icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-br ${value.color} bg-clip-text text-transparent`}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {value.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {value.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 justify-center"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.color}`}
                        />
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.color} opacity-5 blur-2xl`}
                  />
                </CardContent>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
