"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Quote } from "lucide-react";

export function MissionVision() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-purple-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">
              Our Purpose
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              & Direction
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Mission Card */}
          <Card
            className={`group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-800 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-1000 hover:shadow-2xl hover:shadow-purple-500/20 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 dark:from-purple-600/10 dark:to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardContent className="p-6 sm:p-8 md:p-10 relative z-10 text-center lg:text-left">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl mx-auto lg:mx-0">
                <Target className="h-8 w-8 md:h-10 md:h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h3>

              {/* Quote Icon */}
              <Quote className="h-8 w-8 md:h-10 md:w-10 text-purple-600/20 dark:text-purple-400/20 mb-4 mx-auto lg:mx-0" />

              {/* Content */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                "To inspire creativity and lifelong learning through engaging,
                hands-on dance experiences that enhance well-being, foster
                community, and ignite personal growth across all ages and
                abilities."
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                {[
                  "Inspire creativity & self-expression",
                  "Foster community connections",
                  "Enhance physical & mental well-being",
                  "Accessible to all ages & abilities",
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 justify-center lg:justify-start"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 opacity-5 blur-3xl" />
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card
            className={`group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-1000 delay-200 hover:shadow-2xl hover:shadow-blue-500/20 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 dark:from-blue-600/10 dark:to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardContent className="p-6 sm:p-8 md:p-10 relative z-10 text-center lg:text-left">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl mx-auto lg:mx-0">
                <Eye className="h-8 w-8 md:h-10 md:h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Vision
              </h3>

              {/* Quote Icon */}
              <Quote className="h-8 w-8 md:h-10 md:w-10 text-blue-600/20 dark:text-blue-400/20 mb-4 mx-auto lg:mx-0" />

              {/* Content */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                "To be South India's leading dance and entertainment company,
                creating immersive themed experiences that tell stories, build
                lasting memories, and celebrate the transformative power of
                dance."
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                {[
                  "South India's premier dance institution",
                  "Immersive themed experiences",
                  "Building lasting memories",
                  "Cultural excellence & innovation",
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 justify-center lg:justify-start"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-5 blur-3xl" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
