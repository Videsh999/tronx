"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundEcosystem() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden bg-[#020202]">
      
      {/* Dynamic Aurora/Gradient Mesh */}
      <motion.div
        animate={{
          x: mousePosition.x * -2,
          y: mousePosition.y * -2,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
        className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] opacity-30"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[20%] w-[60vw] h-[60vw] bg-secondary/15 rounded-full blur-[150px] mix-blend-screen"
        />
      </motion.div>

      {/* Subtle Digital Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-50" />

      {/* Floating Particles Simulation (Lightweight) */}
      {isMounted && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * -500],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
    </div>
  );
}
