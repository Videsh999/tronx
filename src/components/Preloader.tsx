"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Small delay before hiding
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5; // Random increments
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background text-white"
        >
          {/* AI Scanning Effect Background */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="w-full h-32 bg-gradient-to-b from-transparent via-primary to-transparent blur-2xl"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Formation Placeholder */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold tracking-tighter mb-8"
            >
              TRONX
              <span className="text-primary">.</span>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary glowing-shadow"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            {/* Percentage */}
            <div className="mt-4 font-mono text-sm text-primary tracking-widest">
              SYSTEM_BOOT: {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
