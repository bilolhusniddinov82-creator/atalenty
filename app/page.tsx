import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="bg-grain pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <div className="relative z-[2]">
        <Navbar />
        <div className="mx-auto max-w-6xl px-7">
          <Hero />
          <StatsStrip />
          <HowItWorks />
          <Features />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTABanner />
        </div>
        <Footer />
      </div>
    </div>
  );
}
