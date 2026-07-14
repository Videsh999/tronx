"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const reasons = [
  { id: 1, title: "Innovation", delay: 0 },
  { id: 2, title: "Technology", delay: 0.1 },
  { id: 3, title: "Speed", delay: 0.2 },
  { id: 4, title: "Support", delay: 0.3 },
  { id: 5, title: "Creativity", delay: 0.4 },
  { id: 6, title: "Results", delay: 0.5 },
];

function Hexagon({ title, delay }: { title: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.1, zIndex: 20 }}
      className="relative w-40 h-48 sm:w-48 sm:h-56 flex items-center justify-center group cursor-crosshair mx-auto"
    >
      {/* SVG Hexagon Shape */}
      <svg
        viewBox="0 0 100 115"
        className="absolute inset-0 w-full h-full drop-shadow-2xl"
        style={{ filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.2))" }}
      >
        <motion.polygon
          points="50 2.5 95 28.5 95 86.5 50 112.5 5 86.5 5 28.5"
          fill="rgba(255, 255, 255, 0.03)"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          className="transition-colors duration-300 group-hover:fill-primary/10 group-hover:stroke-primary"
        />
        <motion.polygon
          points="50 2.5 95 28.5 95 86.5 50 112.5 5 86.5 5 28.5"
          fill="none"
          stroke="url(#hexGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileHover={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <span className="text-sm font-mono text-primary/50 group-hover:text-primary transition-colors block mb-2">
          {"//"} REASON
        </span>
        <h3 className="text-xl font-bold text-white tracking-wider group-hover:text-highlight transition-colors uppercase">
          {title}
        </h3>
      </div>
      
      {/* Glow effect behind */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-50" />
    </motion.div>
  );
}

export function WhyTronx() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full py-40 overflow-hidden bg-background">
      {/* Background Neural Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-24"
        >
          Why Choose <span className="text-gradient">TRONX</span>
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Connecting Lines (Desktop Only) */}
          <div className="hidden md:block absolute inset-0 -z-10 top-1/2 -translate-y-1/2 h-[2px]">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <motion.line 
                x1="0" y1="50%" x2="100%" y2="50%" 
                stroke="url(#lineGradient)" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59,130,246,0)" />
                  <stop offset="50%" stopColor="rgba(124,58,237,0.5)" />
                  <stop offset="100%" stopColor="rgba(6,182,212,0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Hexagon Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-0 relative">
            {reasons.map((reason) => (
              <div key={reason.id} className="flex justify-center md:-mx-4">
                <Hexagon title={reason.title} delay={reason.delay} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
