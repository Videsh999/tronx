"use client";

import { motion } from "framer-motion";

const placeholderLogos = [
  "NEXUS", "AETHER", "QUANTUM", "SYNERGY", "ECHO", "OMNI", "VORTEX", "ZENITH"
];

export function TrustedBy() {
  return (
    <section className="relative w-full py-20 bg-[#050505] overflow-hidden border-t border-b border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-20 text-center mb-10">
        <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.3em]">
          Trusted by Industry Leaders
        </span>
      </div>

      <div className="flex relative w-[200%]">
        <motion.div
          className="flex space-x-16 px-8 items-center cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {/* Double array for infinite scroll */}
          {[...placeholderLogos, ...placeholderLogos].map((logo, i) => (
            <div 
              key={i}
              className="text-2xl md:text-4xl font-black tracking-tighter text-white/20 hover:text-white/60 transition-colors duration-500 cursor-pointer"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
