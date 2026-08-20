import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Pricing — Attestly",
};

export default function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-[2]">
        <Navbar />
        <div className="mx-auto max-w-6xl px-7 pt-16">
          <Pricing />
          <FAQ />
        </div>
        <Footer />
      </div>
    </div>
  );
}
