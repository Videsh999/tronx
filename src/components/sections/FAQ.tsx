"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes TRONX AI different from traditional agencies?",
    answer: "We are not a traditional agency. We are an AI-first technology consultancy. We integrate cutting-edge artificial intelligence, custom neural architectures, and immersive digital experiences to provide scalable growth solutions that traditional agencies simply cannot offer."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A standard web experience takes 4-6 weeks, while comprehensive AI automation and digital transformation projects can take 2-4 months. We prioritize speed and efficiency without ever compromising on our premium quality."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes. We offer continuous monitoring, data analysis, and iterative improvements through our Growth Protocol to ensure your digital ecosystem adapts and scales with your business over time."
  },
  {
    question: "What is included in your Google Business Optimization?",
    answer: "Our optimization includes comprehensive local SEO, smart NFC review collection systems, immersive 360° virtual tours, and automated reputation management to ensure you dominate local search rankings."
  },
  {
    question: "Are your AI solutions custom-built for my business?",
    answer: "Absolutely. We don't use generic templates. Every AI integration, from automated customer service agents to complex internal workflow automation, is custom-tailored to your specific business logic and goals."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-32 bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Header */}
          <div className="sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              Frequently <br />
              <span className="text-gradient">Asked</span> Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-md"
            >
              Everything you need to know about our services, process, and how we can transform your business.
            </motion.p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-panel rounded-2xl overflow-hidden border transition-colors duration-300 ${
                    isOpen ? "border-primary/50" : "border-white/5 hover:border-white/10"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-xl font-semibold text-white tracking-wide pr-8">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? "bg-primary text-white" : "bg-white/10 text-white"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                          {/* Animated Gradient Line Separator */}
                          <div className="w-full h-px bg-gradient-to-r from-primary/50 to-transparent mb-4" />
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
