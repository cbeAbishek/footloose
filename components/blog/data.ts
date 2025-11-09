import { BlogCategory, BlogPost, RelatedPost } from "./types"

// Sample blog posts data
export const sampleBlogPosts: BlogPost[] = [
  {
    id: "1",
    created_at: "2024-11-01T10:00:00Z",
    title: "Annual Day 2024: A Grand Celebration of Talent and Tradition",
    slug: "annual-day-2024-grand-celebration",
    summary: "Relive the magic of our Annual Day 2024 with over 500 performers, stunning choreography, and unforgettable moments that showcased the best of Edwin's Dance legacy.",
    body: `# Annual Day 2024: A Grand Celebration

Our Annual Day 2024 was a spectacular showcase of talent, dedication, and artistic excellence. With over 500 performers taking the stage, the event brought together students, alumni, and the entire Footloose community for an unforgettable evening.

## Highlights

- **Opening Act**: A breathtaking LED performance that set the tone for the night
- **Classical Fusion**: Traditional Bharatanatyam blended with contemporary movements
- **Western Showcase**: High-energy hip-hop and contemporary routines
- **Grand Finale**: All performers united for a show-stopping ensemble

## Behind the Scenes

Months of preparation went into perfecting each routine. Our instructors worked tirelessly with students across all age groups, ensuring every detail was polished to perfection.

> "This year's Annual Day was our most ambitious production yet. The energy, passion, and dedication from every single performer made it truly special." - Edwin, Founder & Artistic Director

## Thank You

A heartfelt thank you to all performers, parents, instructors, and volunteers who made this event possible. Your support and enthusiasm are what make Footloose a family.`,
    author_name: "Edwin's Dance Company",
    author_avatar: "/placeholder-user.jpg",
    thumbnail_url: "/sample.jpg",
    category: "events",
    tags: ["Annual Day", "Performance", "Community"],
    featured: true,
    published: true,
    published_at: "2024-11-01T10:00:00Z",
    reading_time: 4,
    views: 1250,
  },
  {
    id: "2",
    created_at: "2024-10-28T14:00:00Z",
    title: "5 Dance Warm-Up Exercises Every Dancer Should Know",
    slug: "5-dance-warmup-exercises-every-dancer",
    summary: "Discover essential warm-up exercises that prevent injuries, improve flexibility, and prepare your body for peak performance. Perfect for dancers of all levels.",
    body: `# Essential Dance Warm-Up Exercises

Warming up is crucial for preventing injuries and optimizing performance. Here are five essential exercises every dancer should incorporate into their routine.

## 1. Dynamic Stretching

Start with gentle movements that gradually increase your range of motion. Focus on major muscle groups used in dance.

## 2. Cardiovascular Activation

Light jogging or jumping jacks to elevate heart rate and increase blood flow to muscles.

## 3. Joint Mobility Work

Ankle circles, hip rotations, and shoulder rolls to prepare joints for complex movements.

## 4. Core Engagement

Planks and stability exercises to activate your center and improve balance.

## 5. Dance-Specific Movements

Gentle practice of key movements from your routine at 50% intensity.

## Remember

Never skip your warm-up. Taking 10-15 minutes before practice can make all the difference in your performance and longevity as a dancer.`,
    author_name: "Priya Sharma",
    author_avatar: "/placeholder-user.jpg",
    thumbnail_url: "/sample.jpg",
    category: "wellness",
    tags: ["Tips", "Health", "Training"],
    featured: false,
    published: true,
    published_at: "2024-10-28T14:00:00Z",
    reading_time: 5,
    views: 890,
  },
  {
    id: "3",
    created_at: "2024-10-25T09:00:00Z",
    title: "From Student to Professional: Rahul's Dance Journey",
    slug: "rahul-dance-journey-student-to-professional",
    summary: "Meet Rahul, a Footloose alumni who transformed his passion into a thriving career. Learn how dedication, training, and community support shaped his success story.",
    body: `# From Student to Professional: Rahul's Journey

Rahul joined Footloose as a shy 10-year-old with no dance experience. Today, at 24, he's a professional choreographer working with leading production houses.

## The Beginning

"I was terrified on my first day," Rahul recalls. "But the instructors made me feel welcome, and I quickly fell in love with dance."

## Growth Years

Through 8 years of training in Western, Bollywood, and Contemporary styles, Rahul developed his unique artistic voice.

## Breaking Through

His big break came at 18 when he choreographed for a college fest. The performance went viral, opening doors to professional opportunities.

## Current Success

Now, Rahul choreographs for corporate events, fashion shows, and music videos. He also teaches at Footloose, giving back to the community that shaped him.

## Advice for Aspiring Dancers

"Never stop learning. Stay humble. And remember, every great dancer started exactly where you are now."`,
    author_name: "Sarah Johnson",
    author_avatar: "/placeholder-user.jpg",
    thumbnail_url: "/sample.jpg",
    category: "stories",
    tags: ["Alumni", "Success Story", "Inspiration"],
    featured: true,
    published: true,
    published_at: "2024-10-25T09:00:00Z",
    reading_time: 6,
    views: 1540,
  },
  {
    id: "4",
    created_at: "2024-10-20T11:00:00Z",
    title: "Chair-Co-Cise: Revolutionary Fitness for All Ages",
    slug: "chair-co-cise-revolutionary-fitness-all-ages",
    summary: "Explore our innovative Chair-Co-Cise program that makes fitness accessible, fun, and effective for everyone—from seniors to busy professionals.",
    body: `# Chair-Co-Cise: Fitness Reimagined

Chair-Co-Cise is our revolutionary fitness program that combines dance movements with chair-based exercises, making wellness accessible to everyone.

## Who Is It For?

- Seniors looking for low-impact exercise
- Office workers with limited mobility
- Rehabilitation patients
- Anyone seeking an accessible fitness routine

## Benefits

1. **Joint-Friendly**: Low-impact movements protect joints while building strength
2. **Cardiovascular Health**: Effective cardio workout without high-impact stress
3. **Flexibility**: Improve range of motion safely
4. **Social Connection**: Group classes build community

## Program Structure

Each 45-minute session includes:
- Warm-up (10 min)
- Cardio movements (20 min)
- Strength training (10 min)
- Cool-down and stretching (5 min)

## Success Stories

Participants report increased energy, better mobility, and improved overall health. Many have reduced chronic pain and found a supportive fitness community.

Join us for a free trial class and experience the Chair-Co-Cise difference!`,
    author_name: "Dr. Anita Reddy",
    author_avatar: "/placeholder-user.jpg",
    thumbnail_url: "/sample.jpg",
    category: "wellness",
    tags: ["Chair-Co-Cise", "Fitness", "Health"],
    featured: false,
    published: true,
    published_at: "2024-10-20T11:00:00Z",
    reading_time: 4,
    views: 720,
  },
  {
    id: "5",
    created_at: "2024-10-15T16:00:00Z",
    title: "Mastering Bollywood Dance: A Beginner's Tutorial",
    slug: "mastering-bollywood-dance-beginners-tutorial",
    summary: "Step-by-step guide to learning Bollywood dance basics. Master fundamental moves, understand rhythm, and develop your expressive style with expert tips.",
    body: `# Mastering Bollywood Dance: Beginner's Guide

Bollywood dance is vibrant, expressive, and incredibly fun. This tutorial will help you master the basics and develop your unique style.

## Understanding Bollywood Dance

Bollywood dance blends classical Indian forms (Kathak, Bharatanatyam) with Western styles (Jazz, Hip-Hop) creating energetic, emotive performances.

## Basic Moves to Master

### 1. The Thumka
Hip movements that define Bollywood style. Start slow, focus on isolation.

### 2. Hand Gestures (Mudras)
Express emotions through classical hand positions. Practice in front of a mirror.

### 3. Shoulder Shimmies
Quick shoulder movements that add energy to your performance.

### 4. Foot Patterns
Master basic step sequences before adding complexity.

## Practice Tips

- Start with 15 minutes daily
- Focus on rhythm and musicality
- Watch Bollywood films for inspiration
- Don't be afraid to express emotions

## Common Mistakes to Avoid

- Rushing through movements
- Neglecting facial expressions
- Poor posture
- Not feeling the music

## Next Steps

Once you're comfortable with basics, join our Bollywood classes for advanced choreography and performance opportunities.

Remember: Bollywood is about joy and expression. Have fun with it!`,
    author_name: "Kavita Mehta",
    author_avatar: "/placeholder-user.jpg",
    thumbnail_url: "/sample.jpg",
    category: "tutorials",
    tags: ["Bollywood", "Tutorial", "Beginner"],
    featured: false,
    published: true,
    published_at: "2024-10-15T16:00:00Z",
    reading_time: 7,
    views: 1120,
  },
  {
    id: "6",
    created_at: "2024-10-10T13:00:00Z",
    title: "Footloose Expands: New Studio Opening in South Coimbatore",
    slug: "footloose-expands-new-studio-south-coimbatore",
    summary: "Exciting news! We're opening our third studio location in South Coimbatore, bringing world-class dance education closer to more communities.",
    body: `# Expanding Our Footloose Family

We're thrilled to announce the opening of our new studio in South Coimbatore, marking a significant milestone in our journey to make quality dance education accessible to all.

## Studio Features

- 5,000 sq ft of state-of-the-art dance space
- Professional sound and lighting systems
- Spacious changing rooms and waiting areas
- Climate-controlled practice rooms
- Performance stage for recitals

## Classes Offered

The new location will offer our complete curriculum:
- Western Dance (Hip-Hop, Contemporary, Jazz)
- Bollywood and Classical Indian
- Kids programs (ages 4+)
- Chair-Co-Cise fitness
- Professional training programs

## Grand Opening

**Date**: November 15, 2024  
**Time**: 10 AM - 6 PM

Special offers:
- Free trial classes
- 20% off registration fees
- Exclusive merchandise giveaways

## Community Impact

This expansion allows us to serve 200+ additional students and create employment for 8 new instructors, contributing to Coimbatore's vibrant arts community.

We can't wait to welcome you to our new home!`,
    author_name: "Edwin's Dance Company",
    author_avatar: "/placeholder-user.jpg",
    thumbnail_url: "/sample.jpg",
    category: "news",
    tags: ["Expansion", "New Studio", "Announcement"],
    featured: true,
    published: true,
    published_at: "2024-10-10T13:00:00Z",
    reading_time: 3,
    views: 980,
  },
]

// Sample tags
export const sampleTags = [
  { id: "1", name: "Annual Day", slug: "annual-day", color: "orange", count: 5 },
  { id: "2", name: "Performance", slug: "performance", color: "purple", count: 12 },
  { id: "3", name: "Community", slug: "community", color: "blue", count: 8 },
  { id: "4", name: "Tips", slug: "tips", color: "green", count: 15 },
  { id: "5", name: "Health", slug: "health", color: "green", count: 10 },
  { id: "6", name: "Training", slug: "training", color: "pink", count: 18 },
  { id: "7", name: "Alumni", slug: "alumni", color: "purple", count: 7 },
  { id: "8", name: "Success Story", slug: "success-story", color: "purple", count: 6 },
  { id: "9", name: "Inspiration", slug: "inspiration", color: "orange", count: 14 },
  { id: "10", name: "Tutorial", slug: "tutorial", color: "pink", count: 9 },
]

// Helper function to get related posts
export const getRelatedPosts = (currentPost: BlogPost, allPosts: BlogPost[]): RelatedPost[] => {
  return allPosts
    .filter(post => 
      post.id !== currentPost.id &&
      post.published &&
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, 3)
    .map(post => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      summary: post.summary,
      thumbnail_url: post.thumbnail_url,
      category: post.category,
      reading_time: post.reading_time,
      published_at: post.published_at || post.created_at,
    }))
}

// Calculate reading time from content
export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// Format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

// Format relative time
export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return 'just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`
  
  return formatDate(dateString)
}
