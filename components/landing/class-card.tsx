"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ClassEvent {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    eventDate: Date;
}

const ClassCard: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<{ [key: number]: string }>({});
    const mobileScrollRef = useRef<HTMLDivElement | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const events: ClassEvent[] = [
        {
            id: 1,
            name: 'Salsa Fundamentals',
            description: 'Learn the basics of salsa dancing with professional instructors',
            image: '/class/4.jpeg',
            price: 1999,
            eventDate: new Date('2024-02-15T18:00:00'),
        },
        {
            id: 2,
            name: 'Hip Hop Groove',
            description: 'Master urban dance moves and freestyle techniques',
            image: '/class/1.jpeg',
            price: 1999,
            eventDate: new Date('2024-02-18T19:00:00'),
        },
        {
            id: 3,
            name: 'Contemporary Flow',
            description: 'Express yourself through modern contemporary dance',
            image: '/class/2.jpeg',
            price: 1999,
            eventDate: new Date('2024-02-20T17:30:00'),
        },
        {
            id: 4,
            name: 'Bachata Nights',
            description: 'Experience the sensual rhythms of bachata dancing',
            image: '/class/3.jpeg',
            price: 1999,
            eventDate: new Date('2024-02-22T20:00:00'),
        },
        {
            id: 5,
            name: 'Ballet Basics',
            description: 'Build grace and strength with classical ballet training',
            image: '/class/5.jpeg',
            price: 1999,
            eventDate: new Date('2024-02-25T16:00:00'),
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft: { [key: number]: string } = {};
            
            events.forEach((event) => {
                const now = new Date().getTime();
                const eventTime = event.eventDate.getTime();
                const distance = eventTime - now;

                if (distance > 0) {
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    newTimeLeft[event.id] = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                } else {
                    newTimeLeft[event.id] = 'Event Started';
                }
            });

            setTimeLeft(newTimeLeft);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const node = mobileScrollRef.current;
        if (!node) return;

        const handleScroll = () => {
            const current = mobileScrollRef.current;
            if (!current) return;
            const maxScroll = Math.max(current.scrollWidth - current.clientWidth, 1);
            const progress = current.scrollLeft / maxScroll;
            const index = Math.round(progress * (events.length - 1));
            setActiveSlide(index);
        };

        node.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            node.removeEventListener('scroll', handleScroll);
        };
    }, [events.length]);

    return (
        <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300">
                    Regular Classes
                </h2>
                
                {/* Desktop Auto-Scroll Carousel */}
                <div className="hidden md:block relative overflow-hidden">
                    {/* Left Fade Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10 pointer-events-none transition-colors duration-300" />
                    
                    {/* Right Fade Effect */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10 pointer-events-none transition-colors duration-300" />
                    
                    <motion.div
                        className="flex gap-6"
                        animate={{
                            x: [0, -2000],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 30,
                                ease: 'linear',
                            },
                        }}
                        whileHover={{ animationPlayState: 'paused' }}
                    >
                        {[...events, ...events].map((event, index) => (
                            <motion.div
                                key={`${event.id}-${index}`}
                                className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600">
                                    <img
                                        src={event.image}
                                        alt={event.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300">
                                        {event.name}
                                    </h3>
                                    
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 transition-colors duration-300">
                                        {event.description}
                                    </p>
                                    
                                    <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
                                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Starts in:</span>
                                        <span className="text-sm font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">
                                            {timeLeft[event.id] || 'Loading...'}
                                        </span>
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                                            ₹{(event.price).toFixed(2)}
                                        </span>
                                        <Link href="/services/dance-class">
                                            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                                                See More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    {/* Hint Text */}
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 transition-colors duration-300">
                        Hover to pause • Auto-scrolling
                    </p>
                </div>
                
                {/* Mobile-First Carousel */}
                <div className="md:hidden relative mt-6">
                    {/* Glassmorphic Fade Overlays */}
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/60 to-transparent dark:from-gray-900 dark:via-gray-900/60 dark:to-transparent backdrop-blur-sm transition-colors duration-300" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/60 to-transparent dark:from-gray-900 dark:via-gray-900/60 dark:to-transparent backdrop-blur-sm transition-colors duration-300" />

                    <div
                        ref={mobileScrollRef}
                        className="overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-x -mx-4 px-4"
                    >
                        <div className="flex gap-5 pb-10">
                            {events.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    className="snap-center flex-shrink-0 w-[85vw] max-w-[340px]"
                                    initial={{ opacity: 0, y: 32 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ delay: index * 0.08, duration: 0.45 }}
                                >
                                    <div className="h-full rounded-3xl bg-white/85 dark:bg-gray-900/80 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl overflow-hidden transition-all duration-300">
                                        <div className="relative h-52">
                                            <img
                                                src={event.image}
                                                alt={event.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-purple-600/20 to-transparent mix-blend-multiply" />
                                            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-900/70 backdrop-blur-md text-[10px] font-semibold tracking-wide uppercase text-gray-700 dark:text-gray-200">
                                                New Batch
                                            </div>
                                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-[10px] font-semibold tracking-wide uppercase text-white">
                                                #{index + 1}
                                            </div>
                                        </div>

                                        <div className="p-6 space-y-5">
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                                                    {event.name}
                                                </h3>
                                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300 line-clamp-3">
                                                    {event.description}
                                                </p>
                                            </div>

                                            <div className="rounded-2xl border border-purple-200/60 dark:border-purple-700/40 bg-gradient-to-r from-purple-50/80 to-pink-50/80 dark:from-purple-900/30 dark:to-pink-900/20 p-4 transition-colors duration-300">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <span className="inline-flex h-2 w-2 rounded-full bg-purple-500 dark:bg-purple-300 animate-pulse" />
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                                                            Starts in
                                                        </span>
                                                    </div>
                                                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-300 transition-colors duration-300">
                                                        {timeLeft[event.id] || 'Loading...'}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-end justify-between">
                                                <div>
                                                    <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                                        Fee
                                                    </span>
                                                    <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                                                        ₹{event.price}
                                                    </p>
                                                </div>
                                                <Link
                                                    href="/services/dance-class"
                                                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:from-purple-500 hover:via-purple-400 hover:to-pink-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
                                                >
                                                    Join Now
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={1.8}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="h-4 w-4"
                                                    >
                                                        <path d="M5 12h14" />
                                                        <path d="m13 6 6 6-6 6" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-2 flex justify-center gap-2">
                        {events.map((_, index) => (
                            <span
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-6 bg-gradient-to-r from-purple-500 to-pink-500 shadow-md shadow-purple-500/40' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
                            />
                        ))}
                    </div>

                    <p className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18 9 12l6-6" />
                        </svg>
                        Swipe to explore more classes
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 6 6 6-6 6" />
                        </svg>
                    </p>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default ClassCard;