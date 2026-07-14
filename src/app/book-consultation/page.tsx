"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, Clock, Video, Send } from "lucide-react";
import Link from "next/link";

export default function BookConsultation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen w-full bg-background pt-32 pb-20">
      <div className="container-strict section-spacing">
        
        <Link href="/" className="text-primary hover:underline text-sm font-medium mb-8 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
          &larr; Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <div className="flex flex-col">
            <h1 className="h1 text-white mb-6">Book a <span className="text-gradient">Consultation</span></h1>
            <p className="text-xl text-muted-foreground mb-12">
              Let's discuss how TRONX AI can transform your business. Choose a time that works for you, and we'll connect for a free, 30-minute discovery call.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 glass-panel p-6 rounded-2xl border-white/5 w-fit pr-16 glowing-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Clock className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="text-white font-medium">30 Minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-6 glass-panel p-6 rounded-2xl border-white/5 w-fit pr-16 glowing-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Video className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-white font-medium">Google Meet or Zoom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full">
            <div className="glass-panel p-8 md:p-12 rounded-3xl border-t-white/20 border-l-white/20 glowing-shadow relative overflow-hidden backdrop-blur-2xl bg-black/40">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <h3 className="h3 text-white mb-2">Request an Appointment</h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" required placeholder="First Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary" />
                        <input type="text" required placeholder="Last Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="email" required placeholder="Business Email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary" />
                        <input type="tel" required placeholder="Phone Number" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary" />
                      </div>
                      
                      <select required defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none focus-visible:ring-1 focus-visible:ring-primary">
                        <option value="" disabled>Select Area of Interest</option>
                        <option value="ai">AI Automation</option>
                        <option value="gmb">Google Business Profile</option>
                        <option value="tour">Virtual 360° Tour</option>
                        <option value="web">Web Development</option>
                        <option value="other">Other</option>
                      </select>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                          <label className="text-xs text-muted-foreground absolute -top-2 left-3 bg-black/80 px-1">Preferred Date</label>
                          <input type="date" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary [color-scheme:dark]" />
                        </div>
                        <div className="relative">
                          <label className="text-xs text-muted-foreground absolute -top-2 left-3 bg-black/80 px-1">Preferred Time</label>
                          <input type="time" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary [color-scheme:dark]" />
                        </div>
                      </div>
                      
                      <select required defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none focus-visible:ring-1 focus-visible:ring-primary">
                        <option value="" disabled>Select Project Budget</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k+">$25,000+</option>
                      </select>

                      <textarea required placeholder="Briefly describe your project goals..." rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors resize-none focus-visible:ring-1 focus-visible:ring-primary" />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 mt-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Schedule Discovery Call
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center h-[500px]"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                      className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8"
                    >
                      <CheckCircle2 size={48} className="text-green-400" />
                    </motion.div>
                    <h3 className="h2 text-white mb-4">Request Received</h3>
                    <p className="text-muted-foreground text-lg mb-8 max-w-sm">
                      We have received your consultation request. An AI specialist will contact you shortly to confirm your time slot.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary hover:underline text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
