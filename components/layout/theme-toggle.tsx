"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative h-8 w-16 rounded-full bg-gray-200 dark:bg-gray-700"
        aria-label="Toggle theme"
      >
        <span className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-md"></span>
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative h-8 w-16 rounded-full transition-all duration-700 ease-out
        ${
          isDark
            ? "bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] shadow-[inset_0_2px_10px_rgba(0,0,0,0.4),0_0_20px_rgba(49,159,230,0.3)]"
            : "bg-gradient-to-r from-[#87CEEB] via-[#319FE6] to-[#5DADE2] shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_0_20px_rgba(49,159,230,0.2)]"
        }
        hover:scale-105 active:scale-95
        group overflow-hidden
      `}
      aria-label="Toggle theme"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {/* Stars for dark mode */}
        <span
          className={`absolute top-1.5 left-2 w-1 h-1 rounded-full bg-white transition-all duration-700 ease-out ${
            isDark ? "opacity-100 scale-100 animate-pulse" : "opacity-0 scale-0"
          }`}
          style={{ animationDelay: "0ms" }}
        ></span>
        <span
          className={`absolute top-3 left-4 w-0.5 h-0.5 rounded-full bg-white/70 transition-all duration-700 ease-out ${
            isDark ? "opacity-100 scale-100 animate-pulse" : "opacity-0 scale-0"
          }`}
          style={{ animationDelay: "100ms" }}
        ></span>
        <span
          className={`absolute top-1 left-6 w-0.5 h-0.5 rounded-full bg-white/50 transition-all duration-700 ease-out ${
            isDark ? "opacity-100 scale-100 animate-pulse" : "opacity-0 scale-0"
          }`}
          style={{ animationDelay: "200ms" }}
        ></span>

        {/* Clouds for light mode */}
        <span
          className={`absolute top-2 right-3 w-3 h-1.5 rounded-full bg-white/60 transition-all duration-700 ease-out ${
            isDark
              ? "opacity-0 scale-0 -translate-x-2"
              : "opacity-100 scale-100 translate-x-0 animate-bounce"
          }`}
          style={{ animationDelay: "0ms", animationDuration: "2s" }}
        ></span>
        <span
          className={`absolute top-3.5 right-2 w-2 h-1 rounded-full bg-white/40 transition-all duration-700 ease-out ${
            isDark
              ? "opacity-0 scale-0 -translate-x-2"
              : "opacity-100 scale-100 translate-x-0 animate-bounce"
          }`}
          style={{ animationDelay: "300ms", animationDuration: "2.5s" }}
        ></span>
      </div>

      {/* Toggle Circle with enhanced animation */}
      <span
        className={`
          absolute top-1 h-6 w-6 rounded-full
          transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
          flex items-center justify-center
          ${
            isDark
              ? "left-[calc(100%-28px)] bg-gradient-to-br from-[#f5f5f5] via-[#e0e0e0] to-[#d0d0d0] shadow-[0_0_15px_rgba(49,159,230,0.5),inset_-2px_-2px_4px_rgba(0,0,0,0.1)]"
              : "left-1 bg-gradient-to-br from-[#FFD93D] via-[#FFB347] to-[#FF8C00] shadow-[0_0_20px_rgba(255,183,77,0.6),inset_-2px_-2px_4px_rgba(0,0,0,0.1)]"
          }
          group-hover:shadow-[0_0_25px_rgba(49,159,230,0.7)]
          hover:scale-110
        `}
      >
        {/* Sun Icon with enhanced animation */}
        <Sun
          className={`
            h-4 w-4 absolute transition-all duration-700 ease-out
            ${
              isDark
                ? "opacity-0 rotate-180 scale-0"
                : "opacity-100 rotate-0 scale-100 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] animate-spin"
            }
          `}
          style={{ animationDuration: "20s" }}
        />

        {/* Moon Icon with enhanced animation */}
        <Moon
          className={`
            h-4 w-4 absolute transition-all duration-700 ease-out
            ${
              isDark
                ? "opacity-100 rotate-0 scale-100 text-[#319FE6] drop-shadow-[0_0_4px_rgba(49,159,230,0.8)]"
                : "opacity-0 -rotate-180 scale-0"
            }
          `}
        />
      </span>

      {/* Enhanced glow effect */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></span>

      {/* Ripple effect on click */}
      <span className="absolute inset-0 rounded-full opacity-0 group-active:opacity-30 group-active:animate-ping bg-white/50 transition-opacity duration-300"></span>

      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
