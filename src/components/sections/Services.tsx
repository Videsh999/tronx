"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { Bot, Camera, Globe, MapPin, Smartphone, Star, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  { 
    id: 1, 
    title: "AI Automation", 
    slug: "ai-automation",
    icon: Bot, 
    desc: "Streamline your workflows with intelligent AI agents and machine learning.",
    bullets: [
      "Custom Neural Networks",
      "Process Automation",
      "Predictive Analytics",
      "Chatbot Development",
      "Data Processing Systems"
    ]
  },
  { 
    id: 2, 
    title: "Web Development", 
    slug: "web-development",
    icon: Globe, 
    desc: "Award-winning, high-performance web experiences built for the modern internet.",
    bullets: [
      "Next.js Architecture",
      "3D WebGL Integration",
      "High-Performance APIs",
      "E-commerce Solutions",
      "CMS Development"
    ]
  },
  { 
    id: 3, 
    title: "Google Business", 
    slug: "google-business-profile",
    icon: MapPin, 
    desc: "Dominate local search and attract more customers organically.",
    bullets: [
      "Profile Optimization",
      "Local SEO Strategy",
      "Citation Building",
      "Post Management",
      "Performance Tracking"
    ]
  },
  { 
    id: 4, 
    title: "Virtual Tours", 
    slug: "google-360-tour",
    icon: Camera, 
    desc: "Immersive 360° experiences of your physical locations.",
    bullets: [
      "4K 360° Photography",
      "Google Maps Integration",
      "Custom Tour Interfaces",
      "VR Headset Ready",
      "Interactive Hotspots"
    ]
  },
  { 
    id: 5, 
    title: "Review Management", 
    slug: "reputation-management",
    icon: Star, 
    desc: "Automated reputation building and sentiment analysis.",
    bullets: [
      "Review Generation",
      "Sentiment Analysis",
      "Crisis Management",
      "Automated Responses",
      "Reputation Tracking"
    ]
  },
  { 
    id: 6, 
    title: "NFC Solutions", 
    slug: "nfc-solutions",
    icon: Smartphone, 
    desc: "Smart contactless digital business cards and interactive menus.",
    bullets: [
      "Smart Business Cards",
      "Contactless Menus",
      "Analytics Dashboard",
      "Custom Branding",
      "Lead Generation"
    ]
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <Link href={`/services/${service.slug}`} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative flex flex-col items-start p-8 md:p-10 rounded-2xl glass-panel group cursor-pointer transition-all duration-300 hover:z-10 h-full border-t-white/10 border-l-white/10 glowing-shadow"
      >
        {/* Hover Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.15),
                transparent 40%
              )
            `,
          }}
        />

        <div className="relative z-10 w-full flex flex-col h-full">
          {/* Icon */}
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <service.icon size={32} className="text-primary" />
          </div>
          
          {/* Title & Desc */}
          <h3 className="h3 text-white mb-4 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground mb-6 h-[72px]">
            {service.desc}
          </p>

          {/* Bullets */}
          <ul className="space-y-3 mb-8 flex-grow">
            {service.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-highlight mr-3 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <div className="w-full py-4 mt-auto rounded-xl bg-white/5 border border-white/10 text-center font-semibold text-white group-hover:bg-primary group-hover:border-primary transition-colors flex items-center justify-center gap-2">
            View Details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function Services() {
  return (
    <section className="relative w-full bg-grid-subtle overflow-hidden">
      
      <div className="container-strict section-spacing relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h2 text-white mb-6"
            >
              Premium Digital <span className="text-gradient">Ecosystem</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              We engineer intelligent systems that automate workflows, dominate local search, and create unforgettable immersive experiences.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Link href="/book-consultation" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary inline-block">
              Start Your Project
            </Link>
          </motion.div>
        </div>

        {/* 1 Col Mobile, 2 Col Tablet, 3 Col Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
        
        {/* Mobile-only CTA */}
        <div className="mt-12 md:hidden">
          <Link href="/book-consultation" className="w-full px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-center block">
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
