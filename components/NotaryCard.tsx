"use client";

import { Star, Clock } from "lucide-react";
import { Notary } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";
import { getRegionName } from "@/constants/cities";

export function NotaryCard({ notary }: { notary: Notary }) {
  const { t, locale } = useLanguage();

  return (
    <GlassCard className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ink to-violet font-display text-lg text-white"
          aria-hidden="true"
        >
          {notary.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-display text-lg">{notary.name}</h3>
          <p className="text-sm text-muted">{getRegionName(notary.regionId, locale)}</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {notary.specialties.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border/10 bg-surface/5 px-2.5 py-0.5 text-[11.5px] text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 sm:items-end">
        <div className="flex items-center gap-1.5 text-sm">
          <Star size={14} fill="#E8B34C" strokeWidth={0} />
          {notary.rating.toFixed(1)}
          <span className="text-muted">({notary.reviewCount})</span>
        </div>
        <div className="flex items-center gap-1.5 text-[13px] text-muted">
          <Clock size={13} /> {notary.nextAvailable}
        </div>
        <Button href={`/book?notary=${notary.id}`} variant="ghost" className="mt-1 px-4 py-2 text-[13px]">
          {t.notaries.bookWith} {notary.name.split(" ")[0]}
        </Button>
      </div>
    </GlassCard>
  );
}
