"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function FloatingCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col gap-4 items-end pointer-events-none">
      
      {/* Consultation Button */}
      <Link href="/book-consultation" className="pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-full px-6 py-4 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.7)] transition-shadow duration-300 group cursor-pointer"
        >
          <span className="hidden md:block">Start a Project</span>
          <span className="md:hidden">Start</span>
          <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
