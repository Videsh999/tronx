"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Bot, X } from "lucide-react";
import Link from "next/link";

export function AIAssistantOrb() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[100] flex flex-col items-start pointer-events-none">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="pointer-events-auto mb-4 p-6 glass-panel rounded-2xl w-[300px] border-primary/20 glowing-shadow relative"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white"
            >
              <X size={16} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                <Bot size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">TRONX Intelligence</h4>
                <p className="text-xs text-primary font-mono">ONLINE</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Hello. I am the TRONX AI Assistant. How can I help you transform your business today?</p>
              <Link href="/services/ai-automation" className="block w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-semibold text-white transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                Tell me about AI Automation
              </Link>
              <Link href="/book-consultation" className="block w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-semibold text-white transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                View Pricing & Booking
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Orb */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto relative w-14 h-14 rounded-full flex items-center justify-center group"
      >
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-colors duration-500" />
        <div className="relative z-10 w-12 h-12 rounded-full glass flex items-center justify-center border border-primary/50">
          <Bot size={20} className="text-primary group-hover:rotate-12 transition-transform duration-300" />
        </div>
        
        {/* Pulsing ring */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 border border-primary rounded-full"
          />
        )}
      </motion.button>

    </div>
  );
}
