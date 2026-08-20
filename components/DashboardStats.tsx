import { DASHBOARD_STATS } from "@/constants/dashboard";
import { GlassCard } from "@/components/ui/GlassCard";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {DASHBOARD_STATS.map((stat) => (
        <GlassCard key={stat.label} className="p-5">
          <div className="font-display text-2xl">{stat.value}</div>
          <div className="mt-1 text-[13px] text-muted">
            {stat.sub} · {stat.label}
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
