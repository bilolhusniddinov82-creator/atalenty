"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

export function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <Reveal>
        <div className="rounded-[28px] border border-border/10 bg-gradient-to-br from-ink/25 to-violet/[0.18] p-10 text-center backdrop-blur-md sm:p-16">
          <h2 className="mb-4 font-display text-[26px] sm:text-4xl">{t.cta.title}</h2>
          <p className="mb-7 text-muted">{t.cta.subtitle}</p>
          <Button href="/book" variant="primary">
            {t.hero.ctaPrimary} <ArrowRight size={16} />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
