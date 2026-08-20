"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function StatsStrip() {
  const { t } = useLanguage();

  const stats = [
    { num: "40,000+", label: t.stats.documents },
    { num: "4.9 / 5", label: t.stats.rating },
    { num: "50", label: t.stats.states },
    { num: "6 min", label: t.stats.session },
  ];

  return (
    <div className="flex flex-wrap justify-between gap-5 border-y border-border/10 py-8">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="font-display text-3xl">{s.num}</div>
          <div className="mt-0.5 font-mono text-[12.5px] text-muted">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
