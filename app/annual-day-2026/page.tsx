"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VenueMap from "./VenueMap";
import { type Seat, SECTION_META } from "./venue-data";

/* ──────────────────────────────────────────────
   CONSTANTS
   ────────────────────────────────────────────── */

const EVENT_DATE = new Date("2026-04-12T17:00:00+05:30");
const WHATSAPP_NUMBER = "919500885608";
const VENUE_NAME = "Hindustan Concert Ground";
const VENUE_MAP_LINK =
  "https://maps.app.goo.gl/PJStNrJ18h5PuxR28";

/* category list for the pricing cards section */
const PRICE_CARDS = Object.values(SECTION_META).filter((s) => s.price > 0);

/* ──────────────────────────────────────────────
   PARTICLE BACKGROUND (canvas‑based)
   ────────────────────────────────────────────── */

function ParticleCanvas() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        hue: 40 + Math.random() * 20, // gold range
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 55%, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(45, 70%, 50%, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

/* ──────────────────────────────────────────────
   COUNTDOWN TIMER
   ────────────────────────────────────────────── */

function useCountdown(target: Date) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, isPast: diff === 0 };
}

function CountdownBlock({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center text-2xl sm:text-3xl font-bold"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,215,0,0.15), rgba(0,0,0,0.6))",
          border: "1px solid rgba(255,215,0,0.3)",
          color: "#FFD700",
          boxShadow: "0 0 20px rgba(255,215,0,0.1)",
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-xs uppercase tracking-widest text-amber-400/70">
        {label}
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────
   AI GRID ANIMATION (decorative SVG)
   ────────────────────────────────────────────── */

function AIGridDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Horizontal scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)",
        }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      {/* Grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="ai-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#FFD700"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ai-grid)" />
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────
   GLOWING ORB DECORATION
   ────────────────────────────────────────────── */

function GlowingOrbs() {
  return (
    <>
      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,165,0,0.05) 0%, transparent 70%)",
          bottom: "5%",
          left: "-8%",
        }}
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

/* ──────────────────────────────────────────────
   BOOKING FORM
   ────────────────────────────────────────────── */

interface BookingFormData {
  name: string;
  phone: string;
  studentName: string;
  batchName: string;
  count: number;
}

interface BookingCategory {
  label: string;
  price: number;
  color: string;
}

function BookingForm({
  selectedSeat,
  category,
  onClose,
}: {
  selectedSeat: string;
  category: BookingCategory;
  onClose: () => void;
}) {
  const [form, setForm] = useState<BookingFormData>({
    name: "",
    phone: "",
    studentName: "",
    batchName: "",
    count: 1,
  });

  const totalPrice = category.price * form.count;

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `🎭 *ANNUALE 2026 – Ticket Booking*\n\n` +
        `👤 Name: ${form.name}\n` +
        `📱 Phone: ${form.phone}\n` +
        `🎓 Student Name: ${form.studentName}\n` +
        (form.batchName ? `📚 Batch: ${form.batchName}\n` : "") +
        `💺 Seat: ${selectedSeat} (${category.label})\n` +
        `🎟️ Tickets: ${form.count}\n` +
        `💰 Total: ₹${totalPrice.toLocaleString("en-IN")}\n\n` +
        `Please confirm my booking. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const isValid = form.name.trim() && form.phone.trim() && form.studentName.trim();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #111 0%, #0a0a0a 100%)",
          border: "1px solid rgba(255,215,0,0.2)",
          boxShadow: "0 0 60px rgba(255,215,0,0.08)",
        }}
      >
        {/* Header */}
        <div
          className="p-6 text-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,215,0,0.1), transparent)",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-amber-400/60 hover:text-amber-400 transition-colors"
            style={{ background: "rgba(255,215,0,0.08)" }}
          >
            ✕
          </button>
          {/* <motion.div
            className="text-3xl mb-2"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            🎟️
          </motion.div> */}
          <h3
            className="text-xl font-bold"
            style={{ color: "#FFD700" }}
          >
            Book Your Ticket
          </h3>
          <p className="text-amber-400/60 text-sm mt-1">
            {selectedSeat} • {category.label}
          </p>
          <div
            className="inline-block mt-2 px-4 py-1 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(255,215,0,0.12)",
              color: "#FFD700",
              border: "1px solid rgba(255,215,0,0.2)",
            }}
          >
            ₹{category.price.toLocaleString("en-IN")} / ticket
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          {[
            {
              label: "Full Name",
              key: "name" as const,
              type: "text",
              placeholder: "Enter your full name",
              icon: "👤",
              required: true,
            },
            {
              label: "Phone Number",
              key: "phone" as const,
              type: "tel",
              placeholder: "+91 XXXXX XXXXX",
              icon: "📱",
              required: true,
            },
            {
              label: "Student Name",
              key: "studentName" as const,
              type: "text",
              placeholder: "Enter student name",
              icon: "🎓",
              required: true,
            },
            {
              label: "Batch Name (Optional)",
              key: "batchName" as const,
              type: "text",
              placeholder: "e.g. Batch A, Evening Batch",
              icon: "📚",
              required: false,
            },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-xs uppercase tracking-wider text-amber-400/60 mb-1.5">
                {field.icon} {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key] as string}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [field.key]: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-gray-600 outline-none transition-all focus:ring-2"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,215,0,0.1)",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(255,215,0,0.4)";
                  e.target.style.boxShadow = "0 0 15px rgba(255,215,0,0.05)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,215,0,0.1)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>
          ))}

          {/* Ticket count */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-amber-400/60 mb-1.5">
             Number of Tickets
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setForm((f) => ({ ...f, count: Math.max(1, f.count - 1) }))
                }
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold text-amber-400 transition-transform active:scale-90"
                style={{
                  background: "rgba(255,215,0,0.08)",
                  border: "1px solid rgba(255,215,0,0.15)",
                }}
              >
                −
              </button>
              <span
                className="text-2xl font-bold min-w-[3rem] text-center"
                style={{ color: "#FFD700" }}
              >
                {form.count}
              </span>
              <button
                onClick={() =>
                  setForm((f) => ({ ...f, count: Math.min(10, f.count + 1) }))
                }
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold text-amber-400 transition-transform active:scale-90"
                style={{
                  background: "rgba(255,215,0,0.08)",
                  border: "1px solid rgba(255,215,0,0.15)",
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Total */}
          <div
            className="flex items-center justify-between p-4 rounded-xl"
            style={{
              background: "rgba(255,215,0,0.06)",
              border: "1px solid rgba(255,215,0,0.12)",
            }}
          >
            <span className="text-sm text-amber-400/70">Total Amount</span>
            <span
              className="text-2xl font-bold"
              style={{ color: "#FFD700" }}
            >
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsAppRedirect}
            disabled={!isValid}
            className="w-full py-4 rounded-xl text-black font-bold text-base uppercase tracking-wider transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{
              background: isValid
                ? "linear-gradient(135deg, #FFD700, #FFA500)"
                : "rgba(255,215,0,0.2)",
              boxShadow: isValid
                ? "0 4px 30px rgba(255,215,0,0.3)"
                : "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book via WhatsApp
          </motion.button>
          <p className="text-center text-xs text-gray-600">
            You&#39;ll be redirected to WhatsApp with your booking details
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* SeatCard and StageVisual moved to VenueMap.tsx */

/* ──────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ────────────────────────────────────────────── */

export default function AnnualDay2026() {
  const countdown = useCountdown(EVENT_DATE);
  const [selectedSeatObj, setSelectedSeatObj] = useState<Seat | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const selectedCategory: BookingCategory | null = useMemo(() => {
    if (!selectedSeatObj) return null;
    const meta = SECTION_META[selectedSeatObj.section];
    return { label: meta.label, price: meta.price, color: meta.color };
  }, [selectedSeatObj]);

  const handleProceedToBook = () => {
    if (selectedSeatObj && selectedCategory) {
      setShowBooking(true);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "#050505" }}
    >
      {/* Background effects */}
      <ParticleCanvas />
      <GlowingOrbs />
      <AIGridDecoration />

      {/* ── HERO SECTION ── */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
        {/* Top AI eye decoration */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="relative w-20 h-20 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid rgba(255,215,0,0.3)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full"
              style={{
                border: "1px solid rgba(255,215,0,0.2)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div
              className="absolute inset-4 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,215,0,0.3), transparent)",
              }}
            >
              <motion.div
                className="w-4 h-4 rounded-full"
                style={{ background: "#FFD700" }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div> */}

        {/* FEDSI branding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-2"
        >
          <span
            className="text-xs sm:text-sm uppercase tracking-[0.4em] font-medium"
            style={{ color: "rgba(255,215,0,0.5)" }}
          >
            Footloose Edwin&apos;s Dance Company Presents
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <span
            className="block text-6xl sm:text-8xl md:text-9xl font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #FFD700, #FFA500, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px rgba(255,215,0,0.2))",
            }}
          >
            Annual Day
          </span>
          <motion.span
            className="block text-lg sm:text-xl md:text-2xl font-light tracking-[0.5em] mt-2"
            style={{ color: "rgba(255,215,0,0.6)" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            2 0 2 6
          </motion.span>
        </motion.h1>

        {/* FEDSI badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 mb-4"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,215,0,0.1), rgba(0,0,0,0.5))",
              border: "1px solid rgba(255,215,0,0.2)",
              boxShadow: "0 0 30px rgba(255,215,0,0.05)",
            }}
          >
            {/* <motion.div
              className="w-2 h-2 rounded-full"
              style={{ background: "#FFD700" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            /> */}
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.2em]"
              style={{ color: "#FFD700" }}
            >
              FEDSI
            </span>
            {/* <motion.div
              className="w-2 h-2 rounded-full"
              style={{ background: "#FFD700" }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            /> */}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg sm:text-xl md:text-2xl font-light italic tracking-wide"
          style={{ color: "rgba(255,215,0,0.7)" }}
        >
          &ldquo;The Future is Here&rdquo;
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex gap-4 sm:gap-6"
        >
          <CountdownBlock value={countdown.days} label="Days" />
          <CountdownBlock value={countdown.hours} label="Hours" />
          <CountdownBlock value={countdown.minutes} label="Mins" />
          <CountdownBlock value={countdown.seconds} label="Secs" />
        </motion.div>

        {/* Event info badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm"
            style={{
              background: "rgba(255,215,0,0.06)",
              border: "1px solid rgba(255,215,0,0.12)",
              color: "rgba(255,215,0,0.8)",
            }}
          >
            <span></span>
            <span className="font-semibold">12th April 2026</span>
            <span className="text-amber-400/40">|</span>
            <span>5:00 PM Onwards</span>
          </div>
        </motion.div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-4 flex flex-col items-center gap-3"
        >
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: "rgba(255,215,0,0.6)" }}
          >
            
            <span>{VENUE_NAME}</span>
          </div>
          <motion.a
            href={VENUE_MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all"
            style={{
              background: "rgba(255,215,0,0.1)",
              border: "1px solid rgba(255,215,0,0.2)",
              color: "#FFD700",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Get Location
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
            style={{ border: "1px solid rgba(255,215,0,0.2)" }}
          >
            <motion.div
              className="w-1.5 h-3 rounded-full"
              style={{ background: "rgba(255,215,0,0.4)" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── TICKET / SEAT SELECTION SECTION ── */}
      <section className="relative z-10 px-4 py-20 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span
            className="text-xs uppercase tracking-[0.3em] font-medium"
            style={{ color: "rgba(255,215,0,0.4)" }}
          >
            Secure Your Spot
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mt-2"
            style={{
              background: "linear-gradient(135deg, #FFD700, #FFA500)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Venue Seating Map
          </h2>
          <p
            className="mt-3 max-w-lg mx-auto text-sm"
            style={{ color: "rgba(255,215,0,0.4)" }}
          >
            Tap any seat to select it, then proceed to book
          </p>
        </motion.div>

        {/* Interactive Venue Map */}
        <VenueMap
          selectedSeatId={selectedSeatObj?.id || null}
          onSeatSelect={(seat) =>
            setSelectedSeatObj(
              selectedSeatObj?.id === seat.id ? null : seat
            )
          }
        />

        {/* Proceed button */}
        <AnimatePresence>
          {selectedSeatObj && selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-10 text-center"
            >
              <div
                className="inline-flex flex-col items-center gap-4 p-6 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,215,0,0.08), rgba(0,0,0,0.4))",
                  border: "1px solid rgba(255,215,0,0.15)",
                  boxShadow: "0 0 40px rgba(255,215,0,0.05)",
                }}
              >
                <p className="text-sm text-amber-400/60">
                  Selected:{" "}
                  <span className="font-bold text-amber-400">
                    {selectedSeatObj.id}
                  </span>{" "}
                  •{" "}
                  <span style={{ color: selectedCategory.color }}>
                    {selectedCategory.label}
                  </span>
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleProceedToBook}
                  className="px-10 py-4 rounded-xl text-black font-bold text-base uppercase tracking-wider flex items-center gap-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFD700, #FFA500)",
                    boxShadow: "0 4px 30px rgba(255,215,0,0.3)",
                  }}
                >
                  Book {selectedSeatObj.id} – ₹
                  {selectedCategory.price.toLocaleString("en-IN")}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── PRICING OVERVIEW ── */}
      <section className="relative z-10 px-4 py-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-black"
            style={{
              background: "linear-gradient(135deg, #FFD700, #FFA500)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ticket Pricing
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PRICE_CARDS.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl p-6 text-center overflow-hidden group cursor-pointer"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(0,0,0,0.4))",
                border: `1px solid ${cat.color}22`,
              }}
              onClick={() => {
                document
                  .getElementById("seat-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${cat.color}08, transparent 70%)`,
                }}
              />
              {i === 0 && (
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase"
                  style={{
                    background: "rgba(255,215,0,0.15)",
                    color: "#FFD700",
                    border: "1px solid rgba(255,215,0,0.2)",
                  }}
                >
                  VIP
                </div>
              )}
              <div
                className="text-3xl font-black mb-2"
                style={{ color: cat.color }}
              >
                ₹{cat.price.toLocaleString("en-IN")}
              </div>
              <div
                className="text-sm font-semibold mb-1"
                style={{ color: `${cat.color}cc` }}
              >
                {cat.label}
              </div>
              <div className="text-xs text-gray-600">
                {cat.description}
              </div>
              <motion.div
                className="mt-4 text-xs font-semibold uppercase tracking-wider"
                style={{ color: cat.color }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Select →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FOOTER BRANDING ── */}
      <section className="relative z-10 py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div
            className="w-16 h-px mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)",
            }}
          />
          <p
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: "rgba(255,215,0,0.3)" }}
          >
            Footloose Edwin&apos;s Dance Company
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,215,0,0.15)" }}
          >
            ANNUALE 2026 • FEDSI • &ldquo;The Future is Here&rdquo;
          </p>
        </motion.div>
      </section>

      {/* ── BOOKING MODAL ── */}
      <AnimatePresence>
        {showBooking && selectedSeatObj && selectedCategory && (
          <BookingForm
            selectedSeat={selectedSeatObj.id}
            category={selectedCategory}
            onClose={() => setShowBooking(false)}
          />
        )}
      </AnimatePresence>

      {/* Floating CTA for mobile */}
      <AnimatePresence>
        {selectedSeatObj && selectedCategory && !showBooking && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:hidden"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(0,0,0,0.95))",
            }}
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleProceedToBook}
              className="w-full py-3.5 rounded-xl text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg, #FFD700, #FFA500)",
                boxShadow: "0 -4px 30px rgba(255,215,0,0.2)",
              }}
            >
              🎟️ Book {selectedSeatObj.id} – ₹
              {selectedCategory.price.toLocaleString("en-IN")}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
