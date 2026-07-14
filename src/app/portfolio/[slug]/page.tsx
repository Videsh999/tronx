import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Contact } from "@/components/sections/Contact";

const portfolioData = {
  "nexus-neural": {
    title: "Nexus Neural",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    overview: "A massive AI automation deployment that streamlined operations and reduced customer response times.",
    challenge: "The client was overwhelmed with manual customer service requests and inefficient data entry processes.",
    solution: "We deployed a custom LLM-powered conversational agent and automated backend data workflows.",
    results: ["85% Reduction in response time", "3x Increase in lead qualification", "24/7 Global support coverage"],
    technologies: ["OpenAI", "Next.js", "Python FastApi", "LangChain"],
  },
  "quantum-commerce": {
    title: "Quantum Commerce",
    category: "Web Experience",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    overview: "A premium e-commerce platform built for high-volume, luxury transactions.",
    challenge: "The existing platform suffered from slow load times and a generic user experience that failed to convert.",
    solution: "A complete rebuild using Next.js and custom Framer Motion animations for a headless Shopify setup.",
    results: ["150% Increase in conversion rate", "0.8s Average load time", "$2M Revenue in first quarter"],
    technologies: ["Next.js", "Framer Motion", "Shopify Plus", "TailwindCSS"],
  },
  "aether-real-estate": {
    title: "Aether Real Estate",
    category: "Digital Twin",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1600&auto=format&fit=crop",
    overview: "Immersive 3D virtual tours and FPV drone fly-throughs for luxury properties.",
    challenge: "International buyers couldn't accurately gauge property layouts and dimensions from standard photos.",
    solution: "Integrated Matterport digital twins and cinematic FPV drone footage directly into their listings.",
    results: ["300% Increase in international leads", "45 Min average session duration", "Faster closing cycles"],
    technologies: ["Matterport", "Google 360", "DJI FPV", "React"],
  },
  "synapse-protocol": {
    title: "Synapse Protocol",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    overview: "A predictive analytics engine for a supply chain logistics company.",
    challenge: "Inefficient routing and inventory management led to massive overhead costs.",
    solution: "Developed a predictive machine learning model to forecast demand and optimize delivery routes.",
    results: ["30% Reduction in fuel costs", "99.9% Inventory accuracy", "Fully automated dispatching"],
    technologies: ["TensorFlow", "AWS", "PostgreSQL", "Node.js"],
  }
};

export default async function PortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = portfolioData[resolvedParams.slug as keyof typeof portfolioData];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-background pt-32 pb-20">
      <div className="container-strict section-spacing">
        
        {/* Project Header */}
        <div className="max-w-4xl mb-12">
          <Link href="/#portfolio" className="text-primary hover:underline text-sm font-medium mb-6 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
            &larr; Back to Portfolio
          </Link>
          <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-mono rounded mb-6">
            {project.category}
          </div>
          <h1 className="h1 text-white mb-6">{project.title}</h1>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden mb-20">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 mb-32">
          <div className="space-y-12">
            <section>
              <h2 className="h3 text-white mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.overview}</p>
            </section>
            
            <section>
              <h2 className="h3 text-white mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.challenge}</p>
            </section>
            
            <section>
              <h2 className="h3 text-white mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.solution}</p>
            </section>
          </div>

          <div className="space-y-12">
            <section className="glass-panel p-8 rounded-3xl">
              <h2 className="text-xl font-bold text-white mb-6">Key Results</h2>
              <ul className="space-y-4">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">✓</span>
                    {result}
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-panel p-8 rounded-3xl">
              <h2 className="text-xl font-bold text-white mb-6">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

      </div>

      <Contact />
    </main>
  );
}
