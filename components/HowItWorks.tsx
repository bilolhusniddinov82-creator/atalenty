"use client";

import { Fingerprint, Stamp, UploadCloud, LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

const ICONS: LucideIcon[] = [UploadCloud, Fingerprint, Stamp];

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { n: "01", title: t.how.step1Title, body: t.how.step1Body },
    { n: "02", title: t.how.step2Title, body: t.how.step2Body },
    { n: "03", title: t.how.step3Title, body: t.how.step3Body },
  ];

  return (
    <section id="how" className="py-20">
      <SectionHeading eyebrow={t.how.eyebrow} title={t.how.title} sub={t.how.subtitle} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={step.n} delay={i * 100}>
              <GlassCard className="p-7">
                <div className="font-mono text-[13px] tracking-wide text-seal">{step.n}</div>
                <div className="my-4 flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-gradient-to-br from-ink/25 to-violet/20">
                  <Icon size={20} color="#C7C4FF" />
                </div>
                <h3 className="mb-2.5 text-[19px] font-display">{step.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-muted">{step.body}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
