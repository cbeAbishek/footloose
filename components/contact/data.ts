import { ContactLocation, FAQCategory } from "./types";

export const contactLocations: ContactLocation[] = [
  {
    id: "rs-puram",
    name: "R.S. Puram Center (Main Branch)",
    address: "123 Avinashi Road, R.S. Puram, Coimbatore - 641002, Tamil Nadu",
    phone: "+91 9842222467",
    email: "contact@footloose.online",
    workingHours: {
      weekdays: "Monday - Friday: 6:00 AM - 9:00 PM",
      weekends: "Saturday - Sunday: 7:00 AM - 8:00 PM",
    },
    coordinates: {
      lat: 11.0168,
      lng: 76.9558,
    },
  },
  //   {
  //     id: "ramanathapuram",
  //     name: "Ramanathapuram Branch",
  //     address: "456 Sathy Road, Ramanathapuram, Coimbatore - 641045, Tamil Nadu",
  //     phone: "+91 9842222467",
  //     email: "ramanathapuram@footloose.online",
  //     workingHours: {
  //       weekdays: "Monday - Friday: 6:30 AM - 8:30 PM",
  //       weekends: "Saturday - Sunday: 7:00 AM - 7:00 PM",
  //     },
  //     coordinates: {
  //       lat: 11.0510,
  //       lng: 76.9634,
  //     },
  //   },
];

export const faqCategories: FAQCategory[] = [
  {
    id: "classes",
    name: "Classes & Enrollment",
    icon: "GraduationCap",
    items: [
      {
        id: "classes-1",
        category: "classes",
        question: "What age groups do you offer classes for?",
        answer:
          "We offer classes for all age groups starting from 4 years old to adults. Our programs include Kids Dance (4-12 years), Teen Programs (13-18 years), Adult Classes (18+), and Senior Wellness programs (50+). Each program is designed with age-appropriate choreography and fitness levels.",
        order: 1,
      },
      {
        id: "classes-2",
        category: "classes",
        question: "How do I register for a class?",
        answer:
          "You can register online through our Classes page, visit us in person at either of our branches, or call us directly. We recommend booking a trial class first to experience our teaching methodology. Registration requires basic details and advance payment for the first month.",
        order: 2,
      },
      {
        id: "classes-3",
        category: "classes",
        question: "What dance styles do you teach?",
        answer:
          "We specialize in Western Contemporary, Bollywood, Classical Indian (Bharatanatyam, Kathak), Hip Hop, Salsa, Folk, and our signature Chair-Co-Cise wellness program. We also offer fusion styles and custom choreography for special occasions.",
        order: 3,
      },
      {
        id: "classes-4",
        category: "classes",
        question: "Do you offer trial classes?",
        answer:
          "Yes! We offer one complimentary trial class for new students. This allows you to experience our teaching style, meet the instructors, and assess if the program suits your goals before committing to a full course.",
        order: 4,
      },
    ],
  },
  {
    id: "costumes",
    name: "Costume Rentals",
    icon: "Shirt",
    items: [
      {
        id: "costumes-1",
        category: "costumes",
        question: "How far in advance should I book costumes?",
        answer:
          "We recommend booking at least 2-3 weeks in advance for regular events and 4-6 weeks for large-scale productions or wedding season (November-February). This ensures availability and time for any necessary alterations.",
        order: 1,
      },
      {
        id: "costumes-2",
        category: "costumes",
        question: "What is your pricing structure?",
        answer:
          "Rental prices vary by costume type, complexity, and rental duration. Basic costumes start at ₹500/day, premium ensembles at ₹2,000/day, and custom designer pieces from ₹5,000/day. We offer discounts for bulk bookings (10+ costumes) and extended rentals.",
        order: 2,
      },
      {
        id: "costumes-3",
        category: "costumes",
        question: "Do you provide alterations and fittings?",
        answer:
          "Yes, we offer complimentary basic alterations for all rentals. We schedule fitting appointments 1 week before your event to ensure perfect sizing. Rush alterations may incur additional charges.",
        order: 3,
      },
      {
        id: "costumes-4",
        category: "costumes",
        question: "What is your damage and cleaning policy?",
        answer:
          "Normal wear and tear is included. We handle professional cleaning after each rental (no extra charge). Significant damage, stains, or missing accessories may result in repair charges or replacement costs based on the damage assessment.",
        order: 4,
      },
    ],
  },
  {
    id: "events",
    name: "Event Bookings",
    icon: "Calendar",
    items: [
      {
        id: "events-1",
        category: "events",
        question: "What types of events do you cater to?",
        answer:
          "We provide choreography and performance services for corporate annual days, college festivals, weddings (sangeet, reception), fashion shows, cultural events, school competitions, brand launches, and private celebrations. Each event is customized to your theme and requirements.",
        order: 1,
      },
      {
        id: "events-2",
        category: "events",
        question: "How do you price event bookings?",
        answer:
          "Pricing depends on event type, duration, number of performers, choreography complexity, rehearsal requirements, and travel distance. We provide detailed quotations after understanding your vision. Typical packages start from ₹25,000 for small events to ₹5,00,000+ for large productions.",
        order: 2,
      },
      {
        id: "events-3",
        category: "events",
        question: "Do you handle technical production (sound, lights, stage)?",
        answer:
          "Yes, we offer full-service event production including sound systems, stage lighting, LED backdrops, props, and technical crew. We can also coordinate with your existing vendors for seamless integration.",
        order: 3,
      },
      {
        id: "events-4",
        category: "events",
        question: "How many rehearsals are required?",
        answer:
          "For professional performances, we typically require 8-12 rehearsals depending on choreography complexity. For participant-based events (like corporate or wedding groups), we customize the rehearsal schedule based on your team's availability and learning pace.",
        order: 4,
      },
    ],
  },
  {
    id: "payments",
    name: "Payments & Refunds",
    icon: "CreditCard",
    items: [
      {
        id: "payments-1",
        category: "payments",
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, UPI (Google Pay, PhonePe, Paytm), bank transfers (NEFT/RTGS/IMPS), credit/debit cards, and online payment gateways. For corporate bookings, we also accept cheques and provide GST invoices.",
        order: 1,
      },
      {
        id: "payments-2",
        category: "payments",
        question: "Is there a registration or security deposit?",
        answer:
          "Class registration requires first month's fee. Costume rentals require a refundable security deposit (₹2,000-₹10,000 based on costume value). Event bookings require 30-50% advance payment. Security deposits are refunded within 7 working days after item return.",
        order: 2,
      },
      {
        id: "payments-3",
        category: "payments",
        question: "What is your cancellation and refund policy?",
        answer:
          "Classes: Refund available if cancelled within 3 days of enrollment. Costumes: 50% refund if cancelled 15+ days before event, no refund within 7 days. Events: Cancellation charges apply as per contract terms (typically 25-50% of total fee based on notice period).",
        order: 3,
      },
      {
        id: "payments-4",
        category: "payments",
        question: "Do you offer installment plans?",
        answer:
          "Yes, for annual class packages and large event bookings exceeding ₹50,000, we offer flexible EMI options (3-6 months) with zero interest. Terms and conditions apply.",
        order: 4,
      },
    ],
  },
  {
    id: "policies",
    name: "Policies & Guidelines",
    icon: "FileText",
    items: [
      {
        id: "policies-1",
        category: "policies",
        question: "What should I bring to my first class?",
        answer:
          "Wear comfortable workout clothes, bring a water bottle, small towel, and appropriate footwear (jazz shoes, sneakers, or dance shoes based on your class type). Hair should be tied back. Avoid heavy jewelry and perfumes.",
        order: 1,
      },
      {
        id: "policies-2",
        category: "policies",
        question: "Can I make up missed classes?",
        answer:
          "Yes, if you inform us 24 hours in advance, you can attend a makeup class within the same month in a parallel batch. Unutilized classes do not carry forward to the next month. Emergency absences are handled case-by-case.",
        order: 2,
      },
      {
        id: "policies-3",
        category: "policies",
        question: "Are parents allowed to watch classes?",
        answer:
          "For kids' classes (ages 4-8), parents may observe the first class. Beyond that, we encourage independence to help children focus better. We conduct monthly open houses where parents can watch progress demonstrations.",
        order: 3,
      },
      {
        id: "policies-4",
        category: "policies",
        question: "Do you have COVID-19 safety protocols?",
        answer:
          "Yes, we maintain sanitization protocols, temperature checks, and adequate ventilation. Class sizes are managed for comfortable spacing. We follow government guidelines and adapt our policies as regulations evolve.",
        order: 4,
      },
    ],
  },
  {
    id: "general",
    name: "General Questions",
    icon: "HelpCircle",
    items: [
      {
        id: "general-1",
        category: "general",
        question: "Do you offer online/virtual classes?",
        answer:
          "Yes, we offer live virtual classes via Zoom for select programs including Chair-Co-Cise, Bollywood, and Contemporary. Recorded sessions are available for enrolled students. However, we recommend in-person learning for technique-intensive styles.",
        order: 1,
      },
      {
        id: "general-2",
        category: "general",
        question: "Can I switch between branches?",
        answer:
          "Yes, students can attend classes at either branch based on availability and schedule. Inform the front desk in advance to ensure seat reservation in the desired batch.",
        order: 2,
      },
      {
        id: "general-3",
        category: "general",
        question: "Do you provide certificates?",
        answer:
          "Yes, we provide certificates of completion for annual courses, workshop participants, and competition achievements. Certificates are signed by our founder Edwin and include course details and performance grades.",
        order: 3,
      },
      {
        id: "general-4",
        category: "general",
        question: "How can I stay updated on events and announcements?",
        answer:
          "Follow us on Instagram (@footloose_edwin), Facebook, and subscribe to our newsletter. We also send WhatsApp updates to enrolled students and maintain an active blog on our website with event highlights and dance tips.",
        order: 4,
      },
    ],
  },
];
