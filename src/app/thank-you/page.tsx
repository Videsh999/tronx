import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-gradient relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-strict relative z-10 text-center">
        <div className="glass-panel p-12 md:p-20 rounded-3xl max-w-3xl mx-auto border-t-white/20 border-l-white/20 glowing-shadow">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <CheckCircle2 size={48} className="text-green-400" />
          </div>
          
          <h1 className="h1 text-white mb-6">
            Transmission <span className="text-gradient">Successful</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Your request has been securely routed to our AI specialists. We will review your project details and contact you within 24 hours to schedule your consultation.
          </p>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary group"
          >
            Return to Headquarters
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
