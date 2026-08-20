"use client";

import { APPOINTMENTS } from "@/constants/dashboard";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

const STATUS_STYLES: Record<string, string> = {
  confirmed: "bg-teal/15 text-teal border-teal/30",
  pending: "bg-seal/15 text-seal border-seal/30",
  completed: "bg-surface/10 text-muted border-border/15",
};

export function AppointmentsTable() {
  const { t } = useLanguage();

  return (
    <GlassCard className="overflow-hidden">
      <div className="hidden grid-cols-[1.4fr_1fr_0.9fr_0.9fr] gap-4 border-b border-border/10 px-6 py-4 text-[12.5px] uppercase tracking-wide text-muted sm:grid">
        <span>{t.dashboard.document}</span>
        <span>{t.dashboard.signer}</span>
        <span>{t.dashboard.dateTime}</span>
        <span>{t.dashboard.status}</span>
      </div>
      {APPOINTMENTS.map((apt) => (
        <div
          key={apt.id}
          className="grid grid-cols-1 gap-2 border-b border-border/5 px-6 py-4 text-sm last:border-b-0 sm:grid-cols-[1.4fr_1fr_0.9fr_0.9fr] sm:items-center sm:gap-4"
        >
          <span>{apt.documentType}</span>
          <span className="text-muted">{apt.signerName}</span>
          <span className="font-mono text-[13px] text-muted">
            {apt.date} · {apt.time}
          </span>
          <span className={cn("w-fit rounded-full border px-2.5 py-1 text-[11.5px] capitalize", STATUS_STYLES[apt.status])}>
            {apt.status}
          </span>
        </div>
      ))}
    </GlassCard>
  );
}
