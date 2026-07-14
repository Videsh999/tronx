"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { id: 1, title: "Consultation", desc: "Understanding your vision, challenges, and objectives to formulate a strategic roadmap." },
  { id: 2, title: "Planning", desc: "Designing the architecture, user experience, and technical stack required for success." },
  { id: 3, title: "Development", desc: "Building scalable, high-performance solutions using cutting-edge AI and web technologies." },
  { id: 4, title: "Launch", desc: "Rigorous testing, optimization, and seamless deployment to the global market." },
  { id: 5, title: "Growth", desc: "Continuous monitoring, data analysis, and iterative improvements to maximize ROI." },
];

export function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={targetRef} className="relative w-full bg-spotlight overflow-hidden">
      
      <div className="container-strict section-spacing relative z-10">
        <div className="max-w-2xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h2 text-white mb-6"
          >
            The <span className="text-gradient">TRONX</span> Protocol
          </motion.h2>
          <p className="text-muted-foreground">
            A systematic, data-driven approach to digital transformation. Every phase is engineered for precision and scale.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track Background */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full" />
          
          {/* Animated Glow Track */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 rounded-full overflow-hidden">
            <motion.div 
              style={{ height: lineWidth }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-highlight shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>
          
          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block flex-1" />

                  {/* Node Marker */}
                  <div className="absolute left-6 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-[#050505] border-4 border-primary/20 z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary glowing-shadow" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 w-full pl-16 md:pl-0">
                    <div className="glass-panel p-8 md:p-10 rounded-3xl border-t-white/10 border-l-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                      <div className="absolute top-0 right-0 p-6 text-8xl font-bold text-white/[0.02] -mt-8 -mr-8 pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-500">
                        0{step.id}
                      </div>
                      
                      <h3 className="h3 text-white mb-4 flex flex-col md:flex-row md:items-center gap-3">
                        <span className="text-xs md:text-sm font-mono text-primary bg-primary/10 w-fit px-3 py-1 rounded tracking-widest uppercase">
                          Phase {step.id}
                        </span>
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground relative z-10">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
