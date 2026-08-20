"use client";

import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

export function Pricing() {
  const { t } = useLanguage();

  const plans = [
    { key: "single", price: "$25", highlight: false, ...t.pricing.single },
    { key: "business", price: "$79", highlight: true, ...t.pricing.business },
    { key: "enterprise", price: "Custom", highlight: false, ...t.pricing.enterprise },
  ];

  return (
    <section id="pricing" className="py-20">
      <SectionHeading eyebrow={t.pricing.eyebrow} title={t.pricing.title} sub={t.pricing.subtitle} />
      <div className="grid grid-cols-1 gap-5.5 md:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.key} delay={i * 100}>
            <GlassCard highlight={plan.highlight} className="relative flex h-full flex-col p-8">
              {plan.highlight && (
                <div className="absolute -top-[13px] left-7 rounded-full bg-seal px-3 py-1 text-[11.5px] font-bold tracking-wide text-[#241a05]">
                  {t.pricing.mostChosen}
                </div>
              )}
              <div className="mb-2.5 text-[15px] text-muted">{plan.name}</div>
              <div className="font-display text-4xl">{plan.price}</div>
              <div className="mb-6 font-mono text-[13px] text-muted">{plan.period}</div>
              <ul className="mb-7 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <BadgeCheck size={16} className="mt-0.5 shrink-0 text-teal" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href="/book"
                variant={plan.highlight ? "primary" : "ghost"}
                className="mt-auto w-full justify-center"
              >
                {plan.cta}
              </Button>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
