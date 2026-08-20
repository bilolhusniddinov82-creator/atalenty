"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldCheck, Users, Globe, LucideIcon } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const ICONS: LucideIcon[] = [ShieldCheck, Users, Globe];

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { title: t.about.value1Title, body: t.about.value1Body },
    { title: t.about.value2Title, body: t.about.value2Body },
    { title: t.about.value3Title, body: t.about.value3Body },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-[2]">
        <Navbar />
        <div className="mx-auto max-w-4xl px-7 py-16">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-seal">{t.about.eyebrow}</div>
          <h1 className="mb-5 font-display text-3xl sm:text-4xl">{t.about.title}</h1>
          <p className="mb-14 max-w-2xl text-[15.5px] leading-relaxed text-muted">{t.about.subtitle}</p>

          <SectionHeading eyebrow={t.about.valuesEyebrow} title={t.about.valuesTitle} />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {values.map((v, i) => {
              const Icon = ICONS[i];
              return (
                <GlassCard key={v.title} className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-surface/[0.07] text-seal">
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-2 font-semibold">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{v.body}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
