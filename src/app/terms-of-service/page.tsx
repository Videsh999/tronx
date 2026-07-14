import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container-strict">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1">
          <ArrowLeft size={16} />
          Back to Headquarters
        </Link>
        
        <div className="max-w-3xl">
          <h1 className="h1 text-white mb-6">Terms of <span className="text-gradient">Service</span></h1>
          <p className="text-muted-foreground mb-12 text-lg">Last Updated: October 2023</p>
          
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl text-white font-semibold mb-4">1. Agreement to Terms</h2>
              <p>By accessing TRONX AI, you agree to be bound by these Terms of Service. Our premium services are provided exclusively to businesses seeking digital transformation and AI integration.</p>
            </section>
            
            <section>
              <h2 className="text-2xl text-white font-semibold mb-4">2. Intellectual Property</h2>
              <p>All designs, code, architecture, and AI models developed during our engagements remain the intellectual property of TRONX AI until full transfer is authorized upon project completion.</p>
            </section>
            
            <section>
              <h2 className="text-2xl text-white font-semibold mb-4">3. Service Protocols</h2>
              <p>We reserve the right to refuse service to any entity that conflicts with our ethical AI guidelines. Project timelines are estimates based on standard operational parameters.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
