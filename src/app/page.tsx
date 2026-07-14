import { Preloader } from "@/components/Preloader";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { FPVSection } from "@/components/sections/FPVSection";
import { WhyTronx } from "@/components/sections/WhyTronx";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      <Preloader />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <FPVSection />
      <WhyTronx />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
