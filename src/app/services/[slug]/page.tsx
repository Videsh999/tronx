import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Contact } from "@/components/sections/Contact";

const servicesData = {
  "google-business-profile": {
    title: "Google Business Profile Optimization",
    description: "Dominate local search and attract high-intent customers with our comprehensive GMB setup and optimization strategies.",
    benefits: ["Verification Support", "Local SEO Domination", "Review Management", "Product & Service Listing"],
  },
  "google-360-tour": {
    title: "Google Virtual 360° Tour",
    description: "Bring your physical space online with immersive, interactive 360-degree tours directly integrated into Google Maps.",
    benefits: ["Interactive Navigation", "High-Resolution Imagery", "Google Maps Integration", "Increased Engagement"],
  },
  "reputation-management": {
    title: "Online Review Management",
    description: "Protect and grow your brand's reputation with automated review generation and negative review handling.",
    benefits: ["Automated Responses", "Review Generation Campaigns", "Negative Review Handling", "Reputation Analytics"],
  },
  "fpv-drone": {
    title: "FPV Drone Shoots",
    description: "Capture breathtaking, cinematic FPV drone footage that showcases your business from entirely new perspectives.",
    benefits: ["Indoor & Outdoor FPV", "4K Cinematic Quality", "Social Media Ready", "Corporate & Event Coverage"],
  },
  "nfc-solutions": {
    title: "NFC Smart Solutions",
    description: "Bridge the physical and digital worlds with custom NFC business cards, menus, and table stands.",
    benefits: ["Contactless Sharing", "Smart Menus & Table Stands", "NFC Business Cards", "Instant Connectivity"],
  },
  "web-development": {
    title: "Website Development",
    description: "Build blazing-fast, SEO-optimized, and visually stunning web experiences using React, Next.js, or WordPress.",
    benefits: ["React / Next.js Frameworks", "Responsive Design", "SEO Ready", "Blazing Fast Performance"],
  },
  "ai-automation": {
    title: "AI Automation",
    description: "Streamline operations and scale efficiently with intelligent chatbots, voice agents, and custom AI workflows.",
    benefits: ["AI Chatbots", "WhatsApp Automation", "CRM & Lead Automation", "Custom AI Solutions"],
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-background pt-32 pb-20">
      <div className="container-strict section-spacing">
        
        {/* Service Hero */}
        <div className="max-w-4xl mb-20">
          <Link href="/#services" className="text-primary hover:underline text-sm font-medium mb-6 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
            &larr; Back to Services
          </Link>
          <h1 className="h1 text-white mb-6">{service.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-32">
          <h2 className="h3 text-white mb-10">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-panel p-12 rounded-3xl text-center mb-32 bg-primary/5 border border-primary/20 glowing-shadow">
          <h2 className="h2 text-white mb-4">Ready to upgrade your business?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation today to discuss how {service.title.toLowerCase()} can drive measurable growth for your brand.
          </p>
          <Link 
            href="/book-consultation"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>

      <Contact />
    </main>
  );
}
