import { Costume, Accessory } from "./types"

export const costumesData: Costume[] = [
  {
    id: "1",
    name: "Classical Bharatanatyam Set",
    slug: "classical-bharatanatyam",
    category: "classical",
    theme: "South Indian Classical",
    description: "Authentic silk Bharatanatyam costume with intricate zari work, perfect for classical dance performances and arangetrams.",
    images: ["/assets/costumes/bharatanatyam-1.jpg", "/assets/costumes/bharatanatyam-2.jpg", "/assets/1.jpg", "/assets/2.jpg"],
    ageGroup: "all-ages",
    occasion: ["stage-production", "school-event", "festival"],
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    pricePerDay: 1500,
    pricePerWeek: 7000,
    deposit: 3000,
    available: true,
    quantity: 8,
    features: ["Silk fabric", "Handcrafted zari work", "Complete jewelry set", "Traditional makeup guidance included"],
    careInstructions: ["Dry clean only", "Store in cotton bag", "Avoid direct sunlight", "Handle jewelry with care"],
    relatedProps: ["Traditional temple jewelry", "Gajra flowers", "Hand accessories"],
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    name: "Contemporary Fusion Ensemble",
    slug: "contemporary-fusion",
    category: "contemporary",
    theme: "Modern Dance",
    description: "Sleek contemporary outfit combining traditional elements with modern design, ideal for fusion performances and contemporary showcases.",
    images: ["/assets/3.jpg", "/assets/4.jpg", "/assets/5.jpg", "/assets/6.jpg"],
    ageGroup: "teens",
    occasion: ["stage-production", "corporate", "photoshoot"],
    sizes: ["S", "M", "L", "XL"],
    pricePerDay: 1200,
    pricePerWeek: 5500,
    deposit: 2500,
    available: true,
    quantity: 12,
    features: ["Stretchable fabric", "Modern silhouette", "Easy movement", "Machine washable"],
    careInstructions: ["Gentle machine wash", "Air dry", "Iron on low heat", "Store hanging"],
    relatedProps: ["Modern accessories", "Statement jewelry", "Contemporary props"],
    createdAt: "2024-02-20"
  },
  {
    id: "3",
    name: "Rajasthani Folk Dance Attire",
    slug: "rajasthani-folk",
    category: "folk",
    theme: "Rajasthani Culture",
    description: "Vibrant Rajasthani costume with mirror work and traditional embroidery, perfect for Ghoomar and other folk dance performances.",
    images: ["/assets/7.jpg", "/assets/8.jpg", "/assets/9.jpg", "/assets/10.jpg"],
    ageGroup: "all-ages",
    occasion: ["festival", "wedding", "school-event"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    pricePerDay: 1000,
    pricePerWeek: 4500,
    deposit: 2000,
    available: true,
    quantity: 15,
    features: ["Mirror work", "Vibrant colors", "Traditional jewelry", "Bandhani dupatta"],
    careInstructions: ["Hand wash recommended", "Dry clean for best results", "Iron with cloth layer", "Store in cool place"],
    relatedProps: ["Rajasthani jewelry", "Matka prop", "Colorful bangles"],
    createdAt: "2024-03-10"
  },
  {
    id: "4",
    name: "Western Jazz & Hip-Hop Set",
    slug: "western-jazz-hiphop",
    category: "western",
    theme: "Street Dance",
    description: "Urban streetwear-inspired costume perfect for jazz, hip-hop, and contemporary western dance performances.",
    images: ["/assets/11.jpg", "/assets/12.jpg", "/assets/13.jpg", "/assets/14.jpg"],
    ageGroup: "teens",
    occasion: ["school-event", "corporate", "photoshoot"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    pricePerDay: 800,
    pricePerWeek: 3500,
    deposit: 1500,
    available: true,
    quantity: 20,
    features: ["Breathable fabric", "Urban style", "High mobility", "Trendy design"],
    careInstructions: ["Machine washable", "Tumble dry low", "No ironing needed", "Spot clean as needed"],
    relatedProps: ["Snapback caps", "Sneakers", "Sunglasses", "Chains"],
    createdAt: "2024-04-05"
  },
  {
    id: "5",
    name: "Kids Fairy Tale Collection",
    slug: "kids-fairy-tale",
    category: "kids",
    theme: "Fantasy & Storybook",
    description: "Magical fairy tale costumes including princesses, princes, and fantasy characters for children's performances and events.",
    images: ["/assets/15.jpg", "/assets/16.jpg", "/assets/1.jpg", "/assets/3.jpg"],
    ageGroup: "kids",
    occasion: ["school-event", "photoshoot", "festival"],
    sizes: ["XS", "S", "M"],
    pricePerDay: 600,
    pricePerWeek: 2500,
    deposit: 1000,
    available: true,
    quantity: 25,
    features: ["Safe materials", "Comfortable fit", "Bright colors", "Easy to wear"],
    careInstructions: ["Gentle wash", "Air dry only", "Store flat", "Keep away from heat"],
    relatedProps: ["Fairy wings", "Magic wands", "Crowns", "Animal masks"],
    createdAt: "2024-05-12"
  },
  {
    id: "6",
    name: "Theatrical Period Costume",
    slug: "theatrical-period",
    category: "theatrical",
    theme: "Historical Drama",
    description: "Authentic period costumes spanning various eras from Victorian to Renaissance, perfect for theatrical productions and historical reenactments.",
    images: ["/assets/5.jpg", "/assets/7.jpg", "/assets/9.jpg", "/assets/11.jpg"],
    ageGroup: "adults",
    occasion: ["stage-production", "photoshoot", "corporate"],
    sizes: ["M", "L", "XL", "XXL", "Custom"],
    pricePerDay: 2000,
    pricePerWeek: 9000,
    deposit: 4000,
    available: true,
    quantity: 6,
    features: ["Historical accuracy", "Premium fabrics", "Detailed accessories", "Period-appropriate styling"],
    careInstructions: ["Professional dry clean only", "Handle with care", "Store in garment bag", "Avoid moisture"],
    relatedProps: ["Period hats", "Vintage jewelry", "Historical footwear", "Props from era"],
    createdAt: "2024-06-18"
  },
  {
    id: "7",
    name: "Bollywood Wedding Dance Set",
    slug: "bollywood-wedding",
    category: "contemporary",
    theme: "Bollywood Glamour",
    description: "Stunning Bollywood-inspired costumes perfect for wedding sangeet performances, featuring rich colors and glamorous designs.",
    images: ["/assets/2.jpg", "/assets/4.jpg", "/assets/6.jpg", "/assets/8.jpg"],
    ageGroup: "all-ages",
    occasion: ["wedding", "festival", "stage-production"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    pricePerDay: 1800,
    pricePerWeek: 8000,
    deposit: 3500,
    available: true,
    quantity: 10,
    features: ["Designer embroidery", "Rich fabrics", "Matching accessories", "Glamorous styling"],
    careInstructions: ["Dry clean preferred", "Store carefully", "Iron with protection", "Handle embellishments gently"],
    relatedProps: ["Bollywood jewelry", "Dupattas", "Maang tikka", "Dance props"],
    createdAt: "2024-07-22"
  },
  {
    id: "8",
    name: "Corporate Event Modern Ensemble",
    slug: "corporate-modern",
    category: "western",
    theme: "Corporate Performance",
    description: "Elegant and professional modern costumes suitable for corporate events, product launches, and business celebrations.",
    images: ["/assets/10.jpg", "/assets/12.jpg", "/assets/14.jpg", "/assets/16.jpg"],
    ageGroup: "adults",
    occasion: ["corporate", "stage-production", "photoshoot"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    pricePerDay: 1000,
    pricePerWeek: 4500,
    deposit: 2000,
    available: true,
    quantity: 18,
    features: ["Professional look", "Comfortable fit", "Versatile styling", "Easy maintenance"],
    careInstructions: ["Machine wash cold", "Hang dry", "Iron as needed", "Simple care"],
    relatedProps: ["Minimal accessories", "Modern shoes", "Corporate props"],
    createdAt: "2024-08-30"
  }
]

export const accessoriesData: Accessory[] = [
  {
    id: "acc-1",
    name: "Classical Temple Jewelry Set",
    image: "/assets/accessories/jewelry-1.jpg",
    category: "jewelry",
    price: 500,
    available: true,
    description: "Complete temple jewelry set including necklace, earrings, maang tikka, and bangles"
  },
  {
    id: "acc-2",
    name: "Ghungroo (Ankle Bells)",
    image: "/assets/accessories/ghungroo.jpg",
    category: "jewelry",
    price: 200,
    available: true,
    description: "Professional quality ghungroo for classical dance performances"
  },
  {
    id: "acc-3",
    name: "Dance Shoes Collection",
    image: "/assets/accessories/shoes.jpg",
    category: "shoes",
    price: 300,
    available: true,
    description: "Various styles including ballet, jazz, and character shoes"
  },
  {
    id: "acc-4",
    name: "Traditional Headgear",
    image: "/assets/accessories/hats.jpg",
    category: "hats",
    price: 400,
    available: true,
    description: "Assorted traditional headgear for various dance forms"
  },
  {
    id: "acc-5",
    name: "Hand Props Set",
    image: "/assets/accessories/props.jpg",
    category: "props",
    price: 350,
    available: true,
    description: "Collection of hand props including fans, veils, and sticks"
  },
  {
    id: "acc-6",
    name: "Stage Makeup Kit",
    image: "/assets/accessories/makeup.jpg",
    category: "makeup",
    price: 600,
    available: true,
    description: "Professional stage makeup kit with application guidance"
  },
  {
    id: "acc-7",
    name: "Flower Jewelry (Gajra)",
    image: "/assets/accessories/gajra.jpg",
    category: "jewelry",
    price: 150,
    available: true,
    description: "Fresh and artificial flower jewelry for hair and wrists"
  },
  {
    id: "acc-8",
    name: "Character Props Collection",
    image: "/assets/accessories/character-props.jpg",
    category: "props",
    price: 450,
    available: true,
    description: "Themed props for specific characters and performances"
  }
]

export const testimonialsData = [
  {
    name: "Priya Sharma",
    role: "School Principal, St. Mary's High School",
    content: "Edwin's costume rental service transformed our annual day celebration. The quality, variety, and professional service exceeded our expectations. Highly recommended!",
    rating: 5,
    image: "/assets/testimonials/client-1.jpg"
  },
  {
    name: "Rajesh Kumar",
    role: "Wedding Planner",
    content: "We've been partnering with Edwin's for sangeet choreography and costumes for 5 years. Their attention to detail and timely delivery is unmatched.",
    rating: 5,
    image: "/assets/testimonials/client-2.jpg"
  },
  {
    name: "Anjali Menon",
    role: "Corporate Event Manager",
    content: "The corporate event costumes were professional, comfortable, and perfectly suited our brand theme. Excellent service from booking to return.",
    rating: 5,
    image: "/assets/testimonials/client-3.jpg"
  },
  {
    name: "Dr. Sunita Reddy",
    role: "Dance Academy Director",
    content: "As a dance professional, I appreciate the authenticity and quality of their classical costumes. Perfect for our students' arangetrams.",
    rating: 5,
    image: "/assets/testimonials/client-4.jpg"
  }
]

export const faqData = [
  {
    question: "What is the deposit amount and when is it refunded?",
    answer: "Deposits vary by costume type (₹1,000-₹4,000) and are fully refundable within 7 days after the costume is returned in good condition. We inspect all items and process refunds promptly."
  },
  {
    question: "What happens if the costume is damaged?",
    answer: "Minor wear and tear is expected and covered. For significant damage, repair costs are deducted from the deposit. We provide detailed damage assessment and transparent pricing. Professional stains or tears may incur charges."
  },
  {
    question: "How do you ensure costume hygiene?",
    answer: "All costumes undergo professional dry cleaning after each rental. We follow strict hygiene protocols including UV sanitization, quality checks, and proper storage. Your safety and comfort are our priorities."
  },
  {
    question: "Can costumes be altered for size?",
    answer: "We offer minor alterations for long-term rentals at an additional cost. For short-term rentals, we have multiple sizes available. Custom sizing is possible for advance bookings (2+ weeks notice)."
  },
  {
    question: "What's your cancellation policy?",
    answer: "Cancellations made 15+ days before the event receive 90% refund. 7-14 days: 50% refund. Less than 7 days: no refund, but you can reschedule once within 3 months."
  },
  {
    question: "Do you provide delivery and pickup services?",
    answer: "Yes! We offer free delivery and pickup within 20 km of Trichy. For distances beyond, nominal charges apply. You can also collect from our studio during business hours."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking 2-4 weeks in advance for popular seasons (December-March) and 1-2 weeks for regular periods. Last-minute bookings subject to availability."
  },
  {
    question: "Are accessories and jewelry included?",
    answer: "Basic accessories are included with classical and traditional costumes. Premium jewelry, specialty props, and makeup kits are available as add-ons at the rates listed in our accessories catalog."
  }
]

export const rentalProcessSteps = [
  {
    title: "Browse & Select",
    description: "Explore our catalog, filter by occasion, age group, and theme. View detailed photos and specifications.",
    icon: "Search"
  },
  {
    title: "Check Availability",
    description: "Use our calendar to check real-time availability for your event date. Reserve instantly online.",
    icon: "Calendar"
  },
  {
    title: "Book & Pay",
    description: "Fill the booking form, pay deposit online, and receive confirmation via email with rental details.",
    icon: "CreditCard"
  },
  {
    title: "Pick-Up or Delivery",
    description: "Choose to collect from our studio or opt for home delivery. We pack everything securely.",
    icon: "Truck"
  },
  {
    title: "Wear & Perform",
    description: "Enjoy your event with confidence. Follow the care instructions provided with your rental.",
    icon: "Sparkles"
  },
  {
    title: "Return",
    description: "Return costumes as-is (no need to clean). Drop off or schedule pickup. Deposit refunded within 7 days.",
    icon: "RotateCcw"
  }
]

export const pricingPackages = [
  {
    title: "School Event Package",
    description: "Perfect for annual days, cultural programs, and competitions",
    features: [
      "10+ costume rentals",
      "15% group discount",
      "Free delivery & pickup",
      "Backup costume provision",
      "Rehearsal costume option",
      "Extended rental period"
    ],
    price: "Starting ₹8,000",
    popular: true
  },
  {
    title: "Wedding Sangeet Bundle",
    description: "Complete costume solution for wedding dance performances",
    features: [
      "5-15 costumes",
      "Matching color coordination",
      "Jewelry included",
      "2-day rental period",
      "Emergency alterations",
      "Photography-ready costumes"
    ],
    price: "Starting ₹12,000",
    popular: false
  },
  {
    title: "Corporate Event Pack",
    description: "Professional costumes for product launches and team events",
    features: [
      "20+ costumes",
      "Brand color customization",
      "Professional styling",
      "3-day rental",
      "On-site coordinator",
      "Invoice with GST"
    ],
    price: "Starting ₹15,000",
    popular: false
  },
  {
    title: "Individual Rental",
    description: "Single costume for personal use or small events",
    features: [
      "Full catalog access",
      "1-day or weekly rates",
      "All sizes available",
      "Basic accessories included",
      "Flexible pickup times",
      "Standard deposit"
    ],
    price: "From ₹600/day",
    popular: false
  }
]
