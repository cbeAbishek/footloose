/* ──────────────────────────────────────────────
   VENUE SEAT DATA MODEL
   Ready for future booking: each seat maps to a
   number and can be assigned a person name.
   ────────────────────────────────────────────── */

export type SeatStatus = "available" | "booked" | "blocked";

export interface Seat {
  id: string;
  section: "FED" | "FL" | "CH" | "VISITOR";
  group: string;       // e.g. "FED-1", "FL1", "CH-A"
  side: "left" | "right";
  number: number;       // seat number within the side
  status: SeatStatus;
  personName: string | null;
  price: number;
}

export interface SectionMeta {
  id: string;
  label: string;
  type: "sofa" | "round-table" | "chair" | "visitor";
  price: number;
  color: string;
  accentColor: string;
  description: string;
}

export const SECTION_META: Record<string, SectionMeta> = {
  FED: {
    id: "FED",
    label: "FED Series – VIP Sofa",
    type: "sofa",
    price: 5000,
    color: "#FFD700",
    accentColor: "#FFA500",
    description: "Front-row VIP sofa seating",
  },
  FL: {
    id: "FL",
    label: "FL Series – Round Table",
    type: "round-table",
    price: 3000,
    color: "#C0A050",
    accentColor: "#D4A855",
    description: "Premium round table seating",
  },
  CH: {
    id: "CH",
    label: "CH Series – Chair Seating",
    type: "chair",
    price: 1500,
    color: "#A08040",
    accentColor: "#B89050",
    description: "Standard chair seating",
  },
  VISITOR: {
    id: "VISITOR",
    label: "Visitor – Open Seating",
    type: "visitor",
    price: 0,
    color: "#666",
    accentColor: "#888",
    description: "Free allocation – coming soon",
  },
};

/* ── Seat generation helpers ── */

function makeSeat(
  section: Seat["section"],
  group: string,
  side: "left" | "right",
  number: number,
  price: number,
): Seat {
  return {
    id: `${group}-${side[0].toUpperCase()}-${number}`,
    section,
    group,
    side,
    number,
    status: "available",
    personName: null,
    price,
  };
}

function makeRow(
  section: Seat["section"],
  group: string,
  leftCount: number,
  rightCount: number,
  price: number,
): Seat[] {
  const seats: Seat[] = [];
  for (let i = 1; i <= leftCount; i++) seats.push(makeSeat(section, group, "left", i, price));
  for (let i = 1; i <= rightCount; i++) seats.push(makeSeat(section, group, "right", i, price));
  return seats;
}

function makeSequentialRow(
  section: Seat["section"],
  group: string,
  leftCount: number,
  rightCount: number,
  price: number,
): Seat[] {
  const seats: Seat[] = [];
  for (let i = 1; i <= leftCount; i++) seats.push(makeSeat(section, group, "left", i, price));
  // Right side continues numbering from leftCount+1
  for (let i = 1; i <= rightCount; i++) seats.push(makeSeat(section, group, "right", leftCount + i, price));
  return seats;
}

/* ── Generate all venue seats ── */

/* Sample bookings to demonstrate the system.
   Replace this with real data from your API/JSON later. */
const SAMPLE_BOOKINGS: Record<string, string> = {
  "FED-2-L-5": "Ravi Kumar",
  "FL1-L-1": "Sanjay P",
  "FL1-L-2": "Arjun V",
  "FL1-L-3": "Arjun V",
  "FL1-L-4": "Arjun V",
  "FL1-L-5": "Arjun V",
  "FL1-R-1": "Arjun V",
  "FL1-R-2": "Arjun V",
  "FL1-R-3": "Arjun V",
  "FL1-R-4": "Arjun V",
  "CH-A-L-5": "Raj K",
  "CH-A-L-6": "Raj K",
  "CH-A-L-7": "Raj K",
  "CH-A-L-8": "Raj K",
  "CH-A-R-9": "Sneha T",
};

export function generateVenueSeats(): Seat[] {
  const seats: Seat[] = [];

  // FED — 2 rows, each row has 5 left + 5 right = 20 total sofas
  seats.push(...makeRow("FED", "FED-1", 5, 5, 5000));
  seats.push(...makeRow("FED", "FED-2", 5, 5, 5000));

  // FL — round tables
  // FL1: 10 (L5 + R5), FL2: 8 (L4 + R4), FL3: 10 (L5 + R5), FL4: 8 (L4 + R4)
  seats.push(...makeRow("FL", "FL1", 5, 5, 3000));
  seats.push(...makeRow("FL", "FL2", 4, 4, 3000));
  seats.push(...makeRow("FL", "FL3", 5, 5, 3000));
  seats.push(...makeRow("FL", "FL4", 4, 4, 3000));

  // CH-A through CH-G — 8 left + 8 right, sequential numbering (1-8 | 9-16)
  const chRows = ["A", "B", "C", "D", "E", "F", "G"];
  for (const row of chRows) {
    seats.push(...makeSequentialRow("CH", `CH-${row}`, 8, 8, 1500));
  }

  // Apply sample bookings
  for (const seat of seats) {
    if (SAMPLE_BOOKINGS[seat.id]) {
      seat.status = "booked";
      seat.personName = SAMPLE_BOOKINGS[seat.id];
    }
  }

  return seats;
}

/* ── Utility: group seats by group name and side ── */

export interface GroupedRow {
  group: string;
  section: Seat["section"];
  left: Seat[];
  right: Seat[];
}

export function groupSeatsByRow(seats: Seat[]): GroupedRow[] {
  const map = new Map<string, GroupedRow>();

  for (const s of seats) {
    if (!map.has(s.group)) {
      map.set(s.group, { group: s.group, section: s.section, left: [], right: [] });
    }
    const row = map.get(s.group)!;
    if (s.side === "left") row.left.push(s);
    else row.right.push(s);
  }

  // Sort seats within each side by number
  for (const row of map.values()) {
    row.left.sort((a, b) => a.number - b.number);
    row.right.sort((a, b) => a.number - b.number);
  }

  return Array.from(map.values());
}
