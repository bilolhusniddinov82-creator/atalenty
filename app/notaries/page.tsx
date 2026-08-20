"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NotaryCard } from "@/components/NotaryCard";
import { NOTARIES } from "@/constants/notaries";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotariesPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-[2]">
        <Navbar />
        <div className="mx-auto max-w-6xl px-7 py-16">
          <SectionHeading eyebrow={t.notaries.eyebrow} title={t.notaries.title} sub={t.notaries.subtitle} />
          <div className="flex flex-col gap-4">
            {NOTARIES.map((notary) => (
              <NotaryCard key={notary.id} notary={notary} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
