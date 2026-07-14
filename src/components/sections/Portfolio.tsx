"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

const categories = ["All", "AI Automation", "Web Experience", "Digital Twin"];

const projects = [
  {
    id: 1,
    title: "Nexus Neural",
    slug: "nexus-neural",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    video: "https://cdn.pixabay.com/video/2020/07/04/43834-436154972_large.mp4",
  },
  {
    id: 2,
    title: "Quantum Commerce",
    slug: "quantum-commerce",
    category: "Web Experience",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Aether Real Estate",
    slug: "aether-real-estate",
    category: "Digital Twin",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Synapse Protocol",
    slug: "synapse-protocol",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section className="relative w-full bg-dark-gradient overflow-hidden">
      <div className="container-strict section-spacing">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h2 text-white mb-4"
            >
              Selected <span className="text-gradient">Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              A showcase of digital excellence and intelligent solutions engineered for performance.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 p-1 glass-panel rounded-full w-fit"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeCategory === cat 
                    ? "bg-white text-black" 
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* 1 Col Mobile, 2 Col Desktop */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`group relative rounded-3xl overflow-hidden glass-panel aspect-square md:aspect-[4/3] cursor-pointer block w-full ${
                  index % 2 !== 0 ? "md:mt-20" : "" // Staggered layout only on desktop
                }`}
              >
                <Link href={`/portfolio/${project.slug}`} className="absolute inset-0 z-30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary" aria-label={`View ${project.title} case study`}>
                  <span className="sr-only">View Case Study</span>
                </Link>
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Video Hover Layer (Simulated with absolute positioned video or just darker overlay for now) */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 z-10" />
                
                {project.video && (
                  <video 
                    src={project.video} 
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 z-0 md:scale-105"
                  />
                )}

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-end pointer-events-none">
                  <div className="translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md text-primary text-xs font-mono rounded mb-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.category}
                    </span>
                    <div className="flex justify-between items-end">
                      <h3 className="h3 text-white">{project.title}</h3>
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 md:-translate-x-4 group-hover:translate-x-0 transition-all duration-500 pointer-events-auto">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">
            View Complete Archive
          </button>
        </motion.div>

      </div>
    </section>
  );
}
