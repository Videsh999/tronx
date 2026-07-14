"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Camera, Play } from "lucide-react";

export function FPVSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Video / Parallax Background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {/* Placeholder for FPV Drone Video - Using a high-quality abstract placeholder image since no video is provided */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620023604928-e4905a9019b7?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-background/60" /> {/* Darkening overlay */}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          style={{ opacity }}
          className="glass-panel p-8 md:p-16 rounded-3xl max-w-4xl w-full border-white/10 glowing-shadow backdrop-blur-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 border border-primary/30"
          >
            <Camera size={32} className="text-primary" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase"
          >
            Cinematic <span className="text-highlight">FPV Drone</span> Production
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Elevate your brand with breathtaking aerial perspectives. Our custom FPV drones capture dynamic, immersive footage that traditional drones can't reach.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full inline-flex items-center gap-3 hover:bg-gray-200 transition-colors"
          >
            <Play size={20} fill="currentColor" />
            Book a Shoot
          </motion.button>
        </motion.div>
      </div>
      
      {/* Gradient Transitions */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
