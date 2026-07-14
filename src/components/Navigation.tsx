"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Process", href: "/#process" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
        }`}
      >
        <div className="container-strict flex items-center justify-between px-6 md:px-10 lg:px-16 mx-auto">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-black text-xs font-black">AI</span>
            </div>
            TRONX
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link 
              href="/book-consultation"
              className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col px-6 py-8">
          <div className="flex justify-between items-center mb-12">
            <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-black text-xs font-black">AI</span>
              </div>
              TRONX
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-center mt-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/book-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 mx-auto px-8 py-4 w-full max-w-sm bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
