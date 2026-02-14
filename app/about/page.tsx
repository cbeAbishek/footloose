import { AboutHero } from "@/components/about/hero-section";
import { CompanyHistory } from "@/components/about/company-history";
import { MissionVision } from "@/components/about/mission-vision";
import { CoreValues } from "@/components/about/core-values";
import { Achievements } from "@/components/about/achievements";
import { Divisions } from "@/components/about/divisions";
import { FounderSection } from "@/components/about/founder-section";
import { ScrollProgressIndicator } from "@/components/landing/scroll-progress-indicator";

export const metadata = {
  title: "About Us - Footloose Edwin's Dance Company",
  description:
    "Discover the 33-year journey of Footloose Edwin's Dance Company. From humble beginnings in 1992 to becoming South India's premier dance and entertainment company with 300,000+ students trained and 8,000+ shows performed.",
  keywords: [
    "about footloose",
    "edwin dance company history",
    "coimbatore dance school",
    "dance company story",
    "mr edwin founder",
  ],
  openGraph: {
    title: "About Us - Footloose Edwin's Dance Company",
    description:
      "33 years of excellence in dance education and entertainment. Join our journey from 1992 to today.",
    url: "https://footloose.online/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <ScrollProgressIndicator />
      <AboutHero />
      <CompanyHistory />
      <MissionVision />
      <CoreValues />
      <Achievements />
      {/* <Divisions /> */}
      {/* <FounderSection /> */}
    </main>
  );
}
