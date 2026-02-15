"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Kavoon } from "next/font/google";

const kavoon = Kavoon({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    "Artistry",
    "Excellence",
    "Passion",
    "Creativity",
    "Innovation",
    "Expression",
    "Performance",
  ];

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Montage with Scroll Animation */}
      <div className="absolute inset-0 flex">
        <motion.div
          className="flex-shrink-0 grid grid-cols-4 grid-rows-3 gap-1 min-w-full"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
            const row = Math.floor((i - 1) / 4);
            const finalOpacity = row === 0 ? 0.6 : row === 1 ? 0.3 : 0.1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: finalOpacity, scale: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
                className="relative overflow-hidden"
              >
                <Image
                  src={`/assets/${i}.jpg`}
                  alt={`Dance performance ${i}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 25vw"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Duplicate grid for seamless loop */}
        <motion.div
          className="flex-shrink-0 grid grid-cols-4 grid-rows-3 gap-1 min-w-full"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
            const row = Math.floor((i - 1) / 4);
            const finalOpacity = row === 0 ? 0.6 : row === 1 ? 0.3 : 0.1;

            return (
              <motion.div
                key={`dup-${i}`}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: finalOpacity, scale: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
                className="relative overflow-hidden"
              >
                <Image
                  src={`/assets/${i}.jpg`}
                  alt={`Dance performance ${i}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 25vw"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Gradient Overlay - Fades from bottom (solid theme color) to top (more transparent) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40 dark:from-black dark:via-black/80 dark:to-black/40" />

      {/* Additional center gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent dark:via-black/50" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <div className="relative w-52 h-24 sm:w-40 sm:h-20 overflow-hidden">
              <Image
                src="/Footloose_logo.png"
                alt="Footloose Logo"
                fill
                className="object-cover object-center drop-shadow-2xl dark:invert"
                priority
              />
            </div>
          </motion.div>

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-full shadow-lg transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400 animate-pulse" /> */}
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              33+ Years of Dance Excellence
            </span>
          </div>

          {/* Main Title with Animation */}
          <div className="space-y-6">
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight ${kavoon.className}`}
            >
              <motion.span
                className="block text-white dark:text-black text-stroke-animated"
                style={{
                  WebkitTextStroke: "2px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                {"Edwin's Footloose".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.05,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className="block text-white dark:text-black text-stroke-animated"
                style={{
                  WebkitTextStroke: "2px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
              >
                {"Dance Company".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.5 + index * 0.05,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>

            {/* Subtitle */}
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 transition-all duration-1000 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Where Movement Meets{" "}
              <span className="inline-block ">
                {words.map((word, index) => (
                  <span
                    key={word}
                    className="absolute left-0 right-0"
                    style={{
                      opacity: index === currentWordIndex ? 1 : 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={`${word}-${charIndex}`}
                        className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 transition-all duration-1000 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: index === currentWordIndex ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.1,
                          delay:
                            index === currentWordIndex ? charIndex * 0.08 : 0,
                          ease: "easeOut",
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
            </h2>

            <p
              className={`text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Experience the fusion of dance, costume design, and creative
              excellence at{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Edwin's Dance & Costume Company
              </span>
              . Transforming visions into breathtaking performances since 1992.
            </p>
          </div>

          {/* CTA Buttons */}
          {/* <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group px-8 py-6 text-lg rounded-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/gallery">
                <span className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch Showreel
                </span>
              </Link>
            </Button>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-gray-900 dark:border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gray-900 dark:bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes strokeColorShift {
          0% {
            -webkit-text-stroke-color: #9333ea; /* purple-600 */
          }
          14% {
            -webkit-text-stroke-color: #3b82f6; /* blue-600 */
          }
          28% {
            -webkit-text-stroke-color: #06b6d4; /* cyan-600 */
          }
          42% {
            -webkit-text-stroke-color: #10b981; /* emerald-600 */
          }
          56% {
            -webkit-text-stroke-color: #f59e0b; /* amber-600 */
          }
          70% {
            -webkit-text-stroke-color: #ef4444; /* red-600 */
          }
          84% {
            -webkit-text-stroke-color: #ec4899; /* pink-600 */
          }
          100% {
            -webkit-text-stroke-color: #9333ea; /* purple-600 */
          }
        }

        .text-stroke-animated {
          animation: strokeColorShift 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
