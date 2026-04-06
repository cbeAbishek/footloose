"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  type Seat,
  type GroupedRow,
  SECTION_META,
  generateVenueSeats,
  groupSeatsByRow,
} from "./venue-data";

/* ── Styles ── */

function seatStyle(seat: Seat, isSelected: boolean): React.CSSProperties {
  const meta = SECTION_META[seat.section];
  const booked = seat.status === "booked";
  const blocked = seat.status === "blocked";
  const unavailable = booked || blocked;

  if (isSelected) {
    return {
      background: `linear-gradient(135deg, ${meta.color}, ${meta.accentColor})`,
      border: `2px solid ${meta.color}`,
      color: "#000",
      boxShadow: `0 0 14px ${meta.color}66`,
      cursor: "pointer",
    };
  }
  if (unavailable) {
    return {
      background: "rgba(220,40,40,0.12)",
      border: "1px solid rgba(220,40,40,0.25)",
      color: "rgba(220,40,40,0.5)",
      cursor: "not-allowed",
      textDecoration: "line-through",
    };
  }
  return {
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${meta.color}33`,
    color: `${meta.color}cc`,
    cursor: "pointer",
  };
}

/* ── Single Seat Button ── */

function SeatButton({
  seat,
  isSelected,
  onSelect,
}: {
  seat: Seat;
  isSelected: boolean;
  onSelect: (seat: Seat) => void;
}) {
  const unavailable = seat.status !== "available";
  return (
    <motion.button
      whileHover={!unavailable ? { scale: 1.15, y: -2 } : {}}
      whileTap={!unavailable ? { scale: 0.9 } : {}}
      onClick={() => !unavailable && onSelect(seat)}
      disabled={unavailable}
      title={
        unavailable
          ? `${seat.id} – ${seat.personName || "Booked"}`
          : `${seat.id} – ₹${seat.price}`
      }
      className="seat-btn rounded-md font-bold flex items-center justify-center transition-all duration-200 relative"
      style={seatStyle(seat, isSelected)}
    >
      {unavailable ? "✕" : seat.number}
    </motion.button>
  );
}

/* ── Section Label ── */

function SectionLabel({
  label,
  color,
  price,
  description,
}: {
  label: string;
  color: string;
  price: number;
  description: string;
  type: string;
}) {
  return (
    <div className="flex items-center justify-between mb-3 px-1">
      <div>
        <h4 className="text-xs sm:text-sm font-bold" style={{ color }}>
          {label}
        </h4>
        <p className="text-[9px] sm:text-[10px] text-gray-500">{description}</p>
      </div>
      <div
        className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold shrink-0"
        style={{
          background: `${color}15`,
          color,
          border: `1px solid ${color}30`,
        }}
      >
        ₹{price.toLocaleString("en-IN")}
      </div>
    </div>
  );
}

/* ── Row Block (left | aisle | right) ── */

function SeatRow({
  row,
  selectedId,
  onSelect,
  showLabel = true,
}: {
  row: GroupedRow;
  selectedId: string | null;
  onSelect: (seat: Seat) => void;
  showLabel?: boolean;
}) {
  const meta = SECTION_META[row.section];
  return (
    <div className="flex items-center justify-center gap-[2px] sm:gap-1 my-[3px] sm:my-1">
      {/* Group label - left */}
      {showLabel && (
        <span
          className="text-[7px] sm:text-[10px] font-semibold w-7 sm:w-12 text-right opacity-60 shrink-0"
          style={{ color: meta.color }}
        >
          {row.group}
        </span>
      )}
      {/* Left seats */}
      <div className="flex gap-[2px] sm:gap-[3px] justify-end">
        {row.left.map((s) => (
          <SeatButton key={s.id} seat={s} isSelected={selectedId === s.id} onSelect={onSelect} />
        ))}
      </div>
      {/* Central Aisle / Ramp */}
      <div
        className="flex flex-col items-center justify-center mx-[3px] sm:mx-3 shrink-0"
        style={{ minWidth: 8 }}
      >
        <div
          className="w-px h-4 sm:h-6"
          style={{ background: "rgba(255,215,0,0.15)" }}
        />
      </div>
      {/* Right seats */}
      <div className="flex gap-[2px] sm:gap-[3px]">
        {row.right.map((s) => (
          <SeatButton key={s.id} seat={s} isSelected={selectedId === s.id} onSelect={onSelect} />
        ))}
      </div>
      {/* Group label - right */}
      {showLabel && (
        <span
          className="text-[7px] sm:text-[10px] font-semibold w-7 sm:w-12 opacity-60 shrink-0"
          style={{ color: meta.color }}
        >
          {row.group}
        </span>
      )}
    </div>
  );
}

/* ── Stage Visual ── */

function StageVisual() {
  return (
    <div className="w-full flex flex-col items-center mb-4 sm:mb-6">
      <motion.div
        className="relative w-4/5 sm:w-full max-w-md h-10 sm:h-12 rounded-t-[100%] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,215,0,0.18), rgba(255,215,0,0.04))",
          border: "1px solid rgba(255,215,0,0.15)",
          borderBottom: "2px solid rgba(255,215,0,0.3)",
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,215,0,0.1), transparent)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <span
          className="text-[9px] sm:text-[11px] uppercase tracking-[0.3em] font-semibold relative z-10"
          style={{ color: "rgba(255,215,0,0.7)" }}
        >
          ✦ Stage ✦
        </span>
      </motion.div>
      <div
        className="w-3/4 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent)",
        }}
      />
    </div>
  );
}

/* ── Visitor Section ── */

function VisitorSection() {
  return (
    <motion.div
      className="mt-3 sm:mt-4 rounded-xl p-3 sm:p-4 text-center"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px dashed rgba(255,255,255,0.08)",
      }}
    >
      <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-widest">
        CH-Visitor · Free Seating
      </p>
      <p className="text-[9px] sm:text-[10px] text-gray-600 mt-1">
        Open allocation — seats will be assigned later
      </p>
    </motion.div>
  );
}

/* ── Legend ── */

function Legend() {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 px-2">
      {[
        { bg: "rgba(255,255,255,0.04)", border: "rgba(255,215,0,0.3)", label: "Available", text: "1" },
        { bg: "linear-gradient(135deg, #FFD700, #FFA500)", border: "#FFD700", label: "Selected", text: "1" },
        { bg: "rgba(220,40,40,0.12)", border: "rgba(220,40,40,0.25)", label: "Booked", text: "✕" },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-1.5">
          <div
            className="seat-btn-legend rounded-md flex items-center justify-center font-bold"
            style={{
              background: item.bg,
              border: `1px solid ${item.border}`,
              color: item.label === "Selected" ? "#000" : item.label === "Booked" ? "rgba(220,40,40,0.5)" : "rgba(255,215,0,0.8)",
            }}
          >
            {item.text}
          </div>
          <span className="text-[9px] sm:text-[10px] text-gray-400">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN VENUE MAP COMPONENT
   ══════════════════════════════════════════════ */

export default function VenueMap({
  selectedSeatId,
  onSeatSelect,
}: {
  selectedSeatId: string | null;
  onSeatSelect: (seat: Seat) => void;
}) {
  const allSeats = useMemo(() => generateVenueSeats(), []);
  const grouped = useMemo(() => groupSeatsByRow(allSeats), [allSeats]);

  // Group rows by section
  const fedRows = grouped.filter((r) => r.section === "FED");
  const flRows = grouped.filter((r) => r.section === "FL");
  const chRows = grouped.filter((r) => r.section === "CH");

  return (
    <div id="seat-section" className="w-full">
      {/* Responsive seat size styles */}
      <style>{`
        .seat-btn {
          width: 24px; height: 22px; min-width: 24px;
          font-size: 8px;
        }
        .seat-btn-legend {
          width: 18px; height: 16px;
          font-size: 7px;
        }
        @media (min-width: 480px) {
          .seat-btn {
            width: 28px; height: 26px; min-width: 28px;
            font-size: 9px;
          }
          .seat-btn-legend {
            width: 20px; height: 18px;
            font-size: 8px;
          }
        }
        @media (min-width: 640px) {
          .seat-btn {
            width: 32px; height: 28px; min-width: 32px;
            font-size: 10px;
          }
          .seat-btn-legend {
            width: 22px; height: 20px;
            font-size: 9px;
          }
        }
        @media (min-width: 1024px) {
          .seat-btn {
            width: 36px; height: 30px; min-width: 36px;
            font-size: 11px;
          }
        }
      `}</style>

      {/* Outer container */}
      <div
        className="relative rounded-2xl p-3 sm:p-6 overflow-x-auto"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,215,0,0.03) 0%, rgba(0,0,0,0.4) 100%)",
          border: "1px solid rgba(255,215,0,0.08)",
        }}
      >
        {/* Aisle label */}
        <div className="hidden sm:flex justify-center mb-2">
          <span className="text-[9px] uppercase tracking-[0.25em] text-gray-600 font-medium">
            ← Left Block &nbsp;│&nbsp; Central Aisle &nbsp;│&nbsp; Right Block →
          </span>
        </div>

        <StageVisual />

        {/* ── FED SECTION — 2 rows of 5+5 sofas ── */}
        <div className="mb-4 sm:mb-6">
          <SectionLabel {...SECTION_META.FED} />
          {fedRows.map((row) => (
            <SeatRow
              key={row.group}
              row={row}
              selectedId={selectedSeatId}
              onSelect={onSeatSelect}
            />
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-1/2 h-px mx-auto mb-3 sm:mb-5"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,215,0,0.12), transparent)",
          }}
        />

        {/* ── FL SECTION ── */}
        <div className="mb-4 sm:mb-6">
          <SectionLabel {...SECTION_META.FL} />
          {flRows.map((row) => (
            <SeatRow
              key={row.group}
              row={row}
              selectedId={selectedSeatId}
              onSelect={onSeatSelect}
            />
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-1/2 h-px mx-auto mb-3 sm:mb-5"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,215,0,0.12), transparent)",
          }}
        />

        {/* Ramp label */}
        <div className="flex justify-center mb-2">
          <span
            className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-medium px-2 sm:px-3 py-0.5 rounded-full"
            style={{
              color: "rgba(255,215,0,0.4)",
              background: "rgba(255,215,0,0.04)",
              border: "1px solid rgba(255,215,0,0.08)",
            }}
          >
            ↕ Ramp ↕
          </span>
        </div>

        {/* ── CH SECTION ── */}
        <div className="mb-3 sm:mb-4">
          <SectionLabel {...SECTION_META.CH} />
          {chRows.map((row) => (
            <SeatRow
              key={row.group}
              row={row}
              selectedId={selectedSeatId}
              onSelect={onSeatSelect}
            />
          ))}
        </div>

        {/* ── VISITOR ── */}
        <VisitorSection />

        {/* Legend */}
        <Legend />
      </div>
    </div>
  );
}
