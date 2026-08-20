"use client";

import { ArrowRight, Clock, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Seal } from "@/components/Seal";
import { useLanguage } from "@/hooks/useLanguage";

function DocCard({ variant }: { variant: "back" | "front" }) {
  const lines = variant === "back" ? [70, 90, 55, 80, 40] : [80, 60, 70];
  return (
    <div
      className={
        variant === "back"
          ? "absolute w-60 -translate-x-[70px] translate-y-2.5 -rotate-6 rounded-2xl border border-border/10 bg-surface/[0.055] p-5 opacity-75 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md"
          : "absolute z-[3] w-60 translate-x-[60px] -translate-y-7 rotate-3 rounded-2xl border border-border/10 bg-surface/[0.055] p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md"
      }
    >
      {lines.map((w, i) => (
        <div key={i} className="mb-2.5 h-1.5 rounded bg-surface/[0.13]" style={{ width: `${w}%` }} />
      ))}
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 items-center gap-10 py-16 sm:py-24 md:grid-cols-[1.15fr_0.85fr]">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-border/10 bg-surface/[0.055] px-3.5 py-1.5 font-mono text-[12.5px] tracking-wide text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_8px_#14B8A6]" />
          {t.hero.eyebrow}
        </span>

        <h1 className="mt-5 font-display text-[34px] font-medium leading-[1.06] tracking-tight sm:text-5xl lg:text-[58px]">
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2} <em className="not-italic text-seal">{t.hero.titleEm}</em>
          <br />
          {t.hero.titleLine3}
        </h1>

        <p className="mb-8 mt-5 max-w-[480px] text-[17px] leading-relaxed text-muted">{t.hero.subtitle}</p>

        <div className="mb-10 flex flex-wrap gap-3.5">
          <Button href="/book" variant="primary">
            {t.hero.ctaPrimary} <ArrowRight size={16} />
          </Button>
          <Button href="/#how" variant="ghost">
            {t.hero.ctaSecondary}
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 text-[13px] text-muted">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={15} /> {t.hero.trustCommissioned}
          </span>
          <span className="flex items-center gap-1.5">
            <Lock size={15} /> {t.hero.trustEncryption}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={15} /> {t.hero.trustSpeed}
          </span>
        </div>
      </div>

      <div className="relative flex h-[300px] items-center justify-center md:h-[420px]">
        <DocCard variant="back" />
        <DocCard variant="front" />
        <div className="relative z-[5]">
          <Seal />
        </div>
      </div>
    </div>
  );
}
