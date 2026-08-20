"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { DashboardStats } from "@/components/DashboardStats";
import { AppointmentsTable } from "@/components/AppointmentsTable";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
  const { t } = useLanguage();
  const { user, ready } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (ready && !user) router.replace("/login");
  }, [ready, user, router]);

  if (!ready || !user) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <AuroraBackground />
        <div className="relative z-[2]">
          <Navbar />
          <div className="mx-auto max-w-6xl px-7 py-24 text-center text-muted">{t.common.loading}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-[2]">
        <Navbar />
        <div className="mx-auto max-w-6xl px-7 py-16">
          <div className="mb-10">
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-seal">{t.dashboard.eyebrow}</div>
            <h1 className="font-display text-3xl sm:text-4xl">{t.dashboard.title}</h1>
            <p className="mt-3.5 text-[15.5px] text-muted">
              {user.fullName.split(" ")[0]} — {t.dashboard.subtitle}
            </p>
          </div>
          <div className="mb-10">
            <DashboardStats />
          </div>
          <AppointmentsTable />
        </div>
        <Footer />
      </div>
    </div>
  );
}
