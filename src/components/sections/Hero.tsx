"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Bot, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/3d/Scene").then(mod => mod.Scene), { ssr: false });

// Magnetic Button Component for micro-animations
const MagneticButton = ({ children, className, ...props }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

// Animated Stat Counter Component
const StatCounter = ({ endValue, label, suffix = "", icon: Icon }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-4 md:p-6 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center w-full"
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary mb-2 md:mb-3 opacity-80" />
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tighter mb-1">
        {count}{suffix}
      </div>
      <div className="text-[10px] md:text-xs lg:text-sm text-muted-foreground uppercase tracking-wider font-mono">
        {label}
      </div>
    </motion.div>
  );
};

export function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-center overflow-hidden bg-background pt-24 md:pt-0">
      
      {/* Strict Container & Padding */}
      <div className="container-strict section-spacing relative z-10 flex flex-col justify-center min-h-screen">
        
        {/* 45/55 Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-12 lg:gap-8 w-full flex-grow">
          
          {/* Mobile: 3D Scene renders FIRST (at top), Desktop: Renders on RIGHT side */}
          {/* We order it visually on mobile to be above text, but physically it's in DOM order. 
              We can use flex-col-reverse on mobile or order-first/order-last. */}
          
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 lg:mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-medium tracking-widest text-primary uppercase">
                AI-Powered Consultancy
              </span>
            </motion.div>

            {/* Pure White Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h1 mb-4 lg:mb-6 text-[#FFFFFF]"
            >
              Transforming Businesses with <br/>
              <span className="text-gradient">Smart Technology</span>
            </motion.h1>

            {/* rgba(255,255,255,0.75) Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-[rgba(255,255,255,0.75)] text-lg max-w-xl mb-10 lg:mb-12"
            >
              Helping businesses grow through AI Automation, Google Business Optimization, Virtual Tours, Reputation Management, and Digital Experiences.
            </motion.p>

            {/* Functional Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-16 lg:mb-20"
            >
              <Link href="/book-consultation" className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full">
                <MagneticButton className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-full glowing-shadow flex items-center justify-center cursor-pointer">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>
              </Link>
              <Link href="/#services" className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full">
                <MagneticButton className="w-full sm:w-auto px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center border border-white/20 cursor-pointer">
                  View Services
                </MagneticButton>
              </Link>
            </motion.div>
            
            {/* Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-full grid grid-cols-2 gap-4 md:gap-6 mt-auto"
            >
              <StatCounter endValue={100} suffix="+" label="Projects" icon={Bot} />
              <StatCounter endValue={95} suffix="%" label="Satisfaction" icon={TrendingUp} />
              <StatCounter endValue={24} suffix="/7" label="Support" icon={Sparkles} />
              <StatCounter endValue={10} suffix="x" label="Faster Delivery" icon={ArrowRight} />
            </motion.div>
            
          </div>

          {/* 3D Scene Container (Ensures NO overlap with text side) */}
          <div className="order-1 lg:order-2 relative w-full h-[350px] md:h-[500px] lg:h-[700px] flex items-center justify-center pointer-events-auto z-10">
            {/* Provide a distinct container for the Canvas */}
            <div className="absolute inset-0 ml-0 lg:ml-10">
              <Scene />
            </div>
          </div>

        </div>
      </div>

      {/* Decorative gradient overlay at bottom for strict section separation */}
      <div className="absolute bottom-0 left-0 w-full h-32 lg:h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
}
