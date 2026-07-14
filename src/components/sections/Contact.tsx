"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle2, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const ContactEarth = dynamic(() => import("@/components/3d/ContactEarth").then(mod => mod.ContactEarth), { ssr: false });

export function Contact() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        router.push("/thank-you");
        // Reset state after navigating
        setTimeout(() => setIsSubmitted(false), 500);
      }, 1500); 
    }, 1500);
  };

  return (
    <section className="relative w-full overflow-hidden bg-dark-gradient">
      
      {/* 3D Glowing Earth Background */}
      <div className="absolute top-1/2 right-0 md:-right-1/4 w-[800px] h-[800px] -translate-y-1/2 pointer-events-none opacity-30 md:opacity-80">
        <ContactEarth />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="container-strict section-spacing relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contact Info & Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="h2 text-white mb-6">
              Let's build the <span className="text-gradient">Future</span>
            </h2>
            <p className="text-muted-foreground mb-8 md:mb-12 max-w-md">
              Ready to transform your business? Reach out to our team of AI experts and digital architects today.
            </p>

            {/* Mobile Sticky Quick Actions */}
            <div className="flex md:hidden flex-col gap-4 mb-8 w-full">
              <a 
                href="https://wa.me/911234567890?text=Hi%20TRONX%20AI%2C%20I%27d%20like%20to%20book%20a%20consultation." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30 font-semibold active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              >
                <MessageSquare size={20} />
                WhatsApp
              </a>
              <a 
                href="tel:+15550000000"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl glass text-white font-semibold active:scale-95 transition-transform border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            <div className="hidden md:block space-y-6">
              {[
                { icon: Mail, title: "Email", value: "hello@tronx.ai", href: "mailto:hello@tronx.ai" },
                { icon: Phone, title: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
                { icon: MapPin, title: "Headquarters", value: "Silicon Valley, CA", href: "#" },
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  className="flex items-center gap-6 glass-panel p-6 rounded-2xl border-white/5 w-fit pr-16 glowing-shadow hover:-translate-y-1 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <item.icon className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Glass Form with Success Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="glass-panel p-6 md:p-10 rounded-3xl border-t-white/20 border-l-white/20 glowing-shadow relative overflow-hidden backdrop-blur-2xl bg-black/40">
              
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
                    <h3 className="h3 text-white mb-2">Initiate Protocol</h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                          <input type="text" required placeholder="Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary transition-all" />
                        </div>
                        <div className="relative">
                          <input type="tel" required placeholder="Phone" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary transition-all" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                          <input type="email" required placeholder="Email Address" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary transition-all" />
                        </div>
                        <div className="relative">
                          <input type="text" required placeholder="Business Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary transition-all" />
                        </div>
                      </div>
                      <div className="relative">
                        <select required defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary transition-all appearance-none">
                          <option value="" disabled>Select a Service</option>
                          <option value="AI Automation">AI Automation</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Google Business Profile">Google Business Profile</option>
                          <option value="360 Tours & FPV">360 Tours & FPV</option>
                          <option value="Reputation Management">Reputation Management</option>
                          <option value="NFC Solutions">NFC Solutions</option>
                        </select>
                      </div>
                      <div className="relative">
                        <textarea required placeholder="Message" rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary transition-all resize-none" />
                      </div>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full py-4 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary transition-all disabled:opacity-70 mt-2 group"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Transmit Message
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
                    className="flex flex-col items-center justify-center py-16 text-center h-[450px]"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                      className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={40} className="text-green-400" />
                    </motion.div>
                    <h3 className="h3 text-white mb-2">Transmission Successful</h3>
                    <p className="text-muted-foreground">Our systems have received your request. Redirecting...</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
