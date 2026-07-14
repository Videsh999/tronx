"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Activity, BrainCircuit, Cpu, LineChart, Network, Zap, Rocket } from "lucide-react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const features = [
    { icon: BrainCircuit, title: "AI Solutions", desc: "Custom neural architectures" },
    { icon: Network, title: "Digital Transformation", desc: "Future-proof infrastructure" },
    { icon: LineChart, title: "Business Growth", desc: "Data-driven scaling" },
    { icon: Cpu, title: "Automation", desc: "Smart workflows" },
  ];

  return (
    <section ref={containerRef} className="relative w-full py-32 overflow-hidden bg-background">
      {/* Background animated elements */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 100 100">
          <motion.path
            d="M0,50 Q25,25 50,50 T100,50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            style={{ pathLength }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-strict section-spacing relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <motion.div style={{ y: y1, opacity }} className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="h2 text-white mb-6">
                Architects of the <br />
                <span className="text-gradient">Digital Frontier</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                TRONX AI isn't just an agency. We are a collective of engineers, designers, and strategists obsessed with pushing the boundaries of what's possible on the web and beyond.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 glass-panel p-6 rounded-2xl">
                  <BrainCircuit className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="h3 text-white mb-2 text-xl md:text-2xl">Neural Driven</h3>
                    <p className="text-muted-foreground">Every solution we build is backed by advanced AI analysis to ensure maximum performance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 glass-panel p-6 rounded-2xl">
                  <Rocket className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="h3 text-white mb-2 text-xl md:text-2xl">Built to Scale</h3>
                    <p className="text-muted-foreground">From local businesses to enterprise architecture, our systems are designed to grow infinitely.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual/Illustration */}
          <motion.div style={{ y: y2 }} className="relative h-[600px] w-full hidden lg:block">
            {/* Glowing orb background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/20 rounded-full blur-[80px]" />

            {/* Glass Panels Structure */}
            <motion.div 
              className="absolute top-10 right-10 w-64 h-80 glass-panel rounded-2xl border-t-white/20 border-l-white/20 p-6 flex flex-col justify-between glowing-shadow"
              animate={{ y: [0, -20, 0], rotateZ: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap size={20} className="text-primary" />
                </div>
                <div className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">ACTIVE</div>
              </div>
              <div className="space-y-4">
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary"
                    animate={{ width: ["30%", "80%", "40%"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-secondary"
                    animate={{ width: ["60%", "20%", "90%"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-highlight"
                    animate={{ width: ["10%", "50%", "30%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-10 left-10 w-72 h-64 glass-panel rounded-2xl border-t-white/20 border-l-white/20 p-6 glowing-shadow z-20"
              animate={{ y: [0, 20, 0], rotateZ: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                <LineChart className="text-highlight" size={20} />
                Growth Velocity
              </h4>
              <div className="flex h-32 items-end gap-2">
                {[40, 60, 45, 80, 55, 90, 100].map((height, i) => (
                  <motion.div 
                    key={i}
                    className="w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
