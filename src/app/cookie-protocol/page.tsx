import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookieProtocol() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container-strict">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1">
          <ArrowLeft size={16} />
          Back to Headquarters
        </Link>
        
        <div className="max-w-3xl">
          <h1 className="h1 text-white mb-6">Cookie <span className="text-gradient">Protocol</span></h1>
          <p className="text-muted-foreground mb-12 text-lg">Last Updated: October 2023</p>
          
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl text-white font-semibold mb-4">1. Necessary Operations</h2>
              <p>TRONX AI utilizes essential cookies to ensure our digital environment functions at peak performance. These cannot be disabled as they are required for security and core navigation.</p>
            </section>
            
            <section>
              <h2 className="text-2xl text-white font-semibold mb-4">2. Performance Optimization</h2>
              <p>We deploy analytical scripts to monitor how visitors interact with our 3D elements and cinematic layouts. This helps us refine the UX continuously.</p>
            </section>
            
            <section>
              <h2 className="text-2xl text-white font-semibold mb-4">3. Customization</h2>
              <p>You may adjust your browser settings to reject non-essential cookies. However, doing so may degrade the highly customized, futuristic experience we have engineered for you.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
