"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/constants/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

export function Testimonials() {
  const { t } = useLanguage();
  // Sample quotes are shown as originally written rather than
  // machine-translated, since translating a direct quote changes its
  // wording — the section heading itself still localizes normally.

  return (
    <section className="py-20">
      <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((item, i) => (
          <Reveal key={item.who} delay={i * 100}>
            <GlassCard className="p-6">
              <div className="mb-3.5 flex gap-0.5 text-seal">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} fill="#E8B34C" strokeWidth={0} />
                ))}
              </div>
              <p className="mb-4.5 text-[14.5px] leading-relaxed text-text">&ldquo;{item.body}&rdquo;</p>
              <div className="font-mono text-[13px] text-muted">{item.who}</div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
