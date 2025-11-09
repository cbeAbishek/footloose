import { AlumniProfile, AlumniTestimonial, AlumniEvent, AlumniOpportunity, AlumniAward } from "./types"

export const sampleAlumni: AlumniProfile[] = [
  {
    id: "1",
    created_at: "2020-01-15T00:00:00Z",
    full_name: "Priya Nambiar",
    headline: "International Choreographer & Movement Director",
    bio: "Priya crafts interdisciplinary works fusing contemporary Indian movement with theatre design. She has choreographed for major Bollywood productions and international theatre companies. Her work has been featured in festivals across Asia and Europe.",
    graduation_year: 2005,
    email: "priya.nambiar@example.com",
    website: "https://priyanambiar.com",
    photo_url: "/alumni/sai_paillavi.png",
    dance_specialization: "Contemporary Fusion, Bharatanatyam",
    current_role: "Lead Choreographer at Mumbai Dance Theatre",
    location: "Mumbai, India",
    latitude: 19.0760,
    longitude: 72.8777,
    achievements: [
      "Choreographed for 5+ Bollywood films",
      "Won National Dance Award 2022",
      "Founded Dance for Change NGO"
    ],
    social_links: {
      instagram: "https://instagram.com/priyadance",
      linkedin: "https://linkedin.com/in/priyanambiar"
    },
    featured: true,
    verified: true
  },
  {
    id: "2",
    created_at: "2015-08-20T00:00:00Z",
    full_name: "Marcus Densel",
    headline: "Fashion Show Movement Director",
    bio: "Marcus leads movement direction for high-fashion campaigns in Southeast Asia. He specializes in precision-based choreography and has worked with international fashion houses on runway shows and brand campaigns.",
    graduation_year: 2008,
    email: "marcus@example.com",
    website: "https://marcusdensel.com",
    photo_url: "/alumni/shriff.jpg",
    dance_specialization: "Contemporary, Fashion Choreography",
    current_role: "Movement Director at Fashion Forward Agency",
    location: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
    achievements: [
      "Directed 30+ international fashion shows",
      "Worked with Vogue Asia",
      "Singapore Arts Award recipient"
    ],
    social_links: {
      instagram: "https://instagram.com/marcusmoves"
    },
    featured: true,
    verified: true
  },
  {
    id: "3",
    created_at: "2018-05-10T00:00:00Z",
    full_name: "Lakshmi Rao",
    headline: "Wellness Coach & Chair-Co-Cise Specialist",
    bio: "Lakshmi builds corporate wellness and mindfulness programs inspired by Chair-Co-Cise. She has pioneered ergonomic movement training for remote-first organizations, helping thousands improve their workplace health.",
    graduation_year: 2012,
    email: "lakshmi@wellnessflow.com",
    website: "https://wellnessflow.com",
    photo_url: "/alumni/naveen.jpeg",
    dance_specialization: "Chair-Co-Cise, Wellness Dance",
    current_role: "Founder & CEO at Wellness Flow",
    location: "Bengaluru, India",
    latitude: 12.9716,
    longitude: 77.5946,
    achievements: [
      "Trained 10,000+ corporate employees",
      "Featured in Forbes India",
      "TEDx speaker on workplace wellness"
    ],
    social_links: {
      instagram: "https://instagram.com/lakshmiwellness",
      linkedin: "https://linkedin.com/in/lakshmirao"
    },
    featured: true,
    verified: true
  },
  {
    id: "4",
    created_at: "2019-11-25T00:00:00Z",
    full_name: "Rahul Krishnan",
    headline: "Bollywood Dance Instructor & Content Creator",
    bio: "Rahul has built a thriving online dance education platform with over 500K followers. He specializes in Bollywood and commercial dance, making Indian dance accessible to global audiences through digital content.",
    graduation_year: 2015,
    email: "rahul@dancewithrahul.com",
    website: "https://dancewithrahul.com",
    photo_url: "/alumni/rahul.jpg",
    dance_specialization: "Bollywood, Hip Hop",
    current_role: "Founder at Dance with Rahul Academy",
    location: "Chennai, India",
    latitude: 13.0827,
    longitude: 80.2707,
    achievements: [
      "500K+ social media followers",
      "Created 200+ online dance courses",
      "Collaborated with T-Series"
    ],
    social_links: {
      instagram: "https://instagram.com/dancewithrahul",
      youtube: "https://youtube.com/dancewithrahul"
    },
    featured: false,
    verified: true
  },
  {
    id: "5",
    created_at: "2021-03-14T00:00:00Z",
    full_name: "Anjali Mehta",
    headline: "Dance Therapist & Special Needs Educator",
    bio: "Anjali pioneered inclusive dance programs for children with special needs. Her work combines dance therapy with education, creating safe spaces for expression and growth.",
    graduation_year: 2016,
    email: "anjali@dancetherapy.in",
    website: null,
    photo_url: "/alumni/anjali.jpg",
    dance_specialization: "Dance Therapy, Inclusive Dance",
    current_role: "Director at Inclusive Dance Foundation",
    location: "Pune, India",
    latitude: 18.5204,
    longitude: 73.8567,
    achievements: [
      "Founded Inclusive Dance Foundation",
      "Trained 50+ special educators",
      "National Excellence Award 2023"
    ],
    featured: false,
    verified: true
  }
]

export const sampleTestimonials: AlumniTestimonial[] = [
  {
    id: "1",
    alumni_id: "1",
    alumni_name: "Priya Nambiar",
    content: "Edwin's Dance Company gave me more than technique — it gave me a family. The foundation I built here launched my international career. Every time I choreograph, I carry the values of discipline, creativity, and community that Edwin instilled in us.",
    created_at: "2024-09-15T00:00:00Z"
  },
  {
    id: "2",
    alumni_id: "2",
    alumni_name: "Marcus Densel",
    content: "The precision and attention to detail I learned at Footloose became my signature style. From student showcases to Singapore runways, the journey has been incredible. Edwin's mentorship shaped not just my dancing, but my entire approach to creative direction.",
    video_url: "https://www.youtube.com/embed/example1",
    created_at: "2024-08-20T00:00:00Z"
  },
  {
    id: "3",
    alumni_id: "3",
    alumni_name: "Lakshmi Rao",
    content: "Chair-Co-Cise changed my life trajectory. What started as a wellness class became my life's mission. Today, I'm helping thousands of people discover the healing power of movement, thanks to the foundation Edwin's team built.",
    created_at: "2024-10-05T00:00:00Z"
  }
]

export const sampleEvents: AlumniEvent[] = [
  {
    id: "1",
    title: "Global Alumni Reunion 2025",
    description: "Join fellow Footloose alumni from around the world for a weekend of performances, workshops, and reconnection. Special performances by featured alumni and collaborative choreography sessions.",
    event_date: "2025-12-15T00:00:00Z",
    location: "Edwin's Dance Company, Coimbatore",
    image_url: "/events/reunion-2025.jpg",
    registration_link: "https://forms.example.com/reunion-2025"
  },
  {
    id: "2",
    title: "Alumni Masterclass Series",
    description: "Monthly virtual masterclasses led by successful alumni. Share your expertise, inspire current students, and stay connected with the Footloose community.",
    event_date: "2025-11-20T00:00:00Z",
    location: "Online (Zoom)",
    registration_link: "https://forms.example.com/masterclass"
  },
  {
    id: "3",
    title: "20 Years of Footloose Celebration",
    description: "Celebrate two decades of dance excellence with performances spanning every era. Alumni showcase, documentary screening, and special awards ceremony.",
    event_date: "2026-03-01T00:00:00Z",
    location: "Edwin's Dance Company, Coimbatore",
    image_url: "/events/20years.jpg"
  }
]

export const sampleOpportunities: AlumniOpportunity[] = [
  {
    id: "1",
    title: "Dance Instructor - Kids Program",
    type: "teaching",
    description: "We're looking for passionate alumni to teach our growing kids program. Focus on Western and Bollywood styles for ages 6-12.",
    organization: "Edwin's Dance Company",
    location: "Coimbatore, India",
    posted_date: "2024-11-01T00:00:00Z",
    deadline: "2024-12-01T00:00:00Z",
    contact_email: "careers@footloose.online",
    is_active: true
  },
  {
    id: "2",
    title: "Choreographer for Corporate Event",
    type: "collaboration",
    description: "Seeking experienced choreographer for large-scale corporate annual day. 500+ performers, mix of traditional and contemporary.",
    organization: "Tech Giants Inc.",
    location: "Bengaluru, India",
    posted_date: "2024-10-28T00:00:00Z",
    deadline: "2024-11-15T00:00:00Z",
    contact_email: "events@techgiants.com",
    is_active: true
  },
  {
    id: "3",
    title: "Dance Content Creator",
    type: "job",
    description: "Full-time position creating dance tutorial content for digital platform. Looking for someone with social media experience and teaching skills.",
    organization: "Dance Digital Media",
    location: "Remote",
    posted_date: "2024-10-20T00:00:00Z",
    contact_email: "hiring@dancedigital.com",
    is_active: true
  }
]

export const sampleAwards: AlumniAward[] = [
  {
    id: "1",
    alumni_id: "1",
    alumni_name: "Priya Nambiar",
    award_title: "National Dance Award for Choreography",
    description: "Recognized for outstanding contribution to contemporary Indian dance and innovative fusion choreography.",
    year: 2022,
    image_url: "/awards/national-dance-award.jpg"
  },
  {
    id: "2",
    alumni_id: "2",
    alumni_name: "Marcus Densel",
    award_title: "Singapore Arts Award",
    description: "Excellence in movement direction for fashion and commercial arts.",
    year: 2023
  },
  {
    id: "3",
    alumni_id: "5",
    alumni_name: "Anjali Mehta",
    award_title: "National Excellence Award for Inclusive Education",
    description: "Pioneering work in dance therapy and special needs education.",
    year: 2023,
    image_url: "/awards/inclusive-education.jpg"
  }
]
