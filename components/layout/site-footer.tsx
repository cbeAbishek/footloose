"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
} from "lucide-react";

import { Container } from "./container";

const linkGroups = [
  {
    title: "Products",
    links: [
      { label: "Dance Programs", href: "/services/dance-class" },
      { label: "Corporate Events", href: "/services/events" },
      { label: "Choreography", href: "/services/choreography" },
      { label: "Costume Rental", href: "/costume-rental" },
    ],
  },
  {
    title: "User Center",
    links: [
      { label: "Student Portal", href: "/portal" },
      { label: "Alumni Network", href: "/alumni" },
      { label: "Contact Support", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Showcase", href: "/services/esp-showcase" },
      { label: "LA Ramp", href: "/services/la-ramp" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms-of-service" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fedsi_official/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Footloose-Edwins-Dance-School/100063675714869/",
    icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/c/eddyedwin",
    icon: Youtube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abishek2005/",
    icon: Linkedin,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+919842222467",
    icon: MessageCircle,
  },
];

export function SiteFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = footerRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-br from-[#f7f9ff] via-[#eef2ff] to-[#e3e8ff] text-slate-900 transition-all duration-700 ease-out dark:border-white/10 dark:from-[#0f0c29] dark:via-[#1b183f] dark:to-[#302b63] dark:text-white ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_top,_rgba(162,169,255,0.25),_transparent_60%)] dark:[background:radial-gradient(circle_at_top,_rgba(120,119,198,0.18),_transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-60 w-60 rounded-full bg-indigo-300/30 blur-3xl dark:bg-purple-500/20" />
      <Container className="relative z-10 flex flex-col gap-12 py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,420px)_minmax(0,1fr)] 2xl:gap-16">
          <div className="space-y-8">
            <div className="space-y-5 text-sm text-slate-700 dark:text-white/70 sm:px-1 lg:px-2">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-40">
                  <Image
                    src="/logo.svg"
                    alt="Footloose"
                    fill
                    priority
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:text-white/60">
                  Footloose
                </p>
              </div>
              <p className="max-w-lg text-base leading-relaxed text-slate-700 dark:text-white/70">
                Footloose Edwin&apos;s Dance Company delivers expressive
                choreography, bespoke productions, and inspiring training
                programs that light up stages across India.
              </p>
              <div className="space-y-3 text-sm">
                <p className="font-medium text-slate-900 dark:text-white">
                  Call
                </p>
                <Link
                  href="tel:+919842222467"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white focus:no-underline focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 active:scale-95 dark:border-white/20 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15 dark:hover:text-white"
                >
                  <span>+91 9842222467</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <nav className="grid grid-cols-1 gap-10 text-sm text-slate-700 dark:text-white/70 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-8 lg:gap-y-8 xl:gap-x-12 xl:gap-y-10 2xl:gap-x-16 2xl:gap-y-12">
            {linkGroups.map((group, groupIndex) => (
              <div
                key={group.title}
                className="flex flex-col gap-5"
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.6s ease-out ${groupIndex * 0.1}s both`
                    : "none",
                }}
              >
                <div className="relative px-1">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800 dark:text-white mb-0.5 lg:text-xs xl:text-sm 2xl:text-sm">
                    {group.title}
                  </p>
                  <div className="h-0.5 w-18 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2.5 lg:w-16 xl:w-20" />
                </div>
                <div className="flex flex-col gap-4 lg:gap-2.5 xl:gap-3">
                  {group.links.map((link, linkIndex) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group relative inline-flex w-full items-center gap-2.5 overflow-visible rounded-xl border border-white/60 bg-gradient-to-r from-white/80 to-white/70 px-3.5 py-3 text-[13px] font-semibold leading-snug text-slate-800 shadow-[0_2px_20px_-8px_rgba(30,41,59,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(99,102,241,0.4)] focus:no-underline focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 active:scale-[0.98] dark:border-white/20 dark:from-white/15 dark:to-white/10 dark:text-white/90 dark:shadow-[0_2px_20px_-8px_rgba(0,0,0,0.5)] dark:hover:from-white/20 dark:hover:to-white/15 dark:hover:shadow-[0_8px_30px_-8px_rgba(139,92,246,0.3)] lg:min-w-[250px] lg:gap-2.5 lg:px-3 lg:py-2.5 lg:text-xs xl:gap-3 xl:px-4 xl:py-3 xl:text-sm 2xl:gap-3.5 2xl:px-5 2xl:py-3.5 2xl:text-[15px]"
                      style={{
                        animation: isVisible
                          ? `fadeInUp 0.5s ease-out ${groupIndex * 0.15 + linkIndex * 0.08}s both`
                          : "none",
                      }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 transition-all duration-500 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl" />
                      <span className="relative flex-1 min-w-0 transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white whitespace-normal break-words hyphens-auto lg:leading-tight xl:leading-snug">
                        {link.label}
                      </span>
                      <span className="relative inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-indigo-500/50 dark:from-indigo-400 dark:to-purple-500 dark:shadow-indigo-400/30 dark:group-hover:shadow-indigo-400/60 lg:h-7 lg:w-7 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9">
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-0.5 lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4 2xl:h-4 2xl:w-4"
                          strokeWidth={2.5}
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>

        <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/60 bg-white/70 px-6 py-6 shadow-lg shadow-indigo-200/30 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-white/5 dark:shadow-black/20 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
              Connect With Us
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-white/70">
              Follow Footloose for behind-the-scenes moments, class drops, and
              live showcases.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/80 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
              >
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="relative z-10 border-t border-slate-200/60 bg-gradient-to-r from-white/60 via-transparent to-white/60 py-4 text-xs text-slate-500/80 dark:border-white/10 dark:from-white/5 dark:via-white/0 dark:to-white/5 dark:text-white/60">
        <Container className="flex justify-center px-4">
          <p className="max-w-full overflow-hidden text-center text-[11px] font-medium text-slate-500/80 leading-tight tracking-wide dark:text-white/60 sm:text-xs whitespace-nowrap">
            © {new Date().getFullYear()} Footloose Edwin&apos;s Dance Company.
            All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
