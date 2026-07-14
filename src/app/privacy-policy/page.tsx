import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container-strict">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1">
          <ArrowLeft size={16} />
          Back to Headquarters
        </Link>
        
        <div className="max-w-3xl">
          <h1 className="h1 text-white mb-6">Privacy <span className="text-gradient">Policy</span></h1>
          <p className="text-muted-foreground mb-12 text-lg">Last Updated: October 2023</p>
          
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl text-white font-semibold mb-4">1. Data Collection Protocol</h2>
              <p>At TRONX AI, we believe in radical transparency. We collect only the data necessary to provide our premium services, including name, email, and business details when you initiate a project protocol.</p>
            </section>
            
            <section>
              <h2 className="text-2xl text-white font-semibold mb-4">2. Usage and Analytics</h2>
              <p>Our systems utilize advanced analytics to optimize your experience. This data is strictly anonymized and encrypted using state-of-the-art security measures. We do not sell your data to third parties.</p>
            </section>
            
            <section>
              <h2 className="text-2xl text-white font-semibold mb-4">3. Security Infrastructure</h2>
              <p>All data transmitted through our systems is protected by enterprise-grade encryption. Our servers are monitored 24/7 by AI-driven security protocols to ensure your information remains completely secure.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
