"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Play,
  Star,
  Users,
  Calendar,
  MessageCircle,
  ArrowDown,
} from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative pt-12 min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/10 via-transparent to-yellow-900/10 animate-gradient-shift-reverse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse-slow"></div>
      </div>

      {/* Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      {/* Mouse Follow Gradient */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="container mx-auto px-4 py-40 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="text-sm font-medium bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-glow"
              >
                <Star className="h-3 w-3 mr-1 animate-spin-slow" />
                30 Years of Excellence
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance leading-tight text-white">
                Where{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
                  Dance
                </span>{" "}
                Meets{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent animate-gradient-text-reverse">
                  Innovation
                </span>
              </h1>

              <p className="text-xl text-gray-300 text-pretty leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                From themed performances to specialized fitness programs, we
                bring creativity and professionalism to every step. Discover our
                signature ChaircoCISE program and immersive themed experiences.
              </p>
            </div>

            {/* Key Features */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up animation-delay-400 justify-center">
              {[
                { icon: Users, text: "All Ages Welcome" },
                { icon: Calendar, text: "Flexible Scheduling" },
                { icon: Star, text: "Custom Themes" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-3 text-sm group hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                    <feature.icon className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600 justify-center">
              {/* <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
                asChild
              >
                <Link
                  href="https://wa.me/1234567890?text=Hi! I'd like to book a consultation."
                  target="_blank"
                >
                  <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Book Consultation
                </Link>
              </Button> */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button
                  size="lg"
                  className="group flex items-center text-lg px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-lg hover:from-purple-700 hover:to-blue-700 transform-gpu hover:-translate-y-0.5 transition-all duration-200"
                  asChild
                >
                  <Link
                    href="https://wa.me/1234567890?text=Hi!%20I'd%20like%20to%20book%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book Consultation on WhatsApp"
                  >
                    <span className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Book Consultation</span>
                    </span>
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group flex items-center text-lg px-6 py-3 rounded-full border-white/20 text-white bg-transparent hover:bg-white/6 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
                  asChild
                >
                  <Link href="/services" aria-label="Explore Services">
                    <span className="flex items-center">
                      <span className="font-medium">Explore Services</span>
                      <ArrowDown className="h-4 w-4 ml-3 transform transition-transform duration-200 group-hover:rotate-90" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400 animate-fade-in-up animation-delay-800">
              <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                {/* <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 border-2 border-gray-800 flex items-center justify-center text-xs font-medium text-white hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {i}
                    </div>
                  ))}
                </div> */}
                <span className="group-hover:text-gray-300 transition-colors duration-300">
                  5000+ Happy Clients
                </span>
              </div>
              <div className="flex items-center space-x-2 group">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-300 cursor-pointer"
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <span className="group-hover:text-gray-300 transition-colors duration-300">
                  4.8/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer group ">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden bg-white/5 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
          <div className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dancer-spin {
          0%,
          100% {
            transform: rotate(0deg) translateX(0px);
          }
          25% {
            transform: rotate(90deg) translateX(5px);
          }
          50% {
            transform: rotate(180deg) translateX(0px);
          }
          75% {
            transform: rotate(270deg) translateX(-5px);
          }
        }
        @keyframes dancer-groove {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-5px) rotate(5deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(-3px) rotate(-5deg);
          }
        }
        @keyframes dancer-twist {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          33% {
            transform: rotate(120deg) scale(1.1);
          }
          66% {
            transform: rotate(240deg) scale(0.9);
          }
        }
        @keyframes bounce-dance {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes head-bob {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-3px) rotate(5deg);
          }
        }
        @keyframes spin-head {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
        }
        @keyframes sway {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }
        @keyframes body-wave {
          0%,
          100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(1.2);
          }
        }
        @keyframes twist-body {
          0%,
          100% {
            transform: rotate(0deg) scaleX(1);
          }
          50% {
            transform: rotate(15deg) scaleX(1.1);
          }
        }
        @keyframes kick-left {
          0%,
          100% {
            transform: rotate(12deg);
          }
          50% {
            transform: rotate(45deg);
          }
        }
        @keyframes kick-right {
          0%,
          100% {
            transform: rotate(-12deg);
          }
          50% {
            transform: rotate(-45deg);
          }
        }
        @keyframes step-left {
          0%,
          100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(-3px);
          }
        }
        @keyframes step-right {
          0%,
          100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(3px);
          }
        }
        @keyframes slide-left {
          0%,
          100% {
            transform: translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateX(-5px) rotate(-15deg);
          }
        }
        @keyframes slide-right {
          0%,
          100% {
            transform: translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateX(5px) rotate(15deg);
          }
        }
        @keyframes musical-float {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-30px) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes spotlight {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(180deg);
          }
        }
        @keyframes mirror-shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes dance-floor-pulse {
          0%,
          100% {
            background-color: rgba(255, 255, 255, 0.1);
          }
          50% {
            background-color: rgba(255, 255, 255, 0.3);
          }
        }
        @keyframes pulse-rhythm {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        @keyframes dance-bounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes text-dance {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }
        @keyframes counter-dance {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }
        @keyframes number-bounce {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes text-sway {
          0%,
          100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(2px);
          }
        }
        @keyframes choreography-circle {
          0% {
            transform: rotate(0deg) scale(1);
          }
          100% {
            transform: rotate(360deg) scale(1.1);
          }
        }
        @keyframes choreography-circle-reverse {
          0% {
            transform: rotate(360deg) scale(1);
          }
          100% {
            transform: rotate(0deg) scale(0.9);
          }
        }
        @keyframes dance-steps {
          0%,
          100% {
            opacity: 0;
            transform: translateY(0px) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translateY(-10px) scale(1);
          }
        }

        .animate-dancer-spin {
          animation: dancer-spin 3s ease-in-out infinite;
        }
        .animate-dancer-groove {
          animation: dancer-groove 2s ease-in-out infinite;
        }
        .animate-dancer-twist {
          animation: dancer-twist 4s ease-in-out infinite;
        }
        .animate-bounce-dance {
          animation: bounce-dance 1.5s ease-in-out infinite;
        }
        .animate-head-bob {
          animation: head-bob 1.8s ease-in-out infinite;
        }
        .animate-spin-head {
          animation: spin-head 3s linear infinite;
        }
        .animate-sway {
          animation: sway 2.5s ease-in-out infinite;
        }
        .animate-body-wave {
          animation: body-wave 2s ease-in-out infinite;
        }
        .animate-twist-body {
          animation: twist-body 2.2s ease-in-out infinite;
        }
        .animate-kick-left {
          animation: kick-left 1s ease-in-out infinite;
        }
        .animate-kick-right {
          animation: kick-right 1s ease-in-out infinite 0.5s;
        }
        .animate-step-left {
          animation: step-left 1.2s ease-in-out infinite;
        }
        .animate-step-right {
          animation: step-right 1.2s ease-in-out infinite 0.6s;
        }
        .animate-slide-left {
          animation: slide-left 1.8s ease-in-out infinite;
        }
        .animate-slide-right {
          animation: slide-right 1.8s ease-in-out infinite 0.9s;
        }
        .animate-musical-float {
          animation: musical-float 4s ease-in-out infinite;
        }
        .animate-spotlight {
          animation: spotlight 5s ease-in-out infinite;
        }
        .animate-mirror-shine {
          animation: mirror-shine 8s ease-in-out infinite;
        }
        .animate-dance-floor-pulse {
          animation: dance-floor-pulse 2s ease-in-out infinite;
        }
        .animate-pulse-rhythm {
          animation: pulse-rhythm 1.5s ease-in-out infinite;
        }
        .animate-dance-bounce {
          animation: dance-bounce 2s ease-in-out infinite;
        }
        .animate-text-dance {
          animation: text-dance 3s ease-in-out infinite;
        }
        .animate-counter-dance {
          animation: counter-dance 4s ease-in-out infinite;
        }
        .animate-number-bounce {
          animation: number-bounce 2s ease-in-out infinite;
        }
        .animate-text-sway {
          animation: text-sway 3s ease-in-out infinite;
        }
        .animate-choreography-circle {
          animation: choreography-circle 20s linear infinite;
        }
        .animate-choreography-circle-reverse {
          animation: choreography-circle-reverse 15s linear infinite;
        }
        .animate-dance-steps {
          animation: dance-steps 3s ease-in-out infinite;
        }

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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scroll-indicator {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(200%);
            opacity: 0;
          }
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
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </section>
  );
}
