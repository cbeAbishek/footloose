import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ANNUALE 2026 | FEDSI – The Future is Here",
  description:
    "Join Footloose Edwin's Dance Company for ANNUALE 2026 – an electrifying annual dance event powered by FEDSI. 12th April 2026, 5 PM onwards. Book your tickets now!",
  openGraph: {
    title: "ANNUALE 2026 | FEDSI – The Future is Here",
    description:
      "The ultimate annual dance event by Footloose Edwin's Dance Company. Get your VIP, Premium, Standard, or Visitor pass now!",
    type: "website",
  },
};

export default function AnnualDayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
