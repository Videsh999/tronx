"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO, TechNova",
    text: "TRONX completely revolutionized our workflow. Their AI automation solutions saved us countless hours and significantly boosted our ROI within the first quarter.",
    rating: 5,
    slug: "nexus-neural",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder, Skyline Digital",
    text: "The web experience they delivered is simply unmatched. It feels premium, loads instantly, and has increased our conversion rate by 150%.",
    rating: 5,
    slug: "quantum-commerce",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Director, Apex Realty",
    text: "The virtual tours and FPV drone footage they provided gave us a massive edge over our competitors. Truly world-class production quality.",
    rating: 5,
    slug: "aether-real-estate",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Marcus Thorne",
    role: "VP Operations, Nexus Corp",
    text: "Implementing their NFC and Google Business optimization strategies brought our local visibility to the top. We've seen a 3x increase in foot traffic.",
    rating: 5,
    slug: "synapse-protocol",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
  },
];

// Pre-defined static positions for particles to avoid Hydration errors
const particlePositions = [
  { top: "10%", left: "10%", size: 4, duration: 4 },
  { top: "20%", left: "80%", size: 6, duration: 6 },
  { top: "60%", left: "20%", size: 3, duration: 5 },
  { top: "80%", left: "90%", size: 5, duration: 7 },
  { top: "40%", left: "50%", size: 4, duration: 4.5 },
  { top: "70%", left: "60%", size: 6, duration: 5.5 },
  { top: "30%", left: "30%", size: 3, duration: 6.5 },
  { top: "90%", left: "15%", size: 5, duration: 4.2 },
];

export function Testimonials() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-background overflow-hidden">
      
      {/* Animated Particle Background */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {particlePositions.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/20 glowing-shadow"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="container-strict section-spacing relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h2 text-white mb-6"
        >
          Voices of <span className="text-gradient">Success</span>
        </motion.h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
          Don't just take our word for it. Hear from the visionaries who have experienced the TRONX difference.
        </p>

        {/* 1 Col Mobile, 2 Col Desktop Grid Layout (NO HORIZONTAL SCROLL) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 text-left">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 md:p-10 rounded-3xl relative group hover:border-primary/50 transition-colors duration-500 glowing-shadow h-full flex flex-col"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-primary/20 transition-colors duration-500 -rotate-12" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-white mb-10 leading-relaxed font-medium flex-grow">
                "{t.text}"
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/20" />
                  <div>
                    <h4 className="text-white font-semibold tracking-wide">{t.name}</h4>
                    <p className="text-sm text-primary">{t.role}</p>
                  </div>
                </div>
                
                <Link 
                  href={`/portfolio/${t.slug}`} 
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group-hover:border-primary/50"
                  aria-label={`Read story about ${t.name}`}
                >
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
