"use client";

import {
  Clock,
  FileCheck2,
  Lock,
  MapPin,
  ShieldCheck,
  Video,
  LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

const ICONS: LucideIcon[] = [Video, ShieldCheck, FileCheck2, MapPin, Clock, Lock];

export function Features() {
  const { t } = useLanguage();

  const features = [
    { title: t.features.videoTitle, body: t.features.videoBody },
    { title: t.features.encryptionTitle, body: t.features.encryptionBody },
    { title: t.features.copyTitle, body: t.features.copyBody },
    { title: t.features.inPersonTitle, body: t.features.inPersonBody },
    { title: t.features.speedTitle, body: t.features.speedBody },
    { title: t.features.auditTitle, body: t.features.auditBody },
  ];

  return (
    <section id="features" className="py-20">
      <SectionHeading eyebrow={t.features.eyebrow} title={t.features.title} sub={t.features.subtitle} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={feature.title} delay={(i % 3) * 90}>
              <GlassCard className="p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-muted/40">
                <div className="mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-surface/[0.07] text-seal">
                  <Icon size={18} />
                </div>
                <h3 className="mb-2 text-[16.5px] font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{feature.body}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
